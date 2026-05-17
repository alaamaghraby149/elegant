import { BaseComponent } from "./BaseComponent.js";
export class Articles extends BaseComponent{
    template(){
        const headTitle = this.getAttribute('head-title') || ""
        const buttonTitle = this.getAttribute("title") || "";
        const buttonIcon = "<i class='fa-solid fa-arrow-right'></i>"
        return `
            <div class="title flex items-center justify-between">
                        <h4 class="font-medium w-4 text-[40px] leading-[44px] tracking-[-0.4px] font-poppins">
                        ${headTitle}
                        </h4>
                        <div class="hidden lg:block">
                            <app-button 
                            variant="secondary"
                            title="${buttonTitle} ${buttonIcon}"
                            ></app-button>
                        </div>
                    </div>
        `
    }
}
Articles.define('app-head')