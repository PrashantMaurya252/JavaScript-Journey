let secretNumber=Math.trunc(Math.random()*20)+1
let score=20
let highScore=0;




document.querySelector('.check-btn').addEventListener('click',function(){
    const guess=Number(document.querySelector('.guess').value)
    console.log(guess,typeof guess)
     // when there is no input
    if(!guess){
        document.querySelector('.guessing-heading').textContent='🤷‍♂️ No Number'
       
    }

    // when user win the game
    else if(guess===secretNumber){
        document.querySelector('.guessing-heading').textContent='✔ Correct Number'
        document.querySelector('body').style.backgroundColor='red'
        document.querySelector('.user-number').style.width='150px'
        document.querySelector('.user-number').textContent=secretNumber

        if(score>highScore){
            highScore=score
            document.querySelector('#high-score').textContent=highScore
        }
    }
    else if(guess>secretNumber){
        if(score>1){
        document.querySelector('.guessing-heading').textContent='↑ Greater Number'
        score--
        document.querySelector('#score').textContent=score
        }
        else{
            document.querySelector('.guessing-heading').textContent=" 😓 You Lose the Game"
            document.querySelector('#score').textContent=0
        }

    }
    else if(guess<secretNumber){
        if(score>1){
        document.querySelector('.guessing-heading').textContent='↓ Smaller Number'
        score--
        document.querySelector('#score').textContent=score
        }
        else{
            document.querySelector('.guessing-heading').textContent="Yoy Lose the Game"
            document.querySelector('#score').textContent=0
        }

    }
    
})
let again=document.querySelector('#again-btn').addEventListener('click',function(){
    score=20
    secretNumber=Math.trunc(Math.random()*20)+1;
    document.querySelector('.guess').value=''
    document.querySelector('#score').textContent=score
   
    document.querySelector('.guessing-heading').textContent="Start Guessing"
    document.querySelector('user-number').textContent= '?'
    document.querySelector('body').style.backgroundColor='green'
    document.querySelector('.user-number').style.width='100px'
    
    
})