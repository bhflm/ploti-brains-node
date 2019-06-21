const { assignIn } = require('lodash');

exports.parseCoordinate = (long, lat) => ({
  type: 'Point',
  coordinates: [long, lat],
  crs: { type: 'name', properties: { name: 'EPSG:4326' } }
});

const parsePolygon = coords => ({ type: 'Polygon', coordinates: [[coords]] });

const parseLineString = coords => ({ type: 'LineString', coordinates: [coords] });

exports.parseLoafCoords = coords => {
  const size = coords.length > 2 ? parsePolygon(coords) : parseLineString(coords);
  const loaf = {
    area: coords.length > 2 ? 'loafPolygon' : 'loafLineString'
  };
  return { [loaf.area]: size };
};
