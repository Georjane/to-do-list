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
        this.setLocalstorage();
      };
      this.setLocalstorage();
    }
    setLocalstorage() {
      let obj = { [this.title]: this.items }
      localStorage.setItem("todolist", JSON.stringify(obj));
    }



  }


  class Item {
    constructor(title, description, dueDate, priority) {
      this.title = title;
      this.description = description;
      this.dueDate = dueDate;
      this.priority = priority;
    }
  }

  //Global Variables
  const allCategories = [];


  //Default Categories
  const defaultCategory = new Category('Default1');
  defaultCategory.items.push('apples');
  defaultCategory.items.push('oranges');
  allCategories.push(defaultCategory);

  //Display All Category Function
  displayCategory(allCategories)
  //Create a new Category


  function CreateCategory() {
    const creatCat = document.querySelector('.category__input');
    const creatCatBtn = document.querySelector('.category__btn');
    // allCategories.forEach(title => {
    //   localStorage.getItem(title);

    //   console.log(title);
    //   // JSON.parse(title)
    // })


    creatCatBtn.addEventListener('click', e => {
      if (creatCat.value.length < 3) {
        alert("please enter a valid category name")
      } else {
        const newCat = new Category(creatCat.value)
        allCategories.push(newCat)



        displayCategory(allCategories);

        svgrunner();
        creatCat.value = "";
        cardToggleInput();

      }
    })


  }

  CreateCategory();
  displayCategory(allCategories);
  svgrunner();
  cardToggleInput();


}
