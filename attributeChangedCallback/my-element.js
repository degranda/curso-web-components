class myElement extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }
  static get observedAttributes() {
    return ["title", "parrafo", "img"];
  }
  attributeChangedCallback(attr, oldVal, newVal) {
    if (attr === "title") {
      this.title = newVal;
    }
    if (attr === "parrafo") {
      this.parrafo = newVal;
    }
    if (attr === "img") {
      this.img = newVal;
    }
  }
  getTemplate() {
    const template = document.createElement("template");
    template.innerHTML = `
      <section>
        <h2>${this.title}</h2>
        <div>
         <p>${this.parrafo}</p>
         <img src=${this.img}/>
        </div>
      </section>
      ${this.getStyles()}
    `;
    return template;
  }
  getStyles() {
    return `
      <style>
        h2 {
          color: red;
        }
      </style>
    `;
  }
  render() {
    this.shadowRoot.appendChild(this.getTemplate().content.cloneNode(true));
  }
  connectedCallback() {
    this.render();
  }
}
customElements.define("my-element", myElement);
