

var tabla = "ESTADO.csv"
var select = document.getElementById('provincia');
select.addEventListener('change',
  function(){
    var selectedOption = this.options[select.selectedIndex];
    tabla = (selectedOption.value + '.csv');
  });




d3.csv(tabla, function(err, rows){
  function unpack(rows, key) {
  return rows.map(function(row) { return row[key]});
}


// funcion para Cargar Municipios al campo <select>
function cargar_municipios() {
  var muncipiosEdo = ["Abasolo", "Acuña", "Allende", "Arteaga", "Candela", "Castaños", "Cuatro Ciénegas", "Escobedo", "Fco. I Madero", "Frontera ", "General Cepeda", "Guerrero", "Hidalgo ", "Jiménez", "Juárez", "Lamadrid ", "Matamoros", "Monclova", "Morelos", "Muzquiz", "Nadadores ", "Nava", "Ocampo", "Parras", "Piedras Negras", "Progreso", "Ramos Arizpe ", "Sabinas", "Sacramento", "Saltillo", "San Buenaventura", "San Juan de Sabinas ", "San Pedro", "Sierra Mojada ", "Torreón", "Viesca", "Villa Unión", "Zaragoza"];
 
  // Ordena el Array Alfabeticamente,  ;)):
  muncipiosEdo.sort();
 
  addOptions("provincia", muncipiosEdo);
 }
 
 // Rutina para agregar opciones a un <select>
 function addOptions(domElement, muncipiosEdo) {
  var select = document.getElementsByName(domElement)[0];
 
  for (value in muncipiosEdo) {
   var option = document.createElement("option");
   option.text = muncipiosEdo[value];
   select.add(option);
  }
 }


 cargar_municipios();

   
     
     
     
 // Termina el desempaquetado de array para el select

 

  // Termina el selector de texto
var data = [
    {
      type: "sunburst",
      maxdepth: 4,
      ids: unpack(rows, 'ids'),
      labels: unpack(rows, 'labels'),
      parents:unpack(rows, 'parents'),
      values:unpack(rows,'values'),
      insidetextfont: {size: 12, color: "white"},
      leaf: {opacity: 0.6},
      marker: {line: {width: 2}},
      outsidetextfont: {size: 20, color: "Black"},
      insidetextorientation: 'radial',
     }
  ];

var layout = {
  margin: {l: 0, r: 0, b: 0, t:0},
  sunburstcolorway:[
    "#EA5395","#41b2ec","#00cc96","#ab63fa","#f77b6b",
    "#e763fa", "#FECB52","#B6E880","#FF6692","#FFA15A"
  ],
  extendsunburstcolorway: false
};
var config = {responsive: true}

Plotly.newPlot('myDiv', data, layout, config, {displaylogo: false});
});