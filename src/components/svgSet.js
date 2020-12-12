
export default function svgSet(element, selector, fill) {
  let svg = document.querySelector(`.${selector}`).cloneNode(true)
  let clone = svg.cloneNode(true);
  clone.style.fill = fill;
  element.appendChild(clone);
}



