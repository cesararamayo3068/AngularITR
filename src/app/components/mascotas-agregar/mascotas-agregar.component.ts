import { Component, OnInit } from '@angular/core';
import {  Validators, FormGroup, FormControl } from '@angular/forms';
import { MascotasService } from 'src/app/mascotas.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mascotas-agregar',
  templateUrl: './mascotas-agregar.component.html',
  styleUrls: ['./mascotas-agregar.component.css']
})
export class MascotasAgregarComponent implements OnInit {
  public mascotaForm: FormGroup;

  constructor(private mascotasService: MascotasService,private router:Router) {
    this.mascotaForm = new FormGroup({
      nombre: new FormControl('',[ Validators.required,Validators.pattern('[a-zA-Z ]*')]) ,   
      tipo: new FormControl('',[ Validators.required,Validators.pattern('[a-zA-Z ]*')]) ,   
      edad: new FormControl('',[ Validators.required,Validators.pattern("^[0-9]$|^[0-9][0-9]$|^[0-9][0-9][0-9]$"), Validators.max(120),Validators.min(1)]) ,  
      descripcion: new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z ]*')])  
    })   
  }


  ngOnInit() {}

  handleSubmit(){
    this.mascotasService.addMascota(this.mascotaForm.value).subscribe(data => {
      this.router.navigate(['/mascotas-listar']);
});
;
 
  }
  
  cancelar($event){
    event.preventDefault();
    this.router.navigate(['/mascotas-listar']);
  
  }
  limpiar($event){
    event.preventDefault();
    this.mascotaForm.reset();

  }
}
