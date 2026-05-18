import { BaseComponent } from "../BaseComponent.js";

export class PromoBar extends BaseComponent {
  template() {
    const variant = this.getAttribute("variant") || "light";

    const styles = {
    light: "bg-gray-100 text-black",
    dark: "bg-gray-900 text-white",
    btn : variant === "light" ? "text-secondary-blue border-secondary-blue" : "text-secondary-orange border-secondary-orange"
  };
    return `
      <div class="${styles[variant]} relative h-[40px] flex items-center justify-center gap-[12px]">

        <div class="flex items-center gap-[12px]">
          <i class="fa-solid fa-ticket"></i>
          <p class="font-inter font-semibold text-[12px] lg:text-[14px] leading-[20px]">
            30% off storewide — Limited time!
          </p>
        </div>

        <!-- "Shop Now" link: hidden on mobile, visible on desktop -->
        <app-button variant="secondary" text-color="${styles.btn}" class="hidden lg:flex">
          Shop now <i class="fa-solid fa-arrow-right"></i>
        </app-button>

        <!-- Close button -->
        <button class="absolute right-[20px] top-1/2 -translate-y-1/2 w-[16px] h-[16px] flex items-center justify-center" id="promo-close">
          <i class="fa-solid fa-x text-gray-700 text-[10px]"></i>
        </button>
      </div>
    `;
  }

  bindEvents() {
    this.querySelector("#promo-close")?.addEventListener("click", () => {
      this.remove();
    });
  }
}

PromoBar.define("promo-bar");
