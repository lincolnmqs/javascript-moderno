// Modificar Elementos
function modificarApenasUmElemento() {
  const primeiroElemento = document.querySelector('.element');
  primeiroElemento.style['background-color'] = 'red';
}

//modificarApenasUmElemento();

function modificarTodosElementos() {
  const elementos = document.querySelectorAll('.element');
  elementos.forEach(elemento => {
    elemento.style['background-color'] = 'red';
  });
}

//modificarTodosElementos();

// exemplo pegar todas as imagens e trocar por uma definida igual ao plugin existente

document.querySelectorAll('img').forEach(img => img.src = "link da imagem")
document.querySelectorAll('div').forEach(div => div.style['background-color'] = 'black')


// Criar Elementos

function criarElemento() {
  const elemento = document.createElement('div');
  const elemento2 = document.createElement('div');
  const elemento3 = document.createElement('img');
  const elementoPai = document.querySelector('#elements-camp');

  elemento.classList.add('element');
  elemento2.classList.add('element');
  elemento2.style['background-color'] = 'red';
  elemento3.src = 'img/fundo-2.jpg';
  elemento3.style['width'] = '100%';

  elementoPai.appendChild(elemento);
  elementoPai.appendChild(elemento2);
  elementoPai.appendChild(elemento3);
}

//criarElemento();

function limparElementoPai() {
  const elementoPai = document.querySelector('#elements-camp');
  elementoPai.innerHTML = '';
}

// Mudar Plano de Fundo
let numero = 2;

function mudarPlanoDeFundo(numero) {
  const fundo = document.querySelector('header'); // pega todos seletores do header no documento
  fundo.style['background-image'] = `url(img/fundo-${numero}.jpg)`;
}

function atualizarFundo() {
  mudarPlanoDeFundo(numero);

  if(numero === 3)
  	numero = 1;
  else
    numero++;
}

setInterval(atualizarFundo, 3000); // função temporizadora, executa outra função em determinado tempo

// Eventos

function mostrarData() {
  const data = new Date();
  const elemento = document.querySelector('#date-value');

  const horas = data.getHours();
  const minutos = data.getMinutes();
  const segundos = data.getSeconds();

  elemento.innerText = `${horas}:${minutos}:${segundos}`;
}

let valorTotal = 0;

function somarValor(elemento, valor) {
  const elementoValorTotal = document.querySelector('#total-value');
  const estaMarcado = elemento.checked;

  if(estaMarcado)
    valorTotal += valor;
  else
  	valorTotal -= valor;

  elementoValorTotal.innerText = `R$${valorTotal.toFixed(2)}`;
}

// Ajax

async function pesquisarCEP(evento) {
  evento.preventDefault();
  const cep = document.querySelector('#cep-input').value;

  if(!cep)
  	return alert('Digite o CEP');

  if(cep.length !== 8)
  	return alert('CEP Inválido');

  try {
  	const chamada = await fetch(`https://api.postmon.com.br/v1/cep/${cep}`);
  	const dadosDoCEP = await chamada.json();
  	console.log(dadosDoCEP);

  	const nomeDaCidade = document.querySelector('#theCityIs-name');
  	const estadoDaCidade = document.querySelector('#theCityIs-state');
    const areaDaCidade = document.querySelector('#theCityIs-area');

  	nomeDaCidade.innerText = dadosDoCEP.cidade;
  	estadoDaCidade.innerText = dadosDoCEP.estado;
    areaDaCidade.innerText = `${dadosDoCEP.cidade_info.area_km2} km2`;
  } catch(error) {
  	alert('Erro ao Pesquisar o CEP');
  	console.log(error);
  }
}

document.querySelector('form').addEventListener('submit', pesquisarCEP);

