var navButton = document.querySelector(".navButton");
var navMobile = document.querySelector(".navMobile");

function openNav() {
  setTimeout(function() {
  navButton.style.visibility = "hidden";
  navMobile.style.visibility = "visible";
}, 500);
  setTimeout(closeNav, 5000);
}

function closeNav() {
  setTimeout(function() {  
    navMobile.style.visibility = "hidden";
    navButton.style.visibility = "visible";
  }, 500);
}

function showFunFact() {
  document.querySelector(".funFact").style.visibility = "visible";
}

function email() {
  window.open("mailto:nerdzrull4@gmail.com", "_blank")
}

function linkedin() {
  window.open("https://www.linkedin.com/in/laicommadarren/", "_blank");
}

function github() {
  window.open("https://www.github.com/laicommadarren", "_blank");
}

function instagram() {
  window.open("https://www.instagram.com/darren_unltd")
}

function youtube() {
  window.open("https://www.youtube.com/@NomzWithDarren/videos", "_blank")
}

function yelp() {
  window.open("https://www.yelp.com/user_details?userid=48gUWtqMot6FzU7k3eclKw", "_blank")
}