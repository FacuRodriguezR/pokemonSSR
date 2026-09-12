import { ApplicationRef, ChangeDetectionStrategy, Component, inject, OnInit, signal } from '@angular/core';
import { PokemonList } from "../../pokemons/components/pokemon-list/pokemon-list";
import { PokemonListSkeleton } from "./ui/pokemon-list-skeleton/pokemon-list-skeleton";
import { PokemonsServices } from '../../pokemons/services/pokemons.service';
import { SimplePokemon } from '../../pokemons/interfaces';

@Component({
  selector: 'pokemons-page',
  imports: [PokemonList, PokemonListSkeleton],
  templateUrl: './pokemons-page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class PokemonsPage implements OnInit {

  public isLoading = signal(true)
  private pokemonService = inject(PokemonsServices);

  public pokemons = signal<SimplePokemon[]>([]);


  private appRef = inject(ApplicationRef);

  private $isStable = this.appRef.isStable.subscribe((isStable) => {
    if (isStable) {
      console.log('Application is stable');
    }
  });

  ngOnInit() {
    setTimeout(() => {
      this.isLoading.set(false);
    }, 5000);

    this.loadPokemons();

  }

  public loadPokemons(page = 0) {
    this.pokemonService.loadPage(page).subscribe((pokemons) => {
      this.pokemons.set(pokemons);
    });
  }

  ngOnDestroy() {
    this.$isStable.unsubscribe();
  }
}
