import { processEvents } from './counter';

function DisplayCount(props) {
  const count = props.count;
  if (count === null) return '?';
  if (Array.isArray(count)) return <>{ count[0] } to { count[1] }</>;
  return count;
}

export default function Counter(props) {
  const schemeId = props.schemeId;
  const events = processEvents(props.events);

  const skipped = <>({ events.skipped } events were excluded.)</>

  let schemeDetails;

  if (schemeId) {
    schemeDetails = (<>
      <div className='count'>
        <DisplayCount count={ events.properties } />
      </div>
      <div className='explanation'>
        <p>Count for scheme ID { schemeId }</p>
        <p>
          This came from { events.valid.length } separate events.
          { events.skipped > 0 ? skipped : '' }
        </p>
        <p>
          The raw values were { JSON.stringify(events.valid) }.
        </p>
        <p>
          The input data was: { JSON.stringify(events.summary) }.
        </p>
      </div>
      </>);
  } else {
    schemeDetails = <div>No scheme seleted!</div>;
  }

  return (
    <>
      <h2>Property Counter</h2>
      { schemeDetails }
    </>
  );
}