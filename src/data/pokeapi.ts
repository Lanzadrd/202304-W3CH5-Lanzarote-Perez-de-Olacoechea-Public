export class PokemonApi {
  url: string;
  constructor() {
    this.url = "https://rickandmortyapi.com/api/character";
  }

  async getPokemons() {
    let response = await fetch(this.url);
    return response.json();
  }
}
