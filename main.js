// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

function handleClick(e){
  if (e.target.textContent === EMPTY_HEART){
    mimicServerCall()
    .then((res) => {
      e.target.textContent = FULL_HEART
      e.target.classList.add('activated-heart')
    })
    .catch((res) => {
      document.querySelector('#modal').classList.remove('hidden')
      document.querySelector('#modal-message').textContent = res
      setTimeout(() => document.querySelector('#modal').classList.add('hidden'), 3000)
    })
  }
  else if (e.target.textContent === FULL_HEART){
    mimicServerCall()
    .then((res) => {
      e.target.textContent = EMPTY_HEART
      e.target.classList.remove('activated-heart')
    })
    .catch((res) => {
      document.querySelector('#modal').classList.remove('hidden')
      document.querySelector('#modal-message').textContent = res
      setTimeout(() => document.querySelector('#modal').classList.add('hidden'), 3000)
    })
  }
}

const heart = document.getElementsByClassName('like-glyph')

for (x of heart){
   x.addEventListener('click', handleClick)
}




//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
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
