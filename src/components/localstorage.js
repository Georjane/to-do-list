
const { Category, Todo } = require("./classes");


export default function lcStSetter() {
  let allData = [];
  let cards = document.querySelectorAll('.card')
  cards.forEach(card => {
    let title = card.firstChild.firstChild.textContent;
    let category = new Category(title);
    let container = card.querySelector(".item_container")
    if (container.childNodes.length > 0); {
      let items = container.childNodes;
      items.forEach(item => {
        let itemText = item.firstChild.textContent;
        let todo = new Todo(itemText);
        category.items.push(todo)
      })
    }
    allData.push(category)
  })
  localStorage.setItem("todolist", JSON.stringify(allData));
}