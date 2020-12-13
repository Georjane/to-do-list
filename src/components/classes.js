

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

module.exports = {
  Category,
  Todo
};