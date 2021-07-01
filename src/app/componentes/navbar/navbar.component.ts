import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private cookieService: CookieService,
              private ruta: Router) { }

  ngOnInit(): void {
    
  }
  isLogin(): boolean{
    return this.cookieService.check('token_access');
  }
  logAut(){
    this.cookieService.delete('token_access');
    this.ruta.navigate(['inicio'])
  }

}
