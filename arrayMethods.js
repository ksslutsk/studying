//створеня масивів
//from створює масиви з масивоподібних елементів (з length та індексами)
function f(){
    return Array.from(arguments);
}
console.table(f(1, 2, 3));

let as = new Set(['11111', {}, 123]);
console.table(Array.from(as));

let am = new Map([[1, 11], [2, 22]]);
console.table(Array.from(am)); 

console.table(Array.from('hello'));
//другим аргементам можна передати функцію яка опрацює кожен елемент масиву
console.table(Array.from([1, 2, 3], x => x*x));

//of генерує масив із переданих аргументів
console.table(Array.of(2, [2, 3], {}, 'sss'));

//функції екземплярів
//filter() вертає новий масив з відфільтрованими значеннями
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(arr.filter((el, index, arr1)  => {
    if ((el % 2) === 0){
        console.log(`parnyi element on index ${index} next el ${arr1[index + 1]}`);
        return true;
    }
}));

//flat розкладає вкладені масиви в один одного рівня вкладеності вертає новий масив
let noFlatArr = [5, 6, 7, [1, 2], [10, [11, 12]]];
console.log(noFlatArr.flat());
console.log(noFlatArr.flat(2));

//forEach вертає undefined
arr.forEach((el, index, arr1) => {
    console.log(`${el} on ${index} next el ${arr1[index + 1]}`);
});

//map вертає новий масив
console.log(arr.map((el, index, arr1) => {
    if(index<5) return Math.pow(el, 2);
    else return el / 2;
}));

//reduse initalVal не обовʼязково
let initialVal = 0;
console.log(arr.reduce((prev, curr) => {
    //console.log(`${prev}\t${curr}`);
    return prev + curr;
}), initialVal)