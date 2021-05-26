const logo = document.querySelectorAll('#code-lines line')

for(let i = 0; i< logo.length; i++) {
  console.log(`Element ${i+1} is ${logo[i].getTotalLength()}`)
}

const audio = document.getElementById('audio');
audio.volume = 0.08;

function play(){
  if(audio.paused){
    audio.play();
  } else {
    audio.pause();
  }
}
