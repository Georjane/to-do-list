import appendItems from './appendItems';
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

    //adding classes 
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

    // appending stuff
    cardTitle.appendChild(heading);
    cardTitle.appendChild(cardDelete);
    cardTitle.appendChild(cardEdit);
    card.appendChild(cardTitle);
    card.appendChild(addItemInput);
    card.appendChild(addItem);
    addItem.appendChild(addItemInput);
    addItem.appendChild(btn);



    appendItems(category, card)


    //Eventlistener to add item
    createItems(btn, category, addItemInput, arr)
    card.appendChild(cardAdd);
    cardAdd.appendChild(addItemBtn);
    content.appendChild(card);
  });
}