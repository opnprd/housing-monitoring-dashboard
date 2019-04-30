import { getResource } from './helpers';

export async function getEventsForScheme(scheme) {
  const query = new URL('/events', 'http://localhost:8000');
  query.searchParams.append('scheme', scheme);

  return getResource(query);
}