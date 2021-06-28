import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Loader } from "@googlemaps/js-api-loader"
@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  
  constructor(private ruta: Router) { 
    
  }
  
  ngOnInit(): void {
    const loader = new Loader({
      apiKey: "AIzaSyCcXhyQYZu7I3ciZ2k48c4DtV5R2odTc5Q"
    });
    loader.load().then(() => {
      /* new google.maps.Map(document.getElementById("map") as HTMLElement, {
        center: { lat: -17.820106, lng: -63.142818 },
        zoom: 17,
      }); */
      const uluru = { lat: -17.820106, lng: -63.142834};
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
    // The location of Uluru
  
    
  }
  volver(){
    this.ruta.navigate(['clientes/table'])
  }
  
  

}
