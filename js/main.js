const btnMenu = document.querySelector('.cabecalho-menu-sanduiche-btn');
const listaMenu = document.querySelector('.cabecalho-menu-sanduiche-lista')

btnMenu.addEventListener('click', () => {
    listaMenu.classList.toggle('cabecalho-menu-sanduiche-lista-visivel')
});

const divCabecalho = document.querySelector('.cabecalho')
const divCabecalhoContainer = document.querySelector('.cabecalho-container')
const menuSanduiche = document.querySelector('[data-menuSanduiche]')


function atualizaDistancia() {
    const larguraAtual = divCabecalho.clientWidth;
    const larguraAtualDiv = divCabecalhoContainer.clientWidth;

    const valorCorreto = (larguraAtual / 2) + (larguraAtualDiv / 2) - 10;

    menuSanduiche.style.setProperty("left", valorCorreto + "px");
}

atualizaDistancia();

window.addEventListener('resize', atualizaDistancia)
