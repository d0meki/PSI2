import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Loader } from "@googlemaps/js-api-loader";
import { BasededatosService } from '../../services/basededatos.service';
@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  id: any;
  cliente: any;
  constructor(private activedRoute: ActivatedRoute,
              private ruta: Router,
              private servicio: BasededatosService,) { 
    
  }
  ngOnInit(): void {
    this.activedRoute.params.subscribe(params =>{
      this.id = params['id'];
      this.servicio.getCliente(this.id)
      .subscribe(
        async res =>{
          this.cliente = res;
          console.log(this.cliente);
        },
        error => console.log(error)
      )
    })
  }
  
  
  volver(){
    
    this.ruta.navigate(['clientes/card/',this.id])
  }
  
  inicializarMap() {
    const loader = new Loader({
      apiKey: "AIzaSyCcXhyQYZu7I3ciZ2k48c4DtV5R2odTc5Q"
    });
    loader.load().then(() => {
      /* new google.maps.Map(document.getElementById("map") as HTMLElement, {
        center: { lat: -17.820106, lng: -63.142818 },
        zoom: 17,
      }); */
     // const uluru = { lat: -17.820106, lng: -63.142834};
      const uluru = { lat: this.cliente[0]["latitud"], lng: this.cliente[0]["longitud"]};
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
  

}


