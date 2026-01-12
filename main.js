const myImage = document.querySelector("img");

myImage.addEventListener("click", () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "firefox-icon.png") {
    myImage.setAttribute("src", "gif.gif");
  } else {
    myImage.setAttribute("src", "firefox-icon.png");
  }
});