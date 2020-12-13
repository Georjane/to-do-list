
import svgSet from './svgSet';
import { cardImputToggleEvent } from './eventListeners';

import lcStSetter from './localstorage';

function createElement(type, className, parent) {
  let newEl = document.createElement(type);
  newEl.classList.add(className);
  parent.appendChild(newEl)
  return newEl
}

function createCard(title, items = []) {
  const content = document.querySelector('.content');
  let card = createElement('div', 'card', content)
  let cardTitle = createElement('div', 'card__title', card);
  let heading = createElement('h3', 'card__h3', cardTitle);
  heading.textContent = title
  let cardDelete = createElement('a', 'card__delete', cardTitle);
  svgSet(cardDelete, "icon-cancel-circle", "grey");

  cardDelete.addEventListener('click', () => {
    cardDelete.parentNode.parentNode.remove()
    lcStSetter()
  })


  cardDelete.classList.add('commonbtn');
  let cardEdit = createElement('a', 'card__edit', cardTitle);

  svgSet(cardEdit, "icon-document-edit", "grey");


  cardEdit.classList.add('commonbtn');
  let addItem = createElement('div', 'additem', card);
  let addItemInput = createElement('input', 'additem__input', addItem);
  addItemInput.setAttribute("type", "text");
  let btn = createElement('button', 'additem__btn', addItem);

  svgSet(btn, "icon-plus", "white");
  // btn.textContent = 'Add Item';

  let container = createElement('div', 'item_container', card);

  let cardAdd = createElement('div', 'card__add', card);
  let addItemBtn = createElement('a', 'card__addlink', cardAdd);
  svgSet(addItemBtn, "icon-plus", "grey");


  // inseting items into each card
  if (items.length > 0) {
    items.forEach(item => {
      createItem(container, item.title)
    });
  }
  //Event listeners
  cardImputToggleEvent(addItemBtn)
}

function createItem(parent, text) {
  let item = createElement('div', 'item', parent)
  let label = createElement('label', 'ch__container', item)
  label.textContent = text
  let checkoxInput = createElement('input', 'checkbox', label)
  checkoxInput.setAttribute('type', 'checkbox')
  const checkmark = createElement('span', 'checkmark', label)
  let itemEdit = createElement('span', 'item__edit', item)
  svgSet(itemEdit, "icon-document-edit", "grey");
  itemEdit.classList.add('commonbtn')
  let itemDelete = createElement('span', 'item__del', item);
  svgSet(itemDelete, "icon-bin", "grey");
  itemDelete.classList.add('commonbtn')
}

export { createCard, createItem }
