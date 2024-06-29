import { LitElement,html,css } from "lit";
import { customElement, property } from "lit/decorators.js";
import "./card.css";

@customElement("card-component")
export class CardComponent extends LitElement {
  @property({ type: String }) title = "";
  @property({ type: String }) description = "";

    static styles = css `
    .card {
    background-color: #fff;
    border-radius: 4px;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
    padding: 16px;

    }
    .card-header {
    font-size: 24px;
    font-weight: 600;
    margin-bottom: 16px;

    }
    `

  render() {
    return html`
      <div class="card">
        <div class="card-header">
        <h2>${this.title}</h2>
        </div>
        <div class="card-body">
            <p>${this.description}</p>
        </div>
      </div>
    `;
  }
}