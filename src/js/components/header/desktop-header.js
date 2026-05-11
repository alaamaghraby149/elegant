class DesktopHeader extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.render();
  }
  render() {
    this.innerHTML = `
        <header class="hidden  lg:block">
        <div class="header__top bg-gray-100 relative py-[8px] h-[40px] flex items-center justify-center">
            <div class="flex gap-[12px] items-center">
                <div class="flex items-center gap-[12px]">
                    <img src="./src/assets/images/ticket-percent.svg" alt="">
                    <p class="font-inter font-semibold leading-[22px] text-[14px] ">30% off storewide — Limited time!</p>
                </div>
                <div>
                    <a class="text-secondary-blue flex items-center gap-[4px]" href="#">
                        Shop Now
                        <i class="fa-solid fa-arrow-right"></i>
                    </a>
                </div>
            </div>
            <div class="absolute top-[10px] right-5  cursor-pointer w-[20px] h-[20px]">
                <i class="fa-solid fa-x text-gray-700"></i>
            </div>
        </div>
        <nav class="navigation  py-[16px]">
            <div class="container flex items-center justify-between">
                <div class="navigation__logo"><a class="font-poppins font-medium text-[24px] leading-[24px] flex items-center" href="#">3legant.</a></div>
                <ul class="navigation__list flex gap-[40px] ">
                    <li class="active"><a href="#">Home</a></li>
                    <li><a href="#">Shop</a></li>
                    <li><a href="#">Product</a></li>
                    <li><a href="#">Contact us</a></li>
                </ul>
                <div class="navigation__icons flex items-center gap-[16px]">
                    <img class="cursor-pointer" src="/src/assets/images/search 02.png" alt="">
                    <img class="cursor-pointer" src="/src/assets/images/user-circle.png" alt="">
                    <img class="cursor-pointer" src="/src/assets/images/shopping bag.png" alt="">
                    <span class="text-white flex items-center justify-center bg-black h-[20px] font-bold text-[12px] leading-[10px] py-[5px] px-[6px] w-[20px] rounded-full">2</span>
                </div>
            </div>
        </nav>
    </header>
        `;
  }
}
customElements.define("desktop-header", DesktopHeader);
