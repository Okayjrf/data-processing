// alert("hello from data processing!");

const queryString = window.location.search;

let myPrice = 0;
let widgetValue = 3.99;
let sprocketValue = 5.99;
let thingyValue = 1.99;
let totalPrice = myPrice;
let myPlaceholder = ""; 


if(queryString.includes `Widget`, `Sprocket`,`Thingy`){
        console.log("Total Price: " + (myPrice + widgetValue + sprocketValue + thingyValue));
        totalPrice += `<p> <a href="index.html">Total Price: </a></p>` + totalPrice;

if(myPlaceholder = 0){
        myPlaceholder = totalPrice;
    } 
}   

document.querySelectorAll('input[value="my-placeholder"]').innerHTML = myPlaceholder;

if(queryString.length > 0){

const urlParams = new URLSearchParams(queryString);

let myData = "";

// Log the values
urlParams.forEach(function(value, key) {
key = key.split("_").join(" ");
  console.log(key, value);
  myData+= `<p>${key}: ${value} </p>`;
});
    myData += `<p><a href="index.html">CLEAR</a></p>`;
    document.getElementById("output").innerHTML = myData;
}