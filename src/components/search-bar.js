import { LitElement, html, css, nothing } from 'lit';

class SearchBar extends LitElement {
  static get styles (){
    return css`
      .inputbar{
          outline: none;
          width: 100%;
          margin-bottom: 10px;
      }
    `;
  }

  static get properties() {
    return {
        value: { type: String },
        searchItem: { type: String },
        available: { type: Boolean },
    };
  }

  constructor(){
      super();
      this.value = "";
      this.searchItem = "";
      this.showAvailableOnly = false;
  }

  render() {
    return html`
      <div class="main-body">
        <input .value="${this.value}" class="inputbar"
         @input=${(event) => this.value = event.target.value}
         @keydown=${(event)=> this.submit(event)}/>
      </div>
      <input type="checkbox" ?checked="${this.showAvailableOnly}" id="itemavailable" name="itemavailable"
       @click=${this.toggleAvailable} value="Availabillity">
      <label for="itemavailable">Only Show Products in Stock</label>

      <item-list .search="${this.searchItem}" .showAvailableOnly=${this.showAvailableOnly}></item-list>
    `;
  }

  submit(event){
    if(event.key === "Enter"){
      this.searchItem = this.value;
      this.value = "";
    }
  }

  toggleAvailable(){
    this.showAvailableOnly = !this.showAvailableOnly;
  }

}
customElements.define('search-bar', SearchBar);