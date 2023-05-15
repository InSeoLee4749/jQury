//console.log("드디어 자바스크립트");
//number , string(문자) , object, null, undefinded, bool

//1일 출력, 문자임, string
// today = 1 + "일" + 4 + 10; 1일410 출력

// console.log(today, typeof today); //console에서 확인
// document.body.innerHTML = today; //바디에서 html 연결해라 라는 명령

// window.onload = function () {
//     document.body.innerHTML = "<h1>" + today + "</h1>";
// }

var myname = "이인서";
var number = 1;
console.log(myname);
console.log(typeof myname);

document.body.innerHTML = "<h2>" + myname + "</h2>";
document.body.innerHTML += "<p>자바스크립트" + number + "일 공부시작</p>";
