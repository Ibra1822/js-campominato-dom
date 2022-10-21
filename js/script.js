/*
resettare il pulsante
-
array vuoto bombe
generare bombe 
se si preme bomba fine gioco
-
se si preme casella giusta contnua il gioco = W
W dichiarere il punteggio
-
*/



let btn = document.getElementById('btn')

let cont = document.querySelector('.container-all');

let selectInput = document.getElementById('select')

let lineBox = '';

let punt = 0

const nBombs = 16;

let bombs = []

let result = document.querySelector('.result');

// --------------------------------–



btn.addEventListener('click', function(){

  let sel = selectInput.value;  

  let bombsLimit;

  
  if(sel === 'facile'){
    
    bombsLimit = 100

    lineBox = 10;
    
    cont.classList.remove('dnone')
    
    reset()
    
 }else if (sel === 'medio' ){
    
    bombsLimit = 81
    
    lineBox = 9;
    
    cont.classList.remove('dnone')

    reset()

    
 }else if (sel === 'difficile'){
    
    bombsLimit = 49;

    lineBox = 7;
    
    cont.classList.remove('dnone')

    
    reset()

  }

 bombs = createBombs(bombsLimit)
  
  start(lineBox);   

});



// --------------------------------–

function start(nBox) {
  
let allbox = Math.pow( nBox ,2 );
   
for(let i = 0; i < allbox; i++ ){

  let box = document.createElement('div')

  box.classList.add('box')

  box.innerText = i + 1;

  box.idBox = i + 1 ;

  box.style.width = size()

  box.style.height = size()

  cont.append(box)

  box.addEventListener('click',  clickBox );


}} 


// --------------------------------–

function size (){

  return `calc(100% / ${lineBox})`
}



// --------------------------------–

  function createBombs(sel) {
    

    let arrayBomb = [];

    while (arrayBomb.length < 16) {

      const finalBomb = random(1, sel);

      if (!arrayBomb.includes(finalBomb)){
        
        arrayBomb.push(finalBomb)


      }

    }


    console.log('-------',arrayBomb);

    return arrayBomb

  }

// --------------------------------–



function random(min , max) {
  return Math.floor(Math.random() * (max - min +1) + min);
}



//-----------------------------------

reset()

function clickBox() {
  

  console.log('Hai cliccato', this.idBox);

  this.classList.add('blu')

  if (!bombs.includes(this.idBox)) {
    

    punt++

    console.log('hai fatto ', punt);

    let Abox = document.getElementsByClassName('box'); 

    if (punt === Abox.length - 16) {
      console.log('win');

      result.innerText = `La partita è finta hai fatto hai fatto ${punt} punti  BRAVO`

    }

  }else{

    console.log('fine');

    this.classList.add('red')


   document.querySelector('.stop').classList.remove('dnone')  
   
   result.innerText = `Hai fatto ${punt} punti `

  }

}
// --------------------------------–


function reset() {
  
  cont.innerHTML =' ';
  result.innerText = ' ';
  punt = 0;
  document.querySelector('.stop').classList.add('dnone'); 

}