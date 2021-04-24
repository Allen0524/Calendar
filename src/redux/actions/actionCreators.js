import moment from 'moment';
import getEntireMonth from '../../utils/getEntireMonth';
import * as actionTypes from './actionTypes';

export const navigateYearMonth = (dir, yearMonth) => {
  const value = {};
  let date;
  if (dir === 'l') {
    date = moment(yearMonth).subtract(1, 'month');
  } else if (dir === 'r') {
    date = moment(yearMonth).add(1, 'month');
  } else {
    date = moment();
  }
  value.yearMonth = date.format('YYYYMM');
  value.year = date.format('YYYY');
  value.month = date.format('MM');
  value.calendar = getEntireMonth(value.yearMonth);

  return {
    type: actionTypes.NAVIGATE_YEAR_MONTH,
    value,
  };
};

export const newModal = (id) => ({
  type: actionTypes.NEW_MODAL,
  value: id,
});

export const cancelModal = (id) => ({
  type: actionTypes.CANCEL_MODAL,
});

export const changeInputValue = (e) => ({
  type: actionTypes.CHANGE_INPUT_VALUE,
  value: e.target.value,
});

export const saveModal = (e) => ({
  type: actionTypes.SAVE_MODAL,
});

export const changeColor = (type) => ({
  type: actionTypes.CHANGE_COLOR,
  value: type,
});

export const handleTimeChange = (value) => ({
  type: actionTypes.TIME_BLOCK_CHANGE,
  value,
});

export const handleHoursChange = (value) => ({
  type: actionTypes.HOURS_CHANGE,
  value,
});

export const handleMinsChange = (value) => ({
  type: actionTypes.MINS_CHANGE,
  value,
});

export const deleteTask = (id) => ({
  type: actionTypes.DELETE_TASK,
  value: id,
});

export const updateModal = (id) => ({
  type: actionTypes.UPDATE_MODAL,
  value: id,
});
