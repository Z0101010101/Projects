var okefart = false;
var knapp = document.getElementById("knapp");

function spillLyd3() {
  const lyd3 = document.getElementById("lyd3");
  lyd3.play();
}
function stoppLyd3() {
  const lyd3 = document.getElementById("lyd3");
  lyd3.pause();
}

//Starter alle funksjonene her
function gameLoop() {
  slettKnapp = true
  if (slettKnapp = true) {
    knapp.style.display = "none";
  }
  spillLyd3()
  tegnFirkant();
  vegg();
  hinder();
  lagPoeng();
  telPoeng();
  lagSirkel(ball);
  stoppFart();
  CoolDownText();
  if (poeng > 250) {
    lagSirkel(ball2);
  };
  if (poeng > 500) {
    lagSirkel(ball3);
  };
  if (poeng > 750) {
    lagSirkel(ball4);
  };
  if (poeng > 1000) {
    lagSirkel(ball5);
  };
  // Øker farten
  if (poeng > 2000) {
    okefart = true
    endreAlleFartTilbake();
  }
  if (theGameIsOn) {
    requestAnimationFrame(gameLoop);
  };
  if (theGameIsOn == false) {
    stoppLyd3()
    // Venter til den kan starte
    const vent = setTimeout(gameOver, 1000);
  }
}

//variabler som blir brukt for cooldown
var skalVente = false;
const VENTE = 15000 // 15 sek
var poengNaa

// Disse funkjonene ender farten til alle ballene
function endreAlleFartTilbake() {
  endreBallFartTilbake(ball)
  endreBallFartTilbake(ball2)
  endreBallFartTilbake(ball3)
  endreBallFartTilbake(ball4)
  endreBallFartTilbake(ball5)
}
function endreAlleFart() {
  poengNaa = poeng
  endreBallFart(ball)
  endreBallFart(ball2)
  endreBallFart(ball3)
  endreBallFart(ball4)
  endreBallFart(ball5)
}

// Dise brukes i de over men er for en og en ball
function endreBallFart(a) {
  a.xfart = 4
  a.yfart = 4
}
function endreBallFartTilbake(a) {
  a.xfart = 7
  a.yfart = 7
  if (okefart == true) {
    a.xfart = 8
    a.yfart = 8
  }
}

// Denne funksjonen setter S knappen på en cooldown med timeout som da er tiden
// før en funksjon kan bli brukt igjen. Skriver også en tekst for når
// skalVente er satt til sann. timeout venter også før skalVente blir satt
// tilbake til false
function startTimer() {
  skalVente = true;
  // Venter 15 sek før den blir satt tilbake til sann, og knappen kan brukes
  // igjen
  setTimeout (function(){ skalVente = false}, VENTE);
}





// her funker funksjonen hvis skalVente ikke er sann og S knappen er trukket
document.onkeyup = function (e) {
  var key2 = e.keyCode;
  if (!skalVente && key2 == 83) {
    endreAlleFart();
    startTimer();
  }


  }


// Setter farten til bake etter poengene er 400 over fra starten
function stoppFart() {
  if (poeng > poengNaa + 200) {
    endreAlleFartTilbake();
  }
}

// For å skrive og viske ut teksten som blir skrevet når S er på cooldown
function CoolDownText() {
  if (skalVente) {
    ctx.fillStyle = "red"
    ctx.fillText("S knappen er på cooldown", canvas.width*0.1, canvas.height*0.022 );
  }else if (!skalVente) {
    ctx.fillStyle = "black"
    ctx.fillText("S knappen er på cooldown", canvas.width*0.1, canvas.height*0.022  );
  }

}
