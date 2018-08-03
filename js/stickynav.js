// A simple script to keep the navbar pinned to
// the top of the page once it is scrolled past.

window.onscroll = function() {myFunction()};

var jobs = document.getElementById("jobs");
var sticky = jobs.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    jobs.classList.add("sticky")
  } else {
    jobs.classList.remove("sticky");
  }
}