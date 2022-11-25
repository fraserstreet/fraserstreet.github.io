const myImage = document.querySelector("img");
myImage.onclick = () => {
    const mySrc = myImage.getAttribute("src");
    if (mySrc === "images/Fraser-Street.jpg") {
        myImage.setAttribute("src", "images/Emma-Street.jpg");
    } else {
        myImage.setAttribute("src", "images/Fraser-Street.jpg")
    }
};
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
    const myName = prompt("Please enter your name:");
   /* localStorage.setItem("name", myName); */
    myHeading.textContent = `This tutorial is cool, ${myName}`;
}

if (!localStorage.getItem("name")) {
    setUserName();
} else {
    const storedName = localStoarge.getItem("name");
    myHeading.textContent = `Tutorial using the stored name, ${storedName}`;
}

alert("above oneclick")
myButton.onclick = () => {
    alert("in button onclidk")
    setUserName();
}