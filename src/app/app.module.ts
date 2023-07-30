import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { NavBarComponent } from './Components/nav-bar/nav-bar.component';
import { ProfileComponent } from './Components/profile/profile.component';
import { FooterComponent } from './Components/footer/footer.component';
import { TypeproyectsComponent } from './Components/proyects/type-proyects/typeproyects/typeproyects.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ProfileComponent,
    FooterComponent,
    TypeproyectsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
