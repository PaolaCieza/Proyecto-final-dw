function recibir()
{
    var valor = document.getElementById("input_texto").value;
    var newDiv = document.createElement("div");
    newDiv.appendChild(valor);
    var currentDiv = document.getElementById("antesDe");
    document.body.insertBefore(newDiv, currentDiv); 
} 

function addElement () { 
    // crea un nuevo div 
    // y añade contenido 
     
    var newContent = document.createTextNode("Hola!¿Qué tal?"); 
    newDiv.appendChild(newContent); //añade texto al div creado. 
  
    // añade el elemento creado y su contenido al DOM 
    var currentDiv = document.getElementById("div1"); 
    document.body.insertBefore(newDiv, currentDiv); 
  }