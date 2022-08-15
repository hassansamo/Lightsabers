function playSound() {
  let tip = document.querySelector(".hilt");

  // lightsabers
  let lsStart = document.getElementById("lsStart");
  let lsPulse = document.getElementById("lsPulse");
  let lsStop = document.getElementById("lsStop");

  // darksaber
  let dsStart = document.getElementById("dsStart");
  let dsPulse = document.getElementById("dsPulse");
  let dsStop = document.getElementById("dsStop");

  let darkSaber = document.getElementById("darksaber");

  let box = document.getElementById("on-off");

  // Sound effects of lightsabers
  if (box.checked == true && !darkSaber.checked) {
    tip.style.setProperty("--op", 0);
    console.log(tip.style);
    lsStart.play();
    lsPulse.play();
  } else {
    lsPulse.pause();
    lsPulse.currentTime = 0;
    lsStop.play();
  }

  // Sound effects of darksabers
  if (box.checked == true && darkSaber.checked) {
    tip.style.setProperty("--op", 0);
    dsStart.play();
    dsPulse.play();
  } else {
    dsPulse.pause();
    dsPulse.currentTime = 0;
    dsStop.play();
  }
}
