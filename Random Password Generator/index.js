const characters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "~",
  "`",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
  "{",
  "[",
  "}",
  "]",
  ",",
  "|",
  ":",
  ";",
  "<",
  ">",
  ".",
  "?",
  "/",
];

let generateBtn = document.getElementById("generate-btn");
let passwordElOne = document.getElementById("random-password-1");
let passwordElTwo = document.getElementById("random-password-2");

generateBtn.addEventListener("click", function () {
  let randomPasswordOne = getRandomPassword();
  let randomPasswordTwo = getRandomPassword();

  passwordElOne.textContent = randomPasswordOne;
  passwordElTwo.textContent = randomPasswordTwo;

  passwordElOne.className = "copy";
  passwordElTwo.className = "copy";
});

function getRandomPassword() {
  let generatedPassword = "";
  for (let i = 0; i < 15; i++) {
    let characterIndex = Math.floor(Math.random() * characters.length);
    generatedPassword += characters[characterIndex];
  }
  return generatedPassword;
}

function copyText(e) {
  let text = e.textContent;

  // Write your content to the clipboard so it's available for copy
  navigator.clipboard.writeText(text);

  e.className = "copied";
  setTimeout(function() {
    e.className = "copy";
  }, 3000)
}
