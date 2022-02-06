//Boolean38. Функция проверяет может ли слон перейти из одного поля в другое за один ход
function Bishop(x1,y1,x2,y2){
    if (Math.abs(x1 - x2) == Math.abs(y1 - y2)) 
    return true
 }

//Boolean39. Функция проверяет может ли королева перейти из одного поля в другое за один ход
function Queen (x1,y1,x2,y2){
    if (Bishop(x1,y1,x2,y2) || (x1 == x2) || (y1 == y2)) 
    return true 
}

//Boolean40. Функция проверяет может ли конь перейти из одного поля в другое за один ход
function Knight(x1,y1,x2,y2) {
    x = Math.abs(x1 - x2)
    y = Math.abs(y1 - y2)
    if ((x == 1 && y == 2) || (x == 2 && y == 1)) 
    return true
}

let i = new Boolean(false)
const x1 = prompt('Введи начальное значение x1 от 1 до 8')
const y1 = prompt('Введи начальное значение y1 от 1 до 8')
const x2 = prompt('Введи конечное значение x2 от 1 до 8')
const y2 = prompt('Введи конечное значение y2 от 1 до 8')

i = Bishop(x1,y1,x2,y2)
if ((x1==x2)&&(y1==y2)) {alert('Ты стоишь на месте')}
else if (i) { alert('Слон может перейти на это поле')} 
    else {alert('Слон НЕ может перейти на это поле')}
i = Queen (x1,y1,x2,y2) 
if (i) { alert('Ферзь может перейти на это поле')} 
else {alert('Ферзь НЕ может перейти на это поле')}

i = Knight(x1,y1,x2,y2)
if (i) { alert('Конь может перейти на это поле')} 
else {alert('Конь НЕ может перейти на это поле')}
