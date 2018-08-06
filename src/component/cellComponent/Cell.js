import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import './cell.css'
import {getIdCell} from '../../helpers/lightNumbersHelpers';

class Cell extends PureComponent {

    handleClick = (event) => {
        event.preventDefault();
        this.props.addCellPlusOne(getIdCell(event));
    };

    lightingNumberNative = (event) => {
        event.preventDefault();
        if (this.props.lightValue !== 0) {
            this.props.updateDataLightArrValue()
        }
    };

    lightingNumbersCustom = (event) => {
        event.preventDefault();
        if (this.props.lightValue !== 0) {
            let idCell = getIdCell(event);
            this.props.updateDataLightArrValue(idCell)
        }
    };

    addClass = (isStyle, highlighted) => {
        if (isStyle) {
            return 'filled'
        }
        if (highlighted) {
            return 'red'
        } else {
            return ''
        }
    };

    render() {
        console.log('renderCell=');
        const {
            id,
            value,
            highlighted,
            isStyle
        } = this.props;
        return (
            <td
                id={`${id}`}
                style={{backgroundSize:` ${value}% 100%`}}
                className={this.addClass(isStyle, highlighted)}
                onClick={this.handleClick}
                onMouseEnter={this.lightingNumbersCustom}
                onMouseLeave={this.lightingNumberNative}
            >{isStyle ? `${value} %` : value}
            </td>
        )
    }
}

Cell.propTypes = {
    id: PropTypes.string,
    addCellPlusOne: PropTypes.func,
    lightValue: PropTypes.number,
    lightArrValue: PropTypes.array,
    updateDataLightArrValue: PropTypes.func,
    value: PropTypes.number,
    isStyle: PropTypes.bool

};

export default Cell