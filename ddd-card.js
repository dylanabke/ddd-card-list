/**
 * Copyright 2025 dylanabke
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import { I18NMixin } from "@haxtheweb/i18n-manager/lib/I18NMixin.js";

/**
 * `ddd-card`
 *
 * @demo index.html
 * @element ddd-card
 */
export class DddCard extends DDDSuper(I18NMixin(LitElement)) {

  static get tag() {
    return "ddd-card";
  }

  constructor() {
    super();
    this.title = "";
    this.image = "";
    this.t = this.t || {};
    this.t = {
      ...this.t,
      title: "Title",
    };
    this.registerLocalization({
      context: this,
    });
  }

  // Lit reactive properties
  static get properties() {
    return {
      ...super.properties,
      title: { type: String },
      dddPrimary: { type: String, attribute: "ddd-primary" },
    };
  }

  // Lit scoped styles
  static get styles() {
    return [super.styles,
    css`
      :host {
        display: inline-block;
        color: var(--ddd-theme-primary);
        background-color: var(--ddd-theme-accent);
        font-family: var(--ddd-font-navigation);
      }
      .wrapper {
        margin: var(--ddd-spacing-2);
        padding: var(--ddd-spacing-2);
      }
      .card {
        background-color: var(--ddd-theme-default-red);
        width: 310px;
        height: 510px;
        border: 3px solid var(--ddd-theme-primary);
        padding: var(--ddd-spacing-0);
        margin: var(--ddd-spacing-2);
        overflow: hidden;
        border-radius: var(--ddd-radius-md);
        box-shadow: var(--ddd-boxShadow-sm);
        justify-content: space-between;
        display: grid;
        flex-direction: column;
        box-sizing: border-box;
      }

      .card-image {
        width: 100%;
        height: 200px;
        overflow: hidden;
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
        border-bottom: 12px solid var(--ddd-theme-default-nittanyNavy);

      }
      .card-image img {
        width: 100%;
        height: 100%;
        display: block;

      }

      card-title {
        padding: var(--ddd-spacing-2);
        font-size: var(--ddd-font-size-4);
        color: var(--ddd-theme-default-nittanyNavy);
      }
      card-text {
        padding: var(--ddd-spacing-4);
        font-size: var(--ddd-font-size-1);
        color: var(--ddd-theme-primary);
        margin: var(--ddd-spacing-4) var(--ddd-spacing-4) var(--ddd-spacing-4);
        text-align: left;

      }
      .button-container {
        text-align: center;
        margin-top: auto;
        padding-bottom: var(--ddd-spacing-4);
      }
      button {
        background-color: var(--ddd-theme-default-link);
        color: var(--ddd-theme-default-white);
        text-align: center;
        display: inline-block;
        font-size: var(--ddd-font-size-4xs);
        padding: var(--ddd-spacing-4);
        border-radius: var(--ddd-radius-md);
        width: 85%;
        box-sizing: border-box;
        margin: 0 auto;
        cursor: pointer;
        border: none;
      }
      button:hover {
        background-color: var(--ddd-theme-default-nittanyNavy);
        color: var(--ddd-theme-default-white);
      }
    `];
  }

  // Lit render the HTML
  render() {
    return html`
      <div class="wrapper">
        <div class="card">
          <div class="card-image">
            <img src="${this.getAttribute('data-image') || 'https://via.placeholder.com/350x200'}" alt="${this.title}" />
          </div>

          <div class="card-title">
            <h2>${this.title}</h2>
          </div>
          <div class="card-text">
          <slot></slot>
          </div>
          <div class="button-container">
            <a href="${this.getAttribute('data-link') || '#'}" target="_blank" rel="noopener">
              <button id="explore">Explore ></button>
            </a>
          </div>
        </div>
      </div>
    `;
  }

    /**
     * haxProperties integration via file reference
     */

  }

  globalThis.customElements.define(DddCard.tag, DddCard);
