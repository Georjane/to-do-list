
export default function createCard(title, arr) {

  const content = document.querySelector('.content');

  const card = document.createElement('div');
  const heading = document.createElement('h3');
  const cardTitle = document.createElement('div');
  const cardDelete = document.createElement('a');
  const cardEdit = document.createElement('a');
  const cardAdd = document.createElement('div');
  const creatItem = document.createElement('a');

  card.classList.add('card');
  cardTitle.classList.add('card__title');
  cardDelete.classList.add('card__delete', 'commonbtn');
  cardEdit.classList.add('card__edit', 'commonbtn');
  cardAdd.classList.add('card__add');
  creatItem.classList.add('card__addlink');
  heading.textContent = title;

  cardTitle.appendChild(heading);
  cardTitle.appendChild(cardDelete);
  cardTitle.appendChild(cardEdit);
  card.appendChild(cardTitle);


  arr.forEach(i => {
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
  cardAdd.appendChild(creatItem);
  content.appendChild(card);

}

