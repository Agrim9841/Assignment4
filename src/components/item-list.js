import { LitElement, html, css, nothing } from 'lit';
import { items } from '../utils/modifyList';
import { map } from 'lit/directives/map.js';

class ItemList extends LitElement {
    static get styles (){
        return css`
            .input{
                outline: none;
            }
        `;
    }

    static get properties(){
        return {
            search: { type: String }
        }
    }

    render() {
        return html`
            <div>
                ${this.search}
                ${
                    map(items, (comp) => html`
                        <h3>${comp.itemCategory}</h3>
                    `)
                }
            </div>
        `;
    }

}

customElements.define('item-list', ItemList);