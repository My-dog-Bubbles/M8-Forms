const body = document.body



// Regular expression pattern for alphanumeric input
const alphaNum = /^[a-zA-Z0-9]+$/; 

// Prevent form from submitting (event listener)
const submit = document.getElementById('submit')

submit.addEventListener('click',alNumChecker);

console.log(submit)

function alNumChecker(){
  // Retrieve the input field value
  let input = document.getElementById("inputField")
  
  // JavaScript code for form validation
  // Check if the input value matches the pattern
  if (alphaNum.test(input.value)){
    // Valid input: display confirmation and submit the form
    input.setCustomValidity('this input is alphanumerical');
  } else {
    // Invalid input: display error message
    input.setCustomValidity('This input is not alphanumerical');
  }
}



