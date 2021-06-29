import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ITable, PdfMakeWrapper, Table } from 'pdfmake-wrapper';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';
import { Subject } from 'rxjs';
import { ICliente } from 'src/app/interfaces/ICliente';
import { BasededatosService } from '../../services/basededatos.service';
PdfMakeWrapper.setFonts(pdfFonts);
type tableRow = [any,any,string, string , string, string, number,number];
@Component({
  selector: 'app-cliente-table',
  templateUrl: './cliente-table.component.html',
  styleUrls: ['./cliente-table.component.css']
})
export class ClienteTableComponent implements OnInit {

  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();
  listaClientes: any ;
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
     this.servicio.getClientes().subscribe(
      res => {
        console.log(res);
        this.listaClientes = res;
        this.dtTrigger.next();
      }, err => console.log(err)); 
  }
  imprimirLista(){
    const pdf = new PdfMakeWrapper();
    pdf.add('LISTA DE CLIENTES')
    pdf.add(this.createTable(this.listaClientes));
    pdf.create().open();
  }
   createTable(data: ICliente[]): ITable {
    return new Table([
      ['ID','user_id','nombre','CI','Telefono','Ubicacion','latitud','longitud'],
      ...this.extraerDatos(data)
    ]).end;
  }
   extraerDatos(data: ICliente[]): tableRow[] {
    return data.map(row => [row.id,row.user_id,row.nombre,row.ci_cliente,row.telefono,row.ubicacion,row.latitud,row.longitud]);
  }  
  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }
  clienteCard(id: any){
    this.ruta.navigate(['clientes/card/',id])
  }
  irAlForm(){
    this.ruta.navigate(['clientes/new'])
  }

}


