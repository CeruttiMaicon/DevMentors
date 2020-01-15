class CountView extends HTMLElement {
  // Desafio 1
  // Criar um Custom Element que exibe um número de cliques em um botão
  // count-viewer (count) -> Botao foi clicado vezes
  // Botao
  // click -> incrementa o count do viewer

  constructor() {
    super();
    this.count = 0;
    this.innerHTML = `O botão foi clicado <b class="clicks">${this.count} </b> vezes`;
  }

  connectedCallback() {
    console.log("mounted CountView");
  }

  disconectCallback() {
    console.log("disconected");
  }
}

window.customElements.define("count-view", CountView);
var button = document.getElementById("clickme"),
  count = 0;
button.onclick = function() {
  count += 1;
  button.innerHTML = "Click: " + count;
};
