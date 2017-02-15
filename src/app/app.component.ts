import {
  Component, OnInit, AfterViewInit,
  Input,
  trigger,
  state,
  style,
  transition,
  animate
} from '@angular/core';
import { FaDirective } from 'angular2-fontawesome/src/fa.directive';
import {PokeAPIService} from './services/pokeapi.service';
import {Pokemon} from './models/pokeapi/Pokemon';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['app.component.scss'],
  animations: []
})

export class AppComponent implements OnInit, AfterViewInit {
  ngOnInit(): void {
  }


  ngAfterViewInit(): void {

  }
}
