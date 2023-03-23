



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
    const meio = larguraAtual / 2
    

    if (larguraAtual > 592) {
        listaMenu.style.setProperty("left", valorCorreto + "px"); 
    }   else {
        listaMenu.style.setProperty("left", 'auto');
    }

    window.addEventListener('resize', atualizaDistancia);
}

atualizaDistancia();

// -----

let slideIndex = 0;
const slides = document.getElementsByClassName("carousel-paginaPrincipal-item");

const btnSeguir = document.querySelector(".carousel-paginaPrincipal-botaoSegir")
const btnVoltar = document.querySelector(".carousel-paginaPrincipal-botaoVoltar")



function avancaSlide() {
    if (slideIndex < slides.length -5) {
      slideIndex ++;
    } else {
      slideIndex = 0;
    }

    atualizaSlide();
}

function voltaSlide() {
    if (slideIndex > 0) {
      slideIndex --
    } else {
      slideIndex = slides.length -5;
    }

    atualizaSlide();   
}


function atualizaSlide() {
    for (let i = 0; i < slides.length; i++) {
      if (i >= slideIndex && i < slideIndex + 5 ) { 
        slides[i].style.display = "block";
        console.log(i)
      } else {
        slides[i].style.display = "none";
      }
    }
    
}


btnSeguir.addEventListener('click', () => {
    avancaSlide()
});

btnVoltar.addEventListener('click', () => {
    voltaSlide() 
});