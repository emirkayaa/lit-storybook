import "./accordion.component";
import { AccordionProps } from "./accordionInterface";
import { TemplateResult, html } from "lit";

export default {
    title: "Molecules/Accordion",
    component: "accordion-component",
    argTypes: {
        items: { control: "object" },
        active: { control: "number" }
    },
    tags: ["autodocs"]

}

const Template =({items, active}:AccordionProps): TemplateResult => html`
        <accordion-component .items=${items} .active=${active}>
        <div slot="content-0">
            <p>Content 1</p>
        </div>
        <div slot="content-1">
            <p>Content 2</p>
        </div>
        <div slot="content-2">
            <p>Content 3</p>
        </div>
        </accordion-component>
    `
export const Default = Template.bind({});
Default.args = {
    items: [
        {title: "Title 1", content: ""},
        {title: "Title 2", content: ""},
        {title: "Title 3", content: ""}
    ],
    active: 0
}   
