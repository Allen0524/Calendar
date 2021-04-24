import React from 'react';
import Color from './Color';
import '../sass/Modal.scss';
import { connect } from 'react-redux';
import * as actionCreators from '../redux/actions/actionCreators';

const colors = ['blue', 'red', 'orange', 'yellow', 'perpal'];

function Modal({
  cancelModal,
  inputValue,
  handleInputChange,
  saveModal,
  pickedDate,
  timeBlock,
  hours,
  mins,
  handleTimeChange,
}) {
  return (
    <div className="modal">
      <form onSubmit={saveModal}>
        <input
          value={inputValue}
          onChange={handleInputChange}
          placeholder="新增活動"
          autoFocus
          required
          className="input"
        />
        <section className="datePickSection">
          <div>{pickedDate}</div>
          <div>
            <select
              value={timeBlock}
              onChange={(e) => handleTimeChange(e, 'timeBlock')}
            >
              <option>上午</option>
              <option>下午</option>
            </select>
            <select
              value={hours}
              onChange={(e) => handleTimeChange(e, 'hours')}
            >
              {Array.from({ length: 12 }, (v, i) => (
                <option key={i} value={i + 1}>
                  {i + 1}
                </option>
              ))}
            </select>
            <select value={mins} onChange={(e) => handleTimeChange(e, 'mins')}>
              {Array.from({ length: 60 }, (v, i) => (
                <option key={i} value={i}>
                  {i}
                </option>
              ))}
            </select>
          </div>
        </section>
        <div className="colorPickSection">
          {colors.map((color, index) => (
            <Color key={index} type={color} />
          ))}
        </div>
        <div className="btnGroup">
          <button className="save">Save</button>
          <button className="cancel" onClick={cancelModal}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default connect(
  (state) => ({
    inputValue: state.modal.inputValue,
    pickedDate: state.modal.pickedDate,
    timeBlock: state.modal.timeBlock,
    hours: state.modal.hours,
    mins: state.modal.mins,
  }),
  (dispatch) => ({
    cancelModal(e) {
      e.preventDefault();
      dispatch(actionCreators.cancelModal());
    },
    handleInputChange(e) {
      dispatch(actionCreators.changeInputValue(e));
    },
    saveModal(e) {
      e.preventDefault();
      dispatch(actionCreators.saveModal());
    },
    handleTimeChange(e, type) {
      switch (type) {
        case 'timeBlock':
          dispatch(actionCreators.handleTimeChange(e.target.value));
          return;
        case 'hours':
          dispatch(actionCreators.handleHoursChange(e.target.value));
          return;
        case 'mins':
          dispatch(actionCreators.handleMinsChange(e.target.value));
          return;
        default:
          return;
      }
    },
  }),
)(Modal);
