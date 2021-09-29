function check()
    {
        //input from keyboard
        var name = document.getElementById("nameRegister").value;
        var password = document.getElementById("password").value;
        var confirmP = document.getElementById("confirmP").value;
    
        //process - use if else to cehck correct pw length
        //        - correct RETURN TRUE, else RETURN FALSE
        if (name.length < 6){
            alert("Name must more than 6 and less than 12!");
            document.getElementById("nameRegister").focus;
            document.getElementById("nameRegister").select();
            return false;
        }
        if(password.length < 8 || password.length > 16) {
            alert("Password must more than 8 and less than 16!");
            document.getElementById("password").focus;
            document.getElementById("password").select();
            return false; //to stop form submission
        }else{
            if(password != confirmP){
                alert("Wrong password or confirm password!");
                document.getElementById("password").focus;
                document.getElementById("password").select();
                return false; //to stop form submission
            }else{
                return true;
            }
        }

}

     // When the user clicks on div, open the popup
function forgotP() {
    var popup = document.getElementById("forgotP");
    popup.classList.toggle("show");
}

function checkpw() {
    var x = document.getElementById("confirmP");
    if (x.type === "password") {
        x.type = "text";
    } else {
      
      x.type = "password";
    }
  }