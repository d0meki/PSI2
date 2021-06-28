import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { BasededatosService } from '../../services/basededatos.service';

@Component({
  selector: 'app-enfermera-form',
  templateUrl: './enfermera-form.component.html',
  styleUrls: ['./enfermera-form.component.css']
})
export class EnfermeraFormComponent implements OnInit {

  registroForm: FormGroup;
  constructor(private servicio: BasededatosService,
              private toastr: ToastrService,
              private ruta: Router,
              private fb: FormBuilder) 
  { 
    this.registroForm = this.fb.group({
      nombre: ['', Validators.required],
      ci_enfermera: ['', Validators.required],
      telefono: ['', Validators.required],
      direccion: ['', Validators.required],
      sueldo: [ , Validators.required]
    })
              
  }
  
  ngOnInit(): void {

  }
  
  nuevaEnfermera(){
    this.servicio.guardarEnfermera(this.registroForm.value)
    .subscribe(
      (      res: any) => {
        console.log(res);
        this.toastr.success('El usuario fue registrado cone exito!','Se Agregó enfemera');
        this.ruta.navigate(['enfermeras/table']);
      },
      (      err: any) => console.log(err));
  }
  cancelar(){
    this.ruta.navigate(['enfermeras/table'])
  }
  verDatos(){
    console.log(this.registroForm);
    
  }
}
