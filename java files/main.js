let submit = document.querySelector("#submit");
let b = document.querySelector("#pass");
b.onkeyup = function () {
    let pass1 = Array.from(b.value).length;
     document.querySelector("#mssg").innerHTML=`your pass is ${pass1} character`

}

submit.onclick = function () {
    
    let pass1 = document.querySelector("#pass").value;
    let passConfirm = document.querySelector("#confirmPass").value;
    if (pass1 == 0) {
        
        document.querySelector("#mssg2").innerHTML = `password is requrid ! `;
    }
    else if (pass1 !== passConfirm) {
        document.querySelector("#mssg2").innerHTML = `your pass its false pleas confirm it right `;
    }
    else {
        let pass1 = Array.from(b.value).length;
        document.querySelector("#mssg2").innerHTML = `its submited true and your PASS is ${pass1} CHARATER`;
    }
}


