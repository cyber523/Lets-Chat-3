var firebaseConfig = {
      apiKey: "AIzaSyCScMmTXV3SEYGeZ_qEHrsIRCyOGE2FwRQ",
      authDomain: "lets-chat-b88ea.firebaseapp.com",
      databaseURL: "https://lets-chat-b88ea-default-rtdb.firebaseio.com",
      projectId: "lets-chat-b88ea",
      storageBucket: "lets-chat-b88ea.appspot.com",
      messagingSenderId: "228359619183",
      appId: "1:228359619183:web:7b30cab0801b81dacdc39a",
      measurementId: "G-Z732GH764P"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE
user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome" + user_name + ":"; 
function addRoom() {

   room_name = document.getElementById("room_name").value;
firebase.database().ref("/").child(room_name).update({
      purpose: "adding room name"
}) ;
localStorage.setItem("room_name", room_name);
window.location = "letschat_page.html";
}

function getData() {firebase.database().ref("/").on('value',
function(snapshot) {document.getElementById("output").innerHTML =
"";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
Room_names = childKey;
//Start code
console.log("room name-" + Room_names);
row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomname(this.id)' #"+Room_names+"</div> <hr>"
//End code
});});}
getData();

