
function createElement(type, className, parent) {
  let newEl = document.createElement(type);
  newEl.classList.add(className);
  parent.appendChild(newEl)
  return newEl
}

function createCard(title) {
  const content = document.querySelector('.content');
  let card = createElement('div', 'card', content)
  let cardTitle = createElement('div', 'card__title', card);
  let heading = createElement('h3', 'card__h3', cardTitle);
  heading.textContent = title
  let cardDelete = createElement('a', 'card__delete', cardTitle);
  cardDelete.classList.add('commonbtn');
  let cardEdit = createElement('a', 'card__edit', cardTitle);
  cardEdit.classList.add('commonbtn');
  let addItem = createElement('div', 'additem', card);
  let addItemInput = createElement('input', 'additem__input', addItem);
  addItemInput.setAttribute("type", "text");
  let btn = createElement('button', 'additem__btn', addItem);
  btn.textContent = 'Add Item';

  let container = createElement('div', 'item_container', card);
  let cardAdd = createElement('div', 'card__add', card);
  let addItemBtn = createElement('a', 'card__addlink', cardAdd);
}

function createItem(parent, text) {
  let item = createElement('div', 'item', parent)
  let label = createElement('label', 'ch__container', item)
  label.textContent = text
  let checkoxInput = createElement('input', 'checkbox', label)
  checkoxInput.setAttribute('type', 'checkbox')
  const checkmark = createElement('span', 'checkmark', label)
  let itemEdit = createElement('span', 'item__edit', item)
  itemEdit.classList.add('commonbtn')
  let itemDelete = createElement('span', 'item__del', item)
  itemDelete.classList.add('commonbtn')

}

export { createCard, createItem }
// const content = document.querySelector('.content');

//   category.items.forEach(i => {
//     const item = document.createElement('div');
//     const label = document.createElement('label');
//     const checkoxInput = document.createElement('input');
//     const checkmark = document.createElement('span');
//     const itemEdit = document.createElement('a');
//     const itemDelete = document.createElement('a');
//     label.textContent = i
//     item.classList.add('item');
//     label.classList.add('ch__container');
//     checkoxInput.classList.add('checkbox');
//     checkmark.classList.add('checkmark');
//     itemEdit.classList.add('item__edit', 'commonbtn');
//     itemDelete.classList.add('item__del', 'commonbtn');
//     checkoxInput.setAttribute('type', 'checkbox')
//     item.appendChild(label);
//     label.appendChild(checkoxInput)
//     label.appendChild(checkmark)
//     item.appendChild(itemEdit)
//     item.appendChild(itemDelete)
//     card.appendChild(item)
//   })


// const heading = document.createElement('h3');
// const cardTitle = document.createElement('div');
// const cardDelete = document.createElement('a');
// const cardEdit = document.createElement('a');
// const cardAdd = document.createElement('div');
// const btn = document.createElement('button');
// const addItemInput = document.createElement('input')
// const addItem = document.createElement('div');
// const addItemBtn = document.createElement('a');

// //adding classes 
// addItem.classList.add('additem');
// addItemBtn.classList.add('additem__btn');
// addItemInput.classList.add('additem__input')
// card.classList.add('card');
// cardTitle.classList.add('card__title');
// cardDelete.classList.add('card__delete', 'commonbtn');
// cardEdit.classList.add('card__edit', 'commonbtn');
// cardAdd.classList.add('card__add');
// addItemBtn.classList.add('card__addlink');
// heading.textContent = category.title;
// btn.textContent = 'Add Item';

// addItemInput.id = category.title;

// // appending stuff
// cardTitle.appendChild(heading);
// cardTitle.appendChild(cardDelete);
// cardTitle.appendChild(cardEdit);
// card.appendChild(cardTitle);
// card.appendChild(addItemInput);
// card.appendChild(addItem);
// addItem.appendChild(addItemInput);
// addItem.appendChild(btn);

// // Append items to the cattegory

// appendItems(category, card)
// createItems(btn, category, addItemInput, arr)
// card.appendChild(cardAdd);
// cardAdd.appendChild(addItemBtn);
// content.appendChild(card);
// });
// }