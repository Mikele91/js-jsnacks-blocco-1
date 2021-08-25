var contenitore = [];


for (i = 0; i < 6; i++){
 var numero = prompt("inserisci numero")
 if(!(numero  % 2 == 0)){
     contenitore.push( numero)
 }
    
}  
console.log(contenitore);
alert (contenitore)