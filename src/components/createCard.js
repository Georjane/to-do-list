
import svgSet from './svgSet';
import { cardImputToggleEvent } from './eventListeners';

import lcStSetter from './localstorage';

function createElement(type, className, parent) {
  const newEl = document.createElement(type);
  newEl.classList.add(className);
  parent.appendChild(newEl);
  return newEl;
}

function createItem(parent, text, checked = false) {
  const item = createElement('div', 'item', parent);
  const lab = createElement('label', 'ch__container', item);
  lab.textContent = text;

  const checkboxInput = createElement('input', 'checkbox', lab);
  checkboxInput.setAttribute('type', 'checkbox');

  checkboxInput.addEventListener('change', () => {
    if (checkboxInput.checked) {
      lab.classList.add('completed');
      lcStSetter();
    } else {
      lab.classList.remove('completed');
      lcStSetter();
    }
  });


  if (checked) {
    checkboxInput.checked = true;
    lab.classList.add('completed');
  }


  createElement('span', 'checkmark', lab);

  const itemDelete = createElement('span', 'item__del', item);
  svgSet(itemDelete, 'icon-bin', 'grey');
  itemDelete.classList.add('commonbtn');
  itemDelete.addEventListener('click', () => {
    item.remove();
    lcStSetter();
  });
}

function createCard(title, items = []) {
  const content = document.querySelector('.content');
  const card = createElement('div', 'card', content);
  const cardTitle = createElement('div', 'card__title', card);
  const heading = createElement('h3', 'card__h3', cardTitle);
  heading.textContent = title;
  const cardDelete = createElement('a', 'card__delete', cardTitle);
  svgSet(cardDelete, 'icon-cancel-circle', 'grey');

  cardDelete.addEventListener('click', () => {
    cardDelete.parentNode.parentNode.remove();
    lcStSetter();
  });

  cardDelete.classList.add('commonbtn');
  const addItem = createElement('div', 'additem', card);
  const addItemInput = createElement('input', 'additem__input', addItem);
  addItemInput.setAttribute('type', 'text');
  const btn = createElement('button', 'additem__btn', addItem);

  svgSet(btn, 'icon-plus', 'white');

  const container = createElement('div', 'item_container', card);
  btn.addEventListener('click', () => {
    if (addItemInput.value === '') {
      addItemInput.classList.add('error_class');
      addItemInput.setAttribute('placeholder', 'Empty item title not permitted!');
    } else {
      const item = addItemInput.value;
      addItemInput.classList.remove('error_class');
      addItemInput.setAttribute('placeholder', '');
      createItem(container, item);
      lcStSetter();
      addItemInput.value = '';
    }
  });

  addItemInput.addEventListener('keyup', (event) => {
    if (event.keyCode === 13) {
      event.preventDefault();
      btn.click();
    }
  });


  const cardAdd = createElement('div', 'card__add', card);
  const addItemBtn = createElement('a', 'card__addlink', cardAdd);
  svgSet(addItemBtn, 'icon-plus', 'grey');


  // inseting items into each card
  if (items.length > 0) {
    items.forEach(item => {
      createItem(container, item.title, item.checked);
    });
  }
  // Event listeners
  cardImputToggleEvent(addItemBtn);
}

export { createCard, createItem };
