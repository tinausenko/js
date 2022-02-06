//For12. Дано целое n, найти произведение 1.1*1.2*...*1.n
function product(){
  alert('Дано целое n, найти произведение 1.1*1.2*...*1.n')
    let p = 1
    let n = prompt('Введите целое положительное число N для нахожения произведния чисел')
    for (let i = 1; i<=n; i++) {
      p = p*(1+0.1*i)
    }
  
  alert('Результат '+p)
}

//For13. Дано целое число N (N > 0). Найти значение выражения 1.1 — 1.2 + 1.3 — … 
function sum(){
  alert('Дано целое число N (N > 0). Найти значение выражения 1.1 — 1.2 + 1.3 — …')
  let rez = 0
  let k = 0
  let n = prompt('Введите целое положительное число N для нахожения суммы чисел')
  for (let i = 1; i<=n; i++) {
    k = (1+0.1*i).toFixed(1)
    rez+= (Math.pow(-1,i+1)*(k))
    rez = Math.round(rez * 10)/10
  }
  alert('Результат '+rez)
}

//For14.Дано целое число N (N > 0). Найти квадрат данного числа, 
//используя для его вычисления следующую формулу: N^2 = 1 + 3 + 5 + … + (2*N — 1). 
//После добавления к сумме каждого слагаемого выводить текущее значение суммы 
//(в результате будут выведены квадраты всех целых чисел от 1 до N).
function pow(){
  alert('Дано целое число N (N > 0). Найти квадрат данного числа, используя для его вычисления следующую формулу: N^2 = 1 + 3 + 5 + … + (2*N — 1). После добавления к сумме каждого слагаемого выводить текущее значение суммы (в результате будут выведены квадраты всех целых чисел от 1 до N).')
  let rez = 0
  let k = 0
  let n = prompt('Введите целое положительное число N для нахожения квадрата числа')
  for (let i = 1; i<=2*n-1; i+=2) {
    rez+= i
    rez = Math.round(rez * 10)/10
    alert('Результат '+rez)
  }
}

//For15. Дано вещественное число A и целое число N (N > 0). 
//Найти A в степени N: A^N = A*A*… *A (числа A перемножаются N раз).
function aPowN(){
  alert('Дано вещественное число A и целое число N (N > 0). Найти A в степени N: A^N = A*A*… *A (числа A перемножаются N раз).')
  let rez = 1 
  let a = prompt('Введите вещественное число A')
  let n = prompt('Введите целое положительное число N')
  let counterAfterComma = a.toString().split('.').length*n
  console.log(counterAfterComma)
  for (let i = 1; i <= n; i++){
    rez *= a;
  }
  rez = Math.round(rez * Math.pow(10,counterAfterComma))/(Math.pow(10,counterAfterComma))
  alert('Результат '+rez)
}

//For16.Дано вещественное число A и целое число N (N > 0). 
//Используя один цикл, вывести все целые степени числа A от 1 до N.
function aPowN2(){
  alert('Дано вещественное число A и целое число (N > 0). Используя один цикл, вывести все целые степени числа A от 1 до N.')
  let rez = 1 
  let a = prompt('Введите вещественное число A')
  let n = prompt('Введите целое положительное число N')
  let counterAfterComma = a.toString().split('.').length*n
  for (let i = 1; i <= n; i++){
    rez *= a;
    rez = Math.round(rez * Math.pow(10,counterAfterComma))/(Math.pow(10,counterAfterComma))
    console.log('Результат '+a+'^'+i+'='+rez)
  }
  alert('Результат в консоли')
}
//For17. Дано вещественное число A и целое число N (N > 0). 
//Используя один цикл, найти сумму 1 + A + A^2 + A^3 + … + A^N.
function sumApowN(){
  alert('Дано вещественное число A и целое число N (N > 0). Используя один цикл, найти сумму 1 + A + A^2 + A^3 + … + A^N.')
  let rez = 1 
  let apow = 1
  let a = prompt('Введите вещественное число A')
  let n = prompt('Введите целое положительное число N')
  let counterAfterComma = a.toString().split('.').length*n
  for (let i = 2; i <= n; i++){
    apow = Math.pow(a,i)
    console.log(' '+a+'^'+i+'='+apow)
    rez+= apow
    rez = Math.round(rez * Math.pow(10,counterAfterComma))/(Math.pow(10,counterAfterComma))
    console.log('result'+'='+rez)
  }
  alert('Результат:'+rez)
}

//For18. Дано вещественное число A и целое число N (N > 0). 
//Используя один цикл, найти значение выражения 1 — A + A^2 — A^3 + … + (-1)^N*A^N. 
//Условный оператор не использовать.
function sumApowN2(){
  alert('Дано вещественное число A и целое число N (N > 0). Используя один цикл, найти значение выражения 1 — A + A^2 — A^3 + … + (-1)^N*A^N. Условный оператор не использовать.')
  let rez = 1 
  let apow = 1
  let a = prompt('Введите вещественное число A')
  let n = prompt('Введите целое положительное число N')
  let counterAfterComma = a.toString().split('.').length*n 
  for (let i = 1; i <= n; i++){
    apow = Math.pow(-1,i)*Math.pow(a,i)
    apow = Math.round(apow * Math.pow(10,counterAfterComma))/(Math.pow(10,counterAfterComma))
    console.log(' '+a+'^'+i+'='+apow)
    rez+= apow
    rez = Math.round(rez * Math.pow(10,counterAfterComma))/(Math.pow(10,counterAfterComma))
    console.log('result'+'='+rez)
  }
  alert('Результат:'+rez)
}
// For19. Дано целое число N ( N > 0). Найти произведение N! = 1*2*…*N (N-факториал). 
function Factorial(){
  let rez = 1n
  let n = BigInt(prompt('Введите число N для вычисления факториала'))
  for(let i = 1; i <= n; i++){
    rez*= BigInt(i)
    console.log(rez)
  }
  alert(`${n}! = ${rez}`)
}

// For20. Дано целое число N (> 0). Используя один цикл, найти сумму 1! + 2! + 3! + … + N! (выражение N! — N-факториал — обозначает произведение всех целых чисел от 1 до N: N! = 1*2*…*N ). 
function SumFactorial(){
 let sum = 0
 let factorial = 1
 let n = prompt('Введите число N для вычисления факториала')
 for(let i = 1; i <= n;i++){
  factorial*=i
  console.log('factorial '+factorial)
  sum+=factorial
  console.log('sum '+sum)
 }
 alert(`сума ${sum}`)
}

//For21.Дано целое число N (N> 0). Используя один цикл, найти сумму 1 + 1/(1!) + 1/(2!) + 1/(3!) +…+ 1/(N!)
//(выражение N! — N-факториал — обозначает произведение всех целых чисел от 1 до N: N! = 1*2*…*N).
function SumDIlFactorial(){
  let sum = 1
  let factorial = 1
  let n = prompt('Введите число N для вычисления факториала')
  for(let i = 1; i <= n;i++){
   factorial*=i
   console.log('factorial '+factorial)
   sum+= 1/factorial
   console.log('sum '+sum)
  }
  alert(`сума ${sum}`)
 }
//For22.Дано вещественное число X и целое число N (N > 0). Найти значение выражения 1 + X + X^2/(2!) +…+ X^N/(N!) (N! = 1*2*…*N).
function SumXDIlFactorial(){
  let sum = 1
  let factorial = 1
  let x1 = 1
  let x = prompt('Введите число x для cуммы')
  let n = prompt('Введите число N для вычисления факториала')
  for(let i = 1; i <= n;i++){
   factorial*= i
   console.log('factorial '+factorial)
   x1*= x
   console.log('x1 '+x1)
   sum+= x1/factorial
   console.log('sum '+sum)
  }
  alert(`сума ${sum}`)
}

let number = prompt('Введите номер задачи от 12 до 22')
switch (number) {
    case '12':
    product()
      break;
    case '13':
    sum()
      break;
    case '14':
    pow()
      break;
    case '15':
    aPowN()
      break;
    case '16':
    aPowN2()
      break;  
    case '17':
    sumApowN()
      break;    
    case '18':
    sumApowN2()
      break;
    case '19':
    Factorial()
        break;
    case '20':
    SumFactorial()
        break;
    case '21':      
    SumDIlFactorial()
        break; 
    case '22':      
    SumXDIlFactorial()
        break;         
    default:
    alert( "Нет таких значений" );
  }