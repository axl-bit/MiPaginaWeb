import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './Components/profile/profile.component';
import { TypeproyectsComponent } from './Components/proyects/type-proyects/typeproyects/typeproyects.component';

const routes: Routes = [

  //creamos la ruta para la pagina de perfil o inicio
  {path: 'Home', component:ProfileComponent},
  {path: '', redirectTo: 'Home', pathMatch:'full'},

  {path: 'Type-Proyects', component:TypeproyectsComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
