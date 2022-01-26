import { LitElement, html, css } from 'lit';
import { styleMap } from 'lit-html/directives/style-map.js';

class DataPair extends LitElement {
    static get styles (){
        return css`
            .main-body{
                width: 100%;
                display: flex;
            }
            .child{
                flex: 0.5;
            }
        `;
    }

    static get properties(){
        return {
            name: { type: String },
            value: { type: String },
            bold: { type: Boolean},
            color: { type: String },
        }
    }

    constructor(props) {
        super(props)
        
        this.name = "Name";
        this.value = "0";
        this.bold = false;
    }
    

    render() {
        let styles = { fontWeight: this.bold? "bold": "none", color: this.color? this.color: "black"}
        return html`
            <div class="main-body" style=${styleMap(styles)}>
                <div class="child">${this.name}</div>
                <div class="child">${this.value}</div>
            </div>
        `;
    }
}

customElements.define('data-pair', DataPair);