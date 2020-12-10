export default function svgrunner() {
  let del = document.querySelectorAll('.card__delete');
  let edit = document.querySelectorAll('.card__edit');
  let edititem = document.querySelectorAll('.item__edit');
  let delititem = document.querySelectorAll('.item__del');
  let additembtn = document.querySelectorAll('.card__addlink')
  function addToEach(element, selector, fill) {
    element.forEach(function (el) {
      let svg = document.querySelector(`.${selector}`).cloneNode(true)
      let clone = svg.cloneNode(true);
      clone.style.fill = fill;
      el.appendChild(clone);
    }
    )
  }
  addToEach(del, "icon-cancel-circle", "red");
  addToEach(edit, "icon-document-edit", "grey");
  addToEach(edititem, "icon-document-edit", "grey");
  addToEach(delititem, "icon-bin", "grey");
  addToEach(additembtn, "icon-plus", "grey");
}
