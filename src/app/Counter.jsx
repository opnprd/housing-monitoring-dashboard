export default function Counter(props) {
  if (!props.schemeId) {
    return (
      <div>No scheme seleted!</div>
    )
  }
  return (
    <>
    <div>
      200 properties
    </div>
    <div>
      (Why we think this)
    </div>
    <div>I am the counter for { props.schemeId }</div>
    </>
  );
}