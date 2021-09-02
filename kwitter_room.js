
const firebaseConfig = {
      apiKey: "AIzaSyAyMXBxVcbZSLrZAqLwXgPDXnf06vFcMrU",
      authDomain: "kwitter-729dd.firebaseapp.com",
      databaseURL: "https://kwitter-729dd-default-rtdb.firebaseio.com",
      projectId: "kwitter-729dd",
      storageBucket: "kwitter-729dd.appspot.com",
      messagingSenderId: "762575083966",
      appId: "1:762575083966:web:52d766e7ff2dbf8bebc1ef",
      measurementId: "G-2S8RX8Z5TY"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
