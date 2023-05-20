export abstract class Component {
  template!: string;
  element!: Element;
  constructor(public selector: string) {
    this.selector = selector;
  }

  render(position: InsertPosition = "beforeend") {
    const parentElement = document.querySelector(this.selector);
    if (!parentElement) throw new Error("Invalid selector");
    parentElement.insertAdjacentHTML(position, this.template);
    this.element = parentElement.lastElementChild!;
    return this.element;
  }

  cleanHtml(selector: string) {
    this.element = document.querySelector(selector) as Element;
    this.element.outerHTML = "";
  }
}
