const re =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const handleEmailValidation = () => {
  const inputValue = document.getElementById("emailInput");
  const inputText = inputValue.value;
  console.log(inputText);
  const validation = re.test(inputText);
  console.log(validation);
  if (validation) {
    document.getElementById("success").style.display = "block";
    document.getElementById("error").style.display = "none";
  } else {
    document.getElementById("error").style.display = "block";
    document.getElementById("success").style.display = "none";
  }
};
