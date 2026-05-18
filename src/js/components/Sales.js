import { BaseComponent } from "./BaseComponent.js";
export class Sales extends BaseComponent{
    template(){
        return `
            <div class="w-full mb-[80px] grid grid-cols-1 lg:grid-cols-2">
      <img class="w-full" src="./src/assets/images/sale.png" alt="sale">
      <div class="w-full  py-[85.5px] lg:py-0 flex flex-col justify-center  gap-[24px] bg-gray-100 pr-[160px] pl-[72px]">
        <div class="title w-full flex justify-center flex-col gap-[16px] lg:w-[452px] h-auto">
          <span class="sale text-secondary-blue font-inter leading-[16px] font-bold uppercase">SALE UP TO 35% OFF</span>
          <h4 class="font-poppins font-medium text-[34px] lg:text-[40px] leading-[44px] text-gray-900">
            HUNDREDS of 
New lower prices!
          </h4>
          <p class="font-inter text-[20px] leading-[26px] lg:leading-[32px] text-gray-900">It’s more affordable than ever to give every room in your home a stylish makeover</p>
        </div>
        <app-button variant="secondary">
          Shop Now <i class="fa-solid fa-arrow-right"></i>
        </app-button>
      </div>
    </div>
        `
    }
}
Sales.define('app-sales')