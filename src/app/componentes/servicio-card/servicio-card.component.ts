import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { BasededatosService } from 'src/app/services/basededatos.service';

@Component({
  selector: 'app-servicio-card',
  templateUrl: './servicio-card.component.html',
  styleUrls: ['./servicio-card.component.css']
})
export class ServicioCardComponent implements OnInit {

  id: any;
  servicios : any;
  constructor(private router: Router,
              private activeRoute: ActivatedRoute,
              private servicio: BasededatosService,
              private toastr: ToastrService) { }

  ngOnInit(): void {
    this.activeRoute.params.subscribe(params =>{
      this.id = params['id'];
      this.servicio.getServicioId(this.id)
      .subscribe(
        res =>{
          this.servicios = res;
          console.log(this.servicios);
        },
        error => console.log(error)
      )
    })
  }
  //MANDO PARA EL COMPONENTE EDITAR
  onEdidt(){
    this.router.navigate(['servicio/edit/',this.id])
  }
  //PARA ELIMINAR
  onDelete(){
    this.servicio.eliminarServicio(this.id)
    .subscribe(res => {
    this.toastr.success('Servicio Eliminado con Exito!','Se eliminó servicio');  
    this.router.navigate(['servicio/table']);
    }, err => console.log(err)); 
  }
  volver(){
    this.router.navigate(['servicio/table']);
  }

}
