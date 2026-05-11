class MobileHeroContent extends HTMLElement {
    constructor(){
        super()
    }
    connectedCallback(){
        this.render()
    }
    render(){
        this.innerHTML = 
        `
  <div class="container lg:hidden">

    <div class="hero-content">
      <h4 class="font-medium w-[311px] text-[40px] leading-[44px] tracking-[-0.4px] font-poppins">
        Simply Unique<span class="text-gray-500"> /</span> Simply Better <i
          class="fa-solid fa-circle text-xs text-gray-500"></i>
      </h4>
      <p class="font-inter  w-[320px] text-[16px] leading-[26px] text-gray-500 ">
        <b class="font-semibold text-primary-primary">3legant</b>
        is a gift & decorations store based in HCMC, Vietnam. Est since 2019.
      </p>
    </div>
  </div>
        `
    }
}
customElements.define('mobile-hero-content', MobileHeroContent)