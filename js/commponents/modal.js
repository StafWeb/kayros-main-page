var body = document.body;
var stop1 = document.documentElement;
function loginModal() {
  let loginModal = document.querySelector(".login-modal"),
    loginContainer = document.querySelector(".login-modal__container"),
    loginBtn = document.querySelector(".header__user > a"),
    loginModalClose = document.querySelectorAll(".login-modal__close"),
    loginClose = (modal) => { modal.classList.remove("card-modal_active"); body.classList.remove('stop-scroll'); stop1.classList.remove('stop-scroll'); },
    loginOpen = (modal) => { modal.classList.add("card-modal_active"); body.classList.add('stop-scroll'); stop1.classList.add('stop-scroll'); };
  loginBtn.addEventListener('click', () => { loginOpen(loginModal); });
  loginContainer.addEventListener('click', (evt) => { evt.stopPropagation(); });
  loginModal.addEventListener('click', () => { loginClose(loginModal); });
  loginModalClose.forEach(el => { el.addEventListener('click', () => { loginClose(loginModal); }) });
};

export { loginModal };