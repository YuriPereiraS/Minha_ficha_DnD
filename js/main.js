
// ---- menu sanduiche ----
const corpo = document.querySelector('body')
const btnMenu = document.querySelector('.cabecalho-menu-sanduiche-btn');
const listaMenu = document.querySelector('.cabecalho-menu-sanduiche-lista');


btnMenu.addEventListener('click', (event) => {
    event.stopPropagation();
    const visivel = 'cabecalho-menu-sanduiche-lista-visivel';
  
    if (listaMenu.classList.contains(visivel)) {
      listaMenu.classList.remove(visivel);
    } else {
      listaMenu.classList.add(visivel);
    }   
  });
  
corpo.addEventListener('click', (event) => {
    const visivel = 'cabecalho-menu-sanduiche-lista-visivel';
  
    if (event.target !== listaMenu && listaMenu.classList.contains(visivel)) {
        listaMenu.classList.remove(visivel);
    }   
  });


const divCabecalho = document.querySelector('.cabecalho');
const divCabecalhoContainer = document.querySelector('.cabecalho-container');
const menuSanduiche = document.querySelector('.menuSanduiche-ul');

function atualizaDistancia(event) {
    const larguraAtual = divCabecalho.clientWidth;
    const larguraAtualDiv = divCabecalhoContainer.clientWidth;
    const valorCorreto = (larguraAtual / 2) + (larguraAtualDiv / 2) - 10;
    

    if (larguraAtual > 592) {
        listaMenu.style.setProperty("left", valorCorreto + "px"); 
    }   else {
        listaMenu.style.setProperty("left", 'auto');
    }

    window.addEventListener('resize', atualizaDistancia);
}

atualizaDistancia();



// ---- formulario contato ----

const submitForme = document.querySelector('.formularioDeContato')

submitForme.addEventListener('submit', function(event) {
  event.preventDefault();

  const nome = submitForme.elements['name'].value;
  const email = submitForme.elements['email'].value;
  const mensagem = submitForme.elements['Mensagem'].value;

  submitForme.reset();

  let itemsContato = JSON.parse(localStorage.getItem('itemsContato')) || []

  const novoContato = {
    nome: nome,
    email: email,
    mensagem: mensagem
  };

  itemsContato.push(novoContato);

  localStorage.setItem('itemsContato', JSON.stringify(itemsContato));

});

