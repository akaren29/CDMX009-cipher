 import cipher from './cipher.js';
 
 let cifbutton = document.getElementById('botoncifrar');
 cifbutton.addEventListener('click', encode);

function encode(){
 
let offset = document.getElementById('position').value;
let string = document.getElementById('message').value;

let resultcifrado = cipher.encode(offset,string);
//console.log(resultcifrado);
document.getElementById('messResult').innerText = resultcifrado;
}
    

     let cifbutton1 = document.getElementById('botondescifrar');
        cifbutton1.addEventListener('click',decode);

    function decode(){
        let offset1 = document.getElementById('position1').value;
        let string1 = document.getElementById('message1').value;
        let resultdescifrado = cipher.decode(offset1,string1);
        document.getElementById('messResult1').innerText = resultdescifrado;
    }

 console.log(cipher);