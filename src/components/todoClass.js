class Todo {
  constructor(title, checked = false, description = '', duedate = '') {
    this.title = title;
    this.checked = checked;
    this.description = description;
    this.duedate = duedate;
  }
}

module.exports = {
  Todo,
};