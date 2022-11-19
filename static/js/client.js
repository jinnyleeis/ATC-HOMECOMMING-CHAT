var socket = io()
/* 접속 되었을 때 실행 */
socket.on('connect', function() {
  /* 이름을 입력받고 */

  //var realname = prompt('이름을 입력해주세요!')
  //var number = prompt('학번을 입력해주세요!')
  //var name = prompt('닉네임을 입력해주세요!')
  var realname;
  var number;
  var name;


  /* 이름이 빈칸인 경우 */
  

  /* 서버에 새로운 유저가 왔다고 알림 */
 // socket.emit('newusernotify',realname,number,name)
})

/* 서버로부터 데이터 받은 경우 */
socket.on('update', function(data) {
  var chat = document.getElementById('chat')

  var message = document.createElement('div')
  var node = document.createTextNode(`${data.message}`)
  var className = ''

  // 타입에 따라 적용할 클래스를 다르게 지정
  switch(data.type) {
    case 'message':
      className = 'other'
      message.classList.add(className)
  message.appendChild(node)
  chat.appendChild(message)
      break
    case 'connect':
      className = 'connect'
      break
    case 'disconnect':
      className = 'disconnect'
      break
  }
  //message.classList.add(className)
  //message.appendChild(node)
  //chat.appendChild(message)
})
function send() {
  // 입력되어있는 데이터 가져오기
  var message = document.getElementById('test').value
  // 가져왔으니 데이터 빈칸으로 변경
  document.getElementById('test').value = ''

  // 내가 전송할 메시지 클라이언트에게 표시
  var chat = document.getElementById('chat')
  //var content = document.createElement('div')
 // var node = document.createTextNode(message)
  //content.classList.add('me')
 // content.appendChild(node)
  //chat.appendChild(content)

  // 서버로 message 이벤트 전달 + 데이터와 함께
  socket.emit('message', {type: 'message', message: message})
}
var message2=""

function send2() {
  // 입력되어있는 데이터 가져오기
  realname=document.getElementById('test0').value;
  number=document.getElementById('test1').value;
  var phone=document.getElementById('test2').value;

console.log("send2")
 console.log(realname+number+phone)
  
  

  // 내가 전송할 메시지 클라이언트에게 표시
  var chat = document.getElementById('chat')
  //var content = document.createElement('div')
  //var node = document.createTextNode(message2)
  //content.classList.add('me')
 // content.appendChild(node)
  //chat.appendChild(content)

  // 서버로 message 이벤트 전달 + 데이터와 함께
  socket.emit('message2', {type: 'message', message: realname,number,phone})
// 가져왔으니 데이터 빈칸으로 변경
document.getElementById('test0').value = ''
document.getElementById('test1').value = ''
document.getElementById('test2').value = ''
  location.href="/static/index3";
  socket.emit('newusernotify',realname,number,name)
}


function nextbutton() {
  // 입력되어있는 데이터 가져오기
 location.href="/static/index2";
}

var message3=""

function tochatbutton(){

 



  location.href="/static/index";
}