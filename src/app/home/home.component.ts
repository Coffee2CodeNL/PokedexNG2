import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../models/pokeapi/Pokemon';
import { PokeAPIService } from '../services/pokeapi.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  router: Router;
  pokemon: Pokemon;
  errorMessage: string;

  constructor(private pokeApi: PokeAPIService, router: Router) {
    this.router = router;
  }
  onSearch(value: string) {
    this.router.navigate(['/pokemon', value])

  }
  ngOnInit(): void {
  }

}
