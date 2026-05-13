export class BaseComponent extends HTMLElement {
  constructor() {
    super();
    this.state = {};
    // Generate unique ID for this component instance (used for scoped styles)
    this._componentId = `comp-${Math.random().toString(36).substring(2, 11)}`;
  }

  // When browser adds this element to the page
  connectedCallback() {
    // Mark this element with its unique ID (for CSS scoping)
    this.setAttribute("data-component-id", this._componentId);
    this.render();
    this.bindEvents();
    this._injectStyles();
  }

  // Put the HTML from template() into the actual DOM
  render() {
    this.innerHTML = this.template();
  }

  // Inject scoped styles (called once from connectedCallback)
  _injectStyles() {
    // If component defines optional styles() method, use it
    if (this.styles && typeof this.styles === "function") {
      const rawCss = this.styles();
      const scopedCss = this._scopeStyles(rawCss);

      // Only create style tag once per component instance
      const styleId = `styles-${this._componentId}`;
      let styleTag = document.getElementById(styleId);

      if (!styleTag) {
        styleTag = document.createElement("style");
        styleTag.id = styleId;
        styleTag.textContent = scopedCss;
        document.head.appendChild(styleTag);
      }
    }
  }

  // Convert CSS selectors to be scoped to this component only
  // Example: ".btn { color: red; }" → "[data-component-id="abc123"] .btn { color: red; }"
  _scopeStyles(css) {
    const componentScope = `[data-component-id="${this._componentId}"]`;

    // Replace all CSS rule selectors with scoped versions
    return css.replace(/([^{}]+)\s*{/g, (match, selectors) => {
      const scopedSelectors = selectors
        .split(",")
        .map((selector) => {
          selector = selector.trim();

          // :host means "this component", so use the scope selector directly
          if (selector === ":host" || !selector) return componentScope;

          // Regular selectors get scoped (e.g., ".btn" → "[data] .btn")
          return `${componentScope} ${selector}`;
        })
        .join(", ");

      return `${scopedSelectors} {`;
    });
  }

  // Override in subclass: Return the HTML to show
  template() {
    return "";
  }

  // Change state, then re-render automatically
  setState(updates) {
    this.state = { ...this.state, ...updates };
    this.render();
    this.bindEvents();
  }

  // Override in subclass: Attach your event listeners here
  bindEvents() {
    // Subclass fills this in
  }

  // Register the component with the browser (call this in subclass)
  static define(tagName) {
    customElements.define(tagName, this);
  }
}
