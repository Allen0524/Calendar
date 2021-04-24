import moment from 'moment';
import * as actionTypes from '../actions/actionTypes';

const initialState = {
  show: false,
  allTasks: [],
  inputValue: '',
  pickedColor: 'blue',
  pickedDate: '',
  timeBlock: '上午',
  hours: moment().format('h'),
  mins: moment().format('m'),
  isUpdate: false,
  pickedTask: '',
};

const modal = (state = initialState, action) => {
  const { type, value } = action;
  switch (type) {
    case actionTypes.NEW_MODAL:
      return {
        ...state,
        pickedDate: value,
        show: !state.show,
      };

    case actionTypes.CANCEL_MODAL:
      return {
        ...state,
        pickedColor: 'blue',
        inputValue: '',
        show: !state.show,
        pickedTask: '',
        timeBlock: '上午',
        hours: moment().format('h'),
        mins: moment().format('m'),
      };

    case actionTypes.SAVE_MODAL:
      const copyTask = JSON.parse(JSON.stringify(state.allTasks));

      state.isUpdate
        ? copyTask.map((task) => {
            if (task.id === state.pickedTask) {
              task.title = state.inputValue;
              task.color = state.pickedColor;
              task.timeBlock = state.timeBlock;
              task.hours = state.hours;
              task.mins = state.mins;
            }
          })
        : copyTask.push({
            id: moment().unix(),
            date: state.pickedDate,
            title: state.inputValue,
            timeBlock: state.timeBlock,
            hours: state.hours,
            mins: state.mins,
            color: state.pickedColor,
          });

      return {
        ...state,
        inputValue: '',
        show: !state.show,
        pickedColor: 'blue',
        pickedDate: '',
        timeBlock: '上午',
        hours: moment().format('h'),
        mins: moment().format('m'),
        allTasks: copyTask,
        isUpdate: false,
      };

    case actionTypes.DELETE_TASK:
      const newList = state.allTasks.filter((task, index) => {
        if (task.id === value) {
          return false;
        }
        return true;
      });
      console.log(newList);
      return { ...state, allTasks: newList };

    case actionTypes.UPDATE_MODAL:
      const { timeStamp, title, timeBlock, hours, mins, color } = value;
      return {
        ...state,
        show: !state.show,
        inputValue: title,
        timeBlock,
        hours,
        mins,
        pickedColor: color,
        pickedTask: timeStamp,
        isUpdate: true,
      };

    case actionTypes.CHANGE_INPUT_VALUE:
      return {
        ...state,
        inputValue: value,
      };

    case actionTypes.CHANGE_COLOR:
      return {
        ...state,
        pickedColor: value,
      };

    case actionTypes.TIME_BLOCK_CHANGE:
      return {
        ...state,
        timeBlock: value,
      };

    case actionTypes.HOURS_CHANGE:
      return {
        ...state,
        hours: value,
      };

    case actionTypes.MINS_CHANGE:
      return {
        ...state,
        mins: value,
      };

    default:
      return state;
  }
};

export default modal;
