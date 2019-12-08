let money, time;

function start() {
    money = +prompt("Ваш бюджет на месяц?", '');
    time = prompt("Введите дату в формате YYYY-MM-DD");

    while (isNaN(money) || money == '' || money == null) {
        money = +prompt("Ваш бюджет на месяц?", '');
    }
}

start();


let appData = {
    budget: money,
    timeData: time,
    expences: {},
    optionalExpences: {},
    income: [],
    savings: true,
    chooseExpences: function() {
        for (let i = 0; i < 2; i++) {
            let a = prompt('Введите обязательную статью расходов в єтом месяце', ""),
                b = prompt('Во сколько обойдеться?', "");
    
            if ((typeof (a)) === 'string' && (typeof (a)) != null && (typeof (b)) != null && a != '' && b != '' && a.length < 50) {
                console.log("done");
                appData.expences[a] = b;
            } else {
                i = i - 1;
            }
    
        }
    },
    detectDayBudget: function() {
        appData.moneyPerDay = (appData.budget / 30).toFixed();

        alert("Ежедневный бюдджет: " + appData.moneyPerDay);
    },
    detectLevel: function() {
        if (appData.moneyPerDay < 100) {
            console.log("Минимальный уровень достатка");
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            console.log("Средний уровень достатка");
        } else if (appData.moneyPerDay > 2000) {
            console.log("Высокий уровень достатка");
        } else {
            console.log("Значение некоректно");
        }
    },
    checkSavings: function() {
        if (appData.savings == true) {
            let save = +prompt("Какова сумма накоплений?", ""),
                percent = +prompt("Под какой процент?", "");
    
            appData.monthIncome = save / 100 / 12 * percent;
    
            alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
        }
    },
    checkOptionalExpences: function() {
        for (let k = 0; k < 3; k++) {
            let a = prompt('Введите опциональную статью расходов в єтом месяце', ""),
                b = prompt('Во сколько обойдеться?', "");
    
            if ((typeof (a)) === 'string' && (typeof (a)) != null && (typeof (b)) != null && a != '' && b != '' && a.length < 50) {
                console.log("done");
                appData.optionalExpences[a] = b;
            } else {
                i = i - 1;
            }
        }
    },
    chooseIncome: function() {
        let items = prompt('Что принесет доп.доход (Через запятую)?', '');
        if((items == '') || (items == null) || (typeof(items) != 'string')) {
            items = prompt('Что принесет доп.доход (Через запятую)?', '');
        }
        
        appData.income = items.split(', ');
        appData.income.push(prompt('Ничего не забыли?'));
    }
};

appData.chooseIncome();