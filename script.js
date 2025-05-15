// This is a JavaScript file for a simple budget tracker application
// It allows users to add transactions (income or expenses), calculate the balance,
// and remove transactions from the list.
// The code uses DOM manipulation to update the UI dynamically based on user input.
// The code also includes event listeners to handle form submission and transaction removal.
// The code is structured to be easy to read and maintain, with clear variable names
// and comments explaining each section.
// Budget Tracker Application
// This application allows users to track their income and expenses
// and calculate their balance. Users can add transactions, view their income and expenses,
// and remove transactions from the list. The application uses HTML, CSS, and JavaScript
// to create a simple and user-friendly interface.

// Selectors

const transactionsEl = document.querySelector(".transactions");
const balanceNumberEl = document.querySelector(".balance-number");
const numberIncomeEl = document.querySelector(".number--income");
const numberExpensesEl = document.querySelector(".number--expenses");
const formEl = document.querySelector(".form");
const inputDescriptionEl = document.querySelector(".input--description");
const inputAmountEl = document.querySelector(".input--amount");

const submitHandler = (event) => {
  // prevent the default behavior of the form
  event.preventDefault();

  // get the values from the input fields
  const description = inputDescriptionEl.value;
  const amount = +inputAmountEl.value;
  console.log(description, amount);

  // create a new transaction item HTML
  const transactionItemHTML = `<li class="transaction transaction--${
    amount > 0 ? "income" : "expense"
  }">
            <span class="transaction__text">${description}</span>
            <span class="transaction__amount">${
              amount > 0 ? "+" : ""
            }${amount}</span>
            <button class="transaction__btn">X</button>
          </li>`;
  // add the new transaction item to the transactions list
  transactionsEl.insertAdjacentHTML("beforeend", transactionItemHTML);
  // clear the input fields
  inputDescriptionEl.value = "";
  inputAmountEl.value = "";
  // unfocus the input fields
  inputDescriptionEl.blur();
  inputAmountEl.blur();

  // update income or expenses
  if (amount > 0) {
    const currentIncome = +numberIncomeEl.textContent;
    const updatedIncome = +currentIncome + amount;
    numberIncomeEl.textContent = updatedIncome;
  } else {
    const currentExpenses = numberExpensesEl.textContent;
    const updatedExpenses = +currentExpenses + amount * -1;
    numberExpensesEl.textContent = updatedExpenses;
  }
  // update balance
  const income = +numberIncomeEl.textContent;
  const expenses = +numberExpensesEl.textContent;
  const updatedBalance = income - expenses;
  balanceNumberEl.textContent = updatedBalance;

  balanceNumberEl.style.color = income - expenses < 0 ? "red" : "black";
};

const clickHandler = (event) => {
  // remove the transaction item VISUALLY
  const clickedEl = event.target.parentNode; // get the parent element of the clicked element
  clickedEl.remove(); // remove the transaction item from the DOM

  // update income or expenses
  const amountEl = clickedEl.querySelector(".transaction__amount");
  const amount = +amountEl.textContent;

  if (amount > 0) {
    const currentIncome = +numberIncomeEl.textContent;
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

formEl.addEventListener("submit", submitHandler);

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
