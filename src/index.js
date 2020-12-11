import './assets/styles/style.scss';
import main from './components/addCategory';
import { createCatFunctionality } from './components/eventListeners';

createCatFunctionality()
main();


let allC = JSON.parse(localStorage.getItem("everything"));


console.log(allC);






