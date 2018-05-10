/*
 image change when clcik */
    var myImage = document.querySelector('img');
    myImage.onclick = function () {
        var mySrc = myImage.getAttribute('src');
        if (mySrc === 'photo/pic1') {
            myImage.setAttribute('src', 'photo/pic1.jpg');
        }
        else {
            myImage.setAttribute('src', 'photo/pic2.jpg');
        }
    }
         /*
 tThis is second part of exercise prompting 
*/
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName(){
    var myName = prompt("Enter your wish ! ");
    localStorage.setItem( 'name', myName);
    myHeading.textContent = "Will are " + myName + "!";
}


if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    var storedName = localStorage.getItem('name');
    myHeading.textContent = 'Mozilla is cool, ' + storedName;
  }
  
myButton.onclick = function() {
    setUserName();
  }