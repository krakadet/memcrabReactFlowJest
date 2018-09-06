// @flow
import * as React from 'react';
import { connect } from 'react-redux';
import PureModal from 'react-pure-modal';
import { createTableAction, updateInputsValue } from '../action/action';
import 'react-pure-modal/dist/react-pure-modal.min.css';
import Time from './Time';
import { formActions, mergeActionsToProps } from 'redux-pure-form';
import generator from './generatorForTable';

type Props = {|
  +createTableAction: Function,
  +updateInputsValue: Function,
  +fieldAttrs: {
    +onChange: Function,
  },
  +profile: {
    +name: string,
    +rowValue: number,
    +columnValue: number,
    +lightValue: number,
  }
|};

type State = {
  valueRow: string,
  valueColumn: string,
  lightValue: string,
};

export class InputValuesComponent extends React.Component<Props, State> {
  state = {
    valueRow: '0',
    valueColumn: '0',
    lightValue: '0',
  };

  componentDidMount() {
    const status = (response) => {
      if (response.status !== 200) {
        return Promise.reject(new Error(response.statusText));
      }
      return Promise.resolve(response);
    };
    const json = response => response.json();

    fetch('https://api.myjson.com/bins/p3g6c')
      .then(status)
      .then(json)
      .then((data) => {
        const columnCount = data[0].columnValue;
        const rowCount = data[0].rowvalue;
        const lightCount = data[0].lightValue;
        // this.setState({
        //   valueRow: rowCount,
        //   valueColumn: columnCount,
        //   lightValue: lightCount,
        // });
        const { updateInputsValue } = this.props;
        updateInputsValue(columnCount, rowCount, lightCount);
      })
      .then()
      .catch((error) => {
        console.log('error', error);
      });
  }

  handlerClickBtn = () => {
    this.refs.modal.open();
    let values: Array<string> = [];
    const myGen = generator();
    for (const value of myGen) {
      values = values.concat([`${value}`]);
    }
    // const { rowValue, columnValue, lightValue } = this.props.profile;
    const [rowValue, columnValue, lightValue] = values;
    this.setState({
      valueRow: rowValue,
      valueColumn: columnValue,
      lightValue,
    });
    console.log('lightValue====>>>>', lightValue);
    const { createTableAction } = this.props;
    createTableAction(rowValue, columnValue, lightValue);
  };
  //
  // handlerOnChangeColumn = (event: SyntheticEvent<HTMLInputElement>) => {
  //   this.setState({ valueColumn: event.currentTarget.value });
  // };
  //
  // handlerOnChangeRow = (event: SyntheticEvent<HTMLInputElement>) => {
  //   this.setState({ valueRow: event.currentTarget.value });
  // };
  //
  // handlerOnCandlelight = (event: SyntheticEvent<HTMLInputElement>) => {
  //   this.setState({ lightValue: event.currentTarget.value });
  // };

  handle(e: SyntheticEvent<HTMLInputElement>, formName: string) {
    this.props.fieldAttrs.onChange({
      [e.currentTarget.name]: e.currentTarget.value,
      [`${formName}.surnameduplicate`]: {
        value: e.currentTarget.value,
        parser: value => `${value.toUpperCase().replace(/ /g, '')}!`,
      },
    });
  }

  setDefaults(formName: string) {
    this.props.fieldAttrs.onChange({
      [formName]: { columnValue: '1', rowValue: '1', lightValue: '1' },
    });
  }


  render() {
    console.log('this.props.fieldAttrs====>>>>', this.props.fieldAttrs);
    console.log('this.props====>>>>', this.props.profile);
    return (
      <div>
        <br />
        <form>
          <Time />
          <h3>New input which use redux-pure-form</h3>
          <br />

          <input
            type="number"
            name="profile.columnValue"
            value={this.props.profile.columnValue}
            {...this.props.fieldAttrs}
            onChange={e => this.handle(e, 'profile')}
          />
          <input
            type="number"
            name="profile.rowValue"
            value={this.props.profile.rowValue}
            {...this.props.fieldAttrs}
            onChange={e => this.handle(e, 'profile')}
          />
          <input
            type="number"
            name="profile.lightValue"
            value={this.props.profile.lightValue}
            {...this.props.fieldAttrs}
            onChange={e => this.handle(e, 'profile')}
          />
          <br />
          <br />
          <button type="button" onClick={() => this.setDefaults('profile')}>set to 1x1x1</button>
          <button type="button" className="btn" onClick={this.handlerClickBtn}>Create table</button>
        </form>
        <PureModal
          header="Create table "
          // footer={<div><button>Cancel</button><button>Save</button></div>}
          onClose={() => {
            console.log('handle closing');
            return true;
          }}
          // isOpen
          ref="modal"
        >
          <p>generated table with next value</p>
          <p>
row value =
            {this.state.valueRow}
            {' '}

          </p>
          <p>
column value =
            {this.state.valueColumn}
            {' '}

          </p>
          <p>
light value =
            {this.state.lightValue}
            {' '}

          </p>
        </PureModal>
      </div>
    );
  }
}

export default connect((state => ({
  state: state.store.dataMatrix,
  store: state.store,
  profile: state.newInputValue.profile,
})), { ...formActions, createTableAction, updateInputsValue }, mergeActionsToProps)(InputValuesComponent);
