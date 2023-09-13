const body = document.querySelector("body");
const buttons = document.querySelectorAll(".btn");
console.log(buttons);

buttons.forEach((button) => {
  button.addEventListener("mouseover", (e) => {
    switch (e.target.id) {
      case "green":
        body.style.backgroundColor = "green";
        break;
      case "white":
        body.style.backgroundColor = "white";
        break;
      case "yellow":
        body.style.backgroundColor = "yellow";
        break;
      case "red":
        body.style.backgroundColor = "red";
        break;
        case "purple":
        body.style.backgroundColor = "purple";
        break;
      default:
        body.style.backgroundColor = "white";
    }
  });
});
