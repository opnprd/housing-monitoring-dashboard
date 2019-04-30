function unCamelCase(text) {
  return text.replace( /([A-Z])/g, " $1" )
    .trim()
    .replace(/[a-z]/, (char) => char.toUpperCase());
}

function sortEvents(events) {
  return events
    .filter(x => x.date)
    .sort((x, y) => {
      if (x.date === y.date) return 0;
      return (x.date < y.date) ? -1 : 1;
    });
}

function Event(props) {
  const { event } = props;
  return (
    <div className='event'>
      { unCamelCase(event.type) } captured on { event.date }
    </div>
  );
}

function UndatedEvents(props) {
  const { events } = props;
  const undatedEvents = events.filter(x => !x.date).map(x => <UndatedEvent event={x} />);
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
  const datedEvents = sortEvents(props.events).map(x => <Event event={x} />);
  return (
    <>
      <h2>Event stream</h2>
      { datedEvents }
      <UndatedEvents events={events} />
    </>
  );
}