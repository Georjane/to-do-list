class Category {
  constructor(title) {
    this.title = title;
    this.items = [];
  }
}

const allCategories = [];

const defaultCategory = new Category('Default');
const defaultCategory1 = new Category('Default1');
defaultCategory.items.push('Buy milk and a lot of other great stuff')
allCategories.push(defaultCategory);
allCategories.push(defaultCategory1);

// function displayCategory() {
//   allCategories.forEach (category => {
//     console.log(category.items[0]);
//   })
// }

const content = document.querySelector('div.content');

function displayCategory() {
  allCategories.forEach (category => {
    createCard(category.title, category.items);
    // console.log(category.items[0]);
  })
}

displayCategory();

function createCard (title, arr) {
  const card = document.createElement('div');
  const heading = document.createElement('h3');
  const cardTitle = document.createElement('div');
  const cardDelete = document.createElement('a');
  const cardEdit = document.createElement('a');

  card.classList.add('card');
  cardTitle.classList.add('card__title');
  cardDelete.classList.add('card__delete', 'commonbtn');
  cardEdit.classList.add('card__edit', 'commonbtn');

  heading.textContent = title;

  cardTitle.appendChild(heading);
  cardTitle.appendChild(cardDelete);
  cardTitle.appendChild(cardEdit);
  card.appendChild(cardTitle);

  content.appendChild(card);

}

export default displayCategory;s