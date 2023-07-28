const secretNumber=Math.trunc(Math.random()*20)+1
let score=20


document.querySelector('.user-number').textContent=secretNumber
document.querySelector('.check-btn').addEventListener('click',function(){
    const guess=Number(document.querySelector('.guess').value)
    console.log(guess,typeof guess)

    if(!guess){
        document.querySelector('.guessing-heading').textContent='🤷‍♂️ No Number'
    }
    else if(guess===secretNumber){
        document.querySelector('.guessing-heading').textContent='✔ Correct Number'
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