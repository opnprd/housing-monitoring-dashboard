import ret from 'react-event-timeline';

import { sortEventsByDate, unCamelCase } from './helpers.js';

export function TimedEvents(props) {
  const { events } = props;
  const timelineEvents = events
    .filter(x => x.date)
    .sort(sortEventsByDate)
    .map(x => (<ret.TimelineEvent title={unCamelCase(x.type)} createdAt={x.date} key={x.eventId}>
    </ret.TimelineEvent>));
  return (<ret.Timeline>
    {timelineEvents}
  </ret.Timeline>);
}
