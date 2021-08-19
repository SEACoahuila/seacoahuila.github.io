


// Lectura de tabla y funciones de desempaquetado de información
//
tabla = 'TablaBarra.csv'

d3.csv(tabla, function(err, rows){
  function unpack(rows, key) {
  return rows.map(function(row) { return row[key]});
}

// Variables de desempaquetado de información
var municipiosEdo =(unpack(rows, 'Municipios'));
var datosNormatividad = (unpack(rows, 'Normatividad'));
var datosTransprencia = (unpack(rows, 'Transparencia'));
var datosPercepcion = (unpack(rows, 'Percepción'));
var datosDatosabiertos = (unpack(rows, 'Datos Abiertos'));
var datosDenuncias = (unpack(rows, 'Denuncias'));
var datosSolicitudesatendidas = (unpack(rows, 'Solicitudes atendidas'));
var datosPEAC = (unpack(rows, 'ParticPEAC'));
var datosSEI = (unpack(rows, 'ParticSEI'));

// Variables con condicionales para Gráfica de Barras

var Normatividad = { 
    x: datosNormatividad,
    y: municipiosEdo,
    name: 'Normatividad',
    orientation: 'h',
    type: 'bar',
    text:(datosNormatividad),
    insidetextfont: {color: "white"},    
    marker: {
        color: '#41b2ec'
      },
  };
  console.log(municipiosEdo)
  var Transparencia = {
    x: datosTransprencia,
    y: municipiosEdo,
    name: 'Transparencia',
    orientation: 'h',
    type: 'bar',
    text:(datosTransprencia),
    insidetextfont: {color: "white"},
    marker: {
        color: '#EA5395'
      },
  };
  
  var Percepcion = {
    x: datosPercepcion,
    y: municipiosEdo,
    name: 'Percepción',
    orientation: 'h',
    type: 'bar',
    text:(datosPercepcion),
    insidetextfont: {color: "white"},
    marker: {
        color: '#00cc96'
      },
  };
  
  var Datos = {
    x: datosDatosabiertos,
    y: municipiosEdo,
    name: 'Datos Abiertos',
    orientation: 'h',
    type: 'bar',
    text:(datosDatosabiertos),
    insidetextfont: {color: "white"},
    marker: {
        color: '#ab63fa'
      },
  };

  var Denuncias = {
    x: datosDenuncias,
    y: municipiosEdo,
    name: 'Denuncias',
    orientation: 'h',
    type: 'bar',
    text:(datosDenuncias),
    insidetextfont: {color: "white"},
    marker: {
        color: '#FECB52'
      },
  };

  var Solicitudes = {
    x: datosSolicitudesatendidas,
    y: municipiosEdo,
    name: 'Solicitudes',
    orientation: 'h',
    type: 'bar',
    displaylogo: false,
    text:(datosSolicitudesatendidas),
    insidetextfont: {color: "white"},
    marker: {
        color: '#f77b6b'
      },
  };
  // "#EA5395","#41b2ec","#00cc96","#ab63fa","#f77b6b",

  var PEAC = {
    x: datosPEAC,
    y: municipiosEdo,
    name: 'PEAC',
    orientation: 'h',
    type: 'bar',
    text:(datosPEAC),
    insidetextfont: {color: "white"},
    marker: {
        color: '#FFA15A'
      },
  };

  var SIE = {
    x: datosSEI,
    y: municipiosEdo,
    name: 'SIE',
    orientation: 'h',
    type: 'bar',
    text:(datosSEI),
    insidetextfont: {color: "white"},
    marker: {
        color: '#f77b6b"'
      },
  };
  
  // Variables para pasar a la creacion de Gráfica de Barras

  var datanorm = [Normatividad];
  var dataTrans = [Transparencia];
  var dataPercep = [Percepcion];
  var dataDatosid = [Datos];
  var dataDenuncias = [Denuncias];
  var dataPEAC = [PEAC];
  var dataSIE = [SIE];
  var dataSolicitudes = [Solicitudes];
  
  // Formato externo de las Gráficas

  var layoutN = {
    title: 'Procentaje de normatividad anticorrupción 0% - 100%',
    font: {size: 15},
    margin: {l: 175, r: 80, b: 20, t:40},
    xaxis: {range: [0, 100]},
  };
  var layoutT = {
    title: 'Porcentaje de transparencia 0% - 100%',
    font: {size: 15},
    margin: {l: 175, r: 80, b: 20, t:40},
    xaxis: {range: [0, 100]},
  };

  var layoutP = {
    title: 'Percepción de corrupción 0% - 100%',
    font: {size: 15},
    margin: {l: 175, r: 80, b: 20, t:40},
    xaxis: {range: [0, 100]},
  };
  var layoutDT = {
    title: 'Avance en datos abiertos 0% - 100%',
    font: {size: 15},
    margin: {l: 175, r: 80, b: 20, t:40},
    xaxis: {range: [0, 100]},
  };
  var layoutDE = {
    title: 'Avance en mecanismos de denuncias 0% - 100%',
    font: {size: 15},
    margin: {l: 175, r: 80, b: 20, t:40},
    xaxis: {range: [0, 100]},
  };
  var layoutPEAC = {
    title: 'Avance en implementación de PEAC 0% - 100%',
    font: {size: 15},
    margin: {l: 175, r: 80, b: 20, t:40},
    xaxis: {range: [0, 100]},
  };

  var layoutSIE = {
    title: 'Avance en implemendación del SEI 0% - 100%',
    font: {size: 15},
    margin: {l: 175, r: 80, b: 20, t:40},
    xaxis: {range: [0, 100]},
  };

  var layoutS = {
    title: 'Solicitudes atendidas de SEAC 0% - 100%',
    font: {size: 15},
    margin: {l: 175, r: 80, b: 20, t:40},
    xaxis: {range: [0, 100]},
  };




  var config = {responsive: true, 
    modeBarButtonsToRemove: ['Zoom','Zoomin','Zoomout','pan','Select','lasso'], displaylogo: false };

   // Llamado de tablas

  
  Plotly.newPlot('dPercepcion', dataPercep, layoutP, config);
  Plotly.newPlot('dDatos', dataDatosid, layoutDT, config);
  Plotly.newPlot('dDenuncias', dataDenuncias, layoutDE, config);
  Plotly.newPlot('dPEAC', dataPEAC, layoutPEAC, config);
  Plotly.newPlot('dSIE', dataSIE, layoutSIE, config);
  Plotly.newPlot('dSolicitudes', dataSolicitudes, layoutS, config);
});

