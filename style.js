// Navbar scroll
var prevScrollPos = window.pageYOffset;
console.log(prevScrollPos);
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  
  if (prevScrollPos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
    console.log("Prev: " + prevScrollPos);
    console.log("Curr: " + currentScrollPos);
  } else {
    document.getElementById("navbar").style.top = "-8vw";
    console.log("Prev: " + prevScrollPos);
    console.log("Curr: " + currentScrollPos);
  }
  prevScrollPos = currentScrollPos;
}

// Type it
new TypeIt('#type-text', {
	speed: 100,
	deleteSpeed: 50,
	cursorChar: ''
})
.pause(1000)
.go();
