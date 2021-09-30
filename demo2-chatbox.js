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


var sendBtn = document.getElementById('sendBtn');
var inputName = document.getElementById('input-name');
var inputMsg = document.getElementById('inputMsg');
var chatroom = document.getElementById('chatbox-screen');

var today = new Date();
var date = today.getDate()+'-'+(today.getMonth()+1)+'-'+today.getFullYear();
var time = today.getHours() + ':' + today.getMinutes();

var newUser = (sessionStorage.getItem('userName'));
var newRoom = sessionStorage.getItem('newChatRoom');
console.log(newRoom);

inputName.innerHTML = newUser;



    //get data from firebase when start of page
    firebase.database().ref(newRoom).child('message').on('child_added', function(snapshot){
    // console.log(snapshot); //get key
    // console.log(snapshot.val());
    var nameVal = snapshot.val().name;
    var msgVal = snapshot.val().msg;
    var dateVal = snapshot.val().dates;
    var timeVal = snapshot.val().times;


    //create element when firebase got new child
    var chatBox = document.createElement('div');
    chatBox.classList.add('chatBox')

    if(nameVal === newUser) {
        chatBox.style.alignSelf = 'flex-end';
    } 

    var chatName = document.createElement('h5');
    chatName.innerHTML = nameVal;
    var chatMsg = document.createElement('p');
    chatMsg.innerHTML = msgVal;
    var chatDate = document.createElement('p');
    chatDate.classList.add('chatfont');
    chatDate.innerHTML = dateVal;
    var chatTime = document.createElement('p');
    chatTime.classList.add('chatfont');
    chatTime.innerHTML = timeVal;

    if (nameVal !== msgVal) {
        chatBox.append(chatName);
        chatBox.append(chatMsg);
        chatBox.append(chatDate);
        chatBox.append(chatTime);

        chatroom.append(chatBox);
    }


    

    chatroom.scrollTo(0, chatroom.scrollHeight);
    });
   

    




function sendInfo() {
    console.log("its working");
    //push the data and store in database

    if (inputMsg.value) {
        firebase.database().ref(newRoom).child('message').push({
            //values in firebase
            name: newUser,
            msg: inputMsg.value,
            dates: date,
            times: time

            })

            inputMsg.value = '';
    }
        
   
}

