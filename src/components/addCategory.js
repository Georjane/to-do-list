import { createCard, createItem } from './createCard';
import svgrunner from './svgSet';

export default function main() {
  //   //Define Constructor function for each category
  const allData = []
  class Category {
    constructor(title) {
      this.title = title;
      this.items = [];
    }
  }

  class Todo {
    constructor(title, description = '', duedate = '', checked = false) {
      this.title = title;
      this.description = description;
      this.duedate = duedate;
      this.checked = checked
    }
  }


  let def = new Category("Default");
  let second = new Category("Second");
  let items = new Todo("Your first todo")
  let item = new Todo("second to do", "just fuck it", 12, true)
  def.items.push(items)
  def.items.push(item)
  allData.push(def);
  allData.push(second)
  localStorage.setItem("todolist", JSON.stringify(allData));



  let retrieved = JSON.parse(localStorage.getItem("todolist"))
  console.log(retrieved);
  retrieved.forEach(category => {
    createCard(category.title, category.items)

    // let currentCard = [...document.querySelectorAll('.item_container')]
    // // .find(el => el.textContent === `${element.title}`).parentNode.parentNode
    // console.log(currentCard);
    // element.items.forEach(item => {
    //   createItem
    // })
  });

  // function categoryCreator(title, totdos = []) {
  //   let category = new Category(title);
  //   allData.push(category)
  // }

  // categoryCreator("default")
  // allData.forEach(category => {
  //   createCard(category.title)
  //   localStorage.setItem("todolist", JSON.stringify(allData));
  // })

  // let creatCatbtn = document.querySelector('.category__btn')


  // creatCatbtn.addEventListener('click', e => {
  //   let input = document.querySelector('.category__input');
  //   let title = input.value;
  //   categoryCreator("Default");
  //   createCard(title)
  //   localStorage.setItem("todolist", JSON.stringify(allData));
  // })getItem

}


// import { cardToggleInput } from './eventListeners';
// import displayCategory from './createCard';
// import getLocalObj from './localstorage';

// export default function main() {
//   //Define Constructor function for each category
//   class Category {
//     constructor(title) {
//       this.title = title;
//       this.items = [];
//       this.addItem = (item) => {
//         this.items.unshift(item);
//       };

//     }
//   }
//   const allCategories = [];

//   function CreateDefault() {
//     let def = new Category("Default category");
//     allCategories.unshift(def)
//   }
//   CreateDefault()

//   function commonF(categorie) {
//     displayCategory(categorie);
//     cardToggleInput();
//     svgrunner();
//   }

//   function checkInput(input, length) {
//     if (input.value.length < length) {
//       alert(`Please enter a valid category name longer than ${length}`)
//     } else {
//       const newCat = new Category(input.value)
//       allCategories.unshift(newCat)
//       localStorage.setItem("todolist", JSON.stringify(allCategories));
//     }
//   }
//   function CreateCategory() {
//     const catinput = document.querySelector('.category__input');
//     const creatCatBtn = document.querySelector('.category__btn');
//     creatCatBtn.addEventListener('click', () => {
//       checkInput(catinput, 2)
//       catinput.value = "";
//       commonF(getLocalObj());
//     });
//   }



//   CreateCategory();
//   commonF(getLocalObj());

// }
