import { BaseComponent } from "../BaseComponent.js";
import "./desktop-header.js";
import "./mobile-header.js";

export class Header extends BaseComponent {
  template() {
    const variant = this.getAttribute("variant") || "light";
    const navBG =
      variant === "light"
        ? "bg-white"
        : "bg-secondary-orange";
    return `
      <desktop-header variant="${variant}" ></desktop-header>
      <mobile-header variant="${variant}"></mobile-header>
    `;
  }
}

Header.define("app-header");
