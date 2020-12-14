
export default function svgSet(element, selector, fill) {
  const svg = document.querySelector(`.${selector}`).cloneNode(true);
  const clone = svg.cloneNode(true);
  clone.style.fill = fill;
  element.appendChild(clone);
}
