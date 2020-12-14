
import svgSet from './svgSet';

function cardImputToggleEvent(button) {
  button.addEventListener('click', () => {
    const input = button.parentNode.parentNode.children[1];
    input.classList.toggle('additmVisible');
    if (input.classList.contains('additmVisible')) {
      input.firstChild.focus();
    }
  });
}

function createCatFunctionality() {
  const btn = document.querySelector('.showCatBtn');
  const btninput = document.querySelector('.category__btn');
  const input = document.querySelector('.category__input');
  svgSet(btninput, 'icon-plus', 'white');

  btn.addEventListener('click', () => {
    input.focus();
    const cat = document.querySelector('.category');
    function removeCurrent(curr) {
      const current = document.querySelector(`${curr}`).cloneNode(true);
      const clone = current.cloneNode(true);
      clone.style.fill = 'white';
      btn.innerHTML = '';
      btn.appendChild(clone);
    }
    if (cat.classList.contains('display')) {
      removeCurrent('.icon-plus');
    } else {
      removeCurrent('.icon-minus');
    }
    cat.classList.toggle('display');
  });
}


function createCatBtn(createCard, lcStSetter) {
  const btninput = document.querySelector('.category__btn');
  const input = document.querySelector('.category__input');
  btninput.addEventListener('click', () => {
    if (input.value.length < 3) {
      input.value = '';
      input.classList.add('error_class')
      input.setAttribute('placeholder', 'Your category title is either empty or too short!')
      return;
    } else {      
      input.classList.remove('error_class')
      input.setAttribute('placeholder', '')
      createCard(input.value);
      input.value = '';
      lcStSetter();
    }
  });

  input.addEventListener('keyup', (event) => {
    if (event.keyCode === 13) {
      event.preventDefault();
      btninput.click();
    }
  });
}


export { createCatFunctionality, cardImputToggleEvent, createCatBtn };
