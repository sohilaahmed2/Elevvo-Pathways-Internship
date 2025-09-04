const form = document.getElementById("contactForm");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const fullName = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const subject = document.getElementById("subject").value.trim();
  const message = document.getElementById("message").value.trim();

  const nameError = document.getElementById("nameError");
  const emailError = document.getElementById("emailError");
  const subjectError = document.getElementById("subjectError");
  const messageError = document.getElementById("messageError");


  nameError.textContent = "";
  emailError.textContent = "";
  subjectError.textContent = "";
  messageError.textContent = "";

  let isValid = true;

  if (fullName === "") {
    nameError.textContent = "Full name is required.";
    isValid = false;
  } else if (fullName.length < 6) {
    nameError.textContent = "Full name must be at least 6 characters.";
    isValid = false;
  }

  if (email === "") {
    emailError.textContent = "Email is required.";
    isValid = false;
  } else if (!/^\S+@\S+\.\S+$/.test(email)) {
    emailError.textContent = "Enter a valid email.";
    isValid = false;
  }

  if (subject === "") {
    subjectError.textContent = "Subject is required.";
    isValid = false;
  }

  if (message === "") {
    messageError.textContent = "Message is required.";
    isValid = false;
  }

  if (isValid) {

    form.reset();
  }
});
