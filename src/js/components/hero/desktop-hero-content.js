class HeroContent extends HTMLElement {
    constructor(){
        super()
    }
    connectedCallback(){
        this.render()
    }
    render(){
        this.innerHTML = 
        `
        <div class="container hidden lg:block">
  
        <div class="hero-content">
          <h1 class="font-medium w-[643px] text-[72px] leading-[76px] tracking-[-2px] font-poppins">
            Simply Unique<span class="text-gray-500"> /</span> Simply Better <i class="fa-solid fa-circle text-xs text-gray-500"></i>
          </h1>
          <p class="font-inter text-[16px] leading-[26px] w-[424px] text-gray-500 mt-14">
            <b class="font-semibold text-primary-primary">3legant</b> 
            is a gift & decorations store based in HCMC, Vietnam. Est since 2019.
          </p>
        </div>
</div>
        `
    }
}
customElements.define('desktop-hero-content', HeroContent)