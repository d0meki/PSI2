import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  constructor(private cookieService: CookieService) { }

  ngOnInit(): void {
    const cookie = this.cookieService.check('token_access');
    console.log(cookie);
  }

}
