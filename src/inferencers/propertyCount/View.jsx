import { Count } from './DisplayCount.jsx';
import { processEvents } from './counter';

function List(props) {
  const { array } = props;
  return <ul>
    { array.map(x => <li>{x}</li>)}
  </ul>
}

function Explanation(props) {
  const { schemeId, events } = props;
  return <div className='explanation'>
    <p>
      Property count for { schemeId }.
    </p>
    <p>
      The count used { events.valid.length } separate events.
      { events.skipped > 0 && <> ({ events.skipped } events were excluded.)</> }
    </p>
    <p>
      The raw values were { JSON.stringify(events.valid) }.
    </p>
    <p>
      The input data was:
    </p>
      <List array={events.summary} />
  </div>;
}

export default function Counter(props) {
  const schemeId = props.schemeId;
  const events = processEvents(props.events);

  return (
    <>
      <h2>Property Counter</h2>
      <Count count={ events.properties } />
      <Explanation events={ events } schemeId={ schemeId }/>
    </>
  );
}