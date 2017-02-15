import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';

import 'rxjs/add/operator/switchMap';
import {PokeAPIService} from '../services/pokeapi.service';
import {Pokemon} from '../models/pokeapi/Pokemon';
import {NamedAPIResource} from "../models/pokeapi/NamedAPIResource";
import {PokemonForm} from "../models/pokeapi/PokemonForm";

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.scss']
})
export class PokemonDetailComponent implements OnInit {
  private pokemon: Pokemon;
  private errorMessage: string;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private pokeApi: PokeAPIService) {
  }

  public ngOnInit() {
    console.info('Loading pokemon data...');
    this.route.params
      .switchMap((params: Params) => this.pokeApi.getPokemonData(params['name']))
      .subscribe(pokemon => {
        this.pokemon = pokemon;
        for (let _form of this.pokemon.forms) {
          let index = this.pokemon.forms.indexOf(_form);
          this.pokeApi.getPokemonForm(_form.url.replace('http://pokeapi.co/api/v2/', 'http://localhost:8000/')).subscribe(form => {
            this.pokemon.forms[index] = form;
            console.info('Got a new form for ' + this.pokemon.name + ' at slot ' + index, this.pokemon.forms[index]);
          });
        }
      }, error => this.errorMessage = error);
  }
}
