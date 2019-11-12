import { Component, OnInit } from '@angular/core';
import { MascotasService } from '../mascotas.service';
import { Mascota } from '../mascota';


@Component({
  selector: 'app-mascotas-listar',
  templateUrl: './mascotas-listar.component.html',
  styleUrls: ['./mascotas-listar.component.css']
})
export class MascotasListarComponent implements OnInit {

  public mascotas:Array<Mascota> = [];

  constructor(private mascotasService: MascotasService) { }

  
ngOnInit() {
  this.mascotasService.getMascotas().subscribe((data)=>{
    this.mascotas = data;
  })
}


}
