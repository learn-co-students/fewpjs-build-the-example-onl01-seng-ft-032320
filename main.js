// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

const likes = document.querySelectorAll('.like-glyph')
likes.forEach(like => like.addEventListener('click', clickHeart))



function clickHeart(event){
  event.preventDefault();
  console.log("Heart was clicked");
  mimicServerCall()
  .then(response => {
    return response
  })
  .then(object => {
    console.log(object);
  if (event.target.innerText === EMPTY_HEART) {
    event.target.innerText = FULL_HEART
    event.target.classList.add("activated-heart")
  }
  else {
    event.target.innerText = EMPTY_HEART
    event.target.classList.remove("activated-heart")
  }

  })
  .catch(error => {
    let div = document.getElementById("modal")
    div.classList.remove("hidden");
    setTimeout(addHidden, 5000);
  });


}

function addHidden(){
  let div = document.getElementById("modal")
  div.classList.add("hidden")
  console.log("5 seconds have passed")
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
