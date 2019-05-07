import { UndatedEvents } from './UndatedEvents.jsx';
import { TimedEvents } from './TimedEvents.jsx';

export default function EventStream(props) {
  const events = props.events;
  return (
    <>
      <h2>Event stream</h2>
      <TimedEvents events={events} />
      <UndatedEvents events={events} />
    </>
  );
}