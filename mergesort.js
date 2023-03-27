function split(arreglo) {
  let mitad ;
  if (arreglo.length % 2 === 0) {
    mitad = arreglo.length / 2
  }
  else {
    mitad = Math.ceil(arreglo.length/2)
  }
  let firstHalf = arreglo.slice(0, mitad)
  let secondHalf = arreglo.slice(mitad, arreglo.length)
  return [firstHalf, secondHalf];
}

function merge(arreglo1,arreglo2){
  return arreglo1.concat(arreglo2)
}

/* function mergeSort(array) {
  [subArr1, subArr2]=split(array)
  if (!(subArr1.length<2 && subArr2.length<2)) mergeSort(subArr1)
} */