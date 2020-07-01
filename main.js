// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!


let likeListener = document.getElementsByClassName('like-glyph')

let like0 = likeListener[0]
let like1 = likeListener[1]
let like2 = likeListener[2]
let like3 = likeListener[3]
let like4 = likeListener[4]
// console.log(like0, like1, like2, like3, like4)

like0.addEventListener('click', () => {
  changeHeart(like0)
})
like1.addEventListener('click', () => {
  changeHeart(like1)
})
like2.addEventListener('click', () => {
  changeHeart(like2)
})
like3.addEventListener('click', () => {
  changeHeart(like3)
})
like4.addEventListener('click', () => {
  changeHeart(like4)
})


function changeHeart(likeCount) {
  if (likeCount.innerHTML == EMPTY_HEART) {
    likeCount.innerHTML = FULL_HEART
    likeCount.classList.add('activated-heart')
  }
  else if (likeCount.innerHTML == FULL_HEART){
    likeCount.innerHTML = EMPTY_HEART
    likeCount.classList.remove('activated-heart')
  }
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
