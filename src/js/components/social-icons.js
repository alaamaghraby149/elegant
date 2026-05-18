import { BaseComponent } from "./BaseComponent.js"
export class SocialIcons extends BaseComponent {
    connectedCallback(){
        super.connectedCallback()
    }
    template(){
        return `
                    <div class="social-links flex items-center gap-[24px] mt-[19.33px] w-full">
                        <i class="fa-brands fa-square-instagram cursor-pointer text-2xl"></i>
                        <i class="fa-brands fa-facebook cursor-pointer text-2xl"></i>
                        <i class="fa-brands fa-youtube cursor-pointer text-2xl"></i>
                    </div>
        `
    }
}
SocialIcons.define('social-icons')