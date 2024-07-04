import { LitElement, css, html } from "lit";
import { property, customElement } from "lit/decorators.js";
import { TabInterface, TabsProps } from "./tabs";

@customElement("tabs-component")
export class TabsComponent extends LitElement {
  @property({ type: Array }) tabs: TabInterface[] = [];
  @property({ type: Number }) activeTab = 0;

  static styles = css`
    .tabs {
      display: flex;
      cursor: pointer;
      border-bottom: 2px solid #ccc;
    }

    .tab {
      padding: 10px 20px;
      margin-right: 2px;
    }

    .tab.active {
      border-bottom: 2px solid #007bff;
      color: #007bff;
    }
  `;

  private selectTab(index: number) {
    this.activeTab = index;
  }

  render() {
    const activeTabContent = this.tabs[this.activeTab]?.content || 'No content available';

    return html`
      <div class="tabs">
        ${this.tabs.map(
          (tab, index) => html`
            <div
              class="tab ${this.activeTab === index ? 'active' : ''}"
              @click="${() => this.selectTab(index)}"
            >
              ${tab.label}
            </div>
          `
        )}
      </div>
      <div class="content">
        <slot name="content-${this.activeTab}">${activeTabContent}</slot>
      </div>
    `;
  }
}
