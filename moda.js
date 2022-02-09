const lista1 =[
  1,
  2,
  3,
  1,
  2,
  3,
  4,
  2,
  2,
  2,
  1
];

function calcularModa(lista){
  const listaCount = {};
  lista.map(function(elemento){
    listaCount[elemento] = isNaN(listaCount[elemento]) ? 1 : listaCount[elemento] + 1;
  });

  const listaArray = Object.entries(listaCount).sort(
    function(elementoA,elementoB){
      return elementoA[1] - elementoB[1];
    }
  );

  return listaArray[listaArray.length - 1]
};


/*const contar = (frase) => {

  let container={};
  frase.toLowerCase().replace(/\S/g,(p)=>{
    container[p] = isNaN(container[p]) ? 1 : container[p] + 1;
  });

  let array =  Object.entries(container)
  array.sort((x, y)=>y[1] - x[1])
  return array[0];
};

console.log(contar("Giuliana Akemi Huaman Nacarino"));*/
