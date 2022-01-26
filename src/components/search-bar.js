import { LitElement, html, css, nothing } from 'lit';

class SearchBar extends LitElement {
  static get styles (){
    return css`
      .input{
          outline: none;
      }
    `;
  }

  static get properties() {
    return {
        value: { type: String },
        searchItem: { type: String },
        available: { attribute: false },
    };
  }

  constructor(){
      super();
      this.value = "";
      this.searchItem = "";
      this.available = false;
  }

  render() {
    return html`
      <div class="main-body">
        <input .value="${this.value}"
         @input=${(event) => this.value = event.target.value}
         @keydown=${(event)=> this.submit(event)}/>
      </div>
      <input type="checkbox" ?checked="${this.available}" id="itemavailable" name="itemavailable"
       @click=${this.toggleAvailable} value="Availabillity">
      <label for="itemavailable">Only Show Products in Stock</label>
      <item-list .search="${this.searchItem}"></item-list>
    `;
  }

  submit(event){
    if(event.key === "Enter"){
        this.searchItem = this.value;
        this.value = "";
    }
  }

  toggleAvailable(){
    this.available = !this.available;
  }

}
customElements.define('search-bar', SearchBar);