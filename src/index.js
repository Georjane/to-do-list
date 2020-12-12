import './assets/styles/style.scss';
import { createCatFunctionality } from './components/eventListeners';
import svgrunner from './components/svgrunner';
import main from './components/addCategory';
import { createCard, createItem } from './components/createCard';
main();



createCatFunctionality()
createCard()
let itmCont = document.querySelector('.item_container')
createItem(itmCont, "hello")
svgrunner()



