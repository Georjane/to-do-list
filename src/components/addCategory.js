import { createCard, createItem } from './createCard';
import svgrunner from './svgSet';

export default function main() {
  //   //Define Constructor function for each category
  class Category {
    constructor(title) {
      this.title = title;
      this.items = [];
    }
  }

  class Tododos {
    constructor(title, description = '', duedate = '', checked = false) {
      this.title = title;
      this.description = description;
      this.duedate = duedate;
      this.checked = checked
    }
  }

  const allData = []

  function categoryCreator(title) {
    let category = new Category(title);
    allData.push(category)
  }
  categoryCreator("Default");
  console.log(allData);

  let creatCatbtn = document.querySelector('.category__btn')
  let input = document.querySelector('.category__input');

  creatCatbtn.addEventListener('click', e => {
    let title = input.value
    createCard(title)

  })

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
