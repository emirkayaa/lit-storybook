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
        <accordion-component .items=${items} .active=${active}></accordion-component>
    `
export const Default = Template.bind({});
Default.args = {
    items: [
        {title: "Title 1", content: "Content 1"},
        {title: "Title 2", content: "Content 2"},
        {title: "Title 3", content: "Content 3"}
    ],
    active: 0
}   
