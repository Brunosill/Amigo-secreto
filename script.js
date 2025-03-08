let listaDeAmigos =[];

function exibirNomes(texto) {
  let quadro = document.querySelector('.quadro-ap');
  quadro.innerHTML = texto;
  
}

function adicionarNome(){
  let nome = document.querySelector('input').value;
  exibirNomes(nome);
}

function sortearNome(){
  let numeroAleatorio = ""
}


function limparCampo() {
  nome = document.querySelector('input');
  nome.value= '';
}
