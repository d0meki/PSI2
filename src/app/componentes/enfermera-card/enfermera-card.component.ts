import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { BasededatosService } from '../../services/basededatos.service';
@Component({
  selector: 'app-enfermera-card',
  templateUrl: './enfermera-card.component.html',
  styleUrls: ['./enfermera-card.component.css']
})
export class EnfermeraCardComponent implements OnInit {

  id: any;
  nurse : any;
  constructor(private router: Router,
              private activeRoute: ActivatedRoute,
              private servicio: BasededatosService,
              private toastr: ToastrService) { }

  ngOnInit(): void {
    this.activeRoute.params.subscribe(params =>{
      this.id = params['id'];
      this.servicio.getEnfermera(this.id)
      .subscribe(
        res =>{
          this.nurse = res;
          console.log(this.nurse);
        },
        error => console.log(error)
      )
    })
  }
  //MANDO PARA EL COMPONENTE EDITAR
  onEdidt(){
    this.router.navigate(['enfermeras/edit/',this.id])
  }
  //PARA ELIMINAR
  onDelete(){
    this.servicio.eliminarEmfermera(this.id)
    .subscribe(res => {
    this.toastr.success('Enfermera Eliminada con Exito!','Se eliminó enfemera');  
    this.router.navigate(['enfermeras/table']);
    }, err => console.log(err)); 
  }
  volver(){
    this.router.navigate(['enfermeras/table']);
  }

}
