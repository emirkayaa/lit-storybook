
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
  <tabs-component .tabs=${tabs} .activeTab=${activeTab}>
    <div slot="content-0">
      <p>Content 1</p>
    </div>
    <div slot="content-1">
      <p>Content 2</p>
    </div>
    <div slot="content-2">
      <p>Content 3</p>
    </div>
  </tabs-component>
`;

export const Default = Template.bind({});
Default.args = {
  tabs: [
    { label: 'Tab 1', content: '' },
    { label: 'Tab 2', content: '' },
    { label: 'Tab 3', content: '' }
  ],
  activeTab: 0
};

