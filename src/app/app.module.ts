import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

//rutas
import { APP_ROUTING } from './app.routes';

// servicios



//componentes
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';

import { HeroesComponent } from './components/heroes/heroes.component';
import { AboutComponent } from './components/about/about.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule,APP_ROUTING ],
  declarations: [ AppComponent, HelloComponent, NavbarComponent, HomeComponent, HeroesComponent, AboutComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
