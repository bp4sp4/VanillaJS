# VannillaJS

<h1>23/08/03</h1>
<h1>2일차 기초적인부분 공부</h1>
<h2>Booleans, Array, Objects</h2>
<h3>Obejcts</h3>
<pre>
<code>
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

<h1>1일차 기초적인부분 복습</h1>
<h2>let, const 차이점</h2>
<ul>
<li>업데이트가 가능한 변수 let</li>
<li>업데이트가 불간으한 변수 const</li>
<li>var는 오래됐고 규칙이 없는 함수</li>
<li>항상 const, 가끔 let, var X</li>
</ul>

