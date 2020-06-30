// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'


document.addEventListener("DOMContentLoaded", () => {

});
const hearts = document.querySelectorAll(".like-glyph");

hearts.forEach(heart => {
  heart.addEventListener("click", (event) => {
     event.preventDefault();
     mimicServerCall()
     .then(data => {
       if(heart.innerText == EMPTY_HEART) {
         heart.innerText = FULL_HEART;
       } else {
         heart.innerText = EMPTY_HEART;
       }
     })
     .catch(error => {
       document.getElementById("modal").removeAttribute("class", "hidden");
       document.getElementById("modal-message").innerText += error.message;
       setTimeout(() => {
         document.getElementById("modal").setAttribute("class", "hidden");
       }, 5000);
     });
   });
});



//------------------------------------------------------------------------------
// Ignore after this point. Used only for demo purposes
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
