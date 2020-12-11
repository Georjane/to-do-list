
export default function getLocalObj() {
  let locaStArray = JSON.parse(localStorage.getItem("todolist"));
  let cards = []
  locaStArray.forEach(card => {
    cards.push(card)
  });
  return cards
}