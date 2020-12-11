import './assets/styles/style.scss';
import main from './components/addCategory';
import { createCatFunctionality } from './components/eventListeners';

createCatFunctionality()
main();


// let variable = "something";
// let anArray = { person: { name: "Olea" }, person2: { name: "virta" } }
// localStorage.setItem(variable, JSON.stringify(anArray));
// let getvalue = localStorage.getItem(variable)
// let object = JSON.parse(getvalue)
// console.log(object.person.name);

let allC = JSON.parse(localStorage.getItem("everything"));


console.log(allC);


// function lSetter() {

// }



