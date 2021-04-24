import moment from 'moment';

function getEntireMonth(yearMonth) {
  const result = [];

  let thisMonthFirstDay = moment(yearMonth).startOf('month').format('d');

  for (let i = thisMonthFirstDay - 1; i >= 0; i--) {
    const date = moment(yearMonth)
      .subtract(1, 'month')
      .endOf('month')
      .subtract(i, 'day');

    const data = {
      id: date.format('YYYY-MM-DD'),
      year: date.format('YYYY'),
      month: date.format('MM'),
      day: date.format('DD'),
    };
    result.push(data);
  }

  let thisMonthTotalDay = moment(yearMonth).endOf('month').format('DD');

  for (let i = 0; i < thisMonthTotalDay; i++) {
    const date = moment(yearMonth).startOf('day').add(i, 'day');
    const data = {
      id: date.format('YYYY-MM-DD'),
      year: date.format('YYYY'),
      month: date.format('MM'),
      day: date.format('DD'),
    };
    result.push(data);
  }

  let len = result.length;

  for (let i = 0; i < 42 - len; i++) {
    const date = moment(yearMonth).add(1, 'month').startOf('day').add(i, 'day');
    const data = {
      id: date.format('YYYY-MM-DD'),
      year: date.format('YYYY'),
      month: date.format('MM'),
      day: date.format('DD'),
    };
    result.push(data);
  }
  return result;
}

export default getEntireMonth;
