export default function appendItems(category, card) {
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
}
