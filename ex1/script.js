var money = prompt("Ваш бюджет на месяц?", "10000"),
    time = prompt("Введите дату в формате YYYY-MM-DD", "2019-11-29"),
    howMuch_first = prompt('Введите обязательную статью расходов в этом месяце'),
    whatTakes_first = prompt('Во сколько обойдется?'),
    howMuch_second = prompt('Введите обязательную статью расходов в этом месяце'),
    whatTakes_second = prompt('Во сколько обойдется?');
    appData = {
        budget: +money,
        timeData: time,
        expenses: {
            howMuch_first: whatTakes_first,
            howMuch_second: whatTakes_second
        }
    };
 
var budgetOneDay = Math.round(appData.budget / 30);

if(budgetOneDay <= 333) {
    alert("Ваш бюджет на 1 день " + budgetOneDay + " не густо(");    
}
else {
    alert("Ваш бюджет на 1 день " + budgetOneDay + " так то лучше");  
}

