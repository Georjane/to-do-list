import createCard from './createCard';


let hash = {}


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





  function CreateCategory() {
    const creatCat = document.querySelector('.category__input');
    const creatCatBtn = document.querySelector('.category__btn');

    creatCatBtn.addEventListener('click', e => {
      if (creatCat.value.length < 3) {

        alert("please enter a valdi category name")
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

  hash.allCat = allCategories
}

export { hash }