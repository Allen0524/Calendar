import React from 'react';
import { connect } from 'react-redux';
import '../sass/Header.scss';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import * as actionCreators from '../redux/actions/actionCreators';

function Header({ month, year, navigateYearMonth, yearMonth }) {
  return (
    <div className="header">
      <button onClick={() => navigateYearMonth('today', 'today')}>今天</button>
      <div className="rightSection">
        <div className="selectWrapper">
          <NavigateBeforeIcon
            onClick={() => navigateYearMonth('l', yearMonth)}
          />
          <NavigateNextIcon onClick={() => navigateYearMonth('r', yearMonth)} />
        </div>
        <div className="dateGroup">
          <span>{year}年</span>
          <span>{month}月</span>
        </div>
      </div>
    </div>
  );
}

export default connect(
  (state) => ({
    month: state.header.month,
    year: state.header.year,
    yearMonth: state.header.yearMonth,
  }),
  (dispatch) => ({
    navigateYearMonth(dir, yearMonth) {
      dispatch(actionCreators.navigateYearMonth(dir, yearMonth));
    },
  }),
)(Header);
