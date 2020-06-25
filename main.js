// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
document.querySelector('#modal').setAttribute('class', 'hidden');
const heartButtons = document.querySelectorAll('.like-glyph');

for(heartBtn of heartButtons) {
  heartBtn.addEventListener('click', function(e) {
    likePost();
  });
}

function likePost() {
  const failureState = mimicServerCall();
  console.log(failureState);
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
