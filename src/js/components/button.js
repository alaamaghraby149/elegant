class Button extends HTMLElement {
    constructor(){
        super()
    }
    connectedCallback(){
        this.render()
    }
    render(){
        this.innerHTML = 
        `
        <button class="bg-primary-primary text-white flex items-center justify-center gap-[4px] font-inter font-medium text-[18px] leading-[32px] tracking-[-0.4px] py-[10px] px-[26px] my-[19.33px] w-full h-[52px] shrink-0 rounded-[6px]">
            Sign In
        </button>
        `
    }
}
customElements.define("elegant-button", Button)