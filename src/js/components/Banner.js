import { BaseComponent } from "./BaseComponent.js";
import "./CardTitle.js"
import "./BannerCard.js";
export class Banner extends BaseComponent {
    template() {
        
        return `
  <div class="container">
    <div class="banner lg:mb-12 mb-8 grid  lg:grid-cols-4 lg:grid-rows-4 gap-[24px] w-[full] h-[664px]">
    
      <app-card  variant="living"
      class="relative lg:col-span-2 lg:row-span-4 w-[311px] md:w-full h-full"
      title="Living Room"
        src="./src/assets/images/livingroom.png">
      </app-card>

      <app-card variant="bedroom"
      class="relative  lg:col-span-2 lg:row-span-2 lg:col-start-3 w-[311px] md:w-full h-full"
      title="Bedroom"
        src="./src/assets/images/bedroom.png">
      </app-card>

      <app-card variant="kitchen"
      class="relative  lg:col-span-2 lg:row-span-2 lg:col-start-3 lg:row-start-3 w-[311px] md:w-full h-full"
      title="Kitchen"
        src="./src/assets/images/kitchen.png">
      </app-card>
      
    </div>
  </div>
        `
    }
}
Banner.define('app-banner')