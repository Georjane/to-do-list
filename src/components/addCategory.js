import createCard from './createCard';



class Category {
  constructor(title) {
    this.title = title;
    this.items = [];
  }
}

const allCategories = [];

const defaultCategory = new Category('Default1');
const defaultCategory1 = new Category('Default2');
defaultCategory.items.push('Buy milk and a lot of other great stuff');
defaultCategory1.items.push('say hello world');
defaultCategory1.items.push('another thing');
allCategories.push(defaultCategory);
allCategories.push(defaultCategory1);




function displayCategory() {
  allCategories.forEach(category => {
    createCard(category.title, category.items);

  });
}

export default displayCategory;