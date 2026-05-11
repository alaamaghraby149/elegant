class DesktopSwiper extends HTMLElement {
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
<div class="container hidden lg:block">
  <div class="swiper overflow-hidden w-full mySwiper mb-[32px]">
    <!-- Additional required wrapper -->
    <div class="swiper-wrapper w-full">
      <!-- Slides -->
      <div class="swiper-slide w-full">
          <img class="w-full object-cover" src="./src/assets/images/hero-slider.png" alt="">
      </div>
      <div class="swiper-slide w-full">
          <img class="w-full object-cover" src="./src/assets/images/hero-slider.png" alt="">
      </div>
      <div class="swiper-slide w-full">
          <img class="w-full object-cover" src="./src/assets/images/hero-slider.png" alt="">
      </div>
    </div>
    <!-- If we need pagination -->
    <div class="swiper-pagination "></div>

    <!-- If we need navigation buttons -->
    <div class="swiper-button-prev bg-white rounded-full !left-8">
      <i class="fa-solid fa-arrow-left text-gray-500"></i>
    </div>
    <div class="swiper-button-next bg-white rounded-full !right-8">
      <i class="fa-solid fa-arrow-right text-gray-500"></i>
    </div>
  </div>
</div>
    `
  }
}
customElements.define('desktop-swiper',DesktopSwiper)
