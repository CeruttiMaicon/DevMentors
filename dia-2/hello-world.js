class HelloWorld extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = `Hello <b class="hello-name">${this.name}</b>`;
  }
  get name() {
    return this.getAttribute("name");
  }

  set name(value) {
    this.setAttribute("name", value);
  }
  connectedCallback() {
    console.log("mounted HelloWord");
  }

  disconectCallback() {
    console.log("disconected");
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    if ((attrName = "Name" && oldVal !== newVall)) {
      this.name = newVal;
      const helloName = this.querySelector(".hello-name");
      helloName.innerHTML = this.name;
    }
  }

  static get observedAttribute() {
    return ["name"];
  }
}

window.customElements.define("hello-world", HelloWorld);
