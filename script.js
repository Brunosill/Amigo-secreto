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

function abrirPopup(){
  document.getElementById("overlay").style.display = "block";
}

function fecharPopup(){
  document.getElementById("overlay").style.display = "none";
}

function definirAmigos(lista) {
  lista.length
}

function sortearNome(){
  let numeroAleatorio = ""
}


function limparCampo() {
  nome = document.querySelector('input');
  nome.value= '';
}
