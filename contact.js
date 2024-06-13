
const emailInput = document.querySSelector("input[name='email");
const messageInput = document.querySelector("textarea['name=message']");

emailInput.isValid = () => isValidEmail(emailInput.value);
messageInput.isValid = () => !!messageInput.value;

const inputFields = [emailInput];


const isValidEmail = (email) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

  let shouldValidate =false;
  let isFormValid =false;


const validateInputs =()=> {
console.log("we're here");
if (!shouldValidate) return;

isFormValid =true;
inputFields.forEach((input)=>{
    input.classList.remove("invalid");
    input.nextElementSibling.classList.add("hide");


    if(!Input.isValue()){
    input.classList.add("invalid");
    input.nextElementSibling.classList.remove("hidden");}
    
});
};

form.addEventListener('Submit', (e) => {
e.preventDefault();
shouldValidate = true;
validateInputs();
if(isFormValid) {
}
});

inputFields.forEach((input) => input.addEventListener("input", validateInputs));

