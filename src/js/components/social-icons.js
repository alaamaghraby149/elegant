import { BaseComponent } from "./BaseComponent.js"
export class SocialIcons extends BaseComponent {
    connectedCallback(){
        super.connectedCallback()
    }
    template(){
        return `
                    <div class="social-links flex gap-[24px] mt-[19.33px] w-full">
                        <img class="cursor-pointer" src="/src/assets/images/instagram.png" alt="instagram">
                        <img class="cursor-pointer" src="/src/assets/images/facebook.png" alt="facebook">
                        <img class="cursor-pointer" src="/src/assets/images/youtube.png" alt="youtube">
                    </div>
        `
    }
}
SocialIcons.define('social-icons')