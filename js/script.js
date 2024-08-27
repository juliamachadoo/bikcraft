//Verificar quais links da pagina estao ativos, deixar a barra embaixo da página selecionada
const links = document.querySelectorAll('.header-menu a')


function ativarLink(link){
  const url = location.href;
  const href = link.href;

  if (url.includes(href)){
    link.classList.add('ativo') 
  }
}
links.forEach(ativarLink);

//Deixar os radios buttons acionados de acordo com a opcao esolhida. Pega os valores da url

const parametros = new URLSearchParams(location.search)

function ativarProduto(parametro){
  const elemento = document.getElementById(parametro);
  if(elemento){
    elemento.checked = true;
  console.log(elemento);
  }
}
parametros.forEach(ativarProduto);


//Perguntas frequentes
const perguntas = document.querySelectorAll('.perguntas button')

function ativarPergunta(event){
  const pergunta = event.currentTarget;
  const controls = pergunta.getAttribute("aria-controls");
  const resposta = document.getElementById(controls);


  resposta.classList.toggle("ativa");

  const possuiClasseAtiva = resposta.classList.contains('ativa')
  pergunta.setAttribute('aria-expanded', possuiClasseAtiva);  

}

function eventosPerguntas(pergunta){
  pergunta.addEventListener('click', ativarPergunta);
  
}
perguntas.forEach(eventosPerguntas);


//Trocar imagens de lugar, outrocar o src e o alt

const listaBicicletas = document.querySelectorAll('.bicicleta-imagens img')
const galeriaContainer = document.querySelector('.bicicleta-imagens')

function trocarImagem(event){
  const imagemAtual = event.currentTarget;
  const media = matchMedia('(min-width:1000px)').matches;
  if (media){
  galeriaContainer.prepend(imagemAtual)
  }
}

function eventosListaBicicletas(img){
  img.addEventListener('click', trocarImagem)
}

listaBicicletas.forEach(eventosListaBicicletas)

//Animação plugin, verifica se o plugin existe
if(window.SimpleAnime){
  new SimpleAnime();
}
