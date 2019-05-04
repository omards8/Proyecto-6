var colFin = Math.floor(Math.random() * 6) + 1;
var filFin = Math.floor(Math.random() * 6) + 1;
var colIni = Math.floor(Math.random() * 6) + 1;
var filIni = Math.floor(Math.random() * 6) + 1;
var fila;
var columna;
var colorIni;
var colorFin;
var filSig;
var colSig;
var cadmov;
function iniciarTablero () {
  var tabla = [[2, 6, 5, 4, 5, 5], [4, 6, 6, 3, 2, 6], [3, 4, 1, 2, 6, 3], [1, 4, 2, 5, 6, 1], [5, 5, 3, 2, 2, 1], [4, 1, 4, 3, 1, 3]];
  var colores = [["blue", "yellow", "#A569BD", "red", "yellow", "blue"], ["blue", "white", "#A569BD", "red", "yellow", "blue"], ["blue", "yellow", "blue", "red", "red", "#A569BD"], ["#A569BD", "white", "#A569BD", "red", "green", "red"], ["green", "white", "green", "green", "white", "yellow"], ["green", "white", "#A569BD", "white", "green", "yellow"]];
  var contador = 1;
    document.write("<table>");
    for (var i = 0; i < 6; i++) {
      document.write("<tr>");
        for (var j = 0; j < 6; j++) {
          document.write("<td id=" + contador +" style = 'background-color:" + colores[i][j] +"';>" + tabla[i][j]);
          document.write("</td>");
          contador = contador + 1;
        }
      document.write("</tr>");
    }
    document.write("</table>");
    while (filIni == filFin && colIni == colFin) {
      colFin = Math.floor(Math.random() * 6) + 1;
      filFin = Math.floor(Math.random() * 6) + 1;
      colIni = Math.floor(Math.random() * 6) + 1;
      filIni = Math.floor(Math.random() * 6) + 1;
    }
    console.log("Fila inicial: " + filIni + " Columna inicial:  " + colIni + " Fila final:  " + filFin + " Columna final:  " + colFin);
    fila = filIni;
    columna = colIni;
    colorIni = (6 * filIni) - 6 + colIni;
    colorFin = (6 * filFin) - 6 + colFin;
    document.getElementById(colorIni).classList.add("inicio");
    document.getElementById(colorFin).classList.add("fin");

}

  function comprobarTablero () {

      filSig = document.getElementById('sigfil').value;
      colSig = document.getElementById('sigcol').value;
      if (filSig < 0 || filSig > 6) {
        document.getElementById('men').value = "Error. Numero de fila incorrecto. Fuera de rango";
        } else if (colSig < 0 || colSig > 6) {
          document.getElementById('men').value = "Error. Numero de columna incorrecto. Fuera de rango";
          } else if (fila != filSig && columna != colSig) {
            document.getElementById('men').value = "Error. Filas y columnas no pueden ser distintas";
            } else if (fila == filSig && columna == colSig) {
              document.getElementById('men').value = "Error. Estas en la misma casilla";
            } else if ((tabla[fila-1][columna-1] != tabla[filSig-1][colSig-1]) && (colores[fila-1][columna-1] != colores[filSig-1][colSig-1])) {
                document.getElementById('men').value = "Error. Movimiento no permitido.";
              }  else {
                    cadmov = "( " + filSig + " , " + colSig + " )";
                    var numero = Number(document.getElementById('num').value);
                    numero = numero + 1;
                    document.getElementById('num').value = numero;
                    document.getElementById('movs').value = cadmov;
                    document.getElementById('men').value = "Movimiento almacenado correctamente";
                    fila = filSig;
                    columna = colSig;
                    }
      if (fila == filFin && columna == colFin) {
        document.getElementById('men').value = "¡HAS GANADO!";
      }
    }

iniciarTablero ();
