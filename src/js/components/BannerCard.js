import { BaseComponent } from "./BaseComponent.js";
import "./CardTitle.js";

export class BannerCard extends BaseComponent {
  template() {
    const src = this.getAttribute("src") || "";
    const title = this.getAttribute("title") || "";
    const variant = this.getAttribute("variant") || "living";

    const positions = {
      living: "top-[32px] left-[32px] lg:top-[48px] lg:left-[48px]",
      bedroom: "top-[82px] left-[32px] lg:top-[201px] lg:left-[32px]",
      kitchen: "top-[82px] left-[32px] lg:top-[201px] lg:left-[32px]",
    };

    return `
      <div class="banner-card relative w-full h-full">
        <img class="w-full h-full object-cover" src="${src}" alt="${title}">

        <app-title
          class="absolute ${positions[variant]}"
          title="${title}">
        </app-title>
      </div>
    `;
  }

  styles() {
    return `
      :host {
        display: block;
        height: 100%;
      }
    `;
  }
}

BannerCard.define("app-card");