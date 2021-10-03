
var expenses = [];
var expense = 0;
var balance = 0;
var budget = 0;

function currentBalance() {

  var current = document.getElementById('currentDigitOne');
  balance = document.getElementById('currentInput').value;

  current.innerHTML = "£" + balance;
};
function currentBudget() {

  var currentBud = document.getElementById('currentDigitTwo');
  budget = document.getElementById('budgetInput').value;

  currentBud.innerHTML = "£" + budget;

};
function addExpense() {

  var ref = document.getElementById('refInput').value;
  var exp = document.getElementById('expInput').value;
  var cur = document.getElementById('currentDigitThree');
  var currentBud = document.getElementById('currentDigitTwo');
  var bal = document.getElementById('currentDigitOne');

  expenses.unshift(exp);

  //----------------------------------

  var button = document.createElement("button");
  var tableCellRef = document.createElement("td");
  var tableCellExp = document.createElement("td");
  var tableCellRmv = document.createElement("td");
  var tableRow = document.createElement("tr");
  var table = document.querySelector("table");

  tableCellRef.innerHTML = ref;
  tableCellExp.innerHTML = "£" + expenses[0];

  button.innerHTML = "Remove";
  button.addEventListener('click', function() {removeExpense(this, exp)})
  button.classList.add(expenses.indexOf(expenses[0]));

  tableCellRmv.appendChild(button);

  tableRow.appendChild(tableCellRef);
  tableRow.appendChild(tableCellExp);
  tableRow.appendChild(tableCellRmv);
  table.appendChild(tableRow);




  //----------------------------------

  expense += parseInt(expenses[0]);
  budget -= expenses[0];
  balance -= expenses[0];

  cur.innerHTML = "£" + expense;
  currentBud.innerHTML = "£" + budget;
  bal.innerHTML = "£" + balance;


};

function removeExpense(object, number) {

  var cur = document.getElementById('currentDigitThree');
  var currentBud = document.getElementById('currentDigitTwo');
  var bal = document.getElementById('currentDigitOne');

  object.parentElement.parentElement.remove();
  var newExpensesList = [];
  for (let i = 0; i < expenses.length; i++) {
    if (expenses[i] != number) {
      newExpensesList.push(parseInt(expenses[i]));

    }

  }
  expenses = newExpensesList;

  expense -= parseInt(number);
  budget += parseInt(number);
  balance += parseInt(number);

  cur.innerHTML = "£" + expense;
  currentBud.innerHTML = "£" + budget;
  bal.innerHTML = "£" + balance;

}
