const coupons = [
  {
    name: "J4CK5I70M4SN44",
    discount: 15,
  },
  {
    name: "3S7R3N473",
    discount: 30,
  },
  {
    name: "H45G4N4D0",
    discount: 25,
  },
  {
    name: "54N5UNGS51",
    discount: 45,
  }
  /*"J4CK5I70M4SN44",
  "3S7R3N473",
  "H45G4N4D0",
  "54N5UNGS51"*/
];


function calcularPrecioConDescuento(precio, descuento){
  const porcentajePrecioConDescuento = 100 - descuento;
  const precioConDescuento = (precio * porcentajePrecioConDescuento)/100;

  return precioConDescuento;
};

function onClickButtonPriceDiscount(){
  const inputPrice = document.getElementById("inputPrice");
  const valuePrice = inputPrice.value;

  const inputDiscount = document.getElementById("inputDiscount");
  const valueDiscount = inputDiscount.value;
  let descuento;

  const precioConDescuento = calcularPrecioConDescuento(valuePrice, valueDiscount);
  const resultPriceDiscount = document.getElementById("resultPriceDiscount")
  resultPriceDiscount.innerText = `El precio con descuento son: S/${precioConDescuento}`
  console.log(resultPriceDiscount);
}



function onClickButtonPriceCoupon(){
  const inputPrice = document.getElementById("inputPrice");
  const valuePrice = inputPrice.value;

  const inputCoupon = document.getElementById("inputCoupon");
  const valueCoupon = inputCoupon.value;
  let descuento;

  const isCouponValueValid = function (coupon) {
    return coupon.name === valueCoupon;
    };
  const userCoupon = coupons.find(isCouponValueValid);



  if (!userCoupon) {
      alert("El cupón " + valueCoupon + " no es válido");
    }else{
    const descuento = userCoupon.discount;
    const precioConDescuento = calcularPrecioConDescuento(valuePrice, descuento);
    const resultPriceCoupon = document.getElementById("resultPriceCoupon")
    resultPriceCoupon.innerText = `El precio con cupón son: S/${precioConDescuento}`
    console.log(resultPriceCoupon);
  }

  
  /*if (!coupons.includes(valueCoupon)) {
    alert("El cupón " + valueCoupon + "no es válido");
    } else if(valueCoupon === "J4CK5I70M4SN44") {
      descuento = 15;
    } else if (valueCoupon === "3S7R3N473") {
      descuento = 30;
    } else if (valueCoupon === "H45G4N4D0") {
      descuento = 25;
    } else if (valueCoupon === "54N5UNGS51") {
      descuento = 45;
  }*/


  /*switch (valueCoupon) {
    case coupon[0]:
        descuento = 15;  //  "J4CK5I70M4SN44",
      break;
    case coupon[1]:
        descuento = 30;  // "3S7R3N473",
      break;
    case coupon[2]:
      descuento = 25;  //   "H45G4N4D0",
      break;
    case coupon[3]:
      descuento = 45;  //   "54N5UNGS51"
      break;
  }*/

};

