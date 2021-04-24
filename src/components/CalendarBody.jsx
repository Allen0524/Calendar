import React from 'react';
import SingleDay from './singleDay';
import { connect } from 'react-redux';
import '../sass/CalendarBody.scss';

function CalendarBody({ calendar }) {
  return (
    <div className="calendarBody">
      <div className="weekTextWrapper">
        <div>SUN</div>
        <div>MON</div>
        <div>TUE</div>
        <div>WED</div>
        <div>THU</div>
        <div>FRI</div>
        <div>SAT</div>
      </div>
      <div className="calendarWrapper">
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <div key={i} className="week">
            {calendar.slice(7 * i, 7 * (i + 1)).map((oneDay) => (
              <SingleDay key={oneDay.id} day={oneDay} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default connect(
  (state) => ({
    month: state.header.month,
    year: state.header.year,
    yearMonth: state.header.yearMonth,
    calendar: state.header.calendar,
  }),
  (dispatch) => ({}),
)(CalendarBody);
