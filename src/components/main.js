import { createCard } from './createCard';
import { createCatBtn } from './eventListeners';
import lcStSetter from './localstorage';

export default function main() {
  //   //Define Constructor function for each category
  const allData = []
  const { Category, Todo } = require("./classes");
  createCatBtn(createCard, lcStSetter)


  function setDefaults() {
    let retrieved = JSON.parse(localStorage.getItem("todolist"));
    if (!retrieved) {
      let def = new Category("Default");
      let first = new Todo("First thing to do ..", "just fuck it", 12, true)
      let second = new Todo("Second thing todo ...", "well well", 12, false)
      def.items.push(first)
      def.items.push(second)
      allData.push(def)
      localStorage.setItem("todolist", JSON.stringify(allData));
    }

  }
  setDefaults()




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

