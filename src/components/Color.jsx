import React from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../redux/actions/actionCreators';
import '../sass/Color.scss';

function Color({ type, pickedColor, changeColor }) {
  return (
    <div
      onClick={() => changeColor(type)}
      className={`${type} ${pickedColor === type ? 'checked' : ''} `}
    ></div>
  );
}

export default connect(
  (state) => ({
    pickedColor: state.modal.pickedColor,
  }),
  (dispatch) => ({
    changeColor(type) {
      dispatch(actionCreators.changeColor(type));
    },
  }),
)(Color);
