import { unCamelCase } from './helpers.js';

export function UndatedEvents(props) {
  const { events } = props;
  const undatedEvents = events
    .filter(x => !x.date)
    .map(x => <UndatedEvent event={x} key={x.eventId} />);
  if (undatedEvents.length === 0)
    return null;
  return (<>
    <h3>Undated events</h3>
    {undatedEvents}
  </>);
}

function UndatedEvent(props) {
  const { event } = props;
  return (<div className='event undated'>
    {unCamelCase(event.type)}
  </div>);
}
