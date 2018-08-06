'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Header = require('./component/Header/Header');

var _Header2 = _interopRequireDefault(_Header);

var _Table = require('./container/table/Table');

var _Table2 = _interopRequireDefault(_Table);

var _InputValuesComponent = require('./component/InputValueComponent/InputValuesComponent');

var _InputValuesComponent2 = _interopRequireDefault(_InputValuesComponent);

require('./App.css');

var _addrow = require('./helpers/addrow');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_Component) {
  _inherits(App, _Component);

  function App() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, App);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = App.__proto__ || Object.getPrototypeOf(App)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      valueRow: 0,
      valueColumn: 0,
      lightValue: 0,
      dataMatrix: {
        rows: [],
        cells: {}
      }
    }, _this.createTableButtonClick = function (rowCount, columnCount, lightCount) {
      var newMatrix = {
        rows: [],
        cells: {}
      };

      (0, _addrow.createTable)(newMatrix, rowCount, columnCount);
      _this.setState({
        valueRow: rowCount,
        valueColumn: columnCount,
        lightValue: lightCount,
        dataMatrix: newMatrix
      });
    }, _this.updateData = function (value) {
      if (value === 'add') {
        _this.addRowToPage();
      } else {
        _this.deleteRowToPage();
      }
    }, _this.addRowToPage = function () {
      var _this$state = _this.state,
          dataMatrix = _this$state.dataMatrix,
          valueColumn = _this$state.valueColumn;

      (0, _addrow.addRow)(dataMatrix, valueColumn);
      var matrix = Object.assign({}, dataMatrix);
      _this.setState({
        dataMatrix: matrix
      });
    }, _this.deleteRowToPage = function () {
      var dataMatrix = _this.state.dataMatrix;

      (0, _addrow.deleteRow)(dataMatrix);
      var matrix = Object.assign({}, dataMatrix);
      _this.setState({
        dataMatrix: matrix
      });
    }, _this.addCellPlusOne = function (idCell) {
      var dataMatrix = _this.state.dataMatrix;

      var matrix = Object.assign({}, dataMatrix, dataMatrix.cells[idCell].value += 1);
      _this.setState({
        dataMatrix: matrix
      });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(App, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_Header2.default, {
          className: 'header'
        }),
        _react2.default.createElement(_InputValuesComponent2.default, {
          className: '',
          createTableButtonClick: this.createTableButtonClick
        }),
        _react2.default.createElement(_Table2.default, _extends({
          id: 'table_area'
        }, this.state, {
          addRowToPage: this.addRowToPage,
          deleteRowToPage: this.deleteRowToPage,
          updateData: this.updateData,
          addCellPlusOne: this.addCellPlusOne
        }))
      );
    }
  }]);

  return App;
}(_react.Component);

exports.default = App;