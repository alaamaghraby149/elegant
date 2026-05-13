import { BaseComponent } from "../BaseComponent.js";
import "/src/js/components/button.js";
import "/src/js/components/social-icons.js";

/**
 * MobileMenu — controlled component (presentational only).
 *
 * OWNS NO STATE.
 * - Reads `open` attribute from parent (MobileHeader).
 * - Fires `menu-close` event upward when user clicks X.
 * - Parent is the single source of truth for open/close.
 *
 * Usage:
 *   <mobile-menu open="true"></mobile-menu>
 */
export class MobileMenu extends BaseComponent {
  static get observedAttributes() {
    return ["open"];
  }

  attributeChangedCallback() {
    if (this.isConnected) {
      this.render();
      this.bindEvents();
    }
  }

  get isOpen() {
    return this.getAttribute("open") === "true";
  }

  template() {
    const translate = this.isOpen ? "translate-x-0" : "-translate-x-full";

    return `
      <div class="fly-list  ${translate} transition-transform duration-300 ease-in-out fixed top-0 left-0 z-[100] w-[85%] h-screen bg-white pt-[24px] flex flex-col shadow-xl">

        <!-- Header row: logo + close -->
        <div class="flex justify-between px-[24px]">
          <a class="font-poppins font-medium text-[16px] leading-[24px]" href="#">3legant.</a>
          <button class="w-[16px] h-[16px] flex items-center justify-center" id="menu-close">
            <i class="fa-solid fa-x text-gray-700 text-[10px]"></i>
          </button>
        </div>

        <!-- Search -->
        <div class="mx-[24px] my-[16px] py-[11px] px-[16px] flex items-center gap-[8px] border border-gray-500 rounded-[6px]">
          <img class="w-[16px] h-[16px]" src="/src/assets/images/search 02.png" alt="">
          <input class="text-[14px] font-inter outline-none leading-[22px] w-full" type="text" placeholder="Search">
        </div>

        <!-- Nav links -->
        <ul class="flex flex-col gap-[16px] px-[24px]">
          <li class="pb-[8px] border-b border-gray-200"><a href="#">Home</a></li>
          <li class="pb-[8px] border-b border-gray-200 flex justify-between">
            <a href="#">Shop</a>
            <i class="fa-solid fa-angle-down cursor-pointer"></i>
          </li>
          <li class="pb-[8px] border-b border-gray-200 flex justify-between">
            <a href="#">Product</a>
            <i class="fa-solid fa-angle-down cursor-pointer"></i>
          </li>
          <li class="pb-[8px] border-b border-gray-200"><a href="#">Contact us</a></li>
        </ul>

        <!-- Bottom section -->
        <div class="mt-auto mb-[24px] px-[24px]">
          <ul class="flex flex-col gap-[8px] mb-[16px]">
            <li class="flex justify-between items-center border-b border-gray-200 pb-[8px] h-[40px]">
              <a class="text-gray-500 text-[18px] font-medium font-inter" href="#">Cart</a>
              <div class="flex items-center gap-[5px]">
                <img src="/src/assets/images/shopping bag.png" alt="">
                <span class="text-white bg-black h-[20px] font-bold text-[12px] py-[5px] px-[6px] w-[20px] rounded-full flex items-center justify-center">2</span>
              </div>
            </li>
            <li class="flex justify-between items-center border-b border-gray-200 pb-[8px] h-[40px]">
              <a class="text-gray-500 text-[18px] font-medium font-inter" href="#">Wishlist</a>
              <div class="flex items-center gap-[5px]">
                <img src="/src/assets/images/line.png" alt="">
                <span class="text-white bg-black h-[20px] font-bold text-[12px] py-[5px] px-[6px] w-[20px] rounded-full flex items-center justify-center">2</span>
              </div>
            </li>
          </ul>
          <app-button></app-button>
          <!-- Social icons -->
          <social-icons></social-icons>
        </div>
      </div>
    `;
  }

  bindEvents() {
    this.querySelector("#menu-close")?.addEventListener("click", () => {
      this.dispatchEvent(new CustomEvent("menu-close", { bubbles: true }));
    });
  }
}

MobileMenu.define("mobile-menu");