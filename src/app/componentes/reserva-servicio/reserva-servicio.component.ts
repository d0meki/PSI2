import { Component, OnInit } from '@angular/core';
import { BasededatosService } from '../../services/basededatos.service';
@Component({
  selector: 'app-reserva-servicio',
  templateUrl: './reserva-servicio.component.html',
  styleUrls: ['./reserva-servicio.component.css']
})
export class ReservaServicioComponent implements OnInit {
  listaDeServicios: any;
  constructor(private ser: BasededatosService) { }

  ngOnInit(): void {
    this.ser.getServicio().subscribe(
      res => {
        this.listaDeServicios = res;
        console.log(this.listaDeServicios);
        
      }, err => console.log(err)); 
  }

}
