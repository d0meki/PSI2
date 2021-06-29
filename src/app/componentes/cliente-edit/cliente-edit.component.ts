import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { BasededatosService } from '../../services/basededatos.service';
@Component({
  selector: 'app-cliente-edit',
  templateUrl: './cliente-edit.component.html',
  styleUrls: ['./cliente-edit.component.css']
})
export class ClienteEditComponent implements OnInit {

  id: any;
  clientes : any;
  editForm: FormGroup;
  constructor(private activedRoute: ActivatedRoute,
              private router: Router,
              private servicio: BasededatosService,
              private toastr: ToastrService,
              private fb: FormBuilder) {
    this.editForm = this.fb.group({
      user_id: [ , Validators.required],
      nombre: ['', Validators.required],
      ci_cliente: ['', Validators.required],
      telefono: ['', Validators.required],
      ubicacion: ['', Validators.required],
      latitud: [ , Validators.required],
      longitud: [ , Validators.required]
    })
   }

  ngOnInit(): void {
    this.activedRoute.params.subscribe(params =>{
      this.id = params['id'];
      this.servicio.getCliente(this.id)
      .subscribe(
        res =>{
          this.clientes = res;
        },
        error => console.log(error)
      )
    })
  }
  editarCliente(){
    this.servicio.updateCliente(this.id,this.editForm.value)
    .subscribe(
      res =>{
        this.toastr.success('Cliente actualizado correctamente!','Se Editó enfemera');
        this.router.navigate(['/clientes/table']);
      },
      error => console.log(error)
    )
  }
  cancelar(){
    this.router.navigate(['/clientes/card',this.id])
  }
}
