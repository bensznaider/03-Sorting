describe('Bubble Sort', function(){
  it('handles an empty array', function(){
    expect(bubbleSort([])).toEqual([]);
  });

  it('Maneja correctamente un arreglo desordenado y lo devuelve ordenado', function(){
    expect(bubbleSort([3,5,4,2,1])).toEqual([1,2,3,4,5])
  })

  it('Maneja correctamente un arreglo ordenado y lo mantiene ordenado', function(){
    expect(bubbleSort([1,2,3,4,5])).toEqual([1,2,3,4,5])
  })

  it('Recibe un arreglo de mayor a menor y lo devuelve ordenado de menor a mayor', function(){
    expect(bubbleSort([5,4,3,2,1])).toEqual([1,2,3,4,5])
  })

  it('Cuenta la cantidad de veces que se invocó la función swap', function () {
    spyOn(window, 'swap').and.callThrough(); 
    window.bubbleSort([2,1]);
    expect(swap.calls.count()).toEqual(1);
  });
});

