function calcularMediaAritmetica(lista){

  const sumaLista = lista.reduce(
    function(valorAcumulado = 0, nuevoElemento){
      return valorAcumulado + nuevoElemento
    }
  );

  const promedioLista = sumaLista / lista.length;
  return promedioLista;
};

function listaOrdenada (lista){
  const listaOrdenada = lista.sort(function(elemento1,elemento2){
    return elemento1 - elemento2
  })
  
  return listaOrdenada;
};

function esPar(numerito){
  if(numerito % 2 === 0){
    return true;
  }else{
    return false;
  }
};


function calcularMediana(lista){

  const listaOrd = listaOrdenada(lista)

  const mitadLista = parseInt(listaOrd.length / 2);
  let mediana;
  
  if(esPar(listaOrd.length)){
    const elemento1 = listaOrd[mitadLista - 1];
    const elemento2 = listaOrd[mitadLista];
  
    const promedioElemento1y2 = calcularMediaAritmetica([elemento1,elemento2]);
    mediana = promedioElemento1y2
  }else{
    mediana = listaOrd[mitadLista]
  }
  return mediana;
};


