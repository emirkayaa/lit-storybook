export interface TabInterface {
    label: string;
    content: string;
}

export interface TabsProps {
    tabs: TabInterface[];
    activeTab: number;
}