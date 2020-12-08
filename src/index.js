import './assets/styles/style.scss';

import Bin from './assets/img/bin.svg';

function component() {
  const element = document.createElement('svg');
  element.path = Bin


  return element;
}

document.body.appendChild(component());