import { Meta, StoryObj } from "@storybook/web-components";
import  "./card.component";
import { CardInterface } from "./card";
import { html } from "lit";

const meta: Meta = {
    title: "Molecules/Card/İmage Card",
    tags: ['autodocs'],
    component: 'image-component',
    render: (args: CardInterface) => html`<image-component image=${args.image} title="${args.title}" description="${args.description} "></image-component>`,
    argTypes: {
        title: {
         control:  { type: "text" },
         description: "Title of the card",
         table: {
            type: { summary: "string" },
            defaultValue: { summary: "''" }
         }
        },
        description: { control: "text" },
        image: { control: "text"}
    },
    } 
    export default meta;

    export const Default: StoryObj<CardInterface> =  {
        args: {
            title: "Card Title",
            description: "Card Descriptions",
            image: "https://via.placeholder.com/300"
        },
    }
