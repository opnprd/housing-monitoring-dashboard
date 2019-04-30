export default function BaseInfo(props) {
  let title;

  let schemeData;
  if (props.schemeId) {
    title = <>Scheme Info { props.schemeId }</>;
    schemeData = <>
      <dl>
        <dt>Scheme Id</dt>
        <dd>{ props.schemeId }</dd>
      </dl>
      <div>Stuff in here</div>
    </>;
  } else {
    title = 
    schemeData = <>
      <p>No scheme selected...</p>
    </>;
  }

  return (
    <>
      <h2>Scheme Info</h2>
      { schemeData }
    </>
  );
}