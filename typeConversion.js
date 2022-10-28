let log = console.log;

if (false){

log(Number('\n'))//0
log(Number('\t'))//0
log(Number(' '))//0
log(Number(''))//0
log(Number('123s'))//nan
log(Number(NaN))//nan
log(Number(undefined))//nan
log(Number(null))//0

//tostring----------
let a1 = 653223;
log(a1.toString());

log((52).toString()); //52

log(NaN.toString()); //nan

let a2 = null;
//log(a2.toString());//err нема такого методу в null
//undefined те саме

//exponential
log((1.234).toExponential());
log((25).toExponential());


//precision 
log((123.456).toPrecision(1))
log((123.456).toPrecision(4))
log((123.456).toPrecision(3))
//----------------------------------------

//NUMBER
//parseInt/float----
//return int
log(parseInt('234aadsasdda')); //234
log(parseInt('asdas234aadsasdda'));//nan
log(parseInt('aadsasdda234'));//nan
log(parseInt('234aadsasdda', 10)); //234

//прасить число по основі (2й арг) і приводить до 10ї с-ми
log(parseInt('234aadsasdda', 2)); //nan
log(parseInt('110', 2)); //6
log(parseInt('19f', 16)); //415
log(parseInt('0x15f'))//якщо починаєть із 0х то основа автоматично 16
//------------------------------------
//parseFloat(string)
log(parseFloat('123'))//123
log(parseFloat('123.123qweq'))
log(parseFloat('19.8', 16));//19.8

//BOOLEAN
log(Boolean('123'))//true
log(Boolean(1))//true
log(Boolean(0))//false
log(Boolean(' '))//true

log(Boolean(''))//false
log(Boolean(null))//false
log(Boolean(undefined))//false
log(Boolean(NaN))//false
//------------------------------------


//COERCION
//
log('1' + 2)//'12'
log('1' - 2)// -1
log('1' - true)//0
log(true + 2)//3
log(2 + '34')//'234'
log('22' - '12')//10
log(true + '5')//'true5'
log('14' * 2)//28
log('14' * '3')//42
log(14 / ' 4')//3.5
//якщо використовується операція додавання і один з опернадів строка, 
//то і другий операнд перетворюється в строку
//усі інші операції приводять операнди до числа


//в js є 3 види перетворення (Boolean, string nuber)
//бiнарний оператор + і строка трігерять перетворення в string  
//Boolean-перетворення трігерять логічні операції або оператори (|| && !)

//неявну конверсію до чисел трігерять оператори порівняння, бітові операції, 
//арифметичні операції (про + дивитись вище), унарний +, '==' i '!=' (== не приводить до чисел якщо обидва операнда строки)
//Symbol НЕ конвертується в число ВЗАГАЛІ (можна переписати .toPrimive())
//(==) null порівнється тільки з  null i undefined
//NaN не порівнюється ні з чим, навіть із собою
//------------------------------------------------------------------------------------------------------------------

//Coercion for objects
//Boolean
//будь-який не примітивне значення приведеться true
log(Boolean([])) //true
log(Boolean([1, 2, 3])) //true
log(Boolean({})) //true
log(Boolean({'first': 1, 'second': 2})) //true

//перетоврення в інші типи відбувється через [[ToPrimitive]]
//є два маетода .toString() i .valueof() повертають примітивний результат або this
//Numeric-перетворення спочатку викличе valueOf, якщо воно не поверне примітив то потім викличе toString
//String-перетворення навпаки  


}