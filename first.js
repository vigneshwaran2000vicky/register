var lgpage=document.getElementById("login");
var regpage=document.getElementById("register");
var fdpage=document.getElementById("fd");

var oplogin=document.getElementById("lgj");
var opreg=document.getElementById("rgj");
var redfd=document.getElementById("fr")

function login(){
    event.preventDefault();
    lgpage.style.visibility="visible";
    oplogin.style.color="red";
    regpage.style.visibility="hidden";
    fdpage.style.visibility="hidden";
    opreg.style.visibility="hidden";
    oplogin.style.visibility="visible";
   
}
function register(){
    event.preventDefault();
    regpage.style.visibility="visible";
    fdpage.style.visibility="hidden";
    lgpage.style.visibility="hidden";
    opreg.style.color="red";
    opreg.style.visibility="visible";
    oplogin.style.visibility="hidden";
   
}
function forget(){
    event.preventDefault();
    fdpage.style.visibility="visible";
    lgpage.style.visibility="hidden";
    regpage.style.visibility="hidden";
    redfd.style.color="red";
    oplogin.style.visibility="hidden";
    opreg.style.visibility="hidden";

}
var emailArray=[];
var passwordArray=[];

function rebtn(){
    var email=document.getElementById("re").value;
    var pass=document.getElementById("rp").value;
    var repass=document.getElementById("rpp").value;

    if(email==""){
        alert("email required.");
        return;
    }
    else if(pass==""){
        alert("pass wored required.");
        return;
    }
    else if(repass==""){
        alert("passwored required")
        return;
    }
    else if(pass!==repass){
        alert("pass word dose not match.");
        return;
    }
    else if(emailArray.indexOf(email)==-1){
        emailArray.push(email);
        passwordArray.push(pass);
        alert(email +" thanks for registation. \nTry to login")
    }
}
function lgbtn(){
    var email=document.getElementById('le').value;
    var lgpass=document.getElementById('lp').value;

    var i=emailArray.indexOf(email);
if (emailArray.indexOf(email)==-1){
    if(email==""){
        alert('email dose not match.');
        return;
    }
    alert(
        "emsil dose not exist"
    )
}
else if(passwordArray[i]!=lgpass){
    if(lgpass==""){
        alert("password required");
        return;
    }
    alert('pass word dos not match');
    return;
}
else {
    alert(email+" thanks for login \n wellcom's you ")
    document.getElementById("le").value="";
    document.getElementById("lp").value="";
}
}

function fpbtn(){
    var email=document.getElementById("fp").value;
    var i=emailArray.indexOf(email);
    if (emailArray.indexOf(email)==-1){
        if(email==""){
            alert('email dose not match.');
            return;
        }
        alert(
            "emsil dose not exist"
        )
    }
    alert("password is sent to your email check it in 24hr.\n thanks"+email);
    document.getElementById("fp").value="";
   }