import {
  Component, OnInit, AfterViewInit,
  Input,
  trigger,
  state,
  style,
  transition,
  animate
} from '@angular/core';
import {PokeAPIService} from './services/pokeapi.service';
import {Pokemon} from './models/pokeapi/Pokemon';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: []
})

export class AppComponent implements OnInit, AfterViewInit {
  pokemon: Pokemon;
  errorMessage: string;

  constructor(private pokeApi: PokeAPIService) {
  }

  ngOnInit(): void {
    this.pokeApi.getPokemon().then(
      pokemon => this.pokemon = pokemon,
      error   => this.errorMessage = <any>error
    );
  }

  ngAfterViewInit(): void {

  }
}
