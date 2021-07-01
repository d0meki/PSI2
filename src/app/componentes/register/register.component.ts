import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Subject } from 'rxjs';
import { BasededatosService } from 'src/app/services/basededatos.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();
  registroForm: FormGroup;
  constructor(private servicio: BasededatosService,
              private toastr: ToastrService,
              private ruta: Router,
              private fb: FormBuilder) {
    this.registroForm = this.fb.group({
      correo: ['', [Validators.required, Validators.email]],
      contrasenia: ['', Validators.required],
      rol: ['', Validators.required]
    })
 }
  ngOnInit(): void {
  }
  nuevaCuenta(){
    console.log(this.registroForm.value);
    
    this.servicio.guardarCuenta(this.registroForm.value)
    .subscribe(
      (res: any) => {
        console.log(res);
        this.toastr.success('El usuario fue registrado cone exito!','Se Agregó Cuenta');
        this.ruta.navigate(['inicio']);
      },
      (err: any) => console.log(err));
      
  }
  cancelar(){
    this.ruta.navigate(['navegate'])
  }
  verDatos(){
    console.log(this.registroForm);
  }
  

}
