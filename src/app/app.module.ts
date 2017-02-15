import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import {PokeAPIService} from './services/pokeapi.service';
import {CapitalizePipe} from './capitalize.pipe';
import { Angular2FontawesomeModule } from 'angular2-fontawesome/angular2-fontawesome';
import { PokemonDetailComponent } from './pokemon-detail/pokemon-detail.component';
import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [
  {
    path: 'pokemon/:name',
    component: PokemonDetailComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];
@NgModule({
  declarations: [
    AppComponent,
    CapitalizePipe,
    PokemonDetailComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    FormsModule,
    HttpModule,
    NgbModule.forRoot(),
    Angular2FontawesomeModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [PokeAPIService],
  bootstrap: [AppComponent],
})
export class AppModule { }
