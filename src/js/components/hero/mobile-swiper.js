class MobileSwiper extends HTMLElement {
  constructor(){
    super()
  }
  connectedCallback(){
    this.render()
requestAnimationFrame(() => {
    new Swiper(this.querySelector('.mySwiper'), {
      loop: true,
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
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
  render(){
    this.innerHTML = 
    `
    <!-- Slider main container -->
<div class="container mb-8 h-[304px] lg:hidden">
  <div class="swiper h-full overflow-hidden w-full mySwiper">
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
    <div class="swiper-pagination "></div>
        <!-- If we need navigation buttons -->
    <div class="swiper-button-prev hidden bg-white rounded-full !left-8">
      <i class="fa-solid fa-arrow-left text-gray-500"></i>
    </div>
    <div class="swiper-button-next hidden bg-white rounded-full !right-8">
      <i class="fa-solid fa-arrow-right text-gray-500"></i>
    </div>
  </div>
</div>
    `
  }
}
customElements.define('mobile-swiper',MobileSwiper)
