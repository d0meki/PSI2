import { Component, OnInit } from '@angular/core';
import { BasededatosService } from '../../services/basededatos.service';
@Component({
  selector: 'app-reserva-enfermera',
  templateUrl: './reserva-enfermera.component.html',
  styleUrls: ['./reserva-enfermera.component.css']
})
export class ReservaEnfermeraComponent implements OnInit {
listaNurse: any;
  constructor(private nurse: BasededatosService) { }

  ngOnInit(): void {
    this.nurse.getEnfermeras().subscribe(
      res => {
        this.listaNurse = res;
        console.log(this.listaNurse);
      }, err => console.log(err)); 
  }
  

}
