


var layout = {
  margin: {l: 0, r: 0, b: 0, t:0},
  sunburstcolorway:[
    "#EA5395","#41b2ec","#00cc96","#ab63fa","#f77b6b",
    "#e763fa", "#FECB52","#FFA15A","#FF6692","#B6E880"
  ],
  plot_bgcolor:"black",
  paper_bgcolor:"#FFF3",
  extendsunburstcolorway: false,

};
var config = {responsive: true}

var select = document.getElementById('provincia');
select.addEventListener('change',
  function(){
    var selectedOption = this.options[select.selectedIndex];
    tabla = (selectedOption.value + '.csv');
    d3.csv(tabla, function(err, rows){
  function unpack(rows, key) {
  return rows.map(function(row) { return row[key]});
}


  // Termina el selector de texto
var data2 = [
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
    Plotly.newPlot('myDiv2', data2, layout, config, {displaylogo: false});
  });
}); 