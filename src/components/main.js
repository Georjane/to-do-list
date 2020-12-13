import { createCard } from './createCard';
import { createCatBtn } from './eventListeners';
import lcStSetter from './localstorage';

export default function main() {
  //   //Define Constructor function for each category
  const allData = []
  const { Category, Todo } = require("./classes");
  createCatBtn(createCard, lcStSetter)


  // let def = new Category("Default");
  // let second = new Category("Second");
  // let items = new Todo("Your first todo")
  // let item = new Todo("second to do", "just fuck it", 12, true)
  // let it = new Todo("tester", "well well", 12, false)
  // def.items.push(items)
  // def.items.push(item)
  // def.items.push(it)

  // allData.push(def);
  // allData.push(second)
  // localStorage.setItem("todolist", JSON.stringify(allData));


  function lcStRetriever() {
    let retrieved = JSON.parse(localStorage.getItem("todolist"));
    if (retrieved) {
      retrieved.forEach(category => {
        createCard(category.title, category.items);
      });
    }
  }

  lcStRetriever()
  // lcStSetter()


}

