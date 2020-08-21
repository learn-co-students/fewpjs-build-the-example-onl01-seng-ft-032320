// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
let hearts = document.querySelectorAll('.like-glyph')
let modal = document.querySelector("#modal");
hearts.forEach(heart => {
  heart.addEventListener('click', clicked())
})

function clicked(event) {
  mimicServerCall()
    .then((object) => {
      if (event.target.innerText === EMPTY_HEART) {
        event.target.innerText = FULL_HEART;
        event.target.classList.add("activated-heart");
      } else {
        event.target.innerText = EMPTY_HEART;
        event.target.classList.remove("activated-heart");
      }
    })
    .catch((response) => {
      modal.classList.remove("hidden");
      setTimeout(() => {
        modal.classList.add("hidden");
      }, 5000);
    });
}



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
