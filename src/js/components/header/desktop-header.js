import { BaseComponent } from "../BaseComponent.js";
import "./promo-bar.js";

export class DesktopHeader extends BaseComponent {
  template() {
    const variant = this.getAttribute("variant") || "light";
    const navBG =
      variant === "light"
        ? "bg-white"
        : "bg-secondary-orange";
    return `
      <header class="hidden lg:block">

        <promo-bar variant="${variant}"></promo-bar>

        <nav  class="py-[16px] ${navBG}">
        <div class="container">
                    <div class="flex items-center justify-between">

            <a class="font-poppins font-medium text-[24px] leading-[24px]" href="#">3legant.</a>

            <ul class="flex gap-[40px]">
              <li class="active hover:text-black/50 transition duration-150 ease-in"><a href="#">Home</a></li>
              <li class=" hover:text-black/50 transition duration-150 ease-in"><a href="#">Shop</a></li>
              <li class=" hover:text-black/50 transition duration-150 ease-in"><a href="#">Product</a></li>
              <li class=" hover:text-black/50 transition duration-150 ease-in"><a href="#">Contact us</a></li>
            </ul>

            <div class="flex items-center gap-[16px]">
              <img class="cursor-pointer" src="/src/assets/images/search 02.png" alt="search">
              <img class="cursor-pointer" src="/src/assets/images/user-circle.png" alt="account">
              <div class="flex items-center gap-[4px]">
                <img class="cursor-pointer" src="/src/assets/images/shopping bag.png" alt="cart">
                <span class="text-white bg-black h-[20px] font-bold text-[12px] py-[5px] px-[6px] w-[20px] rounded-full flex items-center justify-center">2</span>
              </div>
            </div>

          </div>
        </div>

        </nav>

      </header>
    `;
  }
}

DesktopHeader.define("desktop-header");
