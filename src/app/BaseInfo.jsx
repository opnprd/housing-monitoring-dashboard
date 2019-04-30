export default function BaseInfo(props) {
  let title;

  let schemeData;
  if (props.schemeId) {
    title = <>Scheme Info { props.schemeId }</>;
    schemeData = <>
      <p>id: { props.schemeId }</p>
      <p>{ props.events.length } events registered</p>
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