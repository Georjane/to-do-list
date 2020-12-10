import createCard from './createCard';
import svgrunner from './svgrunner';

export default function main() {
  class Category {
    constructor(title) {
      this.title = title;
      this.items = [];
    }
  }




  const allCategories = [];
  const content = document.querySelector('.content');

  const defaultCategory = new Category('Default1');
  const defaultCategory1 = new Category('Default2');
  defaultCategory.items.push('Buy milk and a lot of other great stuff');
  defaultCategory1.items.push('say hello world');
  defaultCategory1.items.push('another thing');
  allCategories.push(defaultCategory);
  allCategories.push(defaultCategory1);


  function displayCategory() {
    content.innerHTML = '';
    allCategories.forEach(category => {
      createCard(category.title, category.items);
    });
  }


  function CreateItem() {

  }



  function CreateCategory() {
    const creatCat = document.querySelector('.category__input');
    const creatCatBtn = document.querySelector('.category__btn');

    creatCatBtn.addEventListener('click', e => {
      if (creatCat.value.length < 3) {

        alert("please enter a valid category name")
      } else {
        const newCat = new Category(creatCat.value)
        allCategories.push(newCat)
        displayCategory()
        creatCat.value = "";
        return newCat
      }

    })


  }

  CreateCategory();

  displayCategory()
  const allAddToList = document.querySelectorAll('.additem__btn');

  allAddToList.forEach(btn => {
    btn.addEventListener('click', e => {
      const creatItm = e.target.parentElement.firstChild.value;
      const inputId = e.target.previousElementSibling.id;


      allCategories.forEach(category => {
        if (category.title === inputId) {
          category.items.push(creatItm);
          console.log(category.items);
          createCard(category.title, category.items)
        }

      })

        ;
    })
  })

  svgrunner()

}

