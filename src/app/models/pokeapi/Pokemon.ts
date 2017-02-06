import {PokemonAbility} from './PokemonAbility';
import {NamedAPIResource} from './NamedAPIResource';
import {VersionGameIndex} from './VersionGameIndex';
import {PokemonHeldItem} from './PokemonHeldItem';
import {PokemonMove} from './PokemonMove';
import {PokemonSprites} from './PokemonSprites';
import {PokemonStat} from './PokemonStat';
import {PokemonType} from './PokemonType';
/**
 * Created by resco on 30-1-2017.
 */
export class Pokemon {
  id: number;
  name: string;
  base_experience: number;
  height: number;
  is_default: boolean;
  order: number;
  weight: number;
  abilities: PokemonAbility[];
  forms: NamedAPIResource[];
  game_indices: VersionGameIndex[];
  held_items: PokemonHeldItem[];
  location_area_encounters: string;
  moves: PokemonMove[];
  sprites: PokemonSprites;
  species: NamedAPIResource;
  stats: PokemonStat[];
  types: PokemonType[];
}
