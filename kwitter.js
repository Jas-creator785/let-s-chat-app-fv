function add_user(){
    user_name= document.getElementById("user_name").value;
    localStorage.setItem("user_name_key_1",user_name);
  window.location="kwitter_room.html";
  }