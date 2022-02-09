//Helpers or Utils
function esPar(numero){
  return (numero % 2 === 0)
};

function calcularMediaAritmetica(lista){
  const suma = lista.reduce(
    function(x= 0, y){
      return x + y
    }
  );
  return (suma / lista.length);
}

//Calculadora de mediana
function medianaSalarios(lista){
  const mitad = parseInt(lista.length /2);
  let mediana;
  if(esPar(lista.length)){
    const numero1 = lista[mitad - 1]
    const numero2 = lista[mitad]
    const promedio = calcularMediaAritmetica([numero1,numero2])
    mediana = promedio;
  }else{
    mediana = lista[mitad];
  }
  return mediana;
};


//Mediana General
const salariosPeru = peru.map(
  function(persona){
    return persona.salary;
  }
);

const salariosPeruOrdenado = salariosPeru.sort(
  function(salarioA, salarioB){
    return salarioA - salarioB;
  }
);

const medianaGeneralPeru = medianaSalarios(salariosPeruOrdenado)

//Mediana del top 10%
const spliceStart = (salariosPeruOrdenado.length * 90) / 100;
const spliceCount = salariosPeruOrdenado.length - spliceStart;

const salariosPeruTop10 = salariosPeruOrdenado.splice(spliceStart, spliceCount);

const medianaTop10Peru = medianaSalarios(salariosPeruTop10)

console.log(
  {
    medianaGeneralPeru,
    medianaTop10Peru
  }
);