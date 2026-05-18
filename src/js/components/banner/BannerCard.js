import { BaseComponent } from "/src/js/components/BaseComponent.js";

export class BannerCard extends BaseComponent {
  template() {
    const textContent = this.getAttribute("text-content") || ""
    const src = this.getAttribute("src") || "";
    const title = this.getAttribute("title") || "";
    const variant = this.getAttribute("variant") || "living";

    const positions = {
      living: "top-[32px] left-[32px] lg:top-[48px] lg:left-[48px]",
      bedroom: "top-[82px] left-[32px] lg:top-[190px] lg:left-[32px]",
      kitchen: "top-[82px] left-[32px] lg:top-[190px] lg:left-[32px]",
    };

    return `
      <div class="banner-card relative w-full h-full">
        <img class="w-full h-full object-cover" src="${src}" alt="${title}">

        <div class ="absolute flex flex-col gap-[12px] ${positions[variant]}">
              <h5 class="text-[28px] lg:text-[34px] leading-[38px] tracking-[-0.6px] font-medium ">${textContent}</h5>
              <app-button variant="secondary" extra-classes="border-black">
                Shop now <i class="fa-solid fa-arrow-right"></i>
              </app-button>
            </div>
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

BannerCard.define("banner-card");