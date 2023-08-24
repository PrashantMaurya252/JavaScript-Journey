
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
  const accounts=[account1,account2,account3,account3]

  const labelWelcome=document.querySelector('.welcome');
  const labelDate=document.querySelector('.date');
  const labelBallence=document.querySelector('.balance_value');
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
      <div class="movements__value">${mov}</div>
    </div> `;
    console.log(type);
    console.log(i+1);
    console.log(mov)
      
    containerMovements.insertAdjacentHTML('afterbegin',html);
    });
  };
  displayMovements(account1.movements);
  console.log(containerMovements.innerHTML)
  console.log(displayMovements(account1.movements))
  console.log(account1.movements)