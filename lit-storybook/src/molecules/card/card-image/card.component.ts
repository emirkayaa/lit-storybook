import { LitElement,html,css } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("image-component")
export class ImageComponent extends LitElement {
    @property({ type: String }) title = "";
    @property({ type: String }) description = "";
    @property({ type: String }) image = "";

    static styles = css`
    .card {
        width: 300px;
        border-radius: 10px;
        box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
        overflow: hidden;
    }
    
    .card-image {
        width: 100%;
        height: 200px;
        overflow: hidden;
    }
    .card-image img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    
    .card-content {
        padding: 20px;
    }
    .card-title {
        font-size: 24px;
        font-weight: 600;
        margin: 0 0 10px 0;
    }
    
    .card-description {
        font-size: 16px;
        margin: 0;
    }
    `;

    render() {
        return html`
        <div class="card">
            <div class="card-image">
                <img src=${this.image} alt="Card Image">
            </div>
                <div class="card-content">
                   <div>
                   <h2 class="card-title">${this.title}</h2>
                   <p class="card-description">${this.description}</p>
                   </div>
                <div>
             </div>
            </div>
        </div>`
    }
}