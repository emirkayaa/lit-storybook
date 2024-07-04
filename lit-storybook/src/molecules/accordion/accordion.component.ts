import { LitElement,html,css } from "lit";
import { customElement,property } from "lit/decorators.js";

@customElement('accordion-component')

export class AccordionComponent extends LitElement {
    @property ({type : Array}) items = [];
    @property ({type : Number}) active = 0;

    static styles = css `
    .accordion{
        display: flex;
        flex-direction: column;
    }
    .accordion-item{
        background-color: #f9f9f9;
        margin-bottom: 10px;
        border-radius: 13px;
    }
    .accordion-title{
        background-color: #f1f1f1;
        padding: 10px;
        font-size: 20px;
        border-radius: 13px;
        cursor: pointer;
        display: flex;
    }
    .accordion-title:hover{
    background-color: #e1e1e1;
    }
    .accordion-content{
        padding: 10px;
        border-radius: 10px;
    }
    .accordion-icon{
    margin-right: 10px;
    font-size: 20px;
    font-weight: bold;
    }
    `


    activeItem(index: number) {
        this.active = this.active === index ? -1 : index;
    }
     render() {
        return html `
            <div class="accordion">
            ${this.items.map((item, index) => html`
                <div class="accordion-item">
                    <div class="accordion-wrapper">
                    <div class="accordion-title" @click=${() => this.activeItem(index)}>
                    <div class="accordion-icon">
                        <span class="">${this.active === index ? '-' : '+'}</span>
                    </div>     
                    ${item.title}
                    </div>
                    
                    </div>
                    <div class="accordion-content" style="display: ${this.active === index ? 'block' : 'none'};">
                        <slot name="content-${index}"></slot>
                    </div>    
                </div>
                
                `)}
            </div>
        `
    }
}