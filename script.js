const form = document.getElementById("myForm");

form.addEventListener("submit", (event) => {
  // stop form submission
  event.preventDefault();

  validateForm();
  form.reset();
});

function validateForm() {
  const firstName = document.getElementById("firstName").value;
  const lastName = document.getElementById("lastName").value;
  const phoneNumber = document.getElementById("phoneNumber").value;
  const dateOfBirth = document.getElementById("dateOfBirth").value;
  const emailAddress = document.getElementById("emailAddress").value;

  let errorMessages = "";

  if (firstName < 3) {
    errorMessages += "<p class='error'>Please enter a valid first name.</p>";
  }

  if (lastName < 3) {
    errorMessages += "<p class='error'>Please enter a valid last name.</p>";
  }

  if (phoneNumber != 10) {
    errorMessages += "<p class='error'>Please enter a valid phone number.</p>";
  }

  const today = new Date();
  const dob = new Date(dateOfBirth);
  if (dob > today) {
    errorMessages += "<p class='error'>Please enter a valid date of birth.</p>";
  }

  if (emailAddress < 6) {
    errorMessages += "<p class='error'>Please enter a valid email address.</p>";
  }

  if (errorMessages !== "") {
    document.getElementById("error-messages").innerHTML = errorMessages;
    return false;
  } else {
    const newOutput = document.getElementById("output");
    const age = new Date().getFullYear() - new Date(dateOfBirth).getFullYear();
    const fullName = firstName + " " + lastName;
    let output = "Full Name: " + fullName + "<br>";
    output += "Age: " + age + "<br>";
    output += "Telephone Number: " + phoneNumber + "<br>";
    output += "Email Address: " + emailAddress;

    newOutput.innerHTML = output;

    return true;
  }
}
