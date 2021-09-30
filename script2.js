// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBjEoebbyHbE7jeJ9W0BRcauyON73TVlfA",
    authDomain: "chat-room-6fa68.firebaseapp.com",
    databaseURL: "https://chat-room-6fa68-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "chat-room-6fa68",
    projectId: "chat-room-6fa68",
    storageBucket: "chat-room-6fa68.appspot.com",
    messagingSenderId: "1098261834091",
    appId: "1:1098261834091:web:9535476840063cfdc9042e"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  console.log(firebase);

var inputRoom = document.getElementById('inputRoom');
var chatRoom = document.getElementById('chatroom-holder')

function createRoom() {
    var newChatRoom = inputRoom.value;
    sessionStorage.setItem('newChatRoom', newChatRoom);

    console.log(sessionStorage.getItem('newChatRoom'));

    var room = document.createElement('div');
    var roomName = document.createElement('h1');
    roomName.innerHTML = newChatRoom;
    inputRoom.value = '';
    var roomBtn = document.createElement('button');
    roomBtn.onclick= enterRoom;
    var removeBtn = document.createElement('button');
    removeBtn.onclick= removeRoom;

    roomBtn.innerHTML = "Enter Room"
    removeBtn.innerHTML = "Remove Room"
    
    room.append(roomName);
    room.append(roomBtn);
    room.append(removeBtn);

    room.style.transition = 1 +'s';

    chatRoom.append(room);

    firebase.database().ref(newChatRoom).child('message').set({
        //values in firebase
        room: newChatRoom,
        })

}

function enterRoom() {
    console.log("its working");

    
    window.open("C:/Users/Lenovo/Desktop/InvokeFrontEnd/Day13/demo2-chatbox.html",'_blank');
}

function removeRoom() {
    var Parent = this.parentNode;
    Parent.remove()
}