// Dette er bare rektangelet spillet skjer i
function hinder() {
ctx.lineWidth = 30
ctx.strokeStyle = "black"
ctx.beginPath()
ctx.moveTo(0,snek.hoyde/2);
ctx.lineTo(canvas.width-snek.bredde/2, snek.hoyde/2 );
ctx.lineTo(canvas.width-snek.bredde/2, canvas.height - snek.hoyde/2)
ctx.lineTo(snek.bredde/2, canvas.height - snek.hoyde/2)
ctx.lineTo(snek.bredde/2, snek.hoyde/2)
ctx.stroke();
}

// Chrome blokker lyd siden man vil ikke ha at random nettsider skal spille av
// lyd. Den kjører bare hvis man klikker på skjermen, så jeg har med en start
// knapp i starten

function spillLyd2() {
  const lyd2 = document.getElementById("lyd2");
  lyd2.play();
}



//Sprette for ball og spering for firkant
function vegg() {
//Denne funksjonen lager en vegg ved å sende firkanten tilbake til
//posisjonen den var på
// 30 er bredden og høyden til firkanten og er hvorfor den blir brukt
// Ganger to i noen av dem siden bredden til veggen er 30 px, så den
// skal ikke passere den
if (snek.xpos>canvas.width - snek.bredde*2) {
  spillLyd1()
  theGameIsOn = false
}else if (snek.xpos < 0 + snek.hoyde) {
  spillLyd1()
  theGameIsOn = false
}else if (snek.ypos> canvas.height - snek.hoyde*2) {
  spillLyd1()
  theGameIsOn = false
}else if (snek.ypos< 0 + snek.hoyde) {
  spillLyd1()
  theGameIsOn = false

}
// Denn funksjonen er for ballen
function veggBall(a) {
  // endrer retningen til ballen når den treffer veggen, og spiller av lyd
  if (a.xpos >= canvas.width - snek.bredde - a.radius) {
    spillLyd2()
    a.xretning = -1

  }
  if (a.xpos <= snek.bredde + a.radius) {
    spillLyd2()
    a.xretning = 1

  }
  if (a.ypos >= canvas.height - snek.bredde - a.radius) {
    spillLyd2()
    a.yretning = -1

  }
  if (a.ypos <=  snek.bredde + a.radius ) {
    spillLyd2()
    a.yretning = 1

  }
}
// Skriver alle ballene
veggBall(ball);
veggBall(ball2);
veggBall(ball3);
veggBall(ball4);
veggBall(ball5);

}
