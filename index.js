/*Planteamiento:
cree una función de JS que analice un arreglo de números. Para cada número, haga lo siguiente:

Si el número es par, agréguelo a una arreglo de "evenNumbers".
Si el número es impar, agréguelo a una matriz "oddNumbers".
Si el número es un múltiplo de 3, agréguelo a una matriz "multiplesOfThree".

Imprime el contenido de cada arreglo.

Ejemplo:
Entrada: [2, 5, 8, 11, 15, 23, 30]
Salida:
Even Numbers: [2, 8, 30]
Odd Numbers: [5, 11, 15, 23]
Multiples of Three: [15, 30]*/

const e = [2, 5, 8, 11, 15, 23, 30];

function array(e) {
    for (i = 0; i < e; i++) {
        if (i += 3) {
            //algo.push()
            console.log(multipleOfThree)
        } if (i += 2) {
            console.log(evenNumbers)
        } else {
            console.log(oddNumbers)
        }
    }
}