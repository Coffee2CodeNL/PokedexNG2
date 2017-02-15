import { Injectable } from '@angular/core';
import {Pokemon} from '../models/pokeapi/Pokemon';
import {Http, Response} from '@angular/http';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import {Observable} from 'rxjs/observable';
import {PokemonForm} from '../models/pokeapi/PokemonForm';

@Injectable()
export class PokeAPIService {
  constructor(private http: Http) {}

  getPokemonData(pokemonName: string): Observable<Pokemon> {
    return this.http.get('http://localhost:8000/pokemon/' + pokemonName + '/')
      .map(response => response.json() as Pokemon)
      .catch(PokeAPIService.handleError);
  }

  getPokemonForm(url: string): Observable<PokemonForm> {
    return this.http.get(url)
      .map(response => response.json() as PokemonForm);
  }

  private static handleError(error: Response | any) {
    console.error('An error occurred', error); // for demo purposes only
    return Observable.throw(error.message || error);
  }
}
