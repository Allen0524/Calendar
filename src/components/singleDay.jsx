import React from 'react';
import moment from 'moment';
import Task from './Task';
import { connect } from 'react-redux';
import '../sass/SingleDay.scss';
import * as actionCreators from '../redux/actions/actionCreators';

function singleDay({ day, newModal, allTasks }) {
  return (
    <div className="dayBlock" onClick={() => newModal(day.id)}>
      <div className="dayWrapper">
        <h5
          className={`${
            day.id === moment().format('YYYY-MM-DD') ? 'today' : ''
          } `}
        >
          {day.day}
        </h5>
      </div>
      <div className="taskWrapper">
        {allTasks.map((task) =>
          task.date === day.id ? (
            <Task
              key={task.id}
              timeStamp={task.id}
              title={task.title}
              timeBlock={task.timeBlock}
              hours={task.hours}
              mins={task.mins}
              color={task.color}
            />
          ) : null,
        )}
      </div>
    </div>
  );
}

export default connect(
  (state) => ({
    allTasks: state.modal.allTasks,
  }),
  (dispatch) => ({
    newModal(id) {
      dispatch(actionCreators.newModal(id));
    },
  }),
)(singleDay);
