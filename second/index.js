const logo = document.querySelectorAll('#code-lines line')

for(let i = 0; i< logo.length; i++) {
  console.log(`Element ${i+1} is ${logo[i].getTotalLength()} ${logo[i]}`)
}

const audio = document.getElementById('audio');
audio.currentTime = 0.0;
audio.volume = 0.3;

document.getElementById('audio-btn').addEventListener('click', () => {
  if(audio.paused){
    audio.play();
  } else {
    audio.pause();
  }
});

