const itemsRef = document.querySelectorAll(".item");
console.log("Number of categories:", itemsRef.length);

itemsRef.forEach((element) => {
  const title = element.querySelector("h2");
  const quontityEl = element.querySelectorAll("li");
  console.log(
    `Category: ${title.textContent} \nElements: ${quontityEl.length}`
  );
});
