function check(){
    var input1 = document.getElementById("input1");
    var input2 = document.getElementById("input2");
    var res = document.getElementById("res");

    if(input1.value == "CO" && input2.value == "O2"){
        res.value = "CO2"
    }
}