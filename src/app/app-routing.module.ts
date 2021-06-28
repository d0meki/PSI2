import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClienteCardComponent } from './componentes/cliente-card/cliente-card.component';
import { ClienteEditComponent } from './componentes/cliente-edit/cliente-edit.component';
import { ClienteFormComponent } from './componentes/cliente-form/cliente-form.component';
import { ClienteTableComponent } from './componentes/cliente-table/cliente-table.component';
import { EnfermeraCardComponent } from './componentes/enfermera-card/enfermera-card.component';
import { EnfermeraEditComponent } from './componentes/enfermera-edit/enfermera-edit.component';
import { EnfermeraFormComponent } from './componentes/enfermera-form/enfermera-form.component';
import { EnfermeraTableComponent } from './componentes/enfermera-table/enfermera-table.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { MapComponent } from './componentes/map/map.component';

const routes: Routes = [
  {path: '', component: InicioComponent},
  {path: 'clientes/card/:id', component: ClienteCardComponent},
  {path: 'clientes/edit/:id', component: ClienteEditComponent},
  {path: 'clientes/new', component: ClienteFormComponent},
  {path: 'clientes/table', component: ClienteTableComponent},
  {path: 'enfermeras/card/:id', component: EnfermeraCardComponent},
  {path: 'enfermeras/edit/:id', component: EnfermeraEditComponent},
  {path: 'enfermeras/new', component: EnfermeraFormComponent},
  {path: 'enfermeras/table', component: EnfermeraTableComponent},
  {path: 'map/:id', component: MapComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
