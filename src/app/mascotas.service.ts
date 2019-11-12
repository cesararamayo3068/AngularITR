import { Mascota } from './mascota';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class MascotasService {  
  baseUrl:string="http://localhost:8090/mascotas";
  
  public getMascotas(){
    return this.httpClient.get<Array<Mascota>>(`${this.baseUrl}`);
    
    }

  constructor(private httpClient: HttpClient) { } 

}
