export class PokemonApi {
  url: string;
  constructor() {
    this.url = "https://pokeapi.co/api/v2/pokemon/";
  }

  async getPokemons() {
    let response = await fetch(this.url);
    return response.json();
  }
}
