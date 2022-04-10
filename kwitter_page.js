const firebaseConfig = {
    apiKey: "AIzaSyCnGQ0488U4B47OGNdE3CvaIRSC4_LJ1Xo",
    authDomain: "project-93-22b1e.firebaseapp.com",
    databaseURL: "https://project-93-22b1e-default-rtdb.firebaseio.com",
    projectId: "project-93-22b1e",
    storageBucket: "project-93-22b1e.appspot.com",
    messagingSenderId: "1015250738309",
    appId: "1:1015250738309:web:3b676a1a597b1d39995dec",
    measurementId: "G-NXGJBYBBNL"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

   user_name= localStorage.getItem("user_name_key_1");
room_name= localStorage.getItem("room_name_key_1");
document.getElementById("room_name").innerHTML=" Welcome in room "+ room_name;


         function logout(){
            localStorage.removeItem("room_name_key_1");
            localStorage.removeItem("user_name_key_1");
            window.location=("index.html");
        }

        function send(){
            msg= document.getElementById("msg").value;
            firebase.database().ref(room_name).push({
                name:user_name,
                message:msg,
                like:0
            });
            document.getElementById("msg").value=" ";
        }