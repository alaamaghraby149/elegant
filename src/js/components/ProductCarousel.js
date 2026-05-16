import { BaseComponent } from "./BaseComponent.js"

export class ProductCarousel extends BaseComponent {
    constructor() {
        super()
        this.products = []
        this.visibleProducts = []
    }
    connectedCallback() {
        this.getData();
    }
    async getData() {
        try {
            const response = await fetch('/products.json')
            if (!response.ok) {
                throw new Error(`Response status: ${response.status}`);
            }
            const result = await response.json()
            this.products = result
            console.log(result)
            this.filteredProducts()
            this.updateUI()
        } catch (error) {
            console.log(error.message)
        }

    }
    filteredProducts() {
        this.visibleProducts = this.products.filter(product => {
            return product.isNew
        })
    }
    updateUI() {
        this.render();
        this.initSwiper();
    }
    initSwiper() {
        new Swiper(this.querySelector('.newarrivalSwiper'), {
            loop: true,
            slidesPerView: "auto",
            spaceBetween: 24,
            navigation: {
                nextEl: this.querySelector('.swiper-button-next'),
                prevEl: this.querySelector('.swiper-button-prev'),
            },
            autoplay: {
                delay: 3000,
            },
            
        });
    }


    template() {
                return `
            <div class="carousel lg:mt-0">
                <div class="container pt-[32px]">
                    <div class="title flex items-center justify-between">
                        <h4 class="flex flex-col font-medium  text-[40px] leading-[44px] tracking-[-0.4px] font-poppins">
                        <span>New</span>
                        <span>Arrivals</span>
                        </h4>
                        <div class="hidden lg:block">
                            <app-button variant="secondary">
                                More Products <i class="fa-solid fa-arrow-right"></i>
                            </app-button>
                        </div>
                    </div>
                    <div class="swiper newarrivalSwiper mt-12">
                        <div class="swiper-wrapper">
                        ${this.visibleProducts.map(product=>{
                            return `
                            <div class="swiper-slide hover:scale-95 transition duration-150 ease-in product__item  h-[480px] !w-[262px] mb-[52px]">
                            <div class="product__banner relative mb-[12px]">
                            <div class="product__badges absolute top-[16px] left-[16px] flex flex-col gap-[8px]">
                                <div class="flex items-center justify-center rounded-[4px] w-[67px] h-6 py-[4px] px-[14px] bg-white">
                                <span class="font-inter font-bold leading-[16px]">NEW</span>
                                </div>
                                <div class="sale flex items-center justify-center  bg-secondary-green w-[71px] h-[24px] rounded-[4px] py-[4px] px-[14px]">
                                <span class="text-white font-inter text-[16px] leading-[16px] uppercase">-50%</span>
                                </div>
                            </div>
                            <div class="product__wishlist transition duration-150 ease-in cursor-pointer opacity-0 w-8 h-8 rounded-full shadow absolute top-[16px] left-[214px] p-[6px]">
                                <i class="fa-regular fa-heart text-gray-500"></i>
                            </div>
                            <img class="h-full object-cover" src="${product.image}" alt="">
                            <app-button class="absolute mx-[16px] add transition duration-150 ease-in w-[90%] top-64 opacity-0">
                                Add to cart
                            </app-button>
                            </div>
                            <div class="product__content flex flex-col gap-[8px]">
                            <div class="rating flex gap-1">
                                <i class="fa-solid fa-star text-gray-700"></i>
                                <i class="fa-solid fa-star text-gray-700"></i>
                                <i class="fa-solid fa-star text-gray-700"></i>
                                <i class="fa-solid fa-star text-gray-700"></i>
                                <i class="fa-solid fa-star text-gray-700"></i>
                            </div>
                            <p class="text-[16px] font-inter font-semibold leading-[26px] text-gray-900">${product.title}</p>
                            <div class="price flex gap-[12px]">
                                <div class="new__price font-inter font-semibold text-[14px] leading-[22px]"><span class="text-gray-900">${product.price}</span></div>
                                <div class="old__price font-inter text-[14px] leading-[22px]"><span class="line-through text-gray-500">$400.00</span></div>
                            </div>
                            </div>
                        </div>
                        `
                    }).join("")}
                    </div>
                        

                        <div class="swiper-button-prev"></div>
                        <div class="swiper-button-next"></div>

                    </div>
                </div>
          </div>
                `
       
    }
}
ProductCarousel.define("app-carousel")