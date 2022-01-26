import { LitElement, html, css, nothing } from 'lit';
import { items } from '../utils/modifyList';
import { map } from 'lit/directives/map.js';

class ItemList extends LitElement {
    static get styles (){
        return css`
            h5{
                margin: 10px 0px;
            }
        `;
    }

    static get properties(){
        return {
            search: { type: String },
            showAvailableOnly: { type: Boolean },
        }
    }

    constructor(props) {
        super(props)
        this.showAvailableOnly = false;
    }
    

    render() {
        return html`
            <div>
                ${this.showAvailableOnly}
                <data-pair name="Name"
                 value="Price" bold="true"></data-pair>
                ${map(items, (comp) => this.itemCategory(comp))}
            </div>
        `;
    }

    itemCategory(category){
        let items = [ ...category.items];
        if(this.search){
            items = items.filter((item)=> {
                let pos = item.name.toLowerCase().search(this.search.toLowerCase())
                if(pos>=0){
                    return item;
                }
            })
        }

        console.log(this.showAvailableOnly);
        if(this.showAvailableOnly){
            items = items.filter((item)=>{
                if(item.number > 0){
                    return item;
                }
            })
        }

        if(items.length === 0){
            return nothing;
        }else{
            return html`
                <h5>${category.itemCategory}</h5>
                ${
                    map(
                        items,
                        (item)=>{
                            if(item.number <= 0){
                                return html`<data-pair .name=${item.name}
                                 color="red" .value=${item.price}></data-pair>`
                            }else{
                                return html`<data-pair .name=${item.name}
                                 .value=${item.price}></data-pair>`
                            }
                        }
                    )
                }
            `;
        }
    }

}

customElements.define('item-list', ItemList);