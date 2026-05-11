class SocialIcons extends HTMLElement {
    constructor(){
        super()

    }
    connectedCallback(){
        this.render()
    }
    render(){
        this.innerHTML = 
        `
                    <div class="social-links flex gap-[24px]  w-full">
                        <img class="cursor-pointer" src="/src/assets/images/instagram.png" alt="instagram">
                        <img class="cursor-pointer" src="/src/assets/images/facebook.png" alt="facebook">
                        <img class="cursor-pointer" src="/src/assets/images/youtube.png" alt="youtube">
                    </div>
        `
    }
}
customElements.define('social-icons',SocialIcons)