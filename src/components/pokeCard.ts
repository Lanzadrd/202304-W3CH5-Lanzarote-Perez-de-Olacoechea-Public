import { PokemonApi } from "../data/pokeapi";
import { Pokemon } from "../models/pokemon-type";
import { Component } from "./component";

export class Card extends Component {
  pokemon!: Pokemon[];
  repository: PokemonApi;

  constructor(selector: string) {
    super(selector);
    this.pokemon = [];
    this.repository = new PokemonApi();
    this.handleload();
    console.log(this.pokemon);
  }

  async handleload() {
    this.pokemon = await this.repository.getPokemons();
    this.template = this.createTemplate();
    this.render();
  }

  createTemplate() {
    const list = this.pokemon.results
      .map(
        (item: any) =>
          `<li class="pokemon">
            <span>${item.name.toUpperCase()}</span>
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${
              item.url.split("/")[6]
            }.gif "width="70">
            </li> `
      )
      .join(``);
    return ` <ul class="pokemon-list">${list}</ul>`;
  }
}
