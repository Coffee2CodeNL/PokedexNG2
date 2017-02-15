import { Injectable } from '@angular/core';
import {Pokemon} from '../models/pokeapi/Pokemon';
import {Headers, Http, Response} from '@angular/http';

import 'rxjs/add/operator/toPromise';
import {Observable} from "rxjs";
import {ErrorObservable} from "rxjs/observable/ErrorObservable";
import {PokemonForm} from "../models/pokeapi/PokemonForm";
import {ObservableInput} from "rxjs/Observable";
/**
 * Created by resco on 30-1-2017.
 */
@Injectable()
export class PokeAPIService {
  constructor(private http: Http) {}

  getPokemonData(pokemonName: string): Observable<Pokemon> {
    return this.http.get('http://localhost:8000/pokemon/' + pokemonName + '/')
      .map(response => response.json() as Pokemon)
      .catch(this.handleError);
  }

  getPokemonForm(url: string): Observable<PokemonForm> {
    return this.http.get(url)
      .map(response => response.json() as PokemonForm);
  }

  private handleError(error: Response | any) {
    console.error('An error occurred', error); // for demo purposes only
    return Observable.throw(error.message || error);
  }
}
