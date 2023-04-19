// *

let counterValue = 0;
const spanValueRef = document.querySelector("#value");
//*

const decrementBtnRef = document.querySelector(
  'button[data-action="decrement"]'
);
const incrementBtnRef = document.querySelector(
  'button[data-action="increment"]'
);

decrementBtnRef.addEventListener("click", () => {
  counterValue -= 1;
  spanValueRef.textContent = counterValue;
});
incrementBtnRef.addEventListener("click", () => {
  counterValue += 1;
  spanValueRef.textContent = counterValue;
});
