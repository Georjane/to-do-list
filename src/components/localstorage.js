
const { Category } = require('./categoryClass');
const { Todo } = require('./todoClass');


export default function lcStSetter() {
  const allData = [];
  const cards = document.querySelectorAll('.card');
  cards.forEach(card => {
    const title = card.firstChild.firstChild.textContent;
    const category = new Category(title);
    const container = card.querySelector('.item_container');
    if (container.childNodes.length > 0); {
      const items = container.childNodes;
      items.forEach(item => {
        let checked = false;
        if (item.firstChild.classList.contains('completed')) {
          checked = true;
        }
        const itemText = item.firstChild.textContent;
        const todo = new Todo(itemText, checked);
        category.items.push(todo);
      });
    }
    allData.push(category);
  });
  localStorage.setItem('todolist', JSON.stringify(allData));
}