/**
 * Copyright 2025 s0rany
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import { I18NMixin } from "@haxtheweb/i18n-manager/lib/I18NMixin.js";

/**
 * `counter-app`
 * 
 * @demo index.html
 * @element counter-app
 */
export class CounterApp extends DDDSuper(I18NMixin(LitElement)) {

  static get tag() {
    return "counter-app";
  }

  constructor() {
    super();
    this.min = -15;
    this.max = 15
    this.count = 0;
    this.title = "";
    this.t = this.t || {};
    this.t = {
      ...this.t,
      title: "Title",
    };
    this.registerLocalization({
      context: this,
      localesPath:
        new URL("./locales/counter-app.ar.json", import.meta.url).href +
        "/../",
      locales: ["ar", "es", "hi", "zh"],
    });
  }

  // Lit reactive properties
  static get properties() {
    return {
      ...super.properties,
      count: {type: Number, reflect: true},
    };
  }

  // Lit scoped styles
  static get styles() {
    return [super.styles,
    css`
      :host([count = "10"]) {
        color: var(--ddd-theme-default-athertonViolet);
      }
      :host {
        display: block;
        color: var(--ddd-theme-primary);
        background-color: var(--ddd-theme-accent);
        font-family: var(--ddd-font-navigation);
      }
      .wrapper {
        margin: var(--ddd-spacing-2);
        padding: var(--ddd-spacing-4);
      }
      h3 span {
        font-size: var(--counter-app-label-font-size, var(--ddd-font-size-s));
      }
      .counter {
        font-size: var(--counter-app-label-font-size, var(--ddd-font-size-xxl));
      }
    `];
  }

  updated(changedProperties) {
    super.updated(changedProperties);
    
  }

  

  // Lit render the HTML
  render() {
    return html`
    <confetti-container id="confetti" class ="wrapper"></confetti-container>
      <div class="counter">${this.count}</div>
        <div class="buttons">
          <button @click="${this.increase}">Add 1</button>
          <button @click="${this.decrease}">Subtract 1</button>
        </div>
    </div>`;
  }
  increase() {
    this.count++;
  }
  decrease() {
    this.count--;
  }
  reset() {
    this.count = 0;
  }

  /**
   * haxProperties integration via file reference
   */
  static get haxProperties() {
    return new URL(`./lib/${this.tag}.haxProperties.json`, import.meta.url)
      .href;
  }
}

globalThis.customElements.define(CounterApp.tag, CounterApp);