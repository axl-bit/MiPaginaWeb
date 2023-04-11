import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './Components/profile/profile.component';

const routes: Routes = [

  //creamos la ruta para la pagina de perfil o inicio
  {path: 'Inicio', component:ProfileComponent},
  {path: '', redirectTo: 'Inicio', pathMatch:'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
