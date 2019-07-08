function recibir()
{
    var valor = document.getElementById("input_texto").value;
    document.getElementById("antesDe").innerHTML=valor;
    /*var newDiv = document.createElement("div");
    var newContent = document.createTextNode(valor); 
    newDiv.appendChild(newContent);
    var currentDiv = document.getElementById("antesDe");
    document.body.insertBefore(newDiv, currentDiv);
    */
} 

function addElement () { 
    // crea un nuevo div 
    // y añade contenido 
     
    
    newDiv.appendChild(newContent); //añade texto al div creado. 
  
    // añade el elemento creado y su contenido al DOM 
    var currentDiv = document.getElementById("div1"); 
    document.body.insertBefore(newDiv, currentDiv); 
  }