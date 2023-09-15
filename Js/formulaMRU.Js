'use strict'
//funcion para distancia
function DistanciaC() {
    let Dvelocidad = parseFloat(document.getElementById("Dvelocidad").value);
    let Dtiempo = parseFloat(document.getElementById("Dtiempo").value);
  
    if(isNaN(Dvelocidad) ){
        document.getElementById("Dvelocidad").focus()
        document.getElementById("Dvelocidad").value=``
        document.getElementById("Dtiempo").value=``
       }else if(isNaN(Dtiempo)){
        document.getElementById("Dtiempo").focus()
        document.getElementById("Dtiempo").value=``
        document.getElementById("Dvelocidad").value=``
        }else
        {
      let respuesta = Dvelocidad * Dtiempo;
      document.getElementById("Dresultado").value = `${respuesta}`;
   
  }
}

//funcion para velocidad
function VelocidadC() {
    let Vdistancia = parseFloat(document.getElementById("Vdistancia").value);
    let Vtiempo = parseFloat(document.getElementById("Vtiempo").value);
  
    if(isNaN(Vdistancia) ){
        document.getElementById("Vdistancia").focus()
        document.getElementById("Vdistancia").value=``
        document.getElementById("Vtiempo").value=``
       }else if(isNaN(Vtiempo)){
        document.getElementById("Vtiempo").focus()
        document.getElementById("Vtiempo").value=``
        document.getElementById("Vdistancia").value=``
        }else
        {
      let respuesta = Vdistancia / Vtiempo;
      document.getElementById("Vresultado").value = `${respuesta}`;
   
  }
}

//funcion para tiempo
function TiempoC() {
    let Tdistancia = parseFloat(document.getElementById("Tdistancia").value);
    let Tvelocidad = parseFloat(document.getElementById("Tvelocidad").value);
  
    if(isNaN(Tdistancia) ){
        document.getElementById("Tdistancia").focus()
        document.getElementById("Tdistancia").value=``
        document.getElementById("Tvelocidad").value=``
       }else if(isNaN(Tvelocidad)){
        document.getElementById("Tvelocidad").focus()
        document.getElementById("Tvelocidad").value=``
        document.getElementById("Tdistancia").value=``
        }else
        {
      let respuesta = Tdistancia / Tvelocidad;
      document.getElementById("Tresultado").value = `${respuesta}`;
   
  }
}

function limpiarD(){

  document.getElementById("Dvelocidad").value=``
  document.getElementById("Dtiempo").value=``
  document.getElementById("Dresultado").value=``
        
}

function limpiarV(){

  document.getElementById("Vdistancia").value=``
  document.getElementById("Vtiempo").value=``
  document.getElementById("Vresultado").value=``
        
}

function limpiarT(){

  document.getElementById("Tdistancia").value=``
  document.getElementById("Tvelocidad").value=``
  document.getElementById("Tresultado").value=``
        
}