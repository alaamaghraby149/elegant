class Button extends HTMLElement {
    constructor(){
        super()
        this.attachShadow({mode:"open"})
    }
    connectedCallback(){
        this.render()
        // this.addEvents()
    }
    render(){
        this.shadowRoot.innerHTML = 
        `
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/7.0.1/css/all.min.css" integrity="sha512-2SwdPD6INVrV/lHTZbO2nodKhrnDdJK9/kg2XD1r9uGqPo1cUbujc+IYdlYdEErWNu69gVcYgdxlmVmzTWnetw==" crossorigin="anonymous" referrerpolicy="no-referrer" />
        <link rel="stylesheet" href="/dist/output.css">
        <button class="bg-primary-primary text-white flex items-center justify-center gap-[4px] font-inter font-medium text-[18px] leading-[32px] tracking-[-0.4px] py-[10px] px-[26px] my-[19.33px] w-full h-[52px] shrink-0 rounded-[6px]">
            Sign In
        </button>
        `
    }
}
customElements.define("elegant-button", Button)