var snek = {
  bredde: 30,
  hoyde: 30,

  farge: "blue",
  //Setter firkanten til å være i midten
  xpos: (canvas.width/2)-30,
  ypos: (canvas.height/2)-30,
  xfart: 100,
  yfart: 100,
};


function tegnFirkant() {
    // pusser ut tavla før tegne snek
    ctx.fillStyle = "white";
    ctx.fillRect(0,0,canvas.width, canvas.height);
    // tegner snek
    ctx.fillStyle = snek.farge;
    ctx.fillRect(snek.xpos, snek.ypos, snek.bredde, snek.hoyde)
  }

  function Hoyre() {
    snek.xpos= snek.xpos + snek.xfart;
  }
  function Venstre() {
    snek.xpos = snek.xpos - snek.xfart;
  }
  function Opp() {
    snek.ypos = snek.ypos + snek.yfart;
  }
  function Ned() {
    snek.ypos = snek.ypos - snek.yfart;
  }


  document.onkeydown = function (e) {
  var key = e.keyCode;
  if (key == 37) {
  Venstre();
  }
  if (key == 38) {
  Ned();
  }
  if (key == 39) {
  Hoyre();
  }
  if (key == 40) {
  Opp();
  }


  }
