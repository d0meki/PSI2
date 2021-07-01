import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BasededatosService } from '../../services/basededatos.service';
import { ToastrService } from 'ngx-toastr';
import { CookieService } from 'ngx-cookie-service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  icono:any;
  constructor(private servicio: BasededatosService, 
            private route:ActivatedRoute,
            private fb: FormBuilder,
            private toastr: ToastrService,
            private ruta: Router,
            private cookieService: CookieService) {
      this.loginForm = this.fb.group({
      correo: ['', [Validators.required, Validators.email]],
      contrasenia: ['', Validators.required]
    })
 }
  ngOnInit(): void {
  }
  verificar(){
    this.servicio.validarCuenta(this.loginForm.value)
      .subscribe((res:any)=>{
        console.log(res);
        this.cookieService.set('token_access',res.token,4,'/');
        this.ruta.navigate(['navegate']);
      },
        error => console.log(error)
      )
    console.log();
  }
  

          /* if (this.usuarioLog.message == `aprobado`) {
            this.toastr.success('Usuario Valido');
          //  this.ruta.navigate(['/clientes/table']);
          }else{
            this.toastr.error('Usuario Invalido');
           // this.ruta.navigate(['/inicio']);
          } */

}
