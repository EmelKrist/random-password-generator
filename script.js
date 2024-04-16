// page components
const passwordBox = document.getElementById("password");
const generateBtn = document.querySelector(".container button");
const copyBtn = document.querySelector(".display img");

// password rules
const length = 16;
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = upperCase.toLowerCase();
const number = "0123456789";
const symbol = "@#$%^&*()_+~|}{[]></-=";
const allChars = upperCase + lowerCase + number + symbol;

/**
 * Method to generate a random password.
 */
function generatePassword() {
  let password = "";
  // add four random required char's types
  password += upperCase[Math.floor(Math.random() * upperCase.length)];
  password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
  password += number[Math.floor(Math.random() * number.length)];
  password += symbol[Math.floor(Math.random() * symbol.length)];
  // add other random char's
  while (length > password.length) {
    password += allChars[Math.floor(Math.random() * allChars.length)];
  }
  // output password
  passwordBox.value = password;
}

/**
 * Method to copy the password.
 */
function copyPassword() {
  // select the content of the password field and copy it
  passwordBox.select();
  document.execCommand("copy");
}

// Buttons listeners.

generateBtn.addEventListener("click", () => {
  generatePassword();
});

copyBtn.addEventListener("click", () => {
  copyPassword();
});
