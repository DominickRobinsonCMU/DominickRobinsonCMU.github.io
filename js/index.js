function showCenaGIFs() {
  var container = document.getElementById('cena');
  container.style.display = 'block';
}

function hideCenaGIFs() {
  var container = document.getElementById('cena');
  container.style.display = 'block';
}

function toggleCenaGIFs() {
  var container = document.getElementById('cena');
  container.style.display = container.style.display == "none" ? "block" : "none";
}

function playCenaSound() {
  document.getElementById('cenaSound').play();
}

function pressCenaButton() {
  // alert("And his name is...")
  // alert("JOHN CENA!!!")
  // showCenaGIFs();
  // hideCenaGIFs();
  toggleCenaGIFs();
  playCenaSound();
}