class HelloWorld extends HTMLElement {

    constructor() {
        super();
        this.innerHTML = `
            Hello <b class="hello-name">${this.name}</b>
        `;
    }


    get name() {
        return this.getAttribute('name');
    }

    set name(value) {
        this.setAttribute('name', value);
    }

    connectedCallback() {
        console.log('connected');
    }


    disconnectedCallback() {
        console.log('diconnected');
    }


    attributeChangedCallback(attrName, oldVal, newVal) {
        console.log('changed', attrName, oldVal, newVal);
        if(attrName === 'name' && oldVal !== newVal) {
            this.name = newVal;
            const helloName = this.querySelector('.hello-name') ;
            helloName.innerHTML = this.name;
        }
    }

    static get observedAttributes() {
        return ['name'];
    }

}

window.customElements.define('hello-world', HelloWorld);