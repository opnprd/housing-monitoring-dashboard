import ret from 'react-event-timeline';

import { sortEventsByDate, unCamelCase } from './helpers.js';

function eventIcon(eventType) {
  const iconMap = {
    planningPermission: <i class="fas fa-book"></i>
  };
  return iconMap[eventType];
}

const dateOptions = {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
}

export function TimedEvents(props) {
  const { events } = props;
  const timelineEvents = events
    .filter(x => x.date)
    .sort(sortEventsByDate)
    .map(x => (
      <ret.TimelineEvent
        title={unCamelCase(x.type)}
        createdAt={new Date(x.date).toLocaleDateString('en-GB', dateOptions)}
        key={x.eventId}
        icon={eventIcon(x.type)}
      >
      </ret.TimelineEvent>
    ));
  return (<ret.Timeline>
    {timelineEvents}
  </ret.Timeline>);
}
