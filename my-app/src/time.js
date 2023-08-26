import React, { useEffect, useState } from 'react'; 

var div;
const TimeDisplay = () => { 
const [currentTime, setCurrentTime] = useState(''); 

useEffect(() => { 
const intervalId = setInterval(() => { 
const date = new Date(); 



// Получение информации о времени и дате 
let weekday = date.toLocaleDateString('ru-RU', { weekday: 'long' }); 
const month = date.toLocaleDateString('ru-RU', { month: 'long' }); 
const day = date.getDate(); 


// Форматирование вывода времени 
const formattedTime = `Сегодня ${weekday}, ${month}, ${day} число!`; 




if (weekday === "понедельник") {
    div = document.getElementById("timeText1");
    div.style.visibility = 'visible';
}

else if (weekday ==="вторник") {
    div = document.getElementById("timeText2");
    div.style.visibility = 'visible';
}

else if (weekday === "среда") {
    div =  document.getElementById("timeText3");
    div.style.visibility = 'visible';
}

else if (weekday === "четверг") {
    div = document.getElementById("timeText4");
    div.style.visibility = 'visible';
}

else if (weekday === "пятница") {
    div = document.getElementById("timeText5");
    div.style.visibility = 'visible';
}

else if (weekday === "суббота") {
    div = document.getElementById("timeText6");
    div.style.visibility = 'visible';
}

else if (weekday === "воскресенье") {
    div = document.getElementById("timeText7");
    div.style.visibility = 'visible';
}


setCurrentTime(formattedTime); 
}, 1000); 

// Очистка интервала при размонтировании компонента 
return () => clearInterval(intervalId); 
}, []); 




return <div>{currentTime}</div>; 


}; 





export default TimeDisplay; 
