import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { MascotasListarComponent } from './components/Mascotas/mascotas-listar/mascotas-listar.component';
import { MascotasAgregarComponent } from './components/Mascotas/mascotas-agregar/mascotas-agregar.component';
import { MascotasEditarComponent } from './components/Mascotas/mascotas-editar/mascotas-editar.component';
import { MascotasAdoptarComponent } from './components/mascotas/mascotas-adoptar/mascotas-adoptar.component';
import { MascotasCardComponent } from './components/mascotas/mascotas-card/mascotas-card.component';



const routes: Routes = [
  { path: 'inicio', component: InicioComponent},
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },
  { path: 'mascotas-listar', component: MascotasListarComponent},
  { path: 'mascotas-agregar', component: MascotasAgregarComponent},
  { path: 'mascotas-editar/:id', component: MascotasEditarComponent},
  { path: 'mascotas-adoptar', component: MascotasAdoptarComponent},
  { path: 'mascota-card', component: MascotasCardComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
