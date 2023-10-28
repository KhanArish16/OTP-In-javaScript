const otpInputs = document.querySelectorAll("input");

for (let i = 0; i < otpInputs.length; i++) {
  //   console.log(otpInputs[i]);

  otpInputs[i].addEventListener("keyup", (e) => {
    otpInputs[i].nextElementSibling.focus();
  });

  otpInputs[i].addEventListener("keyup", (e) => {
    if (e.key === "Backspace" && otpInputs[i].value == "" && i > 0) {
      console.log(i);
      otpInputs[i].previousElementSibling.focus();
    }
  });
}
