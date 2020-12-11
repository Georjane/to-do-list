function cardToggleInput() {
  let cardToggleInput = document.querySelectorAll('.additem__btn')
  cardToggleInput.forEach(button => {
    button.addEventListener('click', function (e) {
      let input = this.parentNode.parentNode.children[1]
      input.classList.toggle('additmVisible')
    })

  })
}

function createCatFunctionality() {
  let btn = document.querySelector('.showCatBtn')
  btn.addEventListener('click', () => {
    let cat = document.querySelector('.category')
    cat.classList.toggle('display')
    function removeCurrent(curr) {
      let current = document.querySelector(`${curr}`).cloneNode(true)
      let clone = current.cloneNode(true);
      clone.style.fill = "white";
      btn.innerHTML = ""
      btn.appendChild(clone);
    }
    if (cat.classList.contains("display")) {
      removeCurrent(`.icon-minus`)
    } else {
      removeCurrent(`.icon-plus`)
    }
  });
}

function createItems(btn, category, addItemInput) {
  btn.addEventListener('click', () => {
    category.items.push(addItemInput.value);
    localStorage.setItem("todolist", JSON.stringify(arr));
    displayCategory(arr);
    svgrunner();
    cardToggleInput();
  })
}




export { createCatFunctionality, cardToggleInput, createItems }