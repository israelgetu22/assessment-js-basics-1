let welcome = alert("Welcome the user to the password validator tool");
console.log(welcome);
let input = prompt(" validate password  ");

function CheckPassword(input) {
  var passw = /^[A-Za-z]\w{0,10}$/;
  if (input.value.match(passw)) {
    alert("Correct");
    return true;
  } else {
    alert("Wrong");
    return false;
  }
}
