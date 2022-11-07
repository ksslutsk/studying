//Promise це обʼєкт який чекає поки вконається фукція виконавець і віддає результат підписнику

//код в середині починає виконуватись як тільки створюється обʼєкт, результатом буде проміс із відповідю 
let promise = new Promise(function (resolve, reject) {
    /*
        тут буде виконувтись якийсь код (завантаження даних та інше)
        коли дані завантажаться викликається одна з двох функцій resolve/reject
        resolve - викликаємо в разі успішного виконання, можна передаи результат аргументом
        reject - в разі помилки, аргументом рекомендується передати new Error
    */
});

//тепер відповідь можна обробити через .then()  .catch() .finally()
promise.then(
    function (result) {/*виконається якщо відповідь успішна*/ },
    function (error) {/*виконається якщо проміс отримав помилку*/ }
)
/*
.catch(errorHandler) виконається якщо хочемо обробити тільки помилку аналогічно до .then(null, func)
*/
/*
.finally(func) можна викликати перед .then, призначений для очистки і завереня попередніх операцій
функція яка в середині finally не має аргументів, результат промісу вона перекидає через себе і не знає його
*/

// new Promise((resolve, reject) => {
//     setTimeout(() => reject(new Error("gabella")), 1500);
// }).finally(
//     () => console.log("finally!!!!")
// ).catch(
//     (error) => console.error(error)
// );


// new Promise((resolve, reject) => {
//     setTimeout(() => resolve("our result"), 1500);
// }).finally(
//     () => console.log("finally!!!!")
// ).then(
//     (result) => console.log("this is result then: ", result)
// );



//============================================================================================================================
//використання промісів в коді
// let promise1 = new Promise(function (resolve, reject) {
//     // эта функция выполнится автоматически, при вызове new Promise
//     // через 1 секунду сигнализировать, что задача выполнена с результатом "done"
//     setTimeout(() => resolve("done"), 1000);
// });
// console.log(promise1);

// function delay(ms) {
//     return new Promise(first => setTimeout(first, ms))
// }
// delay(1500).then(() => alert("Promise works after 1,5 sec"));
//============================================================================================================================


//Проміси можна складати в ланцюг
// new Promise((resolve, reject) => {
//     resolve(10);
// }).then((result) => {
//     console.log(result); //10
//     return result * 2; //верне проміс але уже з новим результатом
// }).then((result) => {
//     console.log(result); //20
//     return new Promise((resolve, reject) => {
//         //зовнішні обробники будуть чекати поки не виконається цей проміс
//         console.log("return new promice in then");
//         resolve(result * 2);
//     });
// }).then((result) => {
//     console.log(result);//40
// });

// //можна додати багато обробників до промісу але це не буде ланцюг, вони будуть оброблятись незалежно
// let promise1 = new Promise((resolve, reject) => {
//     resolve(11);
// });

// promise1.then(res => {
//     console.log("independent then 1 ", res);
//     return res * 2;
// });

// promise1.then(res => {
//     console.log("independent then 2 ", res);
//     return res * 3;
// })


//thenable
//обробник може вертати не просто проміс або будь-який обʼєкт який реалізує методі .then()
class Thenable {
    constructor(num) {
        this.num = num;
    }
    then(resolve, reject) {
        console.log(resolve);
        console.log("theneble class method then");
        resolve(this.num * 2);
    }
}

new Promise((resolve, reject) => {
    resolve(2);
}).then((result => {
    return new Thenable(result);
})).then(result => {
    console.log(result);
});

//============================================================================================================================


//fetch
//використовується для запитів по мережі, вертає проміс
fetch("url")
    //вертає обʼєкт responce після того як отримає заголовки, але до того як отримає всю відповідь
    .then(function (responce) {
        //для того щою прочитати повну відповідь треба викликати responce.text()
        //він підвантажить всі дані і поверне проміс з ними
        return responce.text()
        //є ще responce.json() він читає дані в форматі json
    }).then(function (data) {
        //тут щось із даними робимо
    })

//приклад запиту
fetch('/user.json').then(function (responce) {

    return responce.json();
}).then(function (user) {

    return fetch(`https://api.github.com/users/${user.name}`);//тут робимо запит до гіта на інфу про юзера, вернеться проміс
}).then(function (responce) {

    return responce.json;
}).then(function (githubUser) {

    return new Promise((resolve, reject) => {
        let img = document.createElement('img');
        img.src = githubUser.avatar_url;
        img.className = "promise-avatar-example";
        document.body.append(img);

        setTimeout(() => {
            img.remove(); // це видалить аватар але дані потрібно передати далі, щоб можна було розширити ланцюг тому
            resolve(githubUser);
        }, 3000); //3 секунди пказували фотку
    });
}).then(function (githubUser) {
    console.log(`закнічили показ ${githubUser.name}`);
    return githubUser;
});

//============================================================================================================================
//відлов помилок в промісах

//навколо проміса і його функціє є неявний try ... catch, якщо функція викине помилку то вона відправить її на обробку до найближчого catch 
//якщо обробника не має то виведе помилку в консоль

//============================================================================================================================
//promise API

//Promise.all() примає будь-який перебираємий обʼєкт (зазвичай масив) з промісами і вертає проміс коли вони всі відпрцюють(працюють паралельно)
Promise.all([
    new Promise(resolve => setTimeout(() => resolve(1), 3000)), // 1
    new Promise(resolve => setTimeout(() => resolve(2), 2000)), // 2
    new Promise(resolve => setTimeout(() => resolve(3), 1000))  // 3
]).then(alert); //1 2 3
//тут він збереже продяок незалежно від того скільки часу буде виконуватись проміс
//якщо один із промісів викине помилку то проміс який повертається з all одразу закінчить із помилкою (всі результати ігноруються)

//якщо в нас є масив посилань можна завантажити їх так
{
    let urls = ['url1', 'url2', 'url3'];

    //перетворюємо кожен url в проміс
    let requests = urls.map(url => fetch(url));

    // Promise.all буде чекати поки вони всі виконаються
    Promise.all(requests).then(responses => responses.forEach(
        response => alert(`${response.url}: ${response.status}`)
    ));
}

//Promice.allSettled
//схоже на all тільки чекає повернення всіх промісів не залежно є там помилка чи ні 
let urls = [
    'https://api.github.com/users/iliakan',
    'https://api.github.com/users/remy',
    'https://no-such-url'
];

Promise.allSettled(urls.map(url => fetch(url)))
    .then(results => { // (*)
        results.forEach((result, num) => {
            if (result.status == "fulfilled") {
                //якщо результат є
            }
            if (result.status == "rejected") {
                //якщо помилка
            }
        });
    });

/*
    results = [
        {status: 'fulfilled', value: ...обʼєкт відповіді...},
        {status: 'fulfilled', value: ...обʼєкт відповіді...},
        {status: 'rejected', reason: ...помилки...}
    ]
*/

//Promice.race
//чекає перший проміс який виконається і бере з нього результат або помилку, всі інші ігноруються

//Promice.any 
//чекає перший успішний проміс 

//Promise.resolve/reject
//використовуються рідко як виявилось

//resolve
// function loadCached(url) {
//     if (cache.has(url)) {
//         return Promise.resolve(cache.get(url)); // (*)
//     }

//     return fetch(url)
//         .then(response => response.text())
//         .then(text => {
//             cache.set(url, text);
//             return text;
//         });
// }

//reject 
// let promise = new Promise((resolve, reject) => reject(error));


//стани промісу 
//fullified - виконаний успішно
//rejected - виконаний з помилкою
//pending - виконується
//setted - виконаний
