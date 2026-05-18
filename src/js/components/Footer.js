import { BaseComponent } from "./BaseComponent.js";

export class Footer extends BaseComponent {

  template() {
    return `

  <footer class="pt-[80px] pb-[32px] px-[160px] bg-gray-900 flex flex-col gap-[49px]">
    <div class="container">
      <div class="flex flex-col items-center lg:flex-row lg:justify-between pb-[57px] mb-[40px] lg:mb-0">
        <div class="flex flex-col lg:flex-row  gap-[16px] shrink-0 items-center">
          <div class="logo lg:pr-8  pb-3 lg:pb-0 lg:border-r border-gray-500">

            <p class="font-poppins  font-medium text-[24px] leading-6 text-white">3legant.</p>
          </div>
          <div class="slogan whitespace-nowrap lg:pl-8">
            <p class="font-inter text-[14px] leading-[22px] text-gray-200">Gift & Decoration Store</p>
          </div>
        </div>

        <ul class="flex flex-col lg:flex-row justify-center items-center lg:items-center lg:justify-start lg:text-left text-center shrink-0 gap-[32px] lg:gap-[40px] mt-[40px] lg:mt-0">
          <li><a class="font-inter text-[14px] leading-[22px] text-gray-50" href="index.html">Home</a></li>
          <li><a class="font-inter text-[14px] leading-[22px] text-gray-50" href="shop.html">Shop</a></li>
          <li><a class="font-inter text-[14px] leading-[22px] text-gray-50" href="product.html">Product</a></li>
          <li><a class="font-inter text-[14px] leading-[22px] text-gray-50" href="blog.html">Blog</a></li>
          <li><a class="font-inter text-[14px] leading-[22px] text-gray-50 whitespace-nowrap" href="contact.html">Contact Us</a></li>
        </ul>
      </div>
      <div class="flex flex-col-reverse  lg:flex-row gap-[32px] lg:gap-0 lg:justify-between py-3 border-t border-gray-500 items-center">
        <div class="copyright flex lg:flex-row flex-col-reverse gap-[28px]">
          <p class="font-poppins whitespace-nowrap text-[12px] leading-[20px] text-gray-200">Copyright © 2023 3legant. All rights reserved</p>
          <div class="flex gap-[28px] items-center justify-center lg:items-start lg:justify-start">
            <p class="font-poppins font-semibold text-[12px] leading-[20px] text-gray-200">Privacy Policy</p>
            <p class="font-poppins font-semibold text-[12px] leading-[20px] text-gray-200">Terms of Use</p>
          </div>
        </div>
        <social-icons class="footer-icons"></social-icons>
      </div>
    </div>
  </footer>
    `;
  }
      styles(){
        return`
        .footer-icons .social-links{
            margin:0px;
        }
        .footer-icons i {
            color: white;
            
        }
        `
    }
}

Footer.define("app-footer");
