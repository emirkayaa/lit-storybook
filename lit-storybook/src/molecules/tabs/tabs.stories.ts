
import { html, TemplateResult } from 'lit';
import './tabs.component';
import { TabsProps } from './tabs';

export default {
  title: 'Molecules/Tabs',
  component: 'tabs-component',
  argTypes: {
    tabs: { control: 'object' },
    activeTab: { control: 'number' }
  },
  tags: ['autodocs']
};


const Template = ({ tabs, activeTab }: TabsProps): TemplateResult => html`
  <tabs-component .tabs=${tabs} .activeTab=${activeTab}></tabs-component>
`;

export const Default = Template.bind({});
Default.args = {
  tabs: [
    { label: 'Tab 1', content: 'Content 1' },
    { label: 'Tab 2', content: 'Content 2' },
    { label: 'Tab 3', content: 'Content 3' }
  ],
  activeTab: 0
};

