//for()
for (let index = 0; index < 3; index++){
    console.log(`for() index: ${index}`)
}

//do ... while
let dw_i = 0 ;
do {
    dw_i++;
    console.log(`do ... while statment ${dw_i}`);
} while (dw_i < 3)

//while
let w = 0; 
while(w < 3){
    console.log(`while() ${w}`)
    w++;
}

//label таке можна використовувати будь-де в коді
anyLoop: 
    for(let i = 0; i < 2; i++){
        console.log(`labled loop ${i}`)
    }
//за допомогою цього можна використати break  або continue  для цього циклу 
//в інших частинах коду (приклади в break i continue)

//continue
//приклад без label
for(let i = 0; i < 3; i++){
    if(i == 1) continue;
    console.log(`ex1 continue ${i}`)
}
//приклад з label
let a = 0;
let b = 7;
checkiandj: while (a < 4) {
  console.log(`labeled loops i=${a}`);
  a++;
  checkj: while (b > 4){
    b--;
    if(b == 6) continue checkj;
    console.log(`j=${b}`)
  } 
}

//break 
for(let i = 0; i < 3; i++){
    if(i == 1) {
        console.log('breaking loop');
        break;
    }
    console.log(`ex1 break ${i}`)
}
//приклад з label
loop1: for(let i = 0; i < 5; i++){
    console.log(`break ex2 loop1 i=${i}`);
    loop2: for(let j = 0; j < 2; j++){
        console.log(`loop2 j=${j}`);
        if(i == 3) {
            console.log(`breaking loop1 on i=${i}`);
            break loop1;
        }
    }
}

//for ... in 
//перебирає всі поля в обʼєкті, в масиві це будуть індекси (в масивах або йому подібних візьме і приховані поля), але 
//якщо до масиву додати поле то і воно підпаде до перебору 
const arr = [1, 2, 3];
const o = {1: 3, 2: 4, mee: "shift"};
console.log('object in for..in loop');
for (const i in o){
    console.log(i);
}
console.log('array in for..in loop')
for (const i in arr){
    console.log(i)
}
console.log('array with a method in for..in loop')
Array.prototype.method = true;
for (const i in arr){
    console.log(i)
}

//for .. of 
//працює зі значеннями ітерваних типів (string, array, власними обʼєктами які мають реалізований ітератор, Map, Set ect.)
for (const a of arr){
    console.log(`for..of arr ${a}`);
}
let str = "book";
for (const s of str){
    console.log(s);
}


