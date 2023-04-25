const formRef = document.querySelector(".login-form");

formRef.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const elementsRef = event.currentTarget.elements;

  const email = elementsRef.email.value;
  const password = elementsRef.password.value;

  if (email === "" || password === "") {
    alert("Please fill in all the fields!");
  }

  const formData = {
    email,
    password,
  };

  console.log(formData);

  event.currentTarget.reset();
}

// const form = document.querySelector(".login-form");

// form.addEventListener("submit", (event) => {
//   event.preventDefault();
//   const elements = {
//     email: useremail.value,
//     pass: password.value,
//   };
//   if (useremail.value === "" || password.value === "") {
//     return alert("Все поля должны быть заполнены!");
//   }
//   console.log(elements);
//   form.reset();
// });
