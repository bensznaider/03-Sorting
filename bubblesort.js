//ESTA ES LA PRIMERA SOLUCIÓN QUE ENCONTRAMOS. SWAP LA USAMOS COMO COMPARADOR Y NO PARA INVERTIR
//LOS VALORES DEL ARREGLO, LO CUAL HICIMOS EN LA MISMA FUNCIÓN BUBBLESORT. LUEGO, EN BASE A UNA
//VARIABLE TESTIGO QUE ARRANCAMOS EN FALSE, DETERMINAMOS SI EN CADA FOR SE PRODUJO ALGÚN CAMBIO Y,
//EN ESE CASO, VOLVIMOS A EJECUTAR LA FUNCIÓN CON RECURSIÓN HASTA QUE NO HUBIERA CAMBIOS, EN CUYO
//CASO DEVOLVEMOS EL ARREGLO RESULTANTE.

/* function bubbleSort(array) {
  let huboCambios=false
  for (let i=0;i<array.length-1;i++) {
    if (swap(array[i],array[i+1])) {
      huboCambios=true
      let numMayor=array[i]
      array[i]=array[i+1]
      array[i+1]=numMayor
    }
  }
  if (huboCambios) return bubbleSort(array)
  return array
}

function swap(num1, num2) {
  if (num1>num2) return true
  else return false
} */

//ESTA ES LA SEGUNDA SOLUCIÓN QUE PENSAMOS, USANDO EL SWAP PARA INVERTIR EL ORDEN DE LOS VALORES
//CUANDO ERA NECESARIO. TAMBIÉN USAMOS LA VARIABLE TESTIGO PARA HACER Y CORTAR LA RECURSIÓN.
function bubbleSort(array) {
  let hayCambios = false
  for (let i=0; i < array.length-1 ; i++) {
    if (array[i] > array[i+1]) {
      [array[i], array[i+1]] =  swap(array[i], array[i+1])
      hayCambios = true
    }
  }
  if (hayCambios) return bubbleSort(array)
  return array
}

function swap(num1, num2) {
  return [num2,num1]
}