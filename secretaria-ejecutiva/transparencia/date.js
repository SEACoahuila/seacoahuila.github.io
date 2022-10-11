
// var meses = new Array ("Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre");
// var f=new Date();

// let month = f.getMonth() + 1
// let day = 1
//  if (month === 10) {
//     day = 5
//  } else if (month === 1 ){
//     day = 2
//  } else if (month === 4 ){
//     day = 3
//  } else if (month === 7 ){
//     day = 2
//  } 

// document.write(" Fecha de última actualización: " + day + " de " + meses[f.getMonth()] + " del " + f.getFullYear());

function cargaDate() {
	console.log("hola")

var meses = new Array ("Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre");
var f=new Date();

let month = f.getMonth() + 1
let day = "01"
 if (month === 10) {
    day = "04"
 } else if (month === 1 ){
    day = "02"
 } else if (month === 4 ){
    day = "03"
 } else if (month === 7 ){
    day = "02"
 } 

let fechaCompleta = (" Fecha de última actualización : " + day + " de " + meses[f.getMonth()] + " del " + f.getFullYear());

	document.getElementById("date").textContent += fechaCompleta

}


window.onload=cargaDate;
