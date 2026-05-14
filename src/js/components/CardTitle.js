import { BaseComponent } from "./BaseComponent.js";
export class CardTitle extends BaseComponent {
    template(){
        const title = this.getAttribute("title") || ""
        return `
        <div class ="flex flex-col gap-[12px] "
        >
              <h5 class="text-[28px] lg:text-[34px] leading-[38px] tracking-[-0.6px] font-medium ">${title}</h5>
              <app-shop text-content="Shop now" border-color="border-black"></app-shop>
            </div>
        `
    }
}
CardTitle.define("app-title")