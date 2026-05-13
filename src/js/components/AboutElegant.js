import { BaseComponent } from "./BaseComponent.js"
class AboutElegant extends BaseComponent {

    template(){
        return `
<div class="container">
  
        <div class="hero-content">
          <h1 class="font-medium 
          w-[311px] lg:w-[643px] 
          lg:text-[72px] text-[40px] 
          leading-[44px] lg:leading-[76px] 
          tracking-[-0.4px] lg:tracking-[-2px] font-poppins">
            Simply Unique<span class="text-gray-500"> /</span> Simply Better <i class="fa-solid fa-circle text-xs text-gray-500"></i>
          </h1>
          <p class="font-inter 
          text-[16px] leading-[26px] 
          w-[320px] lg:w-[424px] text-gray-500 lg:mt-14">
            <b class="font-semibold text-primary-primary">3legant</b> 
            is a gift & decorations store based in HCMC, Vietnam. Est since 2019.
          </p>
        </div>
    </div>
        `
    }
}
AboutElegant.define('app-about')