document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contact-form");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    console.clear();

    const fullName = document.getElementById("full-name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    let errors = {};

    if (!fullName) {
      errors.fn = "Full name is missing";
    }

    if (!email) {
      errors.em = "Email is missing";
    }

    if (!message) {
      errors.msg = "Message is missing";
    }

    if (Object.keys(errors).length === 0) {
      console.log("COLLECTED DATA");
      console.log({ fullName, email, message });
      resetForm();
    } else {
      console.log("ERRORS");
      console.log(errors);
    }
  });
  function resetForm() {
    document.getElementById("contact-form").reset();
  }
});
