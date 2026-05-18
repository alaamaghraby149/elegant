import { BaseComponent } from "../BaseComponent.js";
import "./promo-bar.js";
import "./mobile-menu.js";
export class MobileHeader extends BaseComponent {
  connectedCallback() {
    this.state = { menuOpen: false };
    super.connectedCallback();
  }

  template() {
    const variant = this.getAttribute("variant") || "light";
    const navBG =
      variant === "light"
        ? "bg-white"
        : "bg-secondary-orange";
    return `
      <header class="lg:hidden">

        <!-- Promo bar: shared between mobile and desktop -->
        <promo-bar variant="${variant}"></promo-bar>

        <nav class="relative py-[18px] px-[32px] ${navBG}">
          <div class="flex items-center justify-between">

            <!-- Left: burger + logo -->
            <div class="flex items-center gap-[4px]">
              <button class="w-[24px] h-[24px] cursor-pointer" id="burger-btn">
                <i class="fa-solid fa-bars"></i>
              </button>
              <a class="font-poppins font-medium text-[16px] leading-[24px]" href="#">3legant.</a>
            </div>

            <!-- Right: cart -->
            <div class="flex items-center gap-[4px]">
              <img class="cursor-pointer" src="/src/assets/images/shopping bag.png" alt="cart">
              <span class="text-white bg-black h-[20px] font-bold text-[12px] py-[5px] px-[6px] w-[20px] rounded-full flex items-center justify-center">2</span>
            </div>

          </div>
        </nav>

        <!-- Pass state DOWN via attribute -->
        <mobile-menu open="${this.state.menuOpen}"></mobile-menu>

      </header>
    `;
  }

  bindEvents() {
    // Open
    this.querySelector("#burger-btn")?.addEventListener("click", () => {
      this.setState({ menuOpen: true });
    });

    // Close — bubbles up from <mobile-menu>
    this.addEventListener("menu-close", () => {
      this.setState({ menuOpen: false });
    });
  }
}

MobileHeader.define("mobile-header");
