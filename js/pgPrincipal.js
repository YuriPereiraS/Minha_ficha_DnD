// ----- carrossel -----

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