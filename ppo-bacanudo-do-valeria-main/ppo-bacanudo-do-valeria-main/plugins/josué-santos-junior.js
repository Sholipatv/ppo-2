// window.addEventListener("gamestarted", ev => console.log("gamestarted"))
// window.addEventListener("letter", ev => console.log("letter"))
// window.addEventListener("correctletter", ev => console.log("correctletter"))
// window.addEventListener("wrongletter", ev => console.log("wrongletter"))
// window.addEventListener("word", ev => console.log("word"))
// window.addEventListener("correctword", ev => console.log("correctword"))
// window.addEventListener("wrongword", ev => console.log("wrongword"))
// window.addEventListener("endgame", ev => console.log("endgame"))

const score = document.querySelector("main div.score")
const correctTypedWords = document.createElement("span")
let couterCorrectTypedWords = 0
score.append(correctTypedWords)
window.addEventListener("correctword", ev => {
  couterCorrectTypedWords++
  correctTypedWords.innerText = couterCorrectTypedWords + " palavras corretas"
})


const audio = new Audio("plugins/musiga.mp3")

const eventsInteract = [
    "click",
    "keydown",
    "scroll",
]



function firstPlay() {
    eventsInteract.forEach(evName => window.removeEventListener(evName, firstPlay))
    console.log("asdasd")
    audio.play()
}



eventsInteract.forEach(evName => window.addEventListener(evName, firstPlay))

document.addEventListener('keydown', function(event) {
  var click = new Audio('plugins/click.mp3');
  click.play();
  
});




function addVideoBackground() {
  var videoContainer = document.createElement('div');
  videoContainer.style.position = 'fixed';
  videoContainer.style.top = '0';
  videoContainer.style.left = '0';
  videoContainer.style.width = '100%';
  videoContainer.style.height = '100%';
  videoContainer.style.zIndex = '-1';

  var videoElement = document.createElement('video');
  videoElement.autoplay = true;
  videoElement.loop = true;
  videoElement.muted = true;
  videoElement.style.objectFit = 'cover';
  videoElement.style.width = '100%';
  videoElement.style.height = '100%';

  var sourceElement = document.createElement('source');
  sourceElement.src = 'plugins/background.mp4';
  sourceElement.type = 'video/mp4';

  videoElement.appendChild(sourceElement);
  videoContainer.appendChild(videoElement);

  document.body.appendChild(videoContainer);
}


function setSemiTransparentLetters() {
  var letters = document.querySelectorAll('.current-char');

  for (var i = 0; i < letters.length; i++) {
    letters[i].style.opacity = '0.9';
  }
}


addVideoBackground();
setSemiTransparentLetters();
