import Moment from 'moment';
import momentRange from 'moment-range'

const moment = momentRange.extendMoment(Moment);

const period = 'month';

export function bucketize(date) {
  return moment(date).endOf(period).format('YYYY-MM');
}

export function counter(data) {
  return Math.max(data);
}

export function dateRange() {
  const startDate = moment('2010-01-01', 'YYYY-MM-DD');
  const endDate = new Date();
  const range = moment.range(startDate, endDate);
  return Array.from(range.by(period)).map(bucketize);
}