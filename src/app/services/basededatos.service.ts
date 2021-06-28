import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IEnfermera } from '../interfaces/IEnfermera';
import { ICliente } from '../interfaces/ICliente';

@Injectable({
  providedIn: 'root'
})
export class BasededatosService {
  URI = 'http://localhost:4000';

  constructor(private http: HttpClient) { 
  }
   //------------------------CONECNTANDO CON BASE DE DATOS ENFERMERA------------------
  //OBTIENE TODA LA LISTA DE ENFERMERAS
  getEnfermeras(){
    return this.http.get(`${this.URI}/enfermera`);
  }
  //OBTIENE UNA ENFERMERA EN ESPESIFICO
  getEnfermera(id: string){
    return this.http.get<IEnfermera>(`${this.URI}/enfermera/${id}`);
  }
  //ELIMINA UNA ENFERMERA
  eliminarEmfermera(id: string){
    return this.http.delete(`${this.URI}/enfermera/${id}`);
  }
  //AGREGA UNA NUEVA ENFERMERA
  guardarEnfermera(nuevaEnfermera: IEnfermera){
    return this.http.post(`${this.URI}/enfermera`,nuevaEnfermera);
  }
  //ACTUALIZA UNA ENFERMERA
  updateEnfermera(id: string, actualizarEnfermera: IEnfermera){
    return this.http.put<IEnfermera>(`${this.URI}/enfermera/${id}`,actualizarEnfermera);
  }
  //------------------------CONECNTANDO CON BASE DE DATOS CLIENTE------------------
  getClientes(){
    return this.http.get(`${this.URI}/cliente`);
  }
  //OBTIENE UNA ENFERMERA EN ESPESIFICO
  getCliente(id: string){
    return this.http.get<ICliente>(`${this.URI}/cliente/${id}`);
  }
  //ELIMINA UNA ENFERMERA
  eliminarCliente(id: string){
    return this.http.delete(`${this.URI}/cliente/${id}`);
  }
  //AGREGA UNA NUEVA ENFERMERA
  guardarCliente(nuevoCliente: ICliente){
    return this.http.post(`${this.URI}/cliente`,nuevoCliente);
  }
  //ACTUALIZA UNA ENFERMERA
  updateCliente(id: string, actualizarCliente: ICliente){
    return this.http.put<ICliente>(`${this.URI}/cliente/${id}`,actualizarCliente);
  }

}
