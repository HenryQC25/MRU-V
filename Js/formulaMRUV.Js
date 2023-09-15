'use strict'
//funcion para velocidad final
function VelocidadfC() {
    let VFvelocidadi = parseFloat(document.getElementById("VFvelocidadi").value);
    let VFaceleracion = parseFloat(document.getElementById("VFaceleracion").value);
    let VFtiempo = parseFloat(document.getElementById("VFtiempo").value);
  
    if(isNaN(VFvelocidadi) ){
        document.getElementById("VFvelocidadi").focus()
        document.getElementById("VFvelocidadi").value=``
        document.getElementById("VFaceleracion").value=``
        document.getElementById("VFtiempo").value=``
       }else if(isNaN(VFaceleracion)){
        document.getElementById("VFaceleracion").focus()
        document.getElementById("VFaceleracion").value=``
        document.getElementById("VFvelocidadi").value=``
        document.getElementById("VFtiempo").value=``
        }else if(isNaN(VFtiempo)){
          document.getElementById("VFtiempo").focus()
          document.getElementById("VFtiempo").value=``
          document.getElementById("VFaceleracion").value=``
          document.getElementById("VFvelocidadi").value=``
          }else
        {
      let respuesta = VFvelocidadi+(VFaceleracion * VFtiempo );
      document.getElementById("VFresultado").value = `${respuesta}`;
   
  }
}

function limpiarVF(){
  document.getElementById("VFvelocidadi").value='';
  document.getElementById("VFaceleracion").value='';
  document.getElementById("VFtiempo").value='';
  document.getElementById("VFresultado").value='';
}



/// calcular distancia

function DistanciaC1() {
  let Dvelocidadi = parseFloat(document.getElementById("Dvelocidadi").value);
  let Dvelocidadf = parseFloat(document.getElementById("Dvelocidadf").value);
  let Dtiempo = parseFloat(document.getElementById("Dtiempo").value);

  if(isNaN(Dvelocidadi) ){
      document.getElementById("Dvelocidadi").focus()
      document.getElementById("Dvelocidadi").value=``
      document.getElementById("Dvelocidadf").value=``
      document.getElementById("Dtiempo").value=``
     }else if(isNaN(Dvelocidadf)){
      document.getElementById("Dvelocidadf").focus()
      document.getElementById("Dvelocidadf").value=``
      document.getElementById("Dvelocidadi").value=``
      document.getElementById("Dtiempo").value=``
      }else if(isNaN(Dtiempo)){
        document.getElementById("Dtiempo").focus()
        document.getElementById("Dtiempo").value=``
        document.getElementById("Dvelocidadf").value=``
        document.getElementById("Dvelocidadi").value=``
        }else
      {
    let respuesta =((Dvelocidadi+Dvelocidadf)/(2))*Dtiempo;
    document.getElementById("Dresultado").value = `${respuesta}`;
 
}
}

function limpiarD1(){
document.getElementById("Dvelocidadi").value='';
document.getElementById("Dvelocidadf").value='';
document.getElementById("Dtiempo").value='';
document.getElementById("Dresultado").value='';
  
}




//distan sin vf
function DistanciavC1() {
  let DVvelocidadi = parseFloat(document.getElementById("DVvelocidadi").value);
  let DVaceleracion = parseFloat(document.getElementById("DVaceleracion").value);
  let DVtiempo = parseFloat(document.getElementById("DVtiempo").value);

  if(isNaN(DVvelocidadi) ){
      document.getElementById("DVvelocidadi").focus()
      document.getElementById("DVvelocidadi").value=``
      document.getElementById("DVaceleracion").value=``
      document.getElementById("DVtiempo").value=``
     }else if(isNaN(DVaceleracion)){
      document.getElementById("DVaceleracion").focus()
      document.getElementById("DVaceleracion").value=``
      document.getElementById("DVvelocidadi").value=``
      document.getElementById("DVtiempo").value=``
      }else if(isNaN(DVtiempo)){
        document.getElementById("DVtiempo").focus()
        document.getElementById("DVtiempo").value=``
        document.getElementById("DVaceleracion").value=``
        document.getElementById("DVvelocidadi").value=``
        }else
      {
    let respuesta = DVvelocidadi*DVtiempo+0.5*DVaceleracion* Math.pow(DVtiempo,2);
    document.getElementById("DVresultado").value = `${respuesta}`;
 
}
}

function limpiarDv(){
document.getElementById("DVvelocidadi").value='';
document.getElementById("DVaceleracion").value='';
document.getElementById("DVtiempo").value='';
document.getElementById("DVresultado").value='';
  
}




//distan sin tiempo
function VelocidadfCt() {
  let VFTvelocidadi = parseFloat(document.getElementById("VFTvelocidadi").value);
  let VFTaceleracion = parseFloat(document.getElementById("VFTaceleracion").value);
  let VFTdistancia = parseFloat(document.getElementById("VFTdistancia").value);

  if(isNaN(VFTvelocidadi) ){
      document.getElementById("VFTvelocidadi").focus()
      document.getElementById("VFTvelocidadi").value=``
      document.getElementById("VFTaceleracion").value=``
      document.getElementById("VFTdistancia").value=``
     }else if(isNaN(VFTaceleracion)){
      document.getElementById("VFTaceleracion").focus()
      document.getElementById("VFTaceleracion").value=``
      document.getElementById("VFTdistancia").value=``
      document.getElementById("VFTvelocidadi").value=``
      }else if(isNaN(VFTdistancia)){
        document.getElementById("VFTdistancia").focus()
        document.getElementById("VFTdistancia").value=``
        document.getElementById("VFTaceleracion").value=``
        document.getElementById("VFTvelocidadi").value=``
        }else
      {
    let respuesta = Math.sqrt(Math.pow(VFTvelocidadi,2)+(2*VFTaceleracion*VFTdistancia));
    document.getElementById("VFTresultado").value = `${respuesta}`;
 
}
}

function limpiarVft(){
document.getElementById("VFTvelocidadi").value='';
document.getElementById("VFTaceleracion").value='';
document.getElementById("VFTdistancia").value='';
document.getElementById("VFTresultado").value='';
  
}