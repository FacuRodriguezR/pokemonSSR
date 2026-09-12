import { ChangeDetectionStrategy, Component, effect, input, signal } from '@angular/core';
import { SimplePokemon } from '../../interfaces';

@Component({
  selector: 'pokemon-card',
  imports: [],
  templateUrl: './pokemon-card.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PokemonCard {

  public pokemon = input.required<SimplePokemon>();

  logEffect = effect(() => {
    console.log('PokemonCard effect', this.pokemon());
  });

}
