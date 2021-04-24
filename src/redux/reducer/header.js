import moment from 'moment';
import * as actionTypes from '../actions/actionTypes';
import getEntireMonth from '../../utils/getEntireMonth';

const initialState = {
  month: moment().format('MM'),
  year: moment().format('YYYY'),
  yearMonth: moment().format('YYYYMM'),
  calendar: getEntireMonth(moment().format('YYYYMM')),
};

const header = (state = initialState, action) => {
  const { type, value } = action;
  switch (type) {
    case actionTypes.NAVIGATE_YEAR_MONTH:
      return {
        month: value.month,
        year: value.year,
        yearMonth: value.yearMonth,
        calendar: value.calendar,
      };
    default:
      return state;
  }
};

export default header;
