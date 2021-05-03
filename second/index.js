const logo = document.querySelectorAll('#code-lines line')

for(let i = 0; i< logo.length; i++) {
  console.log(`Element ${i+1} is ${logo[i].getTotalLength()} ${logo[i]}`)
}

var soundFile = document.createElement("audio");
soundFile.preload = "auto";

var audio = document.createElement("source");
audio.src = "sound.mp3";
soundFile.appendChild(audio);

soundFile.load();
soundFile.volume = 0.0;

document.getElementById('sound').addEventListener('click', () => {
  soundFile.currentTime = 0.0;
  soundFile.volume = 0.3;
  soundFile.play();
})

