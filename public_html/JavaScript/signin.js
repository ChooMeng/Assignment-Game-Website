function check()
{
    //input from keyboard
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    //process - use if else to cehck correct userN & pw
    //        - correct RETURN TRUE, else RETURN FALSE
    if((username == "choomeng" && password == "cm0417") || (username == "williamchoong" && password == "wl1001") || (username == "weichung" && password == "wc0113") || (username == "zhiyan" && password == "zy1227") || (username == "sky" && password =="sky0621"))
    {
        return true; //the form action will opened
    }
    else{
        alert("Wrong user Name or password !!!");
        document.getElementById("username").focus;
        document.getElementById("username").select();
        return false; //to stop form submission
    }
}