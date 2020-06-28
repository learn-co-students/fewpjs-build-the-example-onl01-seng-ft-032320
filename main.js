// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'
const hearts = document.querySelectorAll(".like-glyph")
const errorModal = document.getElementById("modal")

function likeIt(event) {
  event.target.innerText = FULL_HEART
  event.target.classList.add("activated-heart")
}

function notLiked(error) {
  console.log(`You clicked me but ${error}`)
  errorModal.innerText = `${error}`
  errorModal.classList.remove("hidden")
  setTimeout(() => {
    errorModal.classList.add("hidden")
  },5000)
}

// Your JavaScript code goes here!
document.addEventListener("DOMContentLoaded",()=>{
  hearts.forEach(heart => heart.addEventListener("click", (event) => {
    if (event.target.innerText === FULL_HEART){
      event.target.innerText = EMPTY_HEART
      event.target.classList.remove("activated-heart")
    } else {
      mimicServerCall()
      .then(() => likeIt(event))
      .catch((error) => notLiked(error))
    }
  }))

})

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
