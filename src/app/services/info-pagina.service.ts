import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPagina } from '../interfaces/info-pagina.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info : InfoPagina = {};
  cargada = false;

  equipo : any [] = [];

  constructor(private http:HttpClient) {
      this.cargarInfo();
      this.cargarEquipo();
   }

   private cargarInfo(){
      //Leer el archivo JSON
        this.http.get('assets/data/data-pagina.json')
        .subscribe((resp:InfoPagina) => {
          this.cargada=true;
          this.info=resp;
        }); //para ejecutar el JSON
   }

   private cargarEquipo(){
       //Leer el archivo JSON
          this.http.get('https://angular-html-962e0-default-rtdb.firebaseio.com/equipo.json')
          .subscribe((resp:any)=> {
            this.cargada=true;
            this.equipo=resp;
          }); //para ejecutar el JSON
   }
}
