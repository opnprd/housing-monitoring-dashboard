import L from 'leaflet-providers';
import { getSchemesInArea } from '../resources/schemes';
import { boundsToPolygon } from './helpers';

import { Component, createElement } from 'react';

export class Map extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const div = createElement('div', { id: 'map'} );
    return div;
  }

  init() {
    this.map = L.map('map').setView([53.80, -1.55], 15);
    L.tileLayer.provider('Stamen.TonerLite').addTo(this.map);
    this.addSchemesLayer();
    this.map.on('moveend', () => this.addSchemesLayer());
  }

  async addSchemesLayer() {
    const geoJsonSearch = boundsToPolygon(this.map.getBounds());
  
    const schemeGeoJson = await getSchemesInArea(geoJsonSearch).catch(function(err) {
      console.error("Oops, Something went wrong!", err);
    });
    
    this.removeSchemesLayer();
    this.schemesLayer = L.geoJSON(schemeGeoJson, {
      style: function () {
        return { color: 'green' };
      }
    })
    .bindPopup(function (layer) {
      return JSON.stringify(layer.feature.properties, null, 2);
    })
    .addTo(this.map);
  }

  removeSchemesLayer() {
    if (this.schemesLayer) this.schemesLayer.removeFrom(this.map);
  }
}
