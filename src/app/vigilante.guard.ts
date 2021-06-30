import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VigilanteGuard implements CanActivate {
  
  constructor(private cookieService: CookieService,
              private ruta: Router){

  }
  redirect(flag: boolean){
    if (!flag){
      this.ruta.navigate(['/login'])
    }
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      /* const cookie = this.cookieService.check('token_access');
      this.redirect(cookie);
      return cookie; */
      return true;
  }
  
}
