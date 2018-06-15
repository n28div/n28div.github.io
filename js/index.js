var typewriteText = "./n28div &",
    usernameEl,
    typewriteFn;

window.onload = function() {
  usernameEl = document.querySelector("#username");
  
  typewriteFn = window.setInterval(function(){
    if (usernameEl.innerHTML.length < typewriteText.length)
      usernameEl.innerHTML += typewriteText[usernameEl.innerHTML.length];
    else {
      clearInterval(typewriteFn);
      usernameEl.innerHTML += "<br>~#";
      document.querySelector(".btn-list").classList.remove("hidden");
    }
  }, 150);

}