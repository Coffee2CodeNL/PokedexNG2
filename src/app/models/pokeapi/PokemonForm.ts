import { NamedAPIResource } from './NamedAPIResource';
import { PokemonName } from './PokemonName';
/**
 * Created by resco on 15-2-2017.
 */
export class PokemonForm {
  id: number;
  name: string;
  order: number;
  form_order: number;
  is_default: boolean;
  is_battle_only: boolean;
  is_mega: boolean;
  form_name: string;
  pokemon: NamedAPIResource;
  sprites: string;
  version_group: NamedAPIResource;
  names: PokemonName[];
  form_names: PokemonName[];
}
