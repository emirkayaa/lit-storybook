import { Meta, StoryObj } from "@storybook/web-components";
import  "./card.component";
import { CardInterface } from "./card";

const meta: Meta = {
    title: "Molecules/Card/Default",
    tags: ['autodocs'],
    component: 'card-component',
    render: (args: CardInterface) => `<card-component title="${args.title}" description="${args.description}"></card-component>`,
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
    },
    } 
    export default meta;

    export const Default: StoryObj<CardInterface> =  {
        args: {
            title: "Card Title",
            description: "Card Descriptions",
        },
    }
