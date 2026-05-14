import { BaseComponent } from "./BaseComponent.js";
export class ShopNow extends BaseComponent{
    template(){
        const textColor = this.getAttribute("text-color") || "text-black"
        const borderColor = this.getAttribute("border-color") || "border-black";
        const textContent = this.getAttribute("text-content") || ""
        console.log(borderColor)
        return `
        <a class="text-[14px] w-[89px] lg:flex items-center border-b ${textColor} ${borderColor}  gap-[4px]" href="#">
          ${textContent}
          <i class="fa-solid fa-arrow-right"></i>
        </a>`
    }
}
ShopNow.define('app-shop')