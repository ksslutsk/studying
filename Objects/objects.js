//створення обʼєкта
let person = {
    name: 'tomas',
    "age": 27,
    isHuman: true,
    talk: function() {
        console.log(`I'm ${this.name}, I'm ${this.age} years old.`);
    }
} 
//console.log(person);
person.talk();

//створює новий обʼєкт на основі прототипу поля приховані їх можна переоприділити
let stepan = Object.create(person);
//console.log(stepan);
//stepan.talk();
stepan.name = 'stepan';
stepan.age = 22;
stepan.isHuman = false;
stepan.talk();

//перевіряє чи властивість
console.log("name" in stepan);
console.log("aaaa" in stepan);

//Object просто конструктор
//простітипи завертає в їхні обʼєкти
console.log(Object(123));
console.log(Object("wqerty"));

//видалення поля
//якщо видалити поле в прототипа то і в обʼєкта на основі нього прототип видалиться
//якщо видаляти поле в дочірнього обʼєкта то воно підтягнеться з прототипа
console.log(stepan);
delete stepan.isHuman;
console.log(person.isHuman);
console.log(stepan.isHuman);
console.log(stepan);
console.log(stepan.hasOwnProperty("isHuman"));

//вираховувані поля, в поле можна закинути змінну
let fruit = 'apple';
const bag = { [fruit]: 5 };
console.log(bag.apple); //спрацює тільки якщо відповідь apple