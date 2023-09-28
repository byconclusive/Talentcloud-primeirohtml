//---- Atividade de impressão function no console
function conexao() {
  console.log("Conexão realizada com sucesso!");
}

conexao();
conexao();
conexao();

//---- Atividade manipulando o DOM com innerText e innerHTML
let titulo = document.getElementById("titulo");
let listaNOrdenada = document.querySelector("ul");
let site = document.getElementById("prozeducacao");
let listaOrdenada = document.getElementById("lista-ordenada");

titulo.innerText = "Manipulando o DOM com innerText";
site.innerText = "Platforma da Proz";

listaNOrdenada.innerHTML = `
<h2>Conteúdo programado</h2>
<ul>
    <li>HTML</li>
    <li>CSS</li>
    <li>JavaScript</li>
    <li>Banco de dados</li>
</ul>
`;

listaOrdenada.innerHTML = ` <h3>Redes Sociais</h3>
<ol>
    <li><a href="http://www.facebook.com">Facebook</a></li>
    <li><a href="http://www.twitter.com">Twitter</a></li>
    <li><a href="http://www.instagram.com">Instagram</a></li>
</ol>`;

//---- Atividade Produto a vendaa ----

let vendas = document.getElementById("vendas");
vendas.innerHTML = `<h2>Vendas de usados!</h2>
<h3>Notebook usado</h3>
<img href="/ds-js01/calculadora2numer.js" alt="Foto notebook">
<p>Notebook com pouco tempo de uso, acompanha todos os acessorios e sem marcas de uso aparente!</p>
<p>R$ 400,00</p>
<button>Compra</button>`;
