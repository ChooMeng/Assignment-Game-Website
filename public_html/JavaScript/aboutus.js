function like() {
    if (typeof(Storage) !== "undefined") {
        if (localStorage.like) { localStorage.like = Number(localStorage.like)+1; }
                else { localStorage.like = 1; }
            document.getElementById("result").innerHTML = localStorage.like;
    } else { document.getElementById("result").innerHTML = "Error!"; }
}