/*acodyssey*/
function like() {
    if (typeof(Storage) !== "undefined") {
      if (localStorage.like) {
        localStorage.like = Number(localStorage.like)+1;
      } else {
        localStorage.like = 1;
      }
      document.getElementById("result").innerHTML = localStorage.like;
    } else {
      document.getElementById("result").innerHTML = "Error!";
    }
  }

   /*bulletstorm*/
   function like2() {
    if (typeof(Storage) !== "undefined") {
      if (localStorage.like2) {
        localStorage.like2 = Number(localStorage.like2)+1;
      } else {
        localStorage.like2 = 1;
      }
      document.getElementById("result").innerHTML = localStorage.like2;
    } else {
      document.getElementById("result").innerHTML = "Error!";
    }
  }

    /*callofduty*/
    function like3() {
        if (typeof(Storage) !== "undefined") {
          if (localStorage.like3) {
            localStorage.like3 = Number(localStorage.like3)+1;
          } else {
            localStorage.like3 = 1;
          }
          document.getElementById("result").innerHTML = localStorage.like3;
        } else {
          document.getElementById("result").innerHTML = "Error!";
        }
      }

  /*darksoul*/
  function like4() {
    if (typeof(Storage) !== "undefined") {
      if (localStorage.like4) {
        localStorage.like4 = Number(localStorage.like4)+1;
      } else {
        localStorage.like4 = 1;
      }
      document.getElementById("result").innerHTML = localStorage.like4;
    } else {
      document.getElementById("result").innerHTML = "Error!";
    }
  }

    /*halflife*/
    function like5() {
      if (typeof(Storage) !== "undefined") {
        if (localStorage.like5) {
          localStorage.like5 = Number(localStorage.like5)+1;
        } else {
          localStorage.like5 = 1;
        }
        document.getElementById("result").innerHTML = localStorage.like5;
      } else {
        document.getElementById("result").innerHTML = "Error!";
      }
    }

      /*left4dead2*/
      function like6() {
        if (typeof(Storage) !== "undefined") {
          if (localStorage.like6) {
            localStorage.like6 = Number(localStorage.like6)+1;
          } else {
            localStorage.like6 = 1;
          }
          document.getElementById("result").innerHTML = localStorage.like6;
        } else {
          document.getElementById("result").innerHTML = "Error!";
        }
      }

    /*outlast*/
    function like7() {
        if (typeof(Storage) !== "undefined") {
          if (localStorage.like7) {
            localStorage.like7 = Number(localStorage.like7)+1;
          } else {
            localStorage.like7 = 1;
          }
          document.getElementById("result").innerHTML = localStorage.like7;
        } else {
          document.getElementById("result").innerHTML = "Error!";
        }
      }
    