import L from 'leaflet-providers';
import { getSchemesInArea } from '../resources/schemes';
import { boundsToPolygon } from './helpers';

export class Map {
  constructor(app) {
    this.app = app;
    this.selectedScheme = null;
  }

  init() {
    this.map = L.map('map').setView([53.80, -1.55], 14);
    L.tileLayer.provider('Stamen.TonerLite').addTo(this.map);
    this.addSchemesLayer();
    this.map.on('moveend', () => this.addSchemesLayer());
  }

  setSchemeStyle(feature) {
    console.log(feature.properties.schemeId === this.selectedScheme);
    const color = (feature.properties.schemeId === this.selectedScheme) ? "hsl(120, 61%, 50%)" : "hsl(120, 100%, 25%)";

    return {
      color,
    };
  }
  
  async addSchemesLayer() {
    const geoJsonSearch = boundsToPolygon(this.map.getBounds());
  
    const schemeGeoJson = await getSchemesInArea(geoJsonSearch).catch(function(err) {
      console.error("Oops, Something went wrong!", err);
    });
    
    this.removeSchemesLayer();
    this.schemesLayer = L.geoJSON(schemeGeoJson, {
      style: (feature) => this.setSchemeStyle(feature),
      onEachFeature: (feature, layer) => {
        layer.on('click', () => {
          console.log(parent);
          this.selectedScheme = feature.properties.schemeId;
          this.setSchemeStyle(feature);
          this.map.panTo(layer.getCenter(), {});
          this.app.setSelected(this.selectedScheme);
        });
      },
    })
    .addTo(this.map);
  }

  removeSchemesLayer() {
    if (this.schemesLayer) this.schemesLayer.removeFrom(this.map);
  }
}
