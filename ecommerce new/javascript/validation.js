function formValidation(){
    var uemail = document.registration.email;
    var passid = document.registration.psw;
    if(ValidateEmail(uemail)){

        if(passid_validation(passid,6)){
              return true;
        }
    }
return false;
}


function passid_validation(passid,x){
    var passid_len = passid.value.length;
    if(passid_len == 0 || passid_len < x || passid_len > x){
        document.getElementById("pass").innerHTML="Enter valid password";
        alert("Enter valid password, Pass should contain only six charcter!!!");
        passid.focus();
        return false;
    }
    return true;
}


function ValidateEmail(uemail){
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if(uemail.value.match(mailformat))
    {
       return true;
    }
    else
    {
        alert("You have entered an invalid email address!!!"); 
       document.getElementById("mail").innerHTML="Enter valid email"; 
       uemail.focus();
       return false;
    }
}