// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

// nodelist for class 'like glyth'. iterate and add event listenter to the buttom
let likeSpan = document.querySelectorAll(".like-glyph")
  for (element of likeSpan) {
    element.addEventListener("click", (event) => {
      mimicServerCall()
      .then(function(response) {
        console.log(response)
        let choosenElement = event.target
        if (choosenElement.innerText === EMPTY_HEART) {
          choosenElement.innerHTML = FULL_HEART;
          choosenElement.classList.add("activated-heart")
        } else {
          choosenElement.innerHTML = EMPTY_HEART;
          choosenElement.classList.remove("activated-heart")
        }
      })
      .catch(function(error){
        console.log(error)
        // get the div containing the hidden class and remove it. 
        const errorDiv = document.querySelector("#modal")
        errorDiv.classList.remove("hidden")
        //  create and elment variable to hold the p tag in the div and add to its innertext the error. 
        let errorDetails = errorDiv.querySelector("#modal-message")
        errorDetails.innerHTML = error;
      
        // user setTimeout to hide the div once again after 5 seconds has pass 
        setTimeout(function(){ errorDiv.classList.add("hidden"); }, 5000);
      })
 
    })
}
  

  
  // call mimicServerCall 
  // mimicServerCall()
  //.then
  //.catch




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
