//створюємо прототип для обʼєкта
let user = {
    name: 'john'
};
//
let admin = Object.create(user);

//аксесор __proto__ не рекомендуєтьс тепер використовувати
//замість нього використовується Object.getPrototypeOf() i Object.setPrototypeOf()


//всі функції мають властивсть prototype
//можна використати властивість функції коструктора для встановлення прототипу
const personPrototype = {
    greet() {
        console.log(`hello, my name is ${this.name}!`);
    },
};

//constructor
function Person(name) {
    this.name = name;
}
//засовуємо методи оприділені в personPrototype в Person
Object.assign(Person.prototype, personPrototype);

const stepan = new Person("Stepan");
stepan.greet();
//доволі часто методи методи виначають в прототипі, а в функції конструкторі 
//визначають дані
// Constructor.prototype.[property] = ... так ми можемо додати нову властивість до конструктора
//for .. in проходиться і по внаслідуваним властивостям і по власним
//.hasOwnProperty() показує чи це власна властивість чи внаслідувана
//F.prototype встановлює значення [[Prototype]] для всіх нових обʼєктів при виклику new F


//примітивні типи не обʼєкти, якщо стукатись до їхніх методів, то створються тимчасовий обʼєкт обготка

//можна позичати методи в вбудованих протипів
let obj = {
    0: "hello",
    1: "world",
    length: 2
};
obj.join = Array.prototype.join;
console.log(obj.join(","))