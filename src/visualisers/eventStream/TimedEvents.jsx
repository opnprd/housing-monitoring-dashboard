import ret from 'react-event-timeline';

import { sortEventsByDate, unCamelCase } from './helpers.js';

function eventIcon(eventType) {
  const iconMap = {
    planningPermission: <i className="fas fa-book"></i>
  };
  return iconMap[eventType];
}

const dateOptions = {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
}

function TimedEventDetails(props) {
  const { event } = props;
  if (event.type === 'planningPermission') {
    return <p>{ event.eventData.summary }</p>;
  }
  if (event.type === 'councilTaxRegistration') {
    return <p>{ event.eventData.addr.join(', ') }</p> 
  }
  return null;
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
        <TimedEventDetails event={x} />
      </ret.TimelineEvent>
    ));
  return (<ret.Timeline>
    {timelineEvents}
  </ret.Timeline>);
}
