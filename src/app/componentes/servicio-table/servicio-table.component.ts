import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ITable, PdfMakeWrapper, Table } from 'pdfmake-wrapper';
import { Subject } from 'rxjs';
import { IServicio } from 'src/app/interfaces/Iservicio';
import { BasededatosService } from 'src/app/services/basededatos.service';
type tableRow = [any,string,string,number];
@Component({
  selector: 'app-servicio-table',
  templateUrl: './servicio-table.component.html',
  styleUrls: ['./servicio-table.component.css']
})
export class ServicioTableComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();
  listaServicios: any ;
  constructor(private servicio: BasededatosService, 
    private ruta: Router,
    private toastr: ToastrService) { }

ngOnInit(): void {
this.dtOptions = {
pagingType: 'full_numbers',
pageLength: 5,
language: {
url: '//cdn.datatables.net/plug-ins/1.10.25/i18n/Spanish.json'
}
};
this.servicio.getServicio().subscribe(
res => {
console.log(res);
this.listaServicios = res;
this.dtTrigger.next();
}, err => console.log(err)); 
}
imprimirLista(){
const pdf = new PdfMakeWrapper();
pdf.add('LISTA DE SERVICIOS')
pdf.add(this.createTable(this.listaServicios));
pdf.create().open();
}
createTable(data: IServicio[]): ITable {
return new Table([
['ID','nombre','Descriocion','precio'],
...this.extraerDatos(data)
]).end;
}
extraerDatos(data: IServicio[]): tableRow[] {
return data.map(row => [row.id,row.nombre,row.descripcio,row.precio]);
}  
ngOnDestroy(): void {
this.dtTrigger.unsubscribe();
}
servicioCard(id: any){
this.ruta.navigate(['servicio/card/',id])
}
irAlForm(){
this.ruta.navigate(['servicio/form'])
}
irAlNav(){
this.ruta.navigate(['navegate'])
}
}
