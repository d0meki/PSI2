import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { BasededatosService } from '../../services/basededatos.service';

@Component({
  selector: 'app-cliente-card',
  templateUrl: './cliente-card.component.html',
  styleUrls: ['./cliente-card.component.css']
})
export class ClienteCardComponent implements OnInit {

  id: any;
  clientes : any;
  constructor(private router: Router,
              private activeRoute: ActivatedRoute,
              private servicio: BasededatosService,
              private toastr: ToastrService) { }

  ngOnInit(): void {
    this.activeRoute.params.subscribe(params =>{
      this.id = params['id'];
      this.servicio.getCliente(this.id)
      .subscribe(
        res =>{
          this.clientes = res;
          console.log(this.clientes);
        },
        error => console.log(error)
      )
    })
  }
  onEdidt(){
    this.router.navigate(['clientes/edit/',this.id])
  }
  //PARA ELIMINAR
  onDelete(){
    this.servicio.eliminarCliente(this.id)
    .subscribe(res => {
    this.toastr.success('Enfermera Eliminada con Exito!','Se eliminó enfemera');  
    this.router.navigate(['clientes/table']);
    }, err => console.log(err)); 
  }
  volver(){
    this.router.navigate(['clientes/table']);
  }
  
  irAlMapa(){
    this.router.navigate(['map/',this.id]);
  }

}
