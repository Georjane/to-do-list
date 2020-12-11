import displayCategory from './displayCategory';
import svgrunner from './svgrunner';

function cardToggleInput() {
  let cardToggleInput = document.querySelectorAll('.additem__btn')
  cardToggleInput.forEach(button => {
    button.addEventListener('click', function (e) {
      let input = this.parentNode.parentNode.children[1]
      input.classList.toggle('additmVisible')
      if (input.classList.contains('additmVisible')) {
        input.firstChild.focus()
      }
    })

  })
}

function createCatFunctionality() {
  let btn = document.querySelector('.showCatBtn')
  btn.addEventListener('click', () => {
    let cat = document.querySelector('.category')
    function removeCurrent(curr) {
      let current = document.querySelector(`${curr}`).cloneNode(true)
      let clone = current.cloneNode(true);
      clone.style.fill = "white";
      btn.innerHTML = ""
      btn.appendChild(clone);
    }

    if (cat.classList.contains("display")) {
      removeCurrent(`.icon-plus`)

    } else {
      removeCurrent(`.icon-minus`)
    }
    cat.classList.toggle('display')
  });
}

//Create Items
function createItems(btn, category, addItemInput, arr) {

  btn.addEventListener('click', () => {
    category.items.unshift(addItemInput.value);

    displayCategory(arr);
    svgrunner();
    cardToggleInput();
    localStorage.setItem("todolist", JSON.stringify(arr));
  })
}




export { createCatFunctionality, cardToggleInput, createItems }