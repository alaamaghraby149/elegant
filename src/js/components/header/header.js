import { BaseComponent } from "../BaseComponent.js";
import "./desktop-header.js";
import "./mobile-header.js";

export class Header extends BaseComponent {
  template() {
    return `
      <desktop-header></desktop-header>
      <mobile-header></mobile-header>
    `;
  }
}

Header.define("app-header");
