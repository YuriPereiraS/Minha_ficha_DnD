const editables = document.querySelectorAll(".editable");

function setupEditable(element) {
  const defaultText = element.dataset.default;
  const inputId = element.dataset.input;
  const input = document.getElementById(inputId);

  element.addEventListener('click', () => {
    element.style.display = 'none';
    input.style.display = 'block';
    input.focus();
  });

  input.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        input.display = 'block';
        input.style.display = 'none';
        input.textContent = input.value
    }
  });

  input.addEventListener('blur', () => {
    const value = input.value.trim();
    if (value === '') {
      element.textContent = defaultText;
    } else {
      element.textContent = value;
    }
    input.style.display = 'none';
    element.style.display = 'block';
    salvaInfos(element)
  });

  

}

editables.forEach((element) => {
  setupEditable(element);
})

const infoFicha = {};


function salvaInfos (element) {
  const inputId = element.dataset.input;
  const input = document.getElementById(inputId);
  const defaultTextParent = element.parentNode;
  const nomeInputs = defaultTextParent.dataset.nomeinputs;

  infoFicha[nomeInputs] = input.value;

  const fichaAtual = localStorage.getItem('fichaStatus');
  const novaficha = fichaAtual ? JSON.parse(fichaAtual) : [];
  novaficha.push(infoFicha);

  localStorage.setItem('ficha', JSON.stringify(novaficha));
}

