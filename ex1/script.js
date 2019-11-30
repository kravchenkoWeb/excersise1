let money = prompt("Ваш бюджет на месяц?", ''),
    time = prompt("Введите дату в формате YYYY-MM-DD");

   let appData = {
    budget: money,
    timeData: time,
    expences: {},
    optionalExpences: {},
    income: [],
    savings: false
   }; 

   let a1 = prompt('Введите обязательную статью расходов в єтом месяце', ""),
       a2 = prompt('Во сколько обойдеться?', ""),
       a3 = prompt('Введите обязательную статью расходов в єтом месяце', ""),
       a4 = prompt('Во сколько обойдеться?', "");

appData.expences.a1 = a2;
appData.expences.a3 = a4;    