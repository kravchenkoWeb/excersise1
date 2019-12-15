'use strict';

let mainBtn = document.getElementById("start"),
    budgetVal = document.querySelector(".budget-value"),
    dayBudgetVal = document.querySelector(".daybudget-value"),
    levelVal = document.querySelector(".level-value"),
    expensesVal = document.querySelector(".expenses-value"),
    optionalExpensesVal = document.querySelector(".optionalexpenses-value"),
    incomeVal = document.querySelector(".income-value"),
    monthSavingsVal = document.querySelector(".monthsavings-value"),
    yearSavingsVal = document.querySelector(".yearsavings-value"),
    expencecInput = document.getElementsByClassName("expenses-item"),
    buttons = document.getElementsByTagName("button");

let confirmFirst = buttons[0],
    confirmSecond = buttons[1],
    calculate = buttons[2];

let optionalExnsesInputs = document.querySelectorAll(".optionalexpenses-item");

let optionalIncome = document.querySelector(".choose-income"),
    availibleSavings = document.querySelector("#savings"),
    sum = document.querySelector("#sum"),
    percent = document.querySelector("#percent"),
    year = document.querySelector(".year-value"),
    month = document.querySelector(".month-value"),
    day = document.querySelector(".day-value");

