import { BaseComponent } from "../BaseComponent.js";
import "/src/js/components/ShopNow.js"
export class PromoBar extends BaseComponent {
  template() {
    return `
      <div class="bg-gray-100 relative h-[40px] flex items-center justify-center gap-[12px]">

        <div class="flex items-center gap-[12px]">
          <img class="w-[16px] h-[16px]" src="./src/assets/images/ticket-percent.svg" alt="">
          <p class="font-inter font-semibold text-[12px] lg:text-[14px] leading-[20px]">
            30% off storewide — Limited time!
          </p>
        </div>

        <!-- "Shop Now" link: hidden on mobile, visible on desktop -->
        <app-shop text-content="Shop now" border-color="border-secondary-blue" text-color="text-secondary-blue" class="hidden lg:flex"></app-shop>

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
