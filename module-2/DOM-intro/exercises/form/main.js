const msgToUser = function(typeErr){
    let msg = document.getElementById("form-msg");
    if(!msg){
        msg = document.createElement("p");
        msg.setAttribute("id", "form-msg")
        msg.style.position = "absolute";
        msg.style.bottom = "0";
        msg.style.fontWeight = "bold";
    }
    if(typeErr){
        msg.style.color = "red";
        msg.innerHTML = `${typeErr} is not valid, please fill again.`
    }else{
        msg.style.color = "green";
        msg.innerHTML = `Sent Succeesfully.`
    }
    let submitSec = document.getElementById("submit");
    submitSec.appendChild(msg);
}


const validate = function(){
    let name = document.getElementById("name-input");
    let salary = document.getElementById("salary-input");
    let birthday = document.getElementById("birthday-input");
    let phone = document.getElementById("phone-input");

    if(name.value.length < 2){
        msgToUser("name")
        name.value = "";
    }else if(salary.value < 10000 || salary.value > 16000){
        msgToUser("salary");
        salary.value = "";
    }else if(!birthday.value){
        msgToUser("birthday");
        birthday.value = "";
    }else if(phone.value.length != 10){
        msgToUser("phone");
        phone.value = "";
    }else{
        msgToUser();
    }
}


