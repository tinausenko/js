
//If18. Даны три целых числа, одно из которых отлично от двух других, равных между собой, определить его порядковый номер.
function another3(){
    alert('Даны три целых числа, одно из которых отлично от двух других, равных между собой. Определить порядковый номер числа, отличного от остальных.')
    let A = prompt('Введите первое число')
    let B = prompt('Введите второе число')
    let C = prompt('Введите третье число')
    
    if ((A == B)&&(B == C)||(A !== B)&&(B !== C)){alert('Числа не отвечают условию задачи')}
    else 
    if (A == B) {alert(`Уникальный элемент ${C} с номером 3`)}
    if (A == C) {alert(`Уникальный элемент ${B} с номером 2`)}
    if (B == C) {alert(`Уникальный элемент ${A} c номером 1`)}
    
}

//If19.Даны четыре целых числа, одно из которых отлично от трех других, равных между собой. Определить порядковый номер числа, отличного от остальных.
function another4(){
    alert('Даны четыре целых числа, одно из которых отлично от трех других, равных между собой. Определить порядковый номер числа, отличного от остальных.')
    let A = prompt('Введите первое число')
    let B = prompt('Введите второе число')
    let C = prompt('Введите третье число')
    let D = prompt('Введите четвёртое число')
    
    if ((A == B && B == C &&C == D)||(A !== B && B !== C && C !== D)){alert('Числа не отвечают условию задачи')}
    else 
    if (A == B && B == C) {alert(`Уникальный элемент ${D} с номером 4 `)}
    if (A == B && B == D) {alert(`Уникальный элемент ${C} с номером 3 `)}
    if (A == C && C == D) {alert(`Уникальный элемент ${B} с номером 2`)}
    if (B == C && C == D ) {alert(`Уникальный элемент ${A} c номером 1`)}
    
}
//If20. Функция исчисляет расстояние между точками на числовой оси
function legnthBetweenABC(){
    alert('На числовой оси расположены три точки: A, B, C. Определить, какая из двух последних точек (B или C) расположена ближе к A, и вывести эту точку и ее расстояние от точки A.')
    let A = prompt('Введите точку А')
    let B = prompt('Введите точку B')
    let C = prompt('Введите точку C')
    if (Math.abs(B-A) === Math.abs(C-A)) {alert('Точки В и С равноудалены от точки А на '+ Math.abs(B-A))}
    else (Math.abs(B-A) <Math.abs(C-A))?alert('Точка В ближе к точке А. Расстояние '+ Math.abs(B-A)):alert('Точка С ближе к точке А. Расстояние '+ Math.abs(C-A))       
}

//If21. Функция опеределяет, где точка находится на координатной плосткости. Координаты целые по условию.
function cartesianCoordinate(){
    alert('Даны целочисленные координаты точки на плоскости. Если точка совпадает с началом координат, то вывести 0. Если точка не совпадает с началом координат, но лежит на оси OX или OY, то вывести соответственно 1 или 2. Если точка не лежит на координатных осях, то вывести 3.')
    let x = prompt('Введите координату Х точки')
    let y = prompt('Введите координату Y точки')
    if (x == 0 && y == 0) {alert('0. Это начало координат')}
    else if (x == 0) {alert('1. Точка лежит на оси OY')}
        else if (y == 0) {alert('2. Точка лежит на оси OX')}
        else {alert('Точка не лежит на координатных осях')}
}

//If22. Функция опеределяет в какой координатной четверти находится точка. x!==0  и y!==0 по условию
function cartesianCoordinateQuater(){
    alert('Даны координаты точки, не лежащей на координатных осях OX и OY. Определить номер координатной четверти, в которой находится данная точка.')
    let x = prompt('Введите координату Х точки')
    let y = prompt('Введите координату Y точки')
    if (x > 0 && y > 0) {alert('Точка лежит в 1 четверти')}
        else if (x < 0 && y > 0) {alert('Точка лежит во 2 четверти')}
            else if (x < 0 && y < 0) { alert('Точка лежит в 3 четверти')}
                else if (x > 0 && y < 0) {alert('Точка лежит в 4 четверти')}              
}

// If23. Дано координаты трёх точек (вершины прямоугольника), стороны паралельны 
//координатным осям. Найти координаты четвёртой точки.
function Task23(){
    alert('Даны целочисленные координаты трех вершин прямоугольника, стороны которого параллельны координатным осям. Найти координаты его четвертой вершины.')
    let x1 = prompt('Введите координату Х первой точки')
    let y1 = prompt('Введите координату Y первой точки')
    let x2 = prompt('Введите координату Х второй точки')
    let y2 = prompt('Введите координату Y второй точки')
    let x3 = prompt('Введите координату Х третьей точки')
    let y3 = prompt('Введите координату Y третьей точки')
    if (x1 == x2) {alert('x4: '+x3+' y4: '+y2)}
        else if (x1 == x3) {alert('x4: '+x2+' y4: '+y3)} 
    }


// If24. Найти значение функции от х
function Task24(){
    let x = prompt('Введите Х ')
    x = Number(x)
    if (x == 0) {alert('Эта точка выколота из этого праздника жизни')}
    else if (x > 0) {alert('f(x)= '+(2*Math.sin((Math.PI / 180)*x)).toFixed(4))}
        else {alert('f(x)= '+Number(6-x))}
}

// If25. Найти значение функции от целого х
function Task25(){
    let x = prompt('Введите целый Х ')
    x = Number(x)
     if (Number.isInteger(x) == true) {
        if ((x < -2) || (x > 2)){alert('f(x)='+(2*x))}
        else {alert('f(x)='+(-3*x))}
     }
    else {alert('Надо было целое число ввести')}
}

// If26. Найти значение функции от вещественного х
function Task26(){
    let x = prompt('Введите Х ')
    x = Number(x)
    if (x <= 0) {alert('f(x)='+(-x))}
    else if (x > 0 && x <2 ) {alert('f(x)='+Math.pow(x,2).toFixed(4))}
        else  {alert('f(x)=4')}
}

//If27.Для данного вещественного x найти значение следующей функции f, принимающей значения целого типа:
function Task27(){
    let x = prompt('Введите Х') 
    if (x < 0) {alert(Number(0))}
        else if (Number(x)%2 == 0) {alert(Number(1))}
            else {alert(Number(-1))}
}

//If28.Дан номер года (положительное целое число). Определить количество дней в этом году,
// учитывая, что обычный год насчитывает 365 дней, а високосный — 366 дней. 
//Високосным считается год, делящийся на 4, за исключением тех годов, которые 
//делятся на 100 и не делятся на 400 (например, годы 300, 1300 и 1900 не являются високосными, а 1200 и 2000 — являются).
function leapYear(){
    let x = prompt('Введите год') 
    let days = (Number(x)%400 == 0 || Number(x)%4 == 0 && Number(x)%100!=0)?366:365
    alert(`В этом году ${days} дней`)
}

let number = prompt('Введите номер задачи от 18 до 28')
switch (number) {
    case '18':
      another3();
      break;
    case '19':
    another4();
      break;
    case '20':
    legnthBetweenABC()
      break;
    case '21':
    cartesianCoordinate()
        break;
    case '22':
    cartesianCoordinateQuater()
        break;  
    case '23':
        Task23 ()
        break;    
    case '24':
    Task24()
        break;
    case '25':
    Task25()
        break;
    case '26':
    Task26()
        break;
    case '27':      
    Task27()
        break; 
    case '28':      
    leapYear()
        break;         
    default:
    alert( "Нет таких значений" );
  }