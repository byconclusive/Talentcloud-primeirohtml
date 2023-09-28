function conexao() {
  console.log("Conexão realizada com sucesso!");
}

conexao();
conexao();
conexao();

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
