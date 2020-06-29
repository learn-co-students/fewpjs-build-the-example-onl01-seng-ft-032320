// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

const error = document.querySelector("#modal")
error.classList.add("hidden")
const posts = document.querySelectorAll(".like")
posts.forEach(like => {
  like.addEventListener("click", () => {
    mimicServerCall()
      .then(() => {
        const newError = document.querySelector("#modal")
        newError.classList.add("hidden")
        if (like.classList.contains("activated-heart")) {
          like.classList.remove("activated-heart")
          like.innerHTML = `Like! <span class='like-glyph'>${EMPTY_HEART}</span>`
        } else {
          like.classList.add("activated-heart")
          like.innerHTML = `Like! <span class='like-glyph'>${FULL_HEART}</span>`
        }
      })
      .catch((error) => {
        const newError = document.querySelector("#modal")
        newError.classList.remove("hidden")
        newError.innerText = error
      })
  })
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
