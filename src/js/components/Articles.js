import { BaseComponent } from "./BaseComponent.js";
export class Articles extends BaseComponent{
    template(){
        return `
    <div class="articles container mb-20">
    <app-head class="head-title"
          head-title="Articles"
          title="ReadMore"
          ></app-head>
      <div class="cards mt-10 w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[25px]">
        <div class="card w-full">
          <img class="mb-6" src="./src/assets/images/decore home.png" alt="decore home">
          <app-head class="card-title"
          head-title="7 ways to decor your home"
          title="ReadMore"
          ></app-head>
        </div>
        <div class="card w-full">
          <img class="mb-6" src="./src/assets/images/organize kitchen.png" alt="decore home">
          <app-head class="card-title"
          head-title="Kitchen organization"
          title="ReadMore"
          ></app-head>
        </div>
        <div class="card w-full">
          <img class="mb-6" src="./src/assets/images/decore bedroom.png" alt="decore home">
          <app-head class="card-title"
          head-title="Decor your bedroom"
          title="ReadMore"
          ></app-head>
        </div>
      </div>
    </div>
        `
    }
    styles(){
        return`

        .card-title .title {
            display: flex;
            flex-direction: column;
            gap: 8px;
            align-items: flex-start; 
    }
        .card-title .title h4{
            width:auto;
            font-size:20px;
            line-height: 28px;
            font-weight: 500;
            color: #232627;
        }
        .head-title div , .card-title div {
            display:flex !important;
        }
        `
    }
}
Articles.define('app-articles')