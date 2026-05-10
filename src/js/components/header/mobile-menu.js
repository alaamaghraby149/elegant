import "/src/js/components/button.js";
import "/src/js/components/social-icons.js"
class MobileMenu extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.render();
        this.addEvents();
    }
    render() {
        this.innerHTML = `
    <div
        class="fly-list transition-all duration-300 ease-in-out  absolute top-0 left-[-716px]  w-[85%] bg-white pt-[24px] ">
        <div class="container  flex flex-col shadow-xl">
            <div>
                <div class="flex justify-between">
                    <div class="navigation__logo"><a
                            class="font-poppins font-medium text-[16px] leading-[24px] flex items-center"
                            href="#">3legant.</a></div>
                    <div class="cursor-pointer w-[16px] h-[16px] flex items-center justify-center">
                        <i class="fa-solid fa-x text-gray-700 text-[10px] close"></i>
                    </div>
                </div>
                <div
                    class="navigation__search my-[16px] w-full py-[11px] flex items-center gap-[8px] px-[16px] border rounded-[6px] border-gray-500">
                    <img class="w-[16px] h-[16px] object-fit-cover" src="/src/assets/images/search 02.png" alt="">
                    <input class="text-[14px] font-inter outline-none leading-[22px] w-full" type="text"
                        placeholder="Search">
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
                <div class="mb-[24px] mt-[400px]">
                    <ul class="flex flex-col gap-[8px]">
                        <li class="flex justify-between gap-[10px] border-b border-gray-200 pb-[8px] h-[40px] ">
                            <a class="text-gray-500 text-[18px] font-medium leading-p[32px] tracking-[-0.4px] font-inter "
                                href="#">Cart</a>
                            <div class="flex items-center gap-[5px]">
                                <img class="cursor-pointer" src="/src/assets/images/shopping bag.png" alt="">
                                <span
                                    class="text-white cursor-pointer flex items-center justify-center bg-black h-[20px] font-bold text-[12px] leading-[10px] py-[5px] px-[6px] w-[20px] rounded-full">2</span>
                            </div>
                        </li>
                        <li class="flex justify-between gap-[10px] border-b border-gray-200 pb-[8px] h-[40px] ">
                            <a class="text-gray-500 text-[18px] font-medium leading-p[32px] tracking-[-0.4px] font-inter "
                                href="#">Wishlist</a>
                            <div class="flex items-center gap-[5px]">
                                <img class="cursor-pointer" src="/src/assets/images/line.png" alt="">
                                <span
                                    class="text-white cursor-pointer flex items-center justify-center bg-black h-[20px] font-bold text-[12px] leading-[10px] py-[5px] px-[6px] w-[20px] rounded-full">2</span>
                            </div>
                        </li>
                    </ul>
                    <elegant-button></elegant-button>
                    <social-icons></social-icons>
                </div>
            </div>

        </div>
    </div>
        `;
    }
    get elements(){
        return {
            flyList: this.querySelector(".fly-list"),
            closeBtn: this.querySelector(".close")
        }
    }
    openMenu() {
        this.elements.flyList.classList.replace("left-[-716px]", "left-0");
    }
    closeMenu() {
        this.elements.flyList.classList.replace("left-0", "left-[-716px]");
    }
    addEvents() {
        this.elements.closeBtn.addEventListener("click", () => {
            this.closeMenu()
        });

    }
}
customElements.define("mobile-menu", MobileMenu);
