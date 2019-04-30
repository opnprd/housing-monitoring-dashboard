import { UndatedEvents } from './UndatedEvents.jsx';
import { TimedEvents } from './TimedEvents.jsx';

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