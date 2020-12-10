import './assets/styles/style.scss';
import main from './components/addCategory';
import { hash } from './components/addCategory';


main();

let btn = document.querySelector('.showCatBtn')



btn.addEventListener('click', () => {
  let cat = document.querySelector('.category')
  cat.classList.toggle('display')
});

