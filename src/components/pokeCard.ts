import { PokemonApi } from "../data/pokeapi";
import { Pokemon } from "../models/pokemon-type";
import { Component } from "./component";

export class Card extends Component {
  pokemon!: Pokemon[];
  repository: PokemonApi;

  constructor(selector: string) {
    super(selector);
    this.pokemon = [];
    this.repository = new PokemonApi(); // pokemon.json
    this.handleload();
    console.log(this.pokemon);
  }

  handleload = async () => {
    this.pokemon = await this.repository.getPokemons();
    this.template = this.createTemplate();
    this.render();
    const button = document.querySelectorAll(".button")!;
    button.forEach((element) => {
      element.addEventListener("click", this.handleClick);
    });
  };

  handleClick = async (element: { srcElement: { id: string } }) => {
    let nextFetch;
    if (element.srcElement.id === "next") {
      nextFetch = await fetch(`${this.pokemon.info.next}`);
    }
    if (element.srcElement.id === "back") {
      nextFetch = await fetch(`${this.pokemon.info.prev}`);
    }
    this.pokemon = await nextFetch.json();
    this.template = this.createTemplate();
    this.cleanHtml(".pokemon-list");
    this.render();
  };
  createTemplate() {
    console.log(this.pokemon);
    const list = this.pokemon.results
      .map(
        (item: any) =>
          `<li class="pokemon">
          <span> ${item.id} </span>
            <span> ${item.name.toUpperCase()}</span>
            <img src=${item.image} height="90">
            </li> `
      )
      .join(``);
    return `
     <ul class="pokemon-list">${list}</ul>`;
  }
}
