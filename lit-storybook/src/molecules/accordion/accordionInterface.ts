export interface AccordionItem {
    title: string;
    content: string;
}

export interface AccordionProps {
    items: AccordionItem[];
    active: number;
}