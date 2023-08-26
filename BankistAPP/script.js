
const account1={
    owner:"Prashant Maurya",
    movements:[200,450,-400,3000,-650,-130,70,1300],
    interestRate:1.2,
    pin:1111,

};
const account2 = {
    owner: 'Khushi Maurya',
    movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
    interestRate: 1.5,
    pin: 2222,
  };
  
  const account3 = {
    owner: 'Sunita Maurya',
    movements: [200, -200, 340, -300, -20, 50, 400, -460],
    interestRate: 0.7,
    pin: 3333,
  };
  
  const account4 = {
    owner: 'Rajesh Maurya',
    movements: [430, 1000, 700, 50, 90],
    interestRate: 1,
    pin: 4444,
  };
  const accounts=[account1,account2,account3,account4]

  const labelWelcome=document.querySelector('.welcome');
  const labelDate=document.querySelector('.date');
  const labelBallence=document.querySelector('.balance__value');
  const labelSumIn=document.querySelector('.summary__value--in');
  const labelSumOut=document.querySelector('.summary__value--out');
  const labelSumInterest=document.querySelector('.summary__value--interest');
  const labelTimer=document.querySelector('.timer');

  const containerApp=document.querySelector('.app');
  const containerMovements=document.querySelector('.movements');

  const btnLogin=document.querySelector('.login__btn');
  const btnTransfer=document.querySelector('.form__btn--transfer');
  const btnLoan=document.querySelector('.form__btn--loan');
  const btnClose=document.querySelector('.form__btn--close');
  const btnSort=document.querySelector('.btn--sort');

  const inputLoginUsername=document.querySelector('.login__input--user');
  const inputLoginPin=document.querySelector('.login__input--pin');
  const inputTransferTo=document.querySelector('.form__input--to');
  const inputTransferAmount=document.querySelector('.form__input--amount');
  const inputLoanAmount=document.querySelector('.form__input--loan-amount');
  const inputCloseUserName=document.querySelector('.form__input--user');
  const inputClosePin=document.querySelector('.form__input--pin');


  const displayMovements=function(movements){
    containerMovements.innerHTML='';
    movements.forEach(function( mov , i){
      const type= mov > 0 ? 'deposit':'withdrawal';

      const html=`
    <div class="movements__row">
      <div class="movements__type movements__type--${type}">${i+1} ${type}</div>
      <div class="movements__value">${mov}€</div>
    </div> `;
      
    containerMovements.insertAdjacentHTML('afterbegin',html);
    });
  };
  displayMovements(account1.movements);


  // Entering User name -each word first letter in lower case

  const creatingUserName=function(accs){
    accs.forEach(function(acc){
       acc.userName=acc.owner.toLowerCase().split(' ').map(name=>name[0]).join('');
    });

  };
  creatingUserName(accounts);

// displaying Total Amount

const calcDisplayAmount=function(movements){
  const balance=movements.reduce((acc,curr)=>acc+curr,0);
  labelBallence.textContent=`${balance}€`;
 
}

calcDisplayAmount(account1.movements)

//displaying summary

const calcDisplaySummary=function(movements){
  const income=movements.filter(mov=>mov>0).reduce((acc,mov)=>acc+mov,0);
  labelSumIn.textContent=`${income}€`;
  const spending=movements.filter(mov=>mov<0).reduce((acc,mov)=>Math.abs(acc)+Math.abs(mov),0);
  labelSumOut.textContent=`${spending}`;
  const interest=movements.filter(mov=>mov>0).map(mov=>mov*1.2/100).reduce((acc,mov)=>acc+mov,0);
  labelSumInterest.textContent=`${interest}€`

}
calcDisplaySummary(account1.movements)

// Login Implementation
let currentAccount;

btnLogin.addEventListener('click',function(e){
  //prevent form from submitting
  e.preventDefault();
  currentAccount=accounts.find(acc=>acc.userName===inputLoginUsername.value);
  if(currentAccount?.pin===Number(inputLoginPin.value)){
    
  }
  console.log(currentAccount)
 
})
  
  
