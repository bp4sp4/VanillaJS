# VannillaJS
# Js파일만 md.작성 공부전 복습

<h1>23/08/10</h1>
<h3>본격적인 앱만들기 시작</h3>
<ul>
<li>greetigs.js -> 인사해주는 Js</li>
<li>clock.js -> 시계 JS</li>
</ul>
<h3>clock.js</h3>
<pre>
<code>
const clock = document.querySelector("h2#clock");

//함수 실행방식
function getClock() {
    // padstart() String 이 가져야할 길이를 2로 설정하고  그렇지 않다면 String 앞쪽에 0을 추가
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    clock.innerText = `${hours}:${minutes}:${seconds}`;
}
getClock(); //브라우저 실행 되면 함수 자동실행
setInterval(getClock, 1000); // 매초마다 getClock 재실행
</code>
</pre>


<h1>23/08/09</h1>
<h3>2일차 기초적인부분 공부</h3>
<h3>Booleans, Array, Objects, function</h3>
<h3>function</h3>

<pre>
<code>
function sayHello(nameOfPerson, age){
    console.log("Hello my name is" + nameOfPerson + " I'm " + age);
}

sayHello("nico", 15);
sayHello("da;", 23);
sayHello("lynn", 21);

</code>
</pre>

<h3>Obejcts</h3>
<pre>
<code>
//예제코드 2번 :  밖에서 데이터를 받는방법
const player = {
    name : "SangHun",
    sayHello : function(otherPersonsName){
        console.log("Hello " + otherPersonsName + " nice to meet you");
    }
}

console.log(player.name);
player.sayHello("lynn");
player.sayHello("nico");


//에제코드 1번 : functon 생성 데이터 추가

const player = {
    name : "nico",
    points : 10,
    fat : true,
};

console.log(player);

player.points = player.points + 15;
console.log(player);

// result
{name: 'nico', points: 10, fat: true}
{name: 'nico', points: 25, fat: true}
</code>
</pre>

<ul>
<li>자바스크립트는 null, undifiend 있다.</li>
<li>Booleans 는  True, False</li>
<li>array 는 0번째부터 시작</li>
</ul>
<hr>
<h1>23/08/03</h1>
<h3>1일차 기초적인부분 복습</h3>
<h3>let, const 차이점</h3>
<ul>
<li>업데이트가 가능한 변수 let</li>
<li>업데이트가 불간으한 변수 const</li>
<li>var는 오래됐고 규칙이 없는 함수</li>
<li>항상 const, 가끔 let, var X</li>
</ul>

