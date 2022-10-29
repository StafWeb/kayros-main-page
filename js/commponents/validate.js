function mailValid() {
  let
    field = document.querySelector(".mailfield"),
    fieldValue = field.value,
    mailVal = '',
    wrapper = field.parentNode.parentNode,
    reg = /(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@[*[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+]*/;
  if (!reg.test(fieldValue)) {
    mailVal = 'false';
    wrapper.classList.add("required_active");
  } else {
    mailVal = 'true';
    wrapper.classList.remove("required_active");
  }
  return mailVal;
};
function passValid() {
  let
    field = document.querySelector(".passfield"),
    fieldValue = field.value.length,
    passVal = '',
    wrapper = field.parentNode.parentNode;
  if (fieldValue < 6) {
    passVal = 'false';
    wrapper.classList.add("required_active");
  } else {
    passVal = 'true';
    wrapper.classList.remove("required_active");
  }
  return passVal;
};
export { mailValid, passValid };