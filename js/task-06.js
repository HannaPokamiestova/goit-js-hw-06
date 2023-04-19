const inputEl = document.querySelector("#validation-input");

inputEl.addEventListener("blur", onInputBlur);

const textLength = inputEl.getAttribute("data-length");
console.log(textLength);

function onInputBlur(event) {
  console.log("inputEl");
  inputEl.classList.remove("valid", "invalid");
  const ar = event.currentTarget.value.trim().length;
  const el =
    event.currentTarget.value.trim().length === Number(textLength)
      ? "valid"
      : "invalid";

  inputEl.classList.add(el);
}
