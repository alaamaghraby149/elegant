import "./desktop-swiper.js";
import "./mobile-swiper.js";
import "./desktop-hero-content.js";
import "./mobile-hero-content.js";
class Hero extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <desktop-swiper></desktop-swiper>
      <mobile-swiper></mobile-swiper>
      <desktop-hero-content></desktop-hero-content>
      <mobile-hero-content></mobile-hero-content>
    `;
  }
}

customElements.define("app-hero", Hero);