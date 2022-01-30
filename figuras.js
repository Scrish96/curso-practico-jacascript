//Codigo del cuadrado
console.group("Cuadrados")
  function perimetroCuadrado(lado){
    return lado * 4;
  };

  function areaCuadrado(lado){
    return lado * lado;
  }
console.groupEnd();


//Codigo del triangulo
console.group("Triángulos")
  function perimetroTriangulo(lado1, lado2, base){
    return (lado1 + lado2 + base);
  }

  function areaTriangulo(base, altura){
    return (base * altura) / 2
  }; 

console.groupEnd();


//Codigo del circulo
console.group("Círculos")
  function diametroCirculo(radio){
    return radio * 2;
  };

  const PI = Math.PI;
  console.log("PI es:" + PI);

  function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio);
    return diametro * PI;
  }; 

  function areaCirculo(radio){
    return (radio * radio) * PI;
  }; 
console.groupEnd()


//Aquí interactuamos con el HTML

//cuadrado
function calcularPerimetroCuadrado(){
  const input = document.getElementById("inputCuadrado")
  const value = input.value;
  const perimetro = perimetroCuadrado(value)
  alert(`El perimetro del cuadrado es: ${perimetro}`)
};

function calcularAreaCuadrado(){
  const input = document.getElementById("inputCuadrado")
  const value = parseInt(input.value);
  const area = areaCuadrado(value)
  alert(`El área del cuadrado es: ${area}`)
};

//triangulo
function calcularPerimetroTriangulo(){
  const inputLadoA = document.getElementById("inputTrianguloLadoA");
  const inputLadoB = document.getElementById("inputTrianguloLadoB");
  const inputBase = document.getElementById("inputTrianguloBase")
  const valueLadoA = parseInt(inputLadoA.value);
  const valueLadoB = parseInt(inputLadoB.value);
  const valueBase = parseInt(inputBase.value);
  const perimetro = perimetroTriangulo(valueLadoA, valueLadoB, valueBase)
  alert(`El perímetro del triángulo es: ${perimetro}`)
};

function calcularAreaTriangulo(){
  const inputAltura = document.getElementById("inputTrianguloAltura");
  const inputBase = document.getElementById("inputTrianguloBase");
  const valueBase = parseInt(inputBase.value);
  const valueAltura = parseInt(inputAltura.value);
  const area = areaTriangulo(valueBase, valueAltura);
  alert(`El área del triangulo es: ${area}`);
};


//circulo
function calcularPerimetroCirculo(){
  const inputRadio = document.getElementById("inputRadioCirculo");
  const valueRadio  = parseInt(inputRadio.value);
  const perimetro = perimetroCirculo(valueRadio);
  alert(`El perímetro del círculo es: ${perimetro}`)
};

function calcularAreaCirculo(){
  const inputRadio = document.getElementById("inputRadioCirculo");
  const valueRadio  = parseInt(inputRadio.value);
  const area = areaCirculo(valueRadio);
  alert(`El área del circulo es: ${area}`)
};