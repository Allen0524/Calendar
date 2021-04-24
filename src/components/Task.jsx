import React from 'react';
import '../sass/Task.scss';
import { connect } from 'react-redux';
import * as actionCreators from '../redux/actions/actionCreators';

function Task({
  timeStamp,
  title,
  timeBlock,
  hours,
  mins,
  color,
  deleteTask,
  updateModal,
}) {
  return (
    <div className="task">
      <div
        className={`title ${color}`}
        onClick={(e) =>
          updateModal(e, timeStamp, title, timeBlock, hours, mins, color)
        }
      >
        {`${title}．${timeBlock}．${hours}:${mins}`}
        <div
          onClick={(e) => deleteTask(e, timeStamp)}
          className={`cancel ${color}`}
        ></div>
      </div>
    </div>
  );
}

export default connect(
  (state) => ({}),
  (dispatch) => ({
    deleteTask(e, id) {
      dispatch(actionCreators.deleteTask(id));
      e.stopPropagation();
    },
    updateModal(e, timeStamp, title, timeBlock, hours, mins, color) {
      dispatch(
        actionCreators.updateModal({
          timeStamp,
          title,
          timeBlock,
          hours,
          mins,
          color,
        }),
      );
      e.stopPropagation();
    },
  }),
)(Task);
