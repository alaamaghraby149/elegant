import { BaseComponent } from "./BaseComponent.js"
export class Button extends BaseComponent {
    connectedCallback(){
        super.connectedCallback()
    }
    template(){
        return `
        <button class="bg-primary-primary hover:bg-primary-primary/90 transition ease-in-out duration-300 text-white flex items-center justify-center gap-[4px] font-inter font-medium text-[18px] leading-[32px] tracking-[-0.4px] py-[10px] px-[26px] my-[19.33px] w-full h-[52px] shrink-0 rounded-[6px]">
            Sign In
        </button>
        `
    }
}
Button.define("app-button")