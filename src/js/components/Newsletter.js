import { BaseComponent } from "./BaseComponent.js";
export class Newsletter extends BaseComponent{
    template(){
        return `
            <div class="flex items-center relative justify-between py-[95px] px-[32px] lg:py-0 lg:px-0">

  <div class="relative w-full  h-[300px] overflow-x-hidden">
    <img 
      class="absolute hidden lg:block top-0 -left-[190px] h-full w-full object-cover"
      src="./src/assets/images/news letter1.jpg" 
      alt=""
    >
  </div>

  <div class="newletter__content text-center  flex flex-col shrink-0 lg:shrink w-[80%] text-gray-900">
    <h4 class="font-poppins w-full font-medium text-[40px] leading-[44px] tracking-[-0.4px]">
      Join Our Newsletter
    </h4>
    <p class="font-inter w-full text-[18px] leading-[30px]">
      Sign up for deals, new products and promotions
    </p>

    <div class="flex w-full shadow mt-[44px] items-center justify-between border-b border-gray-500/10">
      <div class="flex py-[12px] mr-[8px] w-full items-center gap-[8px]">
        <i class="fa-regular fa-envelope text-[24px]"></i>
        <input 
          class="w-full outline-none bg-transparent leading-7 tracking-[-0.4px] text-gray-500 font-inter"
          type="email"
          placeholder="Email address"
        >
      </div>
      <a class="font-inter font-medium leading-7 tracking-[-0.4px] text-gray-500" href="signup.html">
        Signup
      </a>
    </div>
  </div>

  <div class="relative w-full  h-[300px] overflow-x-hidden">
    <img 
      class="absolute hidden lg:block top-0 -right-[120px] h-full w-full object-cover"
      src="./src/assets/images/news letter2.jpg" 
      alt=""
    >
  </div>

</div>
        `
    }

}
Newsletter.define('app-newsletter')