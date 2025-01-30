// Her lager jeg baller som har forskjellige farger
var ball ={
  radius: 25,
  farge: "red",
  xpos: Math.floor(canvas.width*0.7),
  ypos: Math.floor(canvas.height*0.5),
  xretning:-1,//Motvenstre
  yretning:1,//Nedover
  xfart: 7,
  yfart: 7,
}
var ball2 ={
  radius: 25,
  farge: "green",
  xpos: Math.floor(canvas.width*0.7),
  ypos: Math.floor(canvas.height*0.5),
  xretning:-1,//Motvenstre
  yretning:1,//Nedover
  xfart: 7,
  yfart: 7,
}
var ball3 ={
  radius: 25,
  farge: "yellow",
  xpos: Math.floor(canvas.width*0.3),
  ypos: Math.floor(canvas.height*0.8),
  xretning:-1,//Motvenstre
  yretning:1,//Nedover
  xfart: 7,
  yfart: 7,
}
var ball4 ={
  radius: 25,
  farge: "grey",
  xpos: Math.floor(canvas.width*0.7),
  ypos: Math.floor(canvas.height*0.5),
  xretning:-1,//Motvenstre
  yretning:1,//Nedover
  xfart: 7,
  yfart: 7,
}
var ball5 ={
  radius: 25,
  farge: "purple",
  xpos: Math.floor(canvas.width*0.7),
  ypos: Math.floor(canvas.height*0.5),
  xretning:-1,//Motvenstre
  yretning:1,//Nedover
  xfart: 7,
  yfart: 7,
}

function spillLyd1() {
  const lyd1 = document.getElementById("lyd1");
  lyd1.play();
}

function treffBall(objekt) {
  // Regner sentrum x avstand fra ballen og firkanten. Minus halvparten av
  // bredden gir sentrum til firkanten
  var distX = Math.abs(objekt.xpos  - snek.xpos-snek.bredde/2);
  // Samme som over
  var distY = Math.abs(objekt.ypos  - snek.ypos-snek.hoyde/2);
  // Bruker pytagoreas for å finne strekken som går fra hjørnet til firkanten
  // og til sentrum av ballen
  var dx = distX-snek.bredde/2;
  var dy = distY-snek.hoyde/2;
  // Hvis distansen er større enn hvis ballen og firkanten treffer, som er
  // midten av firkanten + radiusen til ballen(som er d/2) vil ingenting skje
  if (distX > (snek.bredde/2 + objekt.radius)) {
     return false;
    }
  if (distY > (snek.hoyde/2 + objekt.radius)) {
     return false;
   }
   //Hvis distX er mindre enn midten av firkanten betyr det at ballen har
   //truffet firkanten.
   if (distX <= (snek.bredde/2)) {
     spillLyd1()
     theGameIsOn = false

     }
  if (distY <= (snek.hoyde/2)) {
    spillLyd1()
    theGameIsOn = false
    }
    // Skjekker om ballen treffer hjørnene ved å forlenge en strek fra hjørnen
    // av firkanten, og skjekke om den linjen er mindre enn radius til ballen
      if (Math.sqrt(dx*dx+dy*dy)<=(objekt.radius)) {
        spillLyd1()
        theGameIsOn = false

      }

}

//funksjoner for hvis ballen treffer

// Dette er for å lage ballen
function lagSirkel(a) {
  var bredde = a.xpos
  var hoyde = a.ypos
  ctx.fillStyle = a.farge
  ctx.beginPath();
  ctx.arc(bredde, hoyde, a.radius, 0, 2 * Math.PI);
  ctx.closePath();
  ctx.fill();
  a.xpos=a.xpos+a.xfart*a.xretning;
  a.ypos=a.ypos+a.yfart*a.yretning;

};
