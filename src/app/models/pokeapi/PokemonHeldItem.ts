import {NamedAPIResource} from './NamedAPIResource';
import {PokemonHeldItemVersion} from './PokemonHeldItemVersion';
/**
 * Created by resco on 30-1-2017.
 */
export class PokemonHeldItem {
  item: NamedAPIResource;
  version_details: PokemonHeldItemVersion[];
}
