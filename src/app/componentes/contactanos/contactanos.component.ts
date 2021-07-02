import { Component, OnInit } from '@angular/core';
import { Loader } from '@googlemaps/js-api-loader';

@Component({
  selector: 'app-contactanos',
  templateUrl: './contactanos.component.html',
  styleUrls: ['./contactanos.component.css']
})
export class ContactanosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const loader = new Loader({
      apiKey: "AIzaSyCcXhyQYZu7I3ciZ2k48c4DtV5R2odTc5Q"
    });
    loader.load().then(() => {
      /* new google.maps.Map(document.getElementById("map") as HTMLElement, {
        center: { lat: -17.820106, lng: -63.142818 },
        zoom: 17,
      }); */
      const uluru = { lat: -17.797386, lng: -63.136221};
  // The map, centered at Uluru
  const map = new google.maps.Map(
    document.getElementById("map") as HTMLElement,
    {
      zoom: 17,
      center: uluru,
    }
  );
  
  // The marker, positioned at Uluru
  const marker = new google.maps.Marker({
    position: uluru,
    map: map,
  });
    });
  }

}
