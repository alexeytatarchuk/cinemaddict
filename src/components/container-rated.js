import {createElement} from "../utils";

export default class ContainerRated {
  constructor() {
    this._element = null;
  }
  getTemplate() {
    return `
      <section class="films-list--extra">
        <h2 class="films-list__title">Top rated</h2>
        <div class="films-list__container"></div>
      </section>`;
  }
  getElement() {
    if (!this._element) {
      this._element = createElement(this.getTemplate());
    }
    return this._element;
  }
  removeElement() {
    this._element = null;
  }
}