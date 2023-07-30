//selecting-elements
const Element1=document.querySelector('.player-1')
const Element2=document.querySelector('.player-2')
const scoreElement1=document.querySelector('.player-1-score')
const scoreElement2=document.querySelector('.player-2-score')
const diceElement=document.querySelector('.dice')
const btnNew=document.querySelector('.newgame-btn')
const btnrolldice=document.querySelector('.rolldice-btn')
const hold=document.querySelector('.hold-btn')
const currentEle1=document.querySelector('.current-1-score')
const currentEle2=document.querySelector('.current-2-score')
const win1=document.querySelector('.win-1')
const win2=document.querySelector('.win-2')

let currentScore=0;
let activePlayer=1;
let scores=[0,0]
let playing=true;


let switchPlayer=function(){
    document.querySelector(`.current-${activePlayer}-score`).textContent=0
    activePlayer=activePlayer===1?2:1
    currentScore=0
    Element1.classList.toggle('.-active')
    Element2.classList.toggle('.-active')
}

//starting condition
scoreElement1.textContent='0';
scoreElement2.textContent='0';
diceElement.classList.add('hidden')
btnrolldice.addEventListener('click',function(){
    //generate a random dice roll
    if(playing){
    const dice=Math.trunc(Math.random()*6)+1;


    //show dice 
    diceElement.classList.remove('hidden');
    diceElement.src=`./images/dice-six-faces-${dice}.png`

    //if it is equal to 1 switch to next player
    if(dice!==1){
        currentScore += dice;
    
        document.querySelector(`.current-${activePlayer}-score`).textContent=currentScore;
        

        
    }
    else{
        switchPlayer()
    }
}

})

hold.addEventListener('click',function(){
    if(playing){

    // add curret score to active player score
    scores[activePlayer-1]+=currentScore;
    document.querySelector(`.player-${activePlayer}-score`).textContent=scores[activePlayer-1];
    console.log(scores[activePlayer-1])

    //if active player score >=100 than active player win the game

    if(scores[activePlayer-1]>=100){
        //finish the game
        playing=false
        diceElement.classList.add('hidden')
        document.querySelector(`.win-${activePlayer}`).textContent="Win The Game"
        document.querySelector(`.player-${activePlayer}`).classList.add('player-winner')
        document.querySelector(`.current-${activePlayer}-score`).textContent=0
        


    }else{
         //switch to next player
    switchPlayer()
    }
}
})

btnNew.addEventListener('click',function(){
   
    scoreElement1.textContent=0
    scoreElement2.textContent=0
    currentEle1.textContent=0
    currentEle2.textContent=0
    playing=true
    document.querySelector(`.player-${activePlayer}`).classList.remove('player-winner')
    document.querySelector(`.win-${activePlayer}`).textContent=''
    currentScore=0
    scores[0]=0
    scores[1]=0
    activePlayer=1
    
})