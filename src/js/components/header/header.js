import "./desktop-header.js";
import "./mobile-header.js";
class Header extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <desktop-header></desktop-header>
      <mobile-header></mobile-header>
    `;
  }
}

customElements.define("app-header", Header);