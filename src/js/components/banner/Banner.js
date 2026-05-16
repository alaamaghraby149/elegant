import { BaseComponent } from "/src/js/components/BaseComponent.js";

export class Banner extends BaseComponent {
  template() {
    return `
  <div class="container h-auto mb-8">
    <div class="banner lg:mb-12 grid lg:grid-cols-4 lg:grid-rows-4 gap-[24px] w-[full] ">
  
      <banner-card variant="living"
      class="relative lg:col-span-2 lg:row-span-4 w-[311px] md:w-full h-full"
      text-content="Living Room"
        src="./src/assets/images/livingroom.png">
      </banner-card>

      <banner-card variant="bedroom"
      class="relative lg:col-span-2 lg:row-span-2 lg:col-start-3 w-[311px] md:w-full h-full"
      text-content="Bedroom"
        src="./src/assets/images/bedroom.png">
      </banner-card>

      <banner-card variant="kitchen"
      class="relative lg:col-span-2 lg:row-span-2 lg:col-start-3 lg:row-start-3 w-[311px] md:w-full h-full"
      text-content="Kitchen"
        src="./src/assets/images/kitchen.png">
      </banner-card>
      
    </div>
  </div>
        `;
  }
}

Banner.define("app-banner");
