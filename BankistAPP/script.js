
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


  const displayMovements=function(movements,sort=false){
    containerMovements.innerHTML='';
    const movs=sort ? movements.slice().sort((a,b)=>a-b):movements;

    movs.forEach(function( mov , i){
      const type= mov > 0 ? 'deposit':'withdrawal';

      const html=`
    <div class="movements__row">
      <div class="movements__type movements__type--${type}">${i+1} ${type}</div>
      <div class="movements__value">${mov}€</div>
    </div> `;
      
    containerMovements.insertAdjacentHTML('afterbegin',html);
    });
  };
 


  // Entering User name -each word first letter in lower case

  const creatingUserName=function(accs){
    accs.forEach(function(acc){
       acc.userName=acc.owner.toLowerCase().split(' ').map(name=>name[0]).join('');
    });

  };
  creatingUserName(accounts);

// displaying Total Amount

const calcDisplayAmount=function(accs){
  accs.balance=accs.movements.reduce((acc,curr)=>acc+curr,0);
  labelBallence.textContent=`${accs.balance}€`;
 
}



//displaying summary

const calcDisplaySummary=function(acc){
  const income=acc.movements.filter(mov=>mov>0).reduce((acc,mov)=>acc+mov,0);
  labelSumIn.textContent=`${income}€`;
  const spending=acc.movements.filter(mov=>mov<0).reduce((acc,mov)=>Math.abs(acc)+Math.abs(mov),0);
  labelSumOut.textContent=`${spending}`;
  const interest=acc.movements.filter(mov=>mov>0).map(mov=>mov*acc.interestRate/100).reduce((acc,mov)=>acc+mov,0);
  labelSumInterest.textContent=`${interest}€`

}
const updateUI=function(acc){
  displayMovements(acc.movements);
  calcDisplayAmount(acc);
  calcDisplaySummary(acc);
}


// Login Implementation
let currentAccount;

btnLogin.addEventListener('click',function(e){
  //prevent form from submitting
  e.preventDefault();
  currentAccount=accounts.find(acc=>acc.userName===inputLoginUsername.value);
  if(currentAccount?.pin===Number(inputLoginPin.value)){
    //Display Ui and messages
    labelWelcome.textContent=`Welcome back, ${currentAccount.owner.split(' ')[0]}`;

    containerApp.style.opacity=100;

    // clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    
  
    // //Display Movements
    // displayMovements(currentAccount.movements);
  
    // //Display Balance
    // calcDisplayAmount(currentAccount)
  
    // //Display summary
    // calcDisplaySummary(currentAccount)
  
    updateUI(currentAccount);
    
  }
 
 
});



// transferring money

btnTransfer.addEventListener('click',function(e){

  e.preventDefault();
  const amount=Number(inputTransferAmount.value);
  const receiverAcc=accounts.find(acc=>acc.userName===inputTransferTo.value);
  inputTransferAmount.value=inputTransferTo.value='';

  if(amount>0 && receiverAcc && currentAccount.balance >=amount && receiverAcc?.userName !== currentAccount.userName){
    //Doing the Transfer
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);
    updateUI(currentAccount);
  }
});

//Requesting loan amount

btnLoan.addEventListener('click',function(e){
  e.preventDefault();
  const amount=Number(inputLoanAmount.value);
  if(amount>0 && currentAccount.movements.some(mov=>mov>=amount*0.1)){
    currentAccount.movements.push(amount);
    updateUI(currentAccount);
  }
  inputLoanAmount.value='';
})

// For Closing Account

btnClose.addEventListener('click',function(e){
  e.preventDefault();
  
  if(inputCloseUserName.value===currentAccount.userName && Number(inputClosePin.value)===currentAccount.pin){
    const index=accounts.findIndex(acc=>acc.userName===currentAccount.userName);

    //Delete Account
    accounts.splice(index,1);

    //Hide UI
    containerApp.style.opacity=0;
    currentAccount=null;
  }
  inputCloseUserName.value=inputClosePin.value='';
});

let sorted=false;
btnSort.addEventListener('click',function(e){
  e.preventDefault();
  displayMovements(currentAccount.movements,!sorted);
  sorted=!sorted;

});


  
  
