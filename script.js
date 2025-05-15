const transactionsEl = document.querySelector(".transactions");
const balanceNumberEl = document.querySelector(".balance-number");
const numberIncomeEl = document.querySelector(".number--income");
const numberExpensesEl = document.querySelector(".number--expenses");
const formEl = document.querySelector(".form");
const inputDescriptionEl = document.querySelector(".input--description");
const inputAmountEl = document.querySelector(".input--amount");

const clickHandler = (event) => {
  // remove the transaction item VISUALLY
  const clickedEl = event.target.parentNode;
  clickedEl.remove();

  // update income or expenses
  const amountEl = clickedEl.querySelector(".transaction__amount");
  const amount = +amountEl.textContent;

  if (amount > 0) {
    const currentIncome = numberIncomeEl.textContent;
    const updatedIncome = +currentIncome - amount;
    numberIncomeEl.textContent = updatedIncome;
  } else {
    const currentExpenses = numberExpensesEl.textContent;
    const updatedExpenses = +currentExpenses - amount * -1;
    numberExpensesEl.textContent = updatedExpenses;
  }

  // update balance
  const income = +numberIncomeEl.textContent;
  const expenses = +numberExpensesEl.textContent;
  balanceNumberEl.textContent = income - expenses;

  //apply red color to negative amount
  /* if (income - expenses < 0) {
    balanceNumberEl.style.color = "red";
  }
  */
  //ternary version
  balanceNumberEl.style.color = income - expenses < 0 ? "red" : "black";

  //console.log(typeof amount); // check the type of amount
};

transactionsEl.addEventListener("click", clickHandler);

// variables (var, let, const)

//data types & structures(string, number, boolean, array, object)

/* const expenses = [1000, 30, 25];
const transaction = {
  description: "Salary",
  amount: 5000,
};
console.log(transaction.amount);

const error = {
  description: "Not Found",
  statusCode: 404,
  message: "The requested resource was not found",
};
 */

/* //functions
function calculateBalance(income, expenses) {
  //const income = 5000;
  //const expenses = 2000;
  const balance = income - expenses;
  console.log("Your balance is: " + balance);
  return balance;
} */

/* const calculateBalance = (income, expenses) => {
  const balance = income - expenses;
  console.log("Your balance is: " + balance);
  return balance;
};
 */
/* // SHORT HAND FUNCTION
const calculateBalance = (income, expenses) => income - expenses;
// function call
const result = calculateBalance(10000, 5000);
console.log(result);
 */

// Dom Manipulation

/* const balanceEl = document.querySelector(".balance-number");

balanceEl.addEventListener("click", () => {
  balanceEl.classList.add("balance-number--special");
});
 */

/* const balanceEl = document.querySelector(".balance-number");

balanceEl.textContent = "Unavailable";
 */

/* const balanceEl = document.querySelector(".balance-number");

balanceEl.innerHTML = `<span class="balance-number--special">Unavailable</span>`;
 */

/* const balanceEl = document.querySelector(".balance-number");

balanceEl.insertAdjacentHTML("beforeend", "<span> 2000</span>");
 */

// String concatenation
/* const balanceNumber = 8000;
const balanceText = "Your balance is:  " + balanceNumber;
console.log(balanceText);
 */

//Template literals
// String interpolation
/* const balanceNumber = 8000;
const balanceText = `Your balance is: ${balanceNumber}`;
console.log(balanceText);
 */

// Control flow
// const balance = 2000;

/* if (balance > 0) {
  console.log("Positive balance");
} else {
  console.log("Negative balance");
} */

// Ternary operator
/* balance > 0 ? console.log("Positive") : console.log("Negative");
 */

//Loops
/* const incomes = [5000, 200, 10];

incomes.forEach(function (income) {
  console.log(income + 10);
});
 */

/* const incomes = [5000, 200, 10]; */

/* incomes.forEach((income) => {
  console.log(income + 10);
});
 */

/* for (let i = 0; i < incomes.length; i++) {
  const income = incomes[i];
  console.log(i);
  console.log(income + 10);
}
 */
