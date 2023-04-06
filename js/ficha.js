const editables = document.querySelectorAll(".editable");

function setupEditable(element) {
  const defaultText = element.dataset.default;
  const inputId = element.dataset.input;
  const input = document.getElementById(inputId);

  // retonar(element)

  element.addEventListener('click', () => { 
    element.style.display = 'none';
    input.style.display = 'block';
    input.value = element.textContent
    input.focus();
  });

  input.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        input.display = 'block';
        input.style.display = 'none';
    }
  });

  input.addEventListener('blur', () => {
    const value = input.value.trim();
    if (value === '') {
      element.textContent = element.textContent;
    } else {
      element.textContent = value;
      salvaInfos(element)
    }
    input.style.display = 'none';
    element.style.display = 'block';
  });
}

editables.forEach((element) => {
  setupEditable(element);
})



function salvaInfos(element) {
  const inputId = element.dataset.input;
  const input = document.getElementById(inputId);
  const defaultTextParent = element.parentNode;
  const nomeInputs = defaultTextParent.dataset.nomeinputs;

  const fichaAtual = localStorage.getItem('fichaStatus');
  const novaficha = fichaAtual ? JSON.parse(fichaAtual) : {};

  novaficha[nomeInputs] = input.value;

  localStorage.setItem('fichaStatus', JSON.stringify(Object.assign({}, novaficha)));
}



function retonar (element) {
  const defaultTextParent = element.parentNode;
  const nomeInputs = defaultTextParent.dataset.nomeinputs;

  const defaultText = element.dataset.default
 
  const infoSalva = localStorage.getItem('fichaStatus')
  const infoFicha = JSON.parse(infoSalva);

  const nula = ''


  // if (infoFicha[nomeInputs] == nula) { 
  //   element.textContent = defaultText
  // } else {
  //   element.textContent = infoFicha[nomeInputs]
  // }


  element.textContent = infoFicha[nomeInputs] || defaultText 
}

