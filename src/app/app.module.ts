import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { DataTablesModule } from "angular-datatables";
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
    ClienteEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    DataTablesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }