import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Subject } from 'rxjs';
import { BasededatosService } from 'src/app/services/basededatos.service';

@Component({
  selector: 'app-servicio-form',
  templateUrl: './servicio-form.component.html',
  styleUrls: ['./servicio-form.component.css']
})
export class ServicioFormComponent implements OnInit {
  registroForm: FormGroup;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();
  constructor(private servicio: BasededatosService,
              private toastr: ToastrService,
              private ruta: Router,
              private fb: FormBuilder) { 
                this.registroForm = this.fb.group({
                  nombre: ['', Validators.required],
                  descripcion: ['', Validators.required],
                  precio: [ , Validators.required],
                })
              }

  ngOnInit(): void {
   
  }
  nuevoServicio(){
    this.servicio.guardarServicio(this.registroForm.value)
    .subscribe(
      (res: any) => {
        console.log(res);
        this.toastr.success('El servicio fue registrado cone exito!','Se Agregó Servicio');
        this.ruta.navigate(['servicio/table']);
      },
      (err: any) => console.log(err));
      
  }
  cancelar(){
    this.ruta.navigate(['servicio/table'])
  }

}
