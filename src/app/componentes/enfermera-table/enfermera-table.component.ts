import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { BasededatosService } from '../../services/basededatos.service';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';
import {ITable, PdfMakeWrapper, Table} from 'pdfmake-wrapper';
import { IEnfermera } from '../../interfaces/IEnfermera';
import { Router } from '@angular/router';
PdfMakeWrapper.setFonts(pdfFonts);
type tableRow = [any,any,string, string , string, string, number];
@Component({
  selector: 'app-enfermera-table',
  templateUrl: './enfermera-table.component.html',
  styleUrls: ['./enfermera-table.component.css']
})
export class EnfermeraTableComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();
  listaEnfermeras: any ;
  constructor(private servicio: BasededatosService,
              private ruta: Router) { }

  ngOnInit( ): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      language: {
        url: '//cdn.datatables.net/plug-ins/1.10.25/i18n/Spanish.json'
      }
    };
     this.servicio.getEnfermeras().subscribe(
      res => {
        console.log(res);
        this.listaEnfermeras = res;
        this.dtTrigger.next();
      }, err => console.log(err));
  }
  imprimirLista(){
    const pdf = new PdfMakeWrapper();
    /* pdf.add('hola mundo');
    pdf.create().download(); */
    pdf.add('LISTA DE ENFERMERAS')
    pdf.add(this.createTable(this.listaEnfermeras));
    pdf.create().open();
  }
   createTable(data: IEnfermera[]): ITable {
     //console.log(data);
    return new Table([
      ['ID','user_id','nombre','CI','Telefono','Direccion','Sueldo'],
      ...this.extraerDatos(data)
    ]).end;
  }
   extraerDatos(data: IEnfermera[]): tableRow[] {
    return data.map(row => [row.id,row.user_id,row.nombre,row.ci_enfermera,row.telefono,row.direccion,row.sueldo]);
  }  
  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }
  enfermeraCard(id: any){
    this.ruta.navigate(['enfermeras/card/',id])
  }
  irAlForm(){
    this.ruta.navigate(['enfermeras/new'])
  }
  irAlNav(){
    this.ruta.navigate(['navegate'])
  }
}


