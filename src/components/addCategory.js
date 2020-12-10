import svgrunner from './svgrunner';

export default function main() {
  //Define Constructor function for each category
  class Category {
    constructor(title) {
      this.title = title;
      this.items = [];
      this.addItem = (item) => {
        this.items.push(item);
      }
    }
  }

  //Global Variables
  const allCategories = [];
  const content = document.querySelector('.content');

  //Default Categories
  const defaultCategory = new Category('Default1');
  const defaultCategory1 = new Category('Default2');

  defaultCategory.items.push('Buy milk and a lot of other great stuff');
  defaultCategory1.items.push('say hello world', 'another thing');

  allCategories.push(defaultCategory, defaultCategory1);

  //Display All Category Function
  function displayCategory() {
    content.innerHTML = '';
    allCategories.forEach(category => {
      // createCard(category.title, category.items);
      const content = document.querySelector('.content');
      const card = document.createElement('div');
      const heading = document.createElement('h3');
      const cardTitle = document.createElement('div');
      const cardDelete = document.createElement('a');
      const cardEdit = document.createElement('a');
      const cardAdd = document.createElement('div');
      const creatItem = document.createElement('a');

      const btn = document.createElement('button');
      const addItemInput = document.createElement('input')
      const addItem = document.createElement('div');
      // const addItemInput = document.createElement('input');
      const addItemBtn = document.createElement('a');
      // const cardAddImage = document.createElement('img');

      // btn.classList.add('nodisplay');
      // input.classList.add('nodisplay');

      //Eventlistener to add item
      btn.addEventListener('click', () => {
        // input.classList.toggle('display');
        category.addItem(addItemInput.value);
        // console.log(input.value);
        displayCategory();
        svgrunner();
      })

      addItem.classList.add('additem');
      addItemBtn.classList.add('additem__btn');
      addItemInput.classList.add('additem__input')
      card.classList.add('card');
      cardTitle.classList.add('card__title');
      cardDelete.classList.add('card__delete', 'commonbtn');
      cardEdit.classList.add('card__edit', 'commonbtn');
      cardAdd.classList.add('card__add');
      addItemBtn.classList.add('card__addlink');

      // addItemBtn.textContent = "Add to the list";
      heading.textContent = category.title;
      btn.textContent = 'Add Item';

      addItemInput.id = category.title;
      // cardAddImage.setAttribute('src', './add.svg')

      // cardAdd.appendChild(cardAddImage)
      cardTitle.appendChild(heading);
      cardTitle.appendChild(cardDelete);
      cardTitle.appendChild(cardEdit);
      card.appendChild(cardTitle);
      card.appendChild(addItemInput);
      card.appendChild(addItem);
      addItem.appendChild(addItemInput);
      addItem.appendChild(btn);



      category.items.forEach(i => {
        const item = document.createElement('div');
        const label = document.createElement('label');
        const checkoxInput = document.createElement('input');
        const checkmark = document.createElement('span');
        const itemEdit = document.createElement('a');
        const itemDelete = document.createElement('a');

        label.textContent = i
        item.classList.add('item');
        label.classList.add('ch__container');
        checkoxInput.classList.add('checkbox');
        checkmark.classList.add('checkmark');
        itemEdit.classList.add('item__edit', 'commonbtn');
        itemDelete.classList.add('item__del', 'commonbtn');
        checkoxInput.setAttribute('type', 'checkbox')

        item.appendChild(label);
        label.appendChild(checkoxInput)
        label.appendChild(checkmark)
        item.appendChild(itemEdit)
        item.appendChild(itemDelete)
        card.appendChild(item)
      })
      card.appendChild(cardAdd);
      cardAdd.appendChild(creatItem);
      creatItem.appendChild(addItemBtn);
      content.appendChild(card);
    });
  }

  //Create a new Category
  function CreateCategory() {
    const creatCat = document.querySelector('.category__input');
    const creatCatBtn = document.querySelector('.category__btn');

    creatCatBtn.addEventListener('click', e => {
      if (creatCat.value.length < 3) {
        alert("please enter a valid category name")
      } else {
        const newCat = new Category(creatCat.value)
        allCategories.push(newCat)
        displayCategory();
        svgrunner();
        creatCat.value = "";
        return newCat
      }
    })
  }

  CreateCategory();
  displayCategory();
  svgrunner();

  // btn.classList.toggle('display');
  // input.classList.toggle('display');
  // const allAddToList = document.querySelectorAll('.card__addlink');

  // allAddToList.forEach(btn => {
  //   btn.addEventListener('click', e => {
  //     const creatItm = e.target.parentElement.firstChild.value;
  //     const inputId = e.target.previousElementSibling.id;


  //     allCategories.forEach(category => {
  //       if(category.title === inputId) {
  //         // category.items.push(creatItm);
  //         // console.log(category.items);
  //         // createCard(category.title, category.items)
  //       }

  //     })

  //     ;
  //   })
  // })

  // hash.allCat = allCategories
}

  // export { hash }