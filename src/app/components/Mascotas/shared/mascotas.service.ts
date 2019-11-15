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

  public addMascota(mascota: Mascota){
      return this.httpClient.post<Mascota>(`${this.baseUrl}`,mascota);
    }
    
  public getMascota(id:number){
      return this.httpClient.get<Mascota>(`${this.baseUrl}/${id}`);
    } 
  constructor(private httpClient: HttpClient) { } 

  public updateMascota (mascota: Mascota){
    return this.httpClient.put<Mascota>(`${this.baseUrl}`,mascota);
  }
  public deleteMascota(id:number){
    return this.httpClient.delete<Mascota>(`${this.baseUrl}/${id}`);
  } 
}
