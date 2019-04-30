function renderCount(count) {
  if (count === null)
    return '?';
  if (Array.isArray(count))
    return `${count[0]} to ${count[1]}`;
  return count;
}

export function Count(props) {
  const count = props.count;
  return <div className='count'>{ renderCount(count) }</div>;
}
