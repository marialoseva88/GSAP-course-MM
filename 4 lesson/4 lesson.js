let titleProject = prompt('Название проекта?');
console.log(titleProject);

let screensValue = prompt('шаблонные, с уникальным дизайном, с анимациями');
console.log(screensValue);

let responsive = prompt('Нужен ли респонсивный сайт?');
console.log(responsive);

let service1 = prompt('Какой сервис нужен?');
console.log(service1);

let servicePrice1 = +prompt('Сколько это будет стоить?');
console.log(servicePrice1);

let service2 = prompt('Какой еще сервис тебе нужен?');
console.log(service2);

let servicePrice2 = +prompt('Сколько будет стоить этот второй сервис?');
console.log(servicePrice2);

let screenPrice = 8000;
let fullPrice = screenPrice + servicePrice1 + servicePrice2;
console.log(fullPrice);


if (fullPrice > 50000) {
    console.log('Cделаем скидку в 10%');
}
else if(fullPrice > 20000 && fullPrice < 50000 ){
    console.log('Cделаем скидку 5%')
}
else if (fullPrice < 20000 && fullPrice > 0){
    console.log('скидка не предусмотрена')
}
else if(fullPrice < 0){
    console.log('Что-то пошло не так')
}
else if(fullPrice == 0 || fullPrice == 20000 || fullPrice == 50000){
    console.log('Проверка на равенство')
}

let Percentage = +fullPrice * 15 / 100;
console.log(Math.ceil(Percentage));
let servicePercentPrice = fullPrice - Percentage;
console.log (Math.ceil(servicePercentPrice));