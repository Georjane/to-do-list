import svgrunner from './svgrunner';
import { cardToggleInput } from './eventListeners';
import displayCategory from './displayCategory';

export default function main() {
  //Define Constructor function for each category

  class Category {
    constructor(title) {
      this.title = title;
      this.items = [];
      this.addItem = (item) => {
        this.items.push(item);
      };

    }
  }


  //Global Variables
  const allCategories = [];


  //Default Categories
  // const defaultCategory = new Category('Default1');
  // defaultCategory.items.push('apples');
  // defaultCategory.items.push('oranges');
  // allCategories.push(defaultCategory);


  //Display All Category Function





  function CreateCategory() {
    const catinput = document.querySelector('.category__input');
    const creatCatBtn = document.querySelector('.category__btn');
    creatCatBtn.addEventListener('click', e => {
      if (catinput.value.length < 4) {
        alert("please enter a valid category name")
      } else {
        const newCat = new Category(catinput.value)
        allCategories.push(newCat)
        displayCategory(getLocalObj());
        localStorage.setItem("todolist", JSON.stringify(allCategories));
        catinput.value = "";
        cardToggleInput();
        svgrunner();
      }
    })
  }

  function getLocalObj() {
    let locaStArray = JSON.parse(localStorage.getItem("todolist"));
    let localStdata = []
    if (locaStArray) {
      locaStArray.forEach(element => {
        localStdata.push(element)
      });
    }
    if (allCategories.length > 0) {
      allCategories.push(localStdata)
    }

    return allCategories.flat()
  }

  console.log(allCategories);

  displayCategory(getLocalObj());
  CreateCategory();


  cardToggleInput();

  svgrunner();

}
