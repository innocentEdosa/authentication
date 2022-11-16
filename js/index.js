function togglePasswordType(eventObj) {

    console.log(eventObj.target)
    
  const buttonTarget = eventObj.target.parentNode;

  const type = buttonTarget.previousElementSibling.getAttribute("type");

  if (type === "password") {
    buttonTarget.previousElementSibling.setAttribute("type", "text");
    buttonTarget.setAttribute("data-passwordlock", "isUnLocked")
    return;
  }
  buttonTarget.previousElementSibling.setAttribute("type", "password");
  buttonTarget.setAttribute("data-passwordlock", "isLocked")

}

const passwordBtns = document.querySelectorAll(".password_btn");
passwordBtns.forEach((btn) =>
  btn.addEventListener("click", togglePasswordType)
);
