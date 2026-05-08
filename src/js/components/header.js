class Header extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }
  connectedCallback() {
    this.render();
    this.addEvents();
  }
  render() {
    this.shadowRoot.innerHTML = `
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/7.0.1/css/all.min.css" integrity="sha512-2SwdPD6INVrV/lHTZbO2nodKhrnDdJK9/kg2XD1r9uGqPo1cUbujc+IYdlYdEErWNu69gVcYgdxlmVmzTWnetw==" crossorigin="anonymous" referrerpolicy="no-referrer" />
        <link rel="stylesheet" href="/dist/output.css">
        <header class="hidden lg:block">
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
        <nav class="navigation py-[16px] px-[160px]">
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
        <nav class="navigation relative py-[18px] px-[32px]">
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
        <div class="fly-list transition-all duration-300 ease-in-out h-full absolute top-0 left-[-676px] shadow w-[85%] bg-white pt-[24px] px-[24px]">
            <div class="container flex flex-col">
                <div>
                    <div class="flex justify-between">
                        <div class="navigation__logo"><a
                            class="font-poppins font-medium text-[16px] leading-[24px] flex items-center"
                            href="#">3legant.</a></div>
                            <div class="cursor-pointer w-[16px] h-[16px] flex items-center justify-center">
                            <i class="fa-solid fa-x text-gray-700 text-[10px] close"></i>
                        </div>
                    </div>
                    <div class="navigation__search my-[16px] w-full py-[11px] flex items-center gap-[8px] px-[16px] border rounded-[6px] border-gray-500">
                        <img class="w-[16px] h-[16px] object-fit-cover" src="/src/assets/images/search 02.png" alt="">
                        <input class="text-[14px] font-inter outline-none leading-[22px] w-full" type="text" placeholder="Search">
                    </div>
                    <ul class="navigation__list flex flex-col gap-[16px]">
                        <li class="text-black pb-[8px] border-b border-gray-200"><a href="#">Home</a></li>
                        <li class="text-black flex justify-between pb-[8px] border-b border-gray-200">
                            <a href="#">Shop</a>
                            <i class="fa-solid fa-angle-down cursor-pointer"></i>
                        </li>
                        <li class="text-black flex justify-between pb-[8px] border-b border-gray-200">
                            <a href="#">Product</a>
                            <i class="fa-solid fa-angle-down cursor-pointer"></i>
                        </li>
                        <li class="text-black pb-[8px] border-b border-gray-200"><a href="#">Contact us</a></li>
                    </ul>
                </div>
                <div class="mb-[24px] mt-[400px] justify-end">
                    <ul class="flex flex-col gap-[8px]">
                        <li class="flex justify-between gap-[10px] border-b border-gray-200 pb-[8px] h-[40px] ">
                            <a class="text-gray-500 text-[18px] font-medium leading-p[32px] tracking-[-0.4px] font-inter " href="#">Cart</a>
                            <div class="flex items-center gap-[5px]">
                                <img class="cursor-pointer" src="/src/assets/images/shopping bag.png" alt="">
                                <span class="text-white cursor-pointer flex items-center justify-center bg-black h-[20px] font-bold text-[12px] leading-[10px] py-[5px] px-[6px] w-[20px] rounded-full">2</span>
                            </div>
                        </li>
                        <li class="flex justify-between gap-[10px] border-b border-gray-200 pb-[8px] h-[40px] ">
                            <a class="text-gray-500 text-[18px] font-medium leading-p[32px] tracking-[-0.4px] font-inter " href="#">Wishlist</a>
                            <div class="flex items-center gap-[5px]">
                                <img class="cursor-pointer" src="/src/assets/images/line.png" alt="">
                                <span class="text-white cursor-pointer flex items-center justify-center bg-black h-[20px] font-bold text-[12px] leading-[10px] py-[5px] px-[6px] w-[20px] rounded-full">2</span>
                            </div>
                        </li>
                    </ul>
                    <elegant-button></elegant-button>
                    <div class="social-links flex gap-[24px]  w-full">
                        <img class="cursor-pointer" src="/src/assets/images/instagram.png" alt="instagram">
                        <img class="cursor-pointer" src="/src/assets/images/facebook.png" alt="facebook">
                        <img class="cursor-pointer" src="/src/assets/images/youtube.png" alt="youtube">
                    </div>
                </div>
            </div>
        </div>
    </header>
        `;
  }
  addEvents() {
    const burger = this.shadowRoot.querySelector(".navigation__burger");
    const closeBtn = this.shadowRoot.querySelector(".close");
    const flyList = this.shadowRoot.querySelector(".fly-list");

    burger.addEventListener("click", () => {
      flyList.classList.replace("left-[-676px]", "left-0");
    });

    closeBtn.addEventListener("click", () => {
      flyList.classList.replace("left-0", "left-[-676px]");
    });

    this.shadowRoot.addEventListener("click", (e) => {
      if (!flyList.contains(e.target) && !burger.contains(e.target)) {
        flyList.classList.replace("left-0", "left-[-676px]");
      }
    });
  }
}
customElements.define("elegant-header", Header);
