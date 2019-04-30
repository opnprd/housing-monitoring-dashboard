import { checkStatus, parseJson } from './helpers';

export async function getSchemesInArea(geoJsonSearch) {
  const query = new URL('/schemes/geometry', 'http://localhost:8000');
  query.searchParams.append('intersects', JSON.stringify(geoJsonSearch));

  return fetch(query)
    .then(checkStatus)
    .then(parseJson);
}