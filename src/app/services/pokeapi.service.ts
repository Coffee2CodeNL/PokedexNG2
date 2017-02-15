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
  private pokeAPIUrl = 'pokemon/15';
  private response: Pokemon;
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
  private parseData(res: Response) {
    let data = res.json();
    for (const forms of data.forms) {
      console.debug('Getting form', forms);
      let index = data.forms.indexOf(forms);
      data.forms.splice(index, 1);
      this.http.get(forms.url.replace('http://pokeapi.co/api/v2/', 'http://localhost:8000/'))
        .map(response => data.forms.push(response.json() as PokemonForm))
        .catch(this.handleError);
    }
    console.debug('Form list', data.forms);
    return data as Pokemon;
  }
  private handleError(error: Response | any) {
    console.error('An error occurred', error); // for demo purposes only
    return Observable.throw(error.message || error);
  }
}
