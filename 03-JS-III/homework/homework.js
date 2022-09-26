// En los próximos problemas, deberás completar la función.
// Todo tu código irá dentro de las llaves de la función.
// Asegúrate que usas "return" cuando la consola te lo pida.
// Pista: "console.log()" NO fucionará.
// No cambies los nombres de las funciones.

function imprimirSumaNumeros() {
    // Imprime la suma de los números del 1 al 10
    // Pista: usa un acumulador
    // Tu código:
    var acum = 0;
    for (var i=1; i<=10; i++){
      acum = acum + i;
      
    }
    return acum;
}

function encuentraPares(array){
  // Devuelve un arreglo con los pares encontrados
  // en el arreglo de enteros pasado como parámetro
  // Tu código:
  var paresEncontrados = [];
  for(var i=0; i<array.length; i++){
    if (array[i] % 2 === 0){
      paresEncontrados.push(array[i]);
    }
  }
  return paresEncontrados
}

function elevaAlCuadrado(array){
  // Devuelve un arreglo con cada número del array
  // elevado al cuadrado
  // Tu código:
  var result = array.map(function(valor){
    return valor ** 2;
  });
   return result
}

function sumaArray(array){
  // Devuelve el resultado de sumar todos los elementos
  // de un arreglo de enteros dado
  // Tu código:
   var suma = array.reduce(function (acum, valor) {
    return acum + valor;
  });
   return suma
}

function numeroDigitos(num){
  // Devuelve el número de dígitos de un número dado
  // Tu código:
// return  num.toString().length
return String(num).length
}
  
  
  // No modificar nada debajo de esta línea
  // --------------------------------
  
  module.exports = {
    imprimirSumaNumeros,
    encuentraPares,
    elevaAlCuadrado,
    sumaArray,
    numeroDigitos
  };
