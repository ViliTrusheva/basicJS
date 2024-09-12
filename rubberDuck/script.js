console.log("hello");

const submitBtn = document.getElementById("submitBtn");

submitBtn.addEventListener("click", function () {
  const problemInput = document.getElementById("problemInput").value;

  //   console.log(problemInput);

  alert(problemInput);
});

// const now = new Date("2024-01-01");

// newP.title = "Test";

// -----Mr.Duck is going to answer us politely
window.addEventListener("load", function () {
  // Prompt the user for their name
  let userName = prompt("What's your name?");

  // Make Mr. Duck greet the user
  if (userName) {
    alert(`Hello, ${userName}!`);
  } else {
    alert("Hello, stranger!");
  }
});
