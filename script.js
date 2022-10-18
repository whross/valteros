"use strict";

/* Calls the function that puts the price values in their respective IDs */
priceSet();
/* This function calculates the Subtotal as well as the individual prices for each item */
/* This function is called through a button in the html */

function calculateTotal() {
   var num1x = 50.25;
   var num2x = 30;
   var num3x = 125;
   var num4x = 80;
   var num5x = 30;
   var num6x = 150;
   var num1 = document.getElementById("prod1x").value;
   var num2 = document.getElementById("prod2x").value;
   var num3 = document.getElementById("prod3x").value;
   var num4 = document.getElementById("prod4x").value;
   var num5 = document.getElementById("prod5x").value;
   var num6 = document.getElementById("prod6x").value;

   // Calculates the Subtotal //
   var add1 = +(num1 * num1x) + +(num2 * num2x) + +(num3 * num3x) + +(num4 * num4x) + +(num5 * num5x) + +(num6 * num6x);
   document.getElementById("add").innerHTML = add1.toLocaleString("en-US", { style: "currency", currency: "USD" });

   // Calculates the total for each service //
   var item1 = num1 * num1x;
   var item2 = num2 * num2x;
   var item3 = num3 * num3x;
   var item4 = num4 * num4x;
   var item5 = num5 * num5x;
   var item6 = num6 * num6x;
   document.getElementById("first").innerHTML = item1.toLocaleString("en-US", { style: "currency", currency: "USD" });
   document.getElementById("second").innerHTML = item2.toLocaleString("en-US", { style: "currency", currency: "USD" });
   document.getElementById("third").innerHTML = item3.toLocaleString("en-US", { style: "currency", currency: "USD" });
   document.getElementById("fourth").innerHTML = item4.toLocaleString("en-US", { style: "currency", currency: "USD" });
   document.getElementById("fifth").innerHTML = item5.toLocaleString("en-US", { style: "currency", currency: "USD" });
   document.getElementById("sixth").innerHTML = item6.toLocaleString("en-US", { style: "currency", currency: "USD" });
   document.getElementById("first1").innerHTML = item1.toLocaleString("en-US", { style: "currency", currency: "USD" });
   document.getElementById("second1").innerHTML = item2.toLocaleString("en-US", { style: "currency", currency: "USD" });
   document.getElementById("third1").innerHTML = item3.toLocaleString("en-US", { style: "currency", currency: "USD" });
   document.getElementById("fourth1").innerHTML = item4.toLocaleString("en-US", { style: "currency", currency: "USD" });
   document.getElementById("fifth1").innerHTML = item5.toLocaleString("en-US", { style: "currency", currency: "USD" });
   document.getElementById("sixth1").innerHTML = item6.toLocaleString("en-US", { style: "currency", currency: "USD" });
}

/* Function puts the value into the Price per hour */
function priceSet() {
   var num1x = 50.25;
   var num2x = 30;
   var num3x = 125;
   var num4x = 80;
   var num5x = 30;
   var num6x = 150;
   document.getElementById("prod1").value = num1x.toLocaleString("en-US", { style: "currency", currency: "USD" });
   document.getElementById("prod2").value = num2x.toLocaleString("en-US", { style: "currency", currency: "USD" });
   document.getElementById("prod3").value = num3x.toLocaleString("en-US", { style: "currency", currency: "USD" });
   document.getElementById("prod4").value = num4x.toLocaleString("en-US", { style: "currency", currency: "USD" });
   document.getElementById("prod5").value = num5x.toLocaleString("en-US", { style: "currency", currency: "USD" });
   document.getElementById("prod6").value = num6x.toLocaleString("en-US", { style: "currency", currency: "USD" });
}
