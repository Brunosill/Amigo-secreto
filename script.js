let listaDeAmigos =[];

function exibirLista() {
  let quadro = document.querySelector('.quadro-ap');
  quadro.innerHTML = listaDeAmigos.join('<br>');
  
}

function adicionarNome(){
  let nome = document.querySelector('input').value;
  if (nome.length > 2) {
    nome.length
    listaDeAmigos.push(nome);
    exibirLista();
    limparCampo();
  }
}

function abrirPopup(mensagem){
  document.getElementById("overlay").style.display = "block";
  let popupP = document.getElementById("textoPopUp");
  popupP.innerHTML = mensagem;
}

function fecharPopup(){
  document.getElementById("overlay").style.display = "none";
}

function sortearNome(){
  if (listaDeAmigos != 0){
    let numero = Math.floor(Math.random() * listaDeAmigos.length);
    let amigo = listaDeAmigos[numero];
    console.log(amigo);
    abrirPopup(amigo);
    listaDeAmigos.splice(listaDeAmigos.lastIndexOf(amigo), 1);
    console.log(listaDeAmigos);
    exibirLista();
  }
  
}


function limparCampo() {
  nome = document.querySelector('input');
  nome.value= '';
}
