import {BaseComponent} from "./BaseComponent.js"
export class Hero extends BaseComponent {

  connectedCallback(){
    super.connectedCallback();

    requestAnimationFrame(() => {
        new Swiper(this.querySelector('.swiper'), {
          loop: true,
          pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
          autoplay: {
            delay: 5000,
          },
          
        });
      });
  }
  template(){
    return  `
<!-- Slider main container -->
<div class="container mb-8 lg:mb-0 h-[304px] lg:h-full  ">
  <div class="swiper overflow-hidden h-full w-full lg:mb-[32px]">
    <!-- Additional required wrapper -->
    <div class="swiper-wrapper w-full h-full">
      <!-- Slides -->
      <div class="swiper-slide w-full h-full">
          <img class="w-full h-full object-cover" src="./src/assets/images/hero-slider.png" alt="">
      </div>
      <div class="swiper-slide w-full h-full">
          <img class="w-full h-full object-cover" src="./src/assets/images/hero-slider.png" alt="">
      </div>
      <div class="swiper-slide w-full h-full">
          <img class="w-full h-full object-cover" src="./src/assets/images/hero-slider.png" alt="">
      </div>
    </div>
    <!-- If we need pagination -->
    <div class="swiper-pagination swiper-pagination-clickable "></div>

    <!-- If we need navigation buttons -->
    <div class="swiper-button-prev hidden lg:flex items-center justify-center bg-white rounded-full !left-8">
      <i class="fa-solid fa-arrow-left text-gray-500"></i>
    </div>
    <div class="swiper-button-next hidden lg:flex items-center justify-center bg-white rounded-full !right-8">
      <i class="fa-solid fa-arrow-right text-gray-500"></i>
    </div>
  </div>
</div>
    `
  }
}
Hero.define('app-hero')
