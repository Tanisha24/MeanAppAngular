import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-map-box',
  templateUrl: './map-box.component.html',
  styleUrls: ['./map-box.component.css']
})
export class MapBoxComponent implements OnInit {

  map: mapboxgl.Map;
      style = 'mapbox://styles/mapbox/light-v9';
  constructor() { }

  ngOnInit() {
    console.log("BuildMap");
    this.buildMap();
  }

  buildMap(){

  Object.getOwnPropertyDescriptor(mapboxgl, "accessToken").set('pk.eyJ1IjoidGFuaXNoYS0yNCIsImEiOiJjam0yOWluNTkwMGhnM2txcjhuOGM3dHhiIn0.3Nf2YwQfz_4_7xTM4Kqlqw');
  if (!mapboxgl.supported()) {
      alert('Your browser does not support Mapbox GL');
  }
  else{
  this.map = new mapboxgl.Map({
			    // container id specified in the HTML
			    container: 'map',
			    // style URL
			    style: this.style,
			    // initial position in [long, lat] format
			    center: [-96, 37.8],
			    // initial zoom
			    zoom: 3
			    //scrollZoom: false
			  });


        this.map.on('load', function () {

            this.addLayer({
                "id": "points",
                "type": "symbol",
                "source": {
                    "type": "geojson",
                    "data": {
                        "type": "FeatureCollection",
                        "features": [{
                            "type": "Feature",
                            "geometry": {
                                "type": "Point",
                                "coordinates": [-77.03238901390978, 38.913188059745586]
                            },
                            "properties": {
                                "title": "Mapbox DC",
                                "icon": "monument"
                            }
                        }, {
                            "type": "Feature",
                            "geometry": {
                                "type": "Point",
                                "coordinates": [-122.414, 37.776]
                            },
                            "properties": {
                                "title": "Mapbox SF",
                                "icon": "harbor"
                            }
                        }]
                    }
                },
                "layout": {
                    "icon-image": "{icon}-15",
                    "text-field": "{title}",
                    "text-font": ["Open Sans Semibold", "Arial Unicode MS Bold"],
                    "text-offset": [0, 0.6],
                    "text-anchor": "top"
                }
            });
        });
        this.map.addControl(new mapboxgl.NavigationControl());
        console.log("BuildMap Finished");



}

}

}
