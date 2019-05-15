import moment from 'moment';
import { getResource } from './helpers';
import { calculateUnits } from '../inferencers/propertyCount/counter';
import { bucketize, counter, dateRange } from './utils';

async function getSchemesReport() {
  const query = new URL('/reports/schemes', 'http://localhost:8000');

  return getResource(query, { cache: 'force-cache' });
}

export default async function getAndFormatSchemesReport() {
  const reportTemplate = dateRange().reduce((acc, curr) => {
    acc[curr] = {
      planningConsents: 0,
      occupations: 0,
    };
    return acc;
  }, {});

  const reportData = (await getSchemesReport()).map(scheme => {
    const output = {
      planBucket: bucketize(scheme.planDate),
      planCount: counter(scheme.planText.map(calculateUnits).filter(x => x)),
      occupationBuckets: scheme.occupationDates.map(bucketize),
    };
    return output;
  }).reduce((acc, scheme) => {
    if (!isNaN(scheme.planCount)) {
      acc[scheme.planBucket].planningConsents += scheme.planCount;
    }
    for (let occupation of scheme.occupationBuckets) {
      acc[occupation].occupations++;
    } 
    return acc;
  }, reportTemplate);

  const report = Object.entries(reportData)
    .map(([k, v]) => ({
      period: moment(k, 'YYYY-MM').format('MMM YY'),
      planningConsents: v.planningConsents,
      occupations: v.occupations,
    }))
    .map((curr, idx, data) => ({
      period: curr.period,
      planningConsents: data.slice(0, idx).reduce((a, c) => a + c.planningConsents, 0),
      occupations: data.slice(0, idx).reduce((a, c) => a + c.occupations, 0),
    }));
  return report;
}