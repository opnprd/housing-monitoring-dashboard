export function boundsToPolygon(bounds) {
  const n = bounds.getNorth();
  const e = bounds.getEast();
  const w = bounds.getWest();
  const s = bounds.getSouth();
  const polygon = {
    type: 'Polygon',
    coordinates: [ [ [ w, n ], [ e, n ], [ e, s ], [ w, s ], [ w, n ] ] ],
  }
  return polygon;
}