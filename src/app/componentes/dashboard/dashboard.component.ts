import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  tienePermiso = false;
  tienePermisoCliente = false;
  tienePermisoEnfermera = false;
  role = '';
  roles = {
    adm: 'administrador',
    nurse: 'enfermera',
    cliente: 'cliente'
  }
  constructor(private rol: CookieService) { }

  ngOnInit(): void {
   this.role = this.rol.get('rol');
   this.mostrar();
  }
  mostrar(){
    if (this.role == this.roles.adm) {
      this.tienePermiso = true;
    }
    if (this.role == this.roles.cliente) {
      this.tienePermisoCliente = true;
    }
    if (this.role == this.roles.nurse) {
      this.tienePermisoEnfermera = true;
    }
  }

}
