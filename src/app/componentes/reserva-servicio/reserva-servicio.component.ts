import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BasededatosService } from '../../services/basededatos.service';
@Component({
  selector: 'app-reserva-servicio',
  templateUrl: './reserva-servicio.component.html',
  styleUrls: ['./reserva-servicio.component.css']
})
export class ReservaServicioComponent implements OnInit {
  listaDeServicios: any;
  constructor(private ser: BasededatosService,
              private ruta: Router) { }

  ngOnInit(): void {
    this.ser.getServicio().subscribe(
      res => {
        this.listaDeServicios = res;
        console.log(this.listaDeServicios);    
      }, err => console.log(err)); 
  }
  enviarServicio(id: any){
    this.ruta.navigate(['/reserva/enfermera/',id]);
  }


}
