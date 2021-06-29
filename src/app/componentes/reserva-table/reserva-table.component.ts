import { Component, OnInit } from '@angular/core';
import { BasededatosService } from '../../services/basededatos.service';
@Component({
  selector: 'app-reserva-table',
  templateUrl: './reserva-table.component.html',
  styleUrls: ['./reserva-table.component.css']
})
export class ReservaTableComponent implements OnInit {
listaDeReservas: any;
  constructor(private servicio: BasededatosService) { }

  ngOnInit(): void {
    this.servicio.getReserva().subscribe(
      res => {
        this.listaDeReservas = res;
        console.log(this.listaDeReservas);
        
       // this.dtTrigger.next();
      }, err => console.log(err)); 
  }

}
