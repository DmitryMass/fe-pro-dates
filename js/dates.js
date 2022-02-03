// Функция состоит из двух аргументов и должна вернуть день недели. В первый
// мы передаем объект даты и вторым аргументом язык(доступно либо 'en' либо 'ru')
// и функция должна вернуть день недели словом в зависимости от языка. Очень круто,
// если выйдет сделать это ОДНОЙ строкой.
function getDay(date, lang) {
  const dayNames = {
    en: {
      0: 'Sunday',
      1: 'Monday',
      2: 'Tuesday',
      3: 'Wednesday',
      4: 'Thursday',
      5: 'Friday',
      6: 'Saturday',
    },
    ru: {
      0: 'Воскресенье',
      1: 'Понедельник',
      2: 'Вторник',
      3: 'Среда',
      4: 'Четверг',
      5: 'Пятница',
      6: 'Суббота',
    },
  };

  // return lang === "en" ? dayNames.en[date.getDay()] : dayNames.ru[date.getDay()]

  return dayNames[lang][date.getDay()]
  

}

// Принимает объект даты, и должно вернуть компоненты даты в виде строки.
// Вид должен быть такой 12:02(часы и минуты), то есть если у вас одно число на одном из
// компонентов, то добавляем 0 перед ним
function formatTime(date) {
  let time = `${plusZero(date.getHours())}:${plusZero(date.getMinutes())}`;
  return time;
}

function plusZero (item) {
    if (item < 10) {
      return "0" + item;
    } return item;
}
// function hours (item) {
//   let time = item.getHours();
//   if (time < 10) {
//     return "0" + item.getHours();
//   } return time;
// }
// function minutes (item) {
//   let time = item.getMinutes();
//   if (time < 10) {
//     return "0" + item.getMinutes();
//   } return time;

// }
  //  Тут забыл как сделать в одно дейтсвите, пробовал
  //  но не получилось, по этому сделал 2 функции и 
  // вкинул их в форматТайм .. ну , главное работает)

/*
Напишите функцию getLastDayOfMonth(year, month), 
возвращающую последнее число месяца. Иногда это 30, 31
или даже февральские 28/29.
Параметры:
year – год из четырёх цифр, например, 2012.
month – месяц от 0 до 11.
К примеру, getLastDayOfMonth(2012, 1) = 29 (високосный год, февраль).
*/
function getLastDayOfMonth(year, month) {
  const lastDay = new Date(year, month + 1, 0)
  //  год, месяц + 1, тк следующий ноль означает, -1 день 
  // следующего месяца, тобишь передаем февраль, он возвращает на последний день января, значит нужно добавить еще 1 месяц, чтобы вышел последний день ферваля.
  return lastDay.getDate()
}

module.exports = {
  getDay,
  formatTime,
  getLastDayOfMonth,
};
