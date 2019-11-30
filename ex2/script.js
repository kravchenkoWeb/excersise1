let money = +prompt("Ваш бюджет на месяц?", ''),
    time = prompt("Введите дату в формате YYYY-MM-DD");

let appData = {
    budget: money,
    timeData: time,
    expences: {},
    optionalExpences: {},
    income: [],
    savings: false
};

for (let i = 0; i < 2; i++) {
    let a = prompt('Введите обязательную статью расходов в єтом месяце', ""),
        b = prompt('Во сколько обойдеться?', "");

    if( (typeof(a) ) === 'string' && (typeof(a)) != null && (typeof(b)) != null && a != '' && b!='' && a.length < 50 ) {
        console.log("done");
        appData.expences[a] = b;
    }
    else {

    }
    
};

// while(i < 2) {
//     let a = prompt('Введите обязательную статью расходов в єтом месяце', ""),
//         b = prompt('Во сколько обойдеться?', "");

//     if( (typeof(a) ) === 'string' && (typeof(a)) != null && (typeof(b)) != null && a != '' && b!='' && a.length < 50 ) {
//         console.log("done");
//         appData.expences[a] = b;
//     }
//     else {

//     }
    // i++;
// }

// do {
//    //     let a = prompt('Введите обязательную статью расходов в єтом месяце', ""),
// //         b = prompt('Во сколько обойдеться?', "");

// //     if( (typeof(a) ) === 'string' && (typeof(a)) != null && (typeof(b)) != null && a != '' && b!='' && a.length < 50 ) {
// //         console.log("done");
// //         appData.expences[a] = b;
// //     }
// //     else {

// //     }
//     // i++; 
// } while(i<2);

appData.moneyPerDay = appData.budget / 30;

if(appData.moneyPerDay < 100) {
    console.log("Минимальный уровень достатка");
} else if(appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
    console.log("Средний уровень достатка");
} else if(appData.moneyPerDay > 2000) {
    console.log("Высокий уровень достатка");
} else {
    console.log("Значение некоректно");
}

alert("Ежедневный бюдджет: " + appData.moneyPerDay);