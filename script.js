let colours = ["btn-danger", "btn-warning", "btn-success"];
let pos = 0;

function loopDelay() {
   setInterval(changeColour, 10000);
}

function changeColour() {
   document.getElementById('button').classList.remove(colours[pos]);
   if (pos === 2) {
      pos = -1;
   }
   document.getElementById('button').classList.add(colours[pos + 1]);
   ++pos;
}

loopDelay();
