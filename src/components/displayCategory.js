
import { createItems } from './eventListeners';


const content = document.querySelector('.content');
export default function displayCategory(arr) {
  content.innerHTML = '';
  arr.forEach(category => {
    const content = document.querySelector('.content');
    const card = document.createElement('div');
    const heading = document.createElement('h3');
    const cardTitle = document.createElement('div');
    const cardDelete = document.createElement('a');
    const cardEdit = document.createElement('a');
    const cardAdd = document.createElement('div');
    const btn = document.createElement('button');
    const addItemInput = document.createElement('input')
    const addItem = document.createElement('div');
    const addItemBtn = document.createElement('a');

    //Eventlistener to add item



    createItems(btn, category, addItemInput, arr)


    addItem.classList.add('additem');
    addItemBtn.classList.add('additem__btn');
    addItemInput.classList.add('additem__input')
    card.classList.add('card');
    cardTitle.classList.add('card__title');
    cardDelete.classList.add('card__delete', 'commonbtn');
    cardEdit.classList.add('card__edit', 'commonbtn');
    cardAdd.classList.add('card__add');
    addItemBtn.classList.add('card__addlink');
    heading.textContent = category.title;
    btn.textContent = 'Add Item';
    addItemInput.id = category.title;
    cardTitle.appendChild(heading);
    cardTitle.appendChild(cardDelete);
    cardTitle.appendChild(cardEdit);
    card.appendChild(cardTitle);
    card.appendChild(addItemInput);
    card.appendChild(addItem);
    addItem.appendChild(addItemInput);
    addItem.appendChild(btn);


    //Create items
    category.items.forEach(i => {
      const item = document.createElement('div');
      const label = document.createElement('label');
      const checkoxInput = document.createElement('input');
      const checkmark = document.createElement('span');
      const itemEdit = document.createElement('a');
      const itemDelete = document.createElement('a');
      label.textContent = i
      item.classList.add('item');
      label.classList.add('ch__container');
      checkoxInput.classList.add('checkbox');
      checkmark.classList.add('checkmark');
      itemEdit.classList.add('item__edit', 'commonbtn');
      itemDelete.classList.add('item__del', 'commonbtn');
      checkoxInput.setAttribute('type', 'checkbox')
      item.appendChild(label);
      label.appendChild(checkoxInput)
      label.appendChild(checkmark)
      item.appendChild(itemEdit)
      item.appendChild(itemDelete)
      card.appendChild(item)
    })

    card.appendChild(cardAdd);
    cardAdd.appendChild(addItemBtn);
    content.appendChild(card);
  });
}