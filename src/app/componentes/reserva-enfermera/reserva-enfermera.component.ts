import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { BasededatosService } from '../../services/basededatos.service';
@Component({
  selector: 'app-reserva-enfermera',
  templateUrl: './reserva-enfermera.component.html',
  styleUrls: ['./reserva-enfermera.component.css']
})
export class ReservaEnfermeraComponent implements OnInit {
//enfermeras
  listaNurse: any;
//servicio
id: any;
servicio: any;
//cliente
cliente: any;
  constructor(private nurse: BasededatosService,
              private ruta: Router,
              private activeR: ActivatedRoute,
              private httpServicio: BasededatosService,
              private cookie: CookieService) { }

  ngOnInit(): void {
    //DATOS ENFERMERA
    this.nurse.getEnfermeras().subscribe(
      res => {
        this.listaNurse = res;
        console.log(this.listaNurse);
      }, err => console.log(err)); 
    //CAPTURO ID DE SERVICIO POR PARAMETRO Y MANDO A LLAMAR SUS DATOS  
      this.activeR.params.subscribe(params =>{
        this.id = params['id'];
        this.httpServicio.getServicioId(this.id)
        .subscribe(
          res =>{
            this.servicio = res;
            console.log(this.nurse);
          },
          error => console.log(error)
        )
      });
    //DE LA COOKIE SACO EL ID DE USUARIO PARA LLAMAR AL CLIENTE
    
    /* this.httpServicio.getCliente(this.id)
    .subscribe(
      res =>{
        this.nurse = res;
        console.log(this.nurse);
      },
      error => console.log(error)
    ) */
  }
  

}
