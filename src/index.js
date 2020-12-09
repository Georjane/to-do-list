import './assets/styles/style.scss';
import displayCategory from './components/addCategory';



displayCategory();


let addItemBtns = document.querySelectorAll('.card__addlink');

addItemBtns.forEach(item => {
  item.addEventListener('click', e => {
    let additem = e.target.parentElement.parentElement.children[1]
    additem.classList.toggle('additem-display')
    console.log();
  })
})


