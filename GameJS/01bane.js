var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");



if (localStorage.length < 5) {
  alert("Du kan bevege deg med piltastene, og" +
  " aktiver sakte hastighet med S knappen " +
   "Spill med lyd og i full skjerm.")
}
function lagCanvas() {
  ctx.canvas.width  = window.innerWidth;
  ctx.canvas.height = window.innerHeight;
}
lagCanvas();
