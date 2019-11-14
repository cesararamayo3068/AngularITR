import { Component, OnInit } from '@angular/core';
import { MascotasService } from 'src/app/components/Mascotas/shared/mascotas.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-mascotas-editar',
  templateUrl: './mascotas-editar.component.html',
  styleUrls: ['./mascotas-editar.component.css']
})
export class MascotasEditarComponent implements OnInit {

  public mascotaForm: FormGroup;

  constructor(private mascotasService: MascotasService,private route:ActivatedRoute,private router:Router) {
    this.mascotaForm = new FormGroup({
      id: new FormControl (''),
      nombre: new FormControl('',[ Validators.required,Validators.pattern('[a-zA-Z ]*')]) ,   
      tipo: new FormControl('',[ Validators.required,Validators.pattern('[a-zA-Z ]*')]) ,   
      edad: new FormControl('',[ Validators.required,Validators.pattern("^[0-9]$|^[0-9][0-9]$|^[0-9][0-9][0-9]$"), Validators.max(120),Validators.min(1)]) ,  
      descripcion: new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z ]*')])  
    })   
   }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');

    this.mascotasService.getMascota(parseInt(id)).subscribe((data)=>{this.mascotaForm.setValue(data);});
    }
  
  cancelar($event){
    event.preventDefault();
    this.router.navigate(['/mascotas-listar']);
  
  }
  handleSubmit(){
    this.mascotasService.updateMascota(this.mascotaForm.value).subscribe(data => {
      this.router.navigate(['/mascotas-listar']);
});
  }
}
