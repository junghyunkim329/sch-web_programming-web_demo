document.getElementById('time').innerHTML = new Date().toLocaleString()

function pink() {
  document.body.style.backgroundColor = 'pink'
}
function lightblue() {
  document.body.style.backgroundColor = 'lightblue'
}
function yellowgreen() {
  document.body.style.backgroundColor = 'yellowgreen'
}
function reset() {
  document.body.style.backgroundColor = 'linen'
}

function showhtml() {
  document.getElementById('fig').src = 'img/HTML5.png'
  document.getElementById('desc').innerHTML =
    '<b>HTML</b>은 구조적 웹문서를 만들 때 사용하는 마크업 언어이다.'
}
function showcss() {
  document.getElementById('fig').src = 'img/css.png'
  document.getElementById('desc').innerHTML =
    '<b>CSS3</b>는 HTML 문서의 스타일을 지정하기 위한 언어이다.'
}
function showjs() {
  document.getElementById('fig').src = 'img/js.png'
  document.getElementById('desc').innerHTML =
    '<span style="color:orange">Javascript</span>는 웹을 위한 프로그래밍 언어이며 웹문서에서 동작을 실행할 수 있게 하는 언어이다.'
}

function hide() {
  document.getElementById('fig').src = ''
  document.getElementById('desc').innerHTML = ''
}

// 확인 필요
const audio = document.getElementById('myAudio')
audio.volume = 0.5
