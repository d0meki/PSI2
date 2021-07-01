import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClienteCardComponent } from './componentes/cliente-card/cliente-card.component';
import { ClienteEditComponent } from './componentes/cliente-edit/cliente-edit.component';
import { ClienteFormComponent } from './componentes/cliente-form/cliente-form.component';
import { ClienteTableComponent } from './componentes/cliente-table/cliente-table.component';
import { ContactanosComponent } from './componentes/contactanos/contactanos.component';
import { DashboardComponent } from './componentes/dashboard/dashboard.component';
import { EnfermeraCardComponent } from './componentes/enfermera-card/enfermera-card.component';
import { EnfermeraEditComponent } from './componentes/enfermera-edit/enfermera-edit.component';
import { EnfermeraFormComponent } from './componentes/enfermera-form/enfermera-form.component';
import { EnfermeraTableComponent } from './componentes/enfermera-table/enfermera-table.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { LoginComponent } from './componentes/login/login.component';
import { MapComponent } from './componentes/map/map.component';
import { NosotrosComponent } from './componentes/nosotros/nosotros.component';
import { RegisterComponent } from './componentes/register/register.component';
import { ReservaEnfermeraComponent } from './componentes/reserva-enfermera/reserva-enfermera.component';
import { ReservaServicioComponent } from './componentes/reserva-servicio/reserva-servicio.component';
import { ReservaTableComponent } from './componentes/reserva-table/reserva-table.component';
import { ReservaComponent } from './componentes/reserva/reserva.component';
import { ServicioCardComponent } from './componentes/servicio-card/servicio-card.component';
import { ServicioEditComponent } from './componentes/servicio-edit/servicio-edit.component';
import { ServicioFormComponent } from './componentes/servicio-form/servicio-form.component';
import { ServicioTableComponent } from './componentes/servicio-table/servicio-table.component';
import { VigilanteGuard } from './vigilante.guard';

const routes: Routes = [
  { path: '',redirectTo: 'inicio',pathMatch: 'full'},
  {path: 'inicio', component: InicioComponent},
  {path: 'clientes/card/:id', component: ClienteCardComponent, canActivate:[VigilanteGuard]},
  {path: 'clientes/edit/:id', component: ClienteEditComponent, canActivate:[VigilanteGuard]},
  {path: 'clientes/new', component: ClienteFormComponent, canActivate:[VigilanteGuard]},
  {path: 'clientes/table', component: ClienteTableComponent, canActivate:[VigilanteGuard]},
  {path: 'enfermeras/card/:id', component: EnfermeraCardComponent, canActivate:[VigilanteGuard]},
  {path: 'enfermeras/edit/:id', component: EnfermeraEditComponent, canActivate:[VigilanteGuard]},
  {path: 'enfermeras/new', component: EnfermeraFormComponent, canActivate:[VigilanteGuard]},
  {path: 'enfermeras/table', component: EnfermeraTableComponent, canActivate:[VigilanteGuard]},
  {path: 'reserva/table', component: ReservaTableComponent, canActivate:[VigilanteGuard]},
  {path: 'reserva/completado', component: ReservaComponent, canActivate:[VigilanteGuard]},
  {path: 'reserva/servicio', component: ReservaServicioComponent, canActivate:[VigilanteGuard]},
  {path: 'reserva/enfermera', component: ReservaEnfermeraComponent, canActivate:[VigilanteGuard]},
  {path: 'servicio/form', component: ServicioFormComponent, canActivate:[VigilanteGuard]},
  {path: 'servicio/edit/:id', component: ServicioEditComponent, canActivate:[VigilanteGuard]},
  {path: 'servicio/table', component: ServicioTableComponent, canActivate:[VigilanteGuard]},
  {path: 'servicio/card/:id', component: ServicioCardComponent, canActivate:[VigilanteGuard]},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent, canActivate:[VigilanteGuard]},
  {path: 'nosotros', component: NosotrosComponent},
  {path: 'contactanos', component: ContactanosComponent},
  {path: 'navegate', component: DashboardComponent, canActivate:[VigilanteGuard]},
  {path: 'map/:id', component: MapComponent, canActivate:[VigilanteGuard]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
