// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const hearts = document.getElementsByClassName("like")
let error = document.getElementById("modal");
error.classList.add("hidden")

for (const like of hearts) {
  like.addEventListener("click", function() {
    if (this.lastChild.innerText == EMPTY_HEART) {
      let serverResponse = mimicServerCall();
      console.log(serverResponse);
      serverResponse.then(function() {
        like.lastChild.innerText = FULL_HEART;
        like.lastChild.classList.add("activated-heart");
      })
      .catch(function(data) {
        error.classList.remove("hidden");
        error.children[1].innerText = data;

        setTimeout(function() {
          error.classList.add("hidden");
          error.children[1].innerText = "";
        }, 5000)
      });
    } else {
      this.lastChild.innerText = EMPTY_HEART;
      this.lastChild.classList.remove("activated-heart");
    }
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
