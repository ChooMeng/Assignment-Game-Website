
function check(){
    //input from keyboard
    var newpassword = document.getElementById("newpassword").value;
    var confirmP = document.getElementById("confirmP").value;

    //process - use if else to cehck correct pw length
    //        - correct RETURN TRUE, else RETURN FALSE
    if(newpassword.length < 8 || newpassword.length > 16) {
            alert("Password must more than 8 and less than 16!");
            document.getElementById("newpassword").focus;
            document.getElementById("newpassword").select();
            return false; //to stop form submission
    }else{
        if(newpassword != confirmP){
            alert("Wrong password or confirm password!");
            document.getElementById("newpassword").focus;
            document.getElementById("newpassword").select();
            return false; //to stop form submission
        }else{
            return true;      
        }
    }
}

function checkpw() {
    var x = document.getElementById("newpassword");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }

  function confirmpw() {
    var x = document.getElementById("confirmP");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }