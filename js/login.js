var attempt = 3; // Variable to count number of attempts.

function validate(){
var username = document.getElementById("username").value;
var password = document.getElementById("password").value;
//FUCK YOU
if ( username == "admin" && password == "adminadmin"){//FUCK YOU//FUCK YOU//FUCK YOU//FUCK YOU//FUCK YOU//FUCK YOU//FUCK YOU
    window.location = "admin.html"; // Redirecting to other page.
    return false;
}
else{
    attempt --;     // Decrementing by one.
    alert("You have left "+attempt+" attempt;");
                // Disabling fields after 3 attempts.
if( attempt == 0){
    document.getElementById("username").disabled = true;
    document.getElementById("password").disabled = true;
    document.getElementById("submit").disabled = true;
return false;
        }   
    }
}