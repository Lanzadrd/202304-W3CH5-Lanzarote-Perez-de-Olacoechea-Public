import { Component } from "./component";

export class Header extends Component {
  constructor(selector: string, public title: string) {
    super(selector);
    this.template = this.createTemplate();
    this.render();
    console.log(this.element);
  }

  createTemplate() {
    return `
    <header class="main-header">
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/2560px-International_Pok%C3%A9mon_logo.svg.png" width="400">
      <div class="buttons_container">
      <button id="back" class="button">ANTERIOR</button>
      <button id="next" class="button">SIGUIENTE</i></button>
      </div>
    </header>
    `;
  }
}
