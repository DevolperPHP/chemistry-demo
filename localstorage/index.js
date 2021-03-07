function save(){
    var r = document.getElementById("input").value;
    localStorage.setItem("text", r);

    alert(localStorage.getItem("text"));
}