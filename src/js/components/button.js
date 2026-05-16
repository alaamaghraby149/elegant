import { BaseComponent } from "./BaseComponent.js";

export class Button extends BaseComponent {
  connectedCallback() {
    if (!this._slotContent) {
    this._slotContent = this.innerHTML;
  }
    super.connectedCallback();
  }

  get _variant() {
    return this.getAttribute("variant") || "primary";
  }

  get _content() {
    return this._slotContent?.trim() || this.getAttribute("title") || "Button";
  }

  _buildClasses() {
    // Extra Classes Have High priority
    const extraClasses = this.getAttribute("extra-classes") || "";
    const textColor = this.getAttribute("text-color") || "text-black";
    const borderColor = this.getAttribute("border-color") || "border-black";

    const baseClasses = `
      flex items-center justify-center gap-[4px]
      font-inter font-medium tracking-[-0.4px]
      transition ease-in-out duration-300
    `;

    const variants = {
      primary: [
        `
          bg-primary-primary border-2 hover:bg-white hover:text-black
          hover:border-black text-white text-[18px] leading-[32px]
          py-[10px] px-[26px] my-[19.33px] w-full h-[52px] shrink-0 rounded-[6px]
        `,
      ],
      secondary: [
        `text-[14px] lg:flex items-center border-b gap-[4px]`,
        textColor,
        borderColor,
      ],
    };

    const classes = (variants[this._variant] ?? variants.primary)
      .join(" ")
      .replace(/\s+/g, " ") // remove extra whitespaces
      .trim();

    return `${baseClasses} ${classes} ${extraClasses}`;
  }

  template() {
    return `
      <button class="${this._buildClasses()}">
        ${this._content}
      </button>
    `;

    // const variant = this.getAttribute("variant") || "primary";
    // const textColor = this.getAttribute("text-color") || "text-black";
    // const borderColor = this.getAttribute("border-color") || "border-black";
    // const content =
    //   this._slotContent?.trim() || this.getAttribute("title") || "";

    // const base = `
    //   flex items-center justify-center gap-[4px]
    //   font-inter font-medium text-[18px] leading-[32px]
    //   transition ease-in-out duration-300
    // `;

    // let primaryClasses = `
    //   bg-primary-primary border-2 hover:bg-white hover:text-black
    //   hover:border-black text-white text-[18px] leading-[32px]
    //   py-[10px] px-[26px] my-[19.33px] w-full h-[52px] shrink-0 rounded-[6px]
    // `;

    // let variantClasses = `
    //   text-[14px] lg:flex items-center border-b
    //   ${textColor} ${borderColor} gap-[4px]
    // `;

    // if (variant === "secondary") {
    //   return `<button class="${variantClasses}">
    //   ${content}

    //   </button>`;
    // }

    // return `<button class="${primaryClasses}">${content}</button>`;
  }
}

Button.define("app-button");
