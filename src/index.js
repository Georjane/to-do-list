import './assets/styles/style.scss';
import main from './components/addCategory';
import { hash } from './components/addCategory';


main();

let obj = [{'title1'},{'title2'}]
Window.localStorage('hello', JSON.stringify(obj))
const hello = localStorage.getItem('hello')
alert(hello)

// let addItemBtns = document.querySelectorAll('.card__addlink');

// addItemBtns.forEach(item => {
//   item.addEventListener('click', e => {
//     let additem = e.target.parentElement.parentElement.children[1]
//     let title = e.target.parentElement.parentElement.children[0].children[0].textContent
//     let inputElt = e.target.parentElement.parentElement.children[1].children[0].id

//     additem.classList.toggle('additem-display')
//     let arr = hash.allCat
//     arr.forEach(el => {

//       if (el.title === title) {
//         let addItemLink = document.querySelectorAll(".additem__btn")
//         console.log(addItemLink);
//         addItemLink.forEach(item => {
//           item.addEventListener('click', e => {
//             e.preventDefault();
            
//           })


//         })


//       }
//     })
//   })
// })

