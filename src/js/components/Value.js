import { BaseComponent } from "./BaseComponent.js";
export class Values extends BaseComponent{
    template(){
        return `
              <div class="values container mb-12">
      <div class="line rounded w-full h-[4px] bg-gray-200 mb-12">
        <div class="in-line rounded w-3/4 h-full bg-gray-700"></div>
      </div>
      <div class="cards w-full gap-[8px] lg:gap-[24px] grid grid-cols-2  lg:grid-cols-4">
        <div class="card flex justify-center flex-col w-full px-[32px] h-[220px] bg-gray-100 ">
          <i class="fa-regular fa-truck mt-12 text-gray-900 text-2xl"></i>
          <div class="flex flex-col gap-[8px] mt-4">
            <p class="font-poppins font-medium text-[20px] leading-[28px] text-gray-900">Free Shipping</p>
            <span class="text-gray-500 font-poppins text-[14px] leading-6">Order above $200</span>
          </div>
        </div>
        <div class="card flex justify-center flex-col w-full px-[32px] h-[220px] bg-gray-100 ">
          <i class="fa-regular fa-credit-card mt-12 text-gray-900 text-2xl"></i>
          <div class="flex flex-col gap-[8px] mt-4">
            <p class="font-poppins font-medium text-[20px] leading-[28px] text-gray-900">Money-back</p>
            <span class="text-gray-500 font-poppins text-[14px] leading-6">30 days guarantee</span>
          </div>
        </div>
        <div class="card flex justify-center flex-col w-full px-[32px] h-[220px] bg-gray-100 ">
          <i class="fa-solid fa-lock mt-12 text-gray-900 text-2xl"></i>
          <div class="flex flex-col gap-[8px] mt-4">
            <p class="font-poppins font-medium text-[20px] leading-[28px] text-gray-900">Secure Payments</p>
            <span class="text-gray-500 font-poppins text-[14px] leading-6">Secured by Stripe</span>
          </div>
        </div>
        <div class="card flex justify-center flex-col w-full px-[32px] h-[220px] bg-gray-100 ">
          <i class="fa-solid fa-phone-volume mt-12 text-gray-900 text-2xl"></i>
          <div class="flex flex-col gap-[8px] mt-4">
            <p class="font-poppins font-medium text-[20px] leading-[28px] text-gray-900">24/7 Support</p>
            <span class="text-gray-500 font-poppins text-[14px] leading-6">Phone and Email support</span>
          </div>
        </div>
      </div>
  </div>
        `
    }
}
Values.define('app-values')