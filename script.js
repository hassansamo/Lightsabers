function playSound() {
  let lightAudio = document.getElementById("soundEffectLight");
  let darkAudio = document.getElementById("soundEffectDark");
  let darkSaber = document.getElementById("darksaber");
  let box = document.getElementById("on-off");
  if (box.checked == true && darkSaber.checked) {
    darkAudio.play();
  } else {
    darkAudio.pause();
    darkAudio.currentTime = 0;
  }

  if (box.checked == true && !darkSaber.checked) {
    lightAudio.play();
  } else {
    lightAudio.pause();
    lightAudio.currentTime = 0;
  }
}
