var highScoreListe = []


function faaScore() {
  localStorage.setItem("MAIpoengListe", JSON.stringify(highScoreListe));
  highScoreListe = (window.localStorage.getItem("MAIpoengListe"));
  highScoreListe = JSON.parse(highScoreListe);
  highScoreListe.sort(function(a, b){return b-a});
}

function skjekkTall() {
  // Bytter ut det sitste tallet i arrayen og putter det nye inn.
  if (highScoreListe[4] < poeng && poeng < highScoreListe[0] ) {
    faaScore();
    alert("Gratulerer du fikk en ny rekord på listen")
    highScoreListe.splice(4, 1);
    highScoreListe.push(poeng);
    faaScore();
  }
  // Same som over men skriver ny highscore hvis det er en top score.
  if (poeng > highScoreListe[0]) {
    faaScore();
    alert("Gratulerer du fikk en ny highscore")
    highScoreListe.splice(4, 1);
    highScoreListe.push(poeng);
    faaScore();
  }


}

function gameOver() {
  if (theGameIsOn == false) {
    // Gjør bagrunnen til svart ved å tegne en svart firkant
    ctx.clearRect(0,0,canvas.width,canvas.height)
    ctx.fillStyle = "black"
    ctx.fillRect(0,0,canvas.width, canvas.height)
    var over = document.getElementById("over")
    var reset = document.getElementById("reset")
    reset.style.visibility = "visible"
    ctx.drawImage(over, canvas.width*0.37, canvas.height*0.07)

    //Denne vil bare være sann i starten av spillet, og derfor bare kjøre da.
    // Dette er det samme for resten av kodene frem til fem også
    //Localstorage gjør om items til strings, og må derfor også gjøre
    // poeng om til en string for å hente den sennere.
    // Parse gjør om til et objekt og stringify gjør om objekt til en string

    if (!localStorage["MAIScore1"]) {
      localStorage.setItem("MAIScore1", JSON.stringify(poeng));
      JSON.parse(window.localStorage.getItem("MAIScore1"));
      highScoreListe.push(window.localStorage.MAIScore1)
      slettTabbel();
      skrivePoeng();
    }

      else if (!localStorage["MAIScore2"]) {
        localStorage.setItem("MAIScore2", JSON.stringify(poeng));
        JSON.parse(window.localStorage.getItem("MAIScore2"));
        highScoreListe.push(window.localStorage.MAIScore1)
        highScoreListe.push(window.localStorage.MAIScore2)
        slettTabbel();
        skrivePoeng();
      }
      else if (!localStorage["MAIScore3"]) {
        localStorage.setItem("MAIScore3", JSON.stringify(poeng));
        JSON.parse(window.localStorage.getItem("MAIScore3"));
        highScoreListe.push(window.localStorage.MAIScore1)
        highScoreListe.push(window.localStorage.MAIScore2)
        highScoreListe.push(window.localStorage.MAIScore3)
        slettTabbel();
        skrivePoeng();
      }
      else if (!localStorage["MAIScore4"]) {
        localStorage.setItem("MAIScore4", JSON.stringify(poeng));
        JSON.parse(window.localStorage.getItem("MAIScore4"));
        highScoreListe.push(window.localStorage.MAIScore1)
        highScoreListe.push(window.localStorage.MAIScore2)
        highScoreListe.push(window.localStorage.MAIScore3)
        highScoreListe.push(window.localStorage.MAIScore4)
        slettTabbel();
        skrivePoeng();
      }
      else if (!localStorage["MAIScore5"]) {
        localStorage.setItem("MAIScore5", JSON.stringify(poeng));
        JSON.parse(window.localStorage.getItem("MAIScore5"));
        highScoreListe.push(window.localStorage.MAIScore1)
        highScoreListe.push(window.localStorage.MAIScore2)
        highScoreListe.push(window.localStorage.MAIScore3)
        highScoreListe.push(window.localStorage.MAIScore4)
        highScoreListe.push(window.localStorage.MAIScore5)
        slettTabbel();
        skrivePoeng();
      }
      else if (!localStorage["MAIpoengListe"]) {
        highScoreListe.push(window.localStorage.MAIScore1)
        highScoreListe.push(window.localStorage.MAIScore2)
        highScoreListe.push(window.localStorage.MAIScore3)
        highScoreListe.push(window.localStorage.MAIScore4)
        highScoreListe.push(window.localStorage.MAIScore5)
        // Her gjør den helle arrayen om til en string, og sennere til et objekt
        localStorage.setItem("MAIpoengListe", JSON.stringify(highScoreListe));
        highScoreListe = (window.localStorage.getItem("MAIpoengListe"));
        highScoreListe = JSON.parse(highScoreListe);
        slettTabbel();
        skrivePoeng();
        // Her skjekker den alle verdeine i arrayen er støre enn poeng
        // og returnerer true eller false avhengig av svaret
        var nyRekord = highScoreListe.every(function(e){
          return e > poeng

        })
      }
      // Siden de andre ikke er sanne lenger vil denne kjøre helle tiden
      else if (localStorage["MAIpoengListe"]) {
        highScoreListe = (window.localStorage.getItem("MAIpoengListe"));
        highScoreListe = JSON.parse(highScoreListe);
        slettTabbel();
        skrivePoeng();
        // Her skjekker den alle verdeine i arrayen er støre enn poeng
        // og returnerer true eller false avhengig av svaret
        var nyRekord = highScoreListe.every(function(e){
          return e > poeng

        })
      }






// Denne kjører funksjoner som oppdaterer poengene
    if (nyRekord == false) {
      skjekkTall();
      slettTabbel();
      skrivePoeng();

// Hvis denne er sann vil den bare hente den gamle scoren som finnes
    }else if (nyRekord == true){
      highScoreListe = (window.localStorage.getItem("MAIpoengListe"));
      highScoreListe = JSON.parse(highScoreListe);
      highScoreListe.sort(function(a, b){return b-a});
      alert("Ingen rekord satt")
      slettTabbel();
      skrivePoeng();
    }




  }
}
// Skriver poeng ut med ctx text.
function skrivePoeng() {
  for (var i = 0; i < highScoreListe.length; i++) {
    highScoreListe.sort(function(a, b){return b-a});
    ctx.fillStyle = "red"
    ctx.fillText(i + 1 + ". " + highScoreListe[i],
     0.45*canvas.width,0.4*canvas.height + (50*i) );
  }
}
// Sletter texten etter hver gang den blir lastet for å ikke skrive over
function slettTabbel() {
  ctx.fillStyle = "black"
  ctx.fillRect(0.4,0.2*canvas.height,canvas.width, canvas.height)
}
// Henter denne med button, og alt den gjør er å restarte vinduet
function igjen() {
  window.location.reload()

}
