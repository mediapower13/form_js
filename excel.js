
// var paral = document.getElementById('name');

// paral.style.backgroundColor = 'red';

// paral.innerHTML = "laaja emedo"

// console.log(paral.style.backgroundColor)

// var myDiv = document.createElement('div');

// var paral = document.querySelector('body');

// paral.appendChild(myDiv);

// function primtText() {
//     console.log("rocks with me!");
// }
//  function a() {
//     alert("javascipt is cool")

//  }

//  setTimeout(a, 2000);
// // setInterval(primtText, 3000);

// function documentManipulaion() {
//  var newDiv = document.createElement('div');
//  newDiv.style.backgroundColor = 'gold';
//  newDiv.style.width = '200px';
//  newDiv.style.height = '80px';

//  var bodyVar = document.querySelector('body');
//  bodyVar.appendChild(newDiv) 



//  var newH2 = document.createElement('h2');
//  newH2.style.color = 'blue';

//   var h1Text = document.getElementById('head1').innerHTML;

//   newH2.innerHTML = h1Text;

// document.querySelector('div').appendChild(newH2)
// }

// setTimeout(documentManipulaion, 5000);

// function changeBg() {

//     var theDiv = document.getElementById('mainDig');
//     theDiv.style.borderColor = 'green';

// }
//    function changeText() {
//     document.getElementById('head1').innerHTML = "button double clicked";

//    }
//    var thebtn = document.getElementById('eventbtn');
//    thebtn.ondblclick = changeText;


//    function realTimeText() {
//     var theInput = document.getElementById('inputBox').value;
//     document.getElementById('about').innerHTML = theInput;
//    }

function emailValidation() {
    var emailInput = document.getElementById('emailInput1');
    var emailError = document.getElementById('emailError');

    if(emailInput.value == ""){
        emailInput.style.borderColor = "red";
        emailError.innerHTML = "please enter an email";
    }else if(emailInput.value.include("@")){
        emailInput.style.borderColor = "green";
        emailError.innerHTML = " ";
    }
}

    function passwordValidation() {
        var passInput1 = document.getElementById("passInput1");
        var passwordError1 = document.getElementById("passwordError");

        if(passInput1.value == "") {
            passInput1.style.borderColor = "red";
            passwordError1.innerHTML = "please enter password";
        }else {
        passInput1.style.borderColor = "green";
        passwordError1.innerHTML = " ";
        }
    }

    function confirmValidation() {
         var  passInput1 = document.getElementById("passInput1");
         var confirminput = document.getElementById("passInput2");
         var confirmError = document.getElementById("confirmPasswordError");

         if(confirminput.value == "") {
            confirminput.style.borderColor = "red";
            confirmError.innerHTML = "Enter password match";

         }else if (passInput1.value != confirminput.value){
            confirminput.style.borderColor = "red";
            confirmError.innerHTML = " confirm password";
         }else {
            confirminput.style.borderColor = "green";
            confirmError.innerHTML = "";
         }
    }
