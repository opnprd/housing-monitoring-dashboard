export function unCamelCase(text) {
  return text.replace(/([A-Z])/g, " $1")
    .trim()
    .replace(/[a-z]/, (char) => char.toUpperCase());
}
export function sortEventsByDate(a, b) {
  if (a.date === b.date)
    return 0;
  return (a.date < b.date) ? -1 : 1;
}
