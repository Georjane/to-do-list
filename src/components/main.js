import { createCard } from './createCard';
import { createCatBtn } from './eventListeners';
import lcStSetter from './localstorage';

const { Category } = require('./categoryClass');
const { Todo } = require('./todoClass');

export default function main() {
  // Define Constructor function for each category
  const allData = [];
  createCatBtn(createCard, lcStSetter);


  function setDefaults() {
    const retrieved = JSON.parse(localStorage.getItem('todolist'));
    if (!retrieved) {
      const def = new Category('Default');
      const first = new Todo('First thing to do ..', true, 'your description', 12);
      const second = new Todo('Second thing todo ...', false, 'your second description', 12);
      def.items.push(first);
      def.items.push(second);
      allData.push(def);
      localStorage.setItem('todolist', JSON.stringify(allData));
    }
  }
  setDefaults();


  function lcStRetriever() {
    const retrieved = JSON.parse(localStorage.getItem('todolist'));
    if (retrieved) {
      retrieved.forEach(category => {
        createCard(category.title, category.items);
      });
    }
  }

  lcStRetriever();
}
