class Category {
  constructor(title) {
    this.title = title;
    this.items = [];
  }
}

const allCategories = [];

const defaultCategory = new Category('Default');
defaultCategory.items.push('Buy milk and a lot of other great stuff')
allCategories.push(defaultCategory);

function displayCategory() {
  allCategories.forEach (category => {
    console.log(category.items[0]);
  })
}

displayCategory();