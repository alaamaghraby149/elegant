import "./mobile-menu.js";
import "/src/js/components/social-icons.js"
class MobileHeader extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.render();
    this.addEvents();
  }
  render() {
    this.innerHTML = `
    <header class="lg:hidden">
        <div class="header__top bg-gray-100 relative py-[8px] h-[40px] flex items-center justify-center gap-[22px]">
            <div class="flex gap-[8px] items-center">
                <div class="flex items-center gap-[12px]">
                    <img class="w-[16px] h-[16px] object-fit-cover" src="./src/assets/images/ticket-percent.svg" alt="">
                    <p class="font-inter font-semibold leading-[20px] text-[12px] ">30% off storewide — Limited time!
                    </p>
                </div>
            </div>
            <div class="cursor-pointer w-[16px] h-[16px] flex items-center justify-center">
                <i class="fa-solid fa-x text-gray-700 text-[10px]"></i>
            </div>
        </div>
        <nav class="navigation relative py-[18px]">
            <div class="container flex items-center justify-between">
                <div class="flex items-center gap-[4px]">
                    <div class="w-[24px] h-[24px] cursor-pointer navigation__burger"><i class="fa-solid fa-bars"></i>
                    </div>
                    <div class="navigation__logo"><a
                            class="font-poppins font-medium text-[16px] leading-[24px] flex items-center"
                            href="#">3legant.</a></div>
                </div>
                <div class="navigation__icons flex items-center gap-[16px]">
                    <img class="cursor-pointer" src="/src/assets/images/shopping bag.png" alt="">
                    <span
                        class="text-white flex items-center justify-center bg-black h-[20px] font-bold text-[12px] leading-[10px] py-[5px] px-[6px] w-[20px] rounded-full">2</span>
                </div>
            </div>
        </nav>
        <mobile-menu></mobile-menu>
    </header>
        `;
  }
  addEvents() {
    const burger = this.querySelector(".navigation__burger");
    burger.addEventListener('click', ()=>{
        const mobileMenu = this.querySelector('mobile-menu')
        mobileMenu.openMenu()
    })


  }
}
customElements.define("mobile-header", MobileHeader);
