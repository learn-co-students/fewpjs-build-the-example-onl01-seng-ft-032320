// Defining text characters for the empty and full hearts for you to use later.
// Your JavaScript code goes here!
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'
const modal = document.getElementById('modal');
let hearts = document.querySelectorAll(".like-glyph");

document.addEventListener("DOMContentLoaded",()=>{
  for (let glyph of hearts) {
    glyph.addEventListener("click", likeCallback);
  }
});

function removeError() {
  modal.classList.add('hidden');
  modal.innerText = "";
}

function likeCallback(e) {
  heart = e.target
  mimicServerCall()
  .then(function(e) {
    if (heart.innerHTML === EMPTY_HEART) {
      heart.innerHTML = FULL_HEART;
      heart.classList.add('activated-heart');
      console.log('post liked');
    } else {
      heart.innerHTML = EMPTY_HEART;
      heart.classList.remove('activated-heart');
      console.log('post unliked');
    }
  })
  .catch(function(error) {
    modal.classList.remove("hidden");
    modal.innerText = error;
    setTimeout(removeError, 5000)
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