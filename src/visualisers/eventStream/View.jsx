import ret from 'react-event-timeline';

function unCamelCase(text) {
  return text.replace( /([A-Z])/g, " $1" )
    .trim()
    .replace(/[a-z]/, (char) => char.toUpperCase());
}

function sortEventsByDate(a, b) {
  if (a.date === b.date) return 0;
  return (a.date < b.date) ? -1 : 1;
}

function TimedEvents(props) {
  const { events } = props;

  const timelineEvents = events
    .filter(x => x.date)
    .sort(sortEventsByDate)
    .map(x => (
      <ret.TimelineEvent  title={unCamelCase(x.type)}
                          createdAt={x.date} 
                          key={x.eventId}>
      </ret.TimelineEvent>
    ));

  return (
    <ret.Timeline>
    { timelineEvents }
    </ret.Timeline>
  );
}

function UndatedEvents(props) {
  const { events } = props;
  const undatedEvents = events
    .filter(x => !x.date)
    .map(x => <UndatedEvent event={x} key={x.eventId} />);
  if (undatedEvents.length === 0) return null;
  return (
    <>
    <h3>Undated events</h3>
    {undatedEvents}
    </>
  );
}

function UndatedEvent(props) {
  const { event } = props;
  return (
    <div className='event undated'>
      { unCamelCase(event.type) } 
    </div>
  );
}

export default function EventStream(props) {
  const events = props.events;
  return (
    <>
      <h2>Event stream</h2>
      <div className='col-6'>
        <TimedEvents events={events} />
      </div>
      <div className='col-6'>
        <UndatedEvents events={events} />
      </div>
    </>
  );
}