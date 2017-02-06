import {NamedAPIResource} from './NamedAPIResource';
import {PokemonMoveVersion} from "./PokemonMoveVersion";
/**
 * Created by resco on 30-1-2017.
 */
export class PokemonMove {
  move: NamedAPIResource;
  version_group_details: PokemonMoveVersion[];
}
