
const cipher = {encode, decode};

  function encode  (offset,string) {
   let result = '';
    for (let i=0; i < string.length; i++) //Recorrerá el string
    {
       let codeAscii = string.charCodeAt(i);//numero de letra Ascci ----->>ERROR 
       let cipherFormula; //almacena formula
       let theNewLetter; //almacena el valor de nueva letra cifrada

        if (codeAscii >= 65 && codeAscii <= 90) //Valor en Ascci
         { 
            cipherFormula = (codeAscii - 65 + parseInt (offset)) % 26 + 65; //La formula obtiene nuevo numero de letra
            theNewLetter = String.fromCharCode(cipherFormula); //obtiene el valor de letra cifrada
            result += theNewLetter; //Con la suma forma el string cifrado
         } else if (codeAscii >= 97 && codeAscii <=122){
           cipherFormula= (codeAscii - 97 + parseInt(offset)) %26 +97;
           theNewLetter = String.fromCharCode(cipherFormula);
           result +=theNewLetter;
         } else if(codeAscii === 32){
           result += ' ';
         }
      } 
    
       return result;//Retorna el valor de la cadena
   }
//Funcion para descifrar mensaje
 function decode (offset1, string1){
    let resultDecipher= '';

    for(let i=0; i< string1.length; i++){
       let codeAscii = string1.charCodeAt(i);
       let decipherFormula;
       let theNewLetter;
       if(codeAscii >= 65 && codeAscii <=90){
          decipherFormula = (codeAscii -13 - parseInt(offset1)) % 26 + 65;
          theNewLetter = String.fromCharCode(decipherFormula);
          resultDecipher +=theNewLetter;
       }else if (codeAscii >= 97 && codeAscii <=122){
          decipherFormula= (codeAscii - 45 - parseInt(offset1)) % 26 + 97;
          theNewLetter = String.fromCharCode(decipherFormula);
          resultDecipher +=theNewLetter;
       } else if(codeAscii === 32){
          resultDecipher += ' ';
       }
    }
    return resultDecipher;
 }
 
//console.log(cipher.decode(2,'mctgp'));

export default cipher;  
