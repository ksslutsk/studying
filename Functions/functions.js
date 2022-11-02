
function Person(name) {
    this.name = name;
}
//це не спрацює бо стрілкові функції візьме this як window
/*
Person.prototype.getName = () => {
    return this.name;
};
*/
Person.prototype.getName = function () {
    return this.name;
}

const tom = new Person('Tom');
console.log(tom.getName());

//function declaration
//видно по всьому файлу
function declaration(){
    console.log("I'm declaration");
}
//function expression
//можна використовувати тільки після ініціалізації
let expr = function(){
    console.log("function expression");
}

//IIFE
//змінні в середині такої фукнції не потрапляють до глобалиного обʼєкта, це дозволяє зекономити памʼять та уникнути колізій в деяких випадках
console.group("IIFE");
//це анонімна функція 
; (function (el) {
    console.log("I'm a IIFE annymous function")
})();

//стрілкова функція
(() => {
    console.log("I'm a IIFE arrow function")
})();
//функція може мати імʼя але викликати її по імені не вийде
; (function fuName(el) {
    console.log("I'm a IIFE named function")
})();


//приклад використання, можна використовувати для уникення колізії в якихось бібліотеках
let calculator = (function () {
    const SOME_NUM = 10;
    function add(a, b) {
        return a + b;
    }

    function multiply(a, b) {
        return a * b;
    }
    function addSomeNum(a){
        return a + SOME_NUM;
    }
    return {
        add, 
        multiply,
        addSomeNum
    };
})();
//calculator отримає результат роботи функції, результатом буде обʼєк де лежатимуть add і multiply
//вони будуть посилатись на реалізації в IIFE
console.log(calculator.add(10, 20)); //30
// це приклад реалізації замикання
console.log(calculator.addSomeNum(2));
console.groupEnd();


