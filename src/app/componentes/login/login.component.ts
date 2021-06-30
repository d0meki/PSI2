import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BasededatosService } from '../../services/basededatos.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  icono:any;
  usuarioLog:any;
  constructor(private servicio: BasededatosService, 
            private route:ActivatedRoute,
            private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      usuario: ['', [Validators.required, Validators.email]],
      contrasenia: ['', Validators.required]
    })
 }
  ngOnInit(): void {
  }
  verificar(){
    this.servicio.getCuentaParam(this.loginForm.value.usuario,this.loginForm.value.contrasenia)
      .subscribe(
        res =>{
          this.usuarioLog = res;
          console.log(this.usuarioLog);
        },
        error => console.log(error)
      )
    console.log();
  }

}
