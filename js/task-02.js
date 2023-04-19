const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const listRef = document.querySelector("#ingredients");

const elementsRef = ingredients.map((ingredient) => {
  const elementRef = document.createElement("li");
  elementRef.textContent = ingredient;
  elementRef.classList.add("item");

  return elementRef;
});

listRef.append(...elementsRef);
