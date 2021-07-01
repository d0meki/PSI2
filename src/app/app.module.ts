import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { DataTablesModule } from "angular-datatables";
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CookieService } from 'ngx-cookie-service';
//////////COMPONENTES
import { AppComponent } from './app.component';
import { MapComponent } from './componentes/map/map.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { EnfermeraCardComponent } from './componentes/enfermera-card/enfermera-card.component';
import { EnfermeraFormComponent } from './componentes/enfermera-form/enfermera-form.component';
import { EnfermeraEditComponent } from './componentes/enfermera-edit/enfermera-edit.component';
import { EnfermeraTableComponent } from './componentes/enfermera-table/enfermera-table.component';
import { ClienteCardComponent } from './componentes/cliente-card/cliente-card.component';
import { ClienteFormComponent } from './componentes/cliente-form/cliente-form.component';
import { ClienteTableComponent } from './componentes/cliente-table/cliente-table.component';
import { ClienteEditComponent } from './componentes/cliente-edit/cliente-edit.component';
import { ReservaTableComponent } from './componentes/reserva-table/reserva-table.component';
import { ReservaComponent } from './componentes/reserva/reserva.component';
import { ReservaServicioComponent } from './componentes/reserva-servicio/reserva-servicio.component';
import { ReservaEnfermeraComponent } from './componentes/reserva-enfermera/reserva-enfermera.component';
import { LoginComponent } from './componentes/login/login.component';
import { RegisterComponent } from './componentes/register/register.component';
import { DashboardComponent } from './componentes/dashboard/dashboard.component';
import { ServicioTableComponent } from './componentes/servicio-table/servicio-table.component';
import { ServicioCardComponent } from './componentes/servicio-card/servicio-card.component';
import { ServicioEditComponent } from './componentes/servicio-edit/servicio-edit.component';
import { ServicioFormComponent } from './componentes/servicio-form/servicio-form.component';
import { NosotrosComponent } from './componentes/nosotros/nosotros.component';
import { ContactanosComponent } from './componentes/contactanos/contactanos.component';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    NavbarComponent,
    InicioComponent,
    EnfermeraCardComponent,
    EnfermeraFormComponent,
    EnfermeraEditComponent,
    EnfermeraTableComponent,
    ClienteCardComponent,
    ClienteFormComponent,
    ClienteTableComponent,
    ClienteEditComponent,
    ReservaTableComponent,
    ReservaComponent,
    ReservaServicioComponent,
    ReservaEnfermeraComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    ServicioTableComponent,
    ServicioCardComponent,
    ServicioEditComponent,
    ServicioFormComponent,
    NosotrosComponent,
    ContactanosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    DataTablesModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
