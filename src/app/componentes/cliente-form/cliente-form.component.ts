import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Subject } from 'rxjs';
import { BasededatosService } from '../../services/basededatos.service';
@Component({
  selector: 'app-cliente-form',
  templateUrl: './cliente-form.component.html',
  styleUrls: ['./cliente-form.component.css']
})
export class ClienteFormComponent implements OnInit {

  registroForm: FormGroup;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();
  constructor(private servicio: BasededatosService,
              private toastr: ToastrService,
              private ruta: Router,
              private fb: FormBuilder) { 
                this.registroForm = this.fb.group({
                  user_id: [ , Validators.required],
                  nombre: ['', Validators.required],
                  ci_cliente: ['', Validators.required],
                  telefono: ['', Validators.required],
                  ubicacion: ['', Validators.required],
                  latitud: [0, Validators.required],
                  longitud: [0, Validators.required]
                })
              }

  ngOnInit(): void {
   
  }
  nuevoCliente(){
    this.servicio.guardarCliente(this.registroForm.value)
    .subscribe(
      (res: any) => {
        console.log(res);
        this.toastr.success('El usuario fue registrado cone exito!','Se Agregó Cliente');
        this.ruta.navigate(['clientes/table']);
      },
      (err: any) => console.log(err));
      
  }
  cancelar(){
    this.ruta.navigate(['clientes/table'])
  }
  verDatos(){
    console.log(this.registroForm);
  }

}
