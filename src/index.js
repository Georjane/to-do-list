import './assets/styles/style.scss';
import { createCatFunctionality } from './components/eventListeners';
// import svgrunner from './components/svgSet';
import main from './components/addCategory';
import { createCard, createItem } from './components/createCard';
main();



createCatFunctionality()
createCard()
let itmCont = document.querySelector('.item_container')
createItem(itmCont, "hello")




