"use strict";
$(document).ready(function(){

var names = ["Frank", "Ben", "Steph", "Pat"];

$(".red").click(function(e){
    console.log(names[1]);
});


$(".orange").click(function(e){
    for (var i = 1; i <= 10; i++) {
        console.log(i);
    };
});



$(".yellow").click(function(e){
    for (var l = 0; l < names.length; l++){
        console.log(names[l]);
    };
});



$(".green").click(function(e){
    for (var k = 0; k < names.length; k++){
        if (names[k].substring(0, 1) === "P"){
            console.log(names[k]);
        };
    };
});



var car = {
    doors: 4,
    cylinders: 6,
    honk: function() {
        console.log("HONK!!!");
        console.log(car);
    }
};

$(".blue").click(car.honk);

});