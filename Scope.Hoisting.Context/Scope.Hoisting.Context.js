function hello() {
    console.log("hello" + this)
}

const person = {
    name: "qqqqq",
    sayHello: hello, //person
    sayHelloWindow: (function () {
        console.log("hello" + this)
    }).bind(this), //window ???????????????
    logInfo: function () {
        console.log(`name ${this.name}`);
    }
}

console.log(person1.sayHelloWindow())

let ofoo = person.logInfo;
ofoo();

console.log(i) // спрацює хостінг
for (var i = 0; i < 3; i++) {
    console.log(i);
}
console.log(i);// var оголошує в скопі функції тому ми бачимо змінну

//console.log(j) error хостнг не спрацював 
for (let j = 0; j < 3; j++) {
    console.log(j);
}
//console.log(j); error let оголошує в скопі блоку тому тут змінної уже нема

function testFoo() {
    var fooVariable = "foo var variable";
    let letVariable = "foo let variable";
    
    {
        var fooVariable = "new var foo";
        let letVariable = "new let var";
        console.log(fooVariable);//new var foo
        console.log(letVariable);//new let var
    }

    console.log(fooVariable);//new var foo
    console.log(letVariable);//foo let varible

}
//console.log(fooVariable); помилка поза функцією змінної не видно
testFoo();