import { Injectable } from '@angular/core';
import {Pokemon} from '../models/pokeapi/Pokemon';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';
/**
 * Created by resco on 30-1-2017.
 */
@Injectable()
export class PokeAPIService {
  private pokeAPIUrl = 'pokemon/15';
  constructor(private http: Http) {}

  getPokemon(): Promise<Pokemon> {
    return this.http.get('http://localhost:8000/' + this.pokeAPIUrl + '/')
      .toPromise()
      .then(response => response.json() as Pokemon)
      .catch(this.handleError);
  }
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
