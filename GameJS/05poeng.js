var poeng = 0;
theGameIsOn = true

// Lager poeng
function lagPoeng() {
  ctx.font = "bold 20px Arial";
  ctx.lineWidth = 10
  ctx.fillStyle = "red";
  ctx.background ="blue";
  ctx.fillText("Poeng: " + poeng, canvas.width*0.85, canvas.height/15 );
}
// Teller poeng
function telPoeng() {
  poeng += 1
  treffBall(ball);
  //Kaler funksjon når poeng er over 250
  if (poeng > 250) {
    treffBall(ball2);
  };
  if (poeng > 500) {
  treffBall(ball3);
  };
  if (poeng > 750) {
  treffBall(ball4);
  };
  if (poeng > 1000) {
  treffBall(ball5);
  };

  };
