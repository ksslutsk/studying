//ES6
//використовується на фронті 
//експорт обʼктів з модуля
//експорт працює для всього що let const var function class 
let obj1 = {
    lalala: 1
};
//можна експортувати так 
export let obj2 = {
    lalal: 2
};
function func1() {
    console.log("exported function");
}
const CONST_VAR = 10;
//а можна все купою
export { obj1, func1, CONST_VAR as ALIAS }; //можна також змінити назву обʼєкта через as
// при екпорті всі обʼєкти загортаються в обʼєкт
//модулі ініціалізуються один раз при імпорті


//import 
//в функціях імопртувати не можна тільки на глобальному скопі файлу
import { obj1, obj2 } from 'adress';
//тут також можна змінити імʼя
import { func1 as foo } from 'adress';

//import всього
import * as all from 'adress';

//default 
//можебути тільки один експорт default
//при імпорт не береться в фігурні дужки
//при експорті можна не давати імʼя

// export default class User {
//     constructor(name) {
//         this.name = name;
//     }
// }

// export default class {
//     constructor(name) {
//         this.name = name;
//     }
// }

//імпорт
import User from 'adress';
import {default as smth} from 'adress';

//реекспорт
//такий спосіб для того щоб витягнути з одного файлу і одразу перекинути на імпорт з інфшого файлу, працювати з ними не можна
export {smth} from 'adress';

//динамічний імпорт
//можна імпортувати з потреби (в if, функціях і тд )
//import()
let modulePath = prompt("Какой модуль загружать?");

import(modulePath).then(obj => {}).catch(err => {});
//це не виклик функції а просто спеціалбний снтаксис, який повертає проміс

//commonJS
//працює лиш на бекенді
let smth  = require("adress");