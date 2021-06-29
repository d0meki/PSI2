import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  icono:any;
  constructor(private router: Router, private route:ActivatedRoute,private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      usuario: ['', [Validators.required, Validators.email]],
      contrasenia: ['', Validators.required]
    })
 }
  ngOnInit(): void {
  }

}
