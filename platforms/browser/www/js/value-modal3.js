var modal = document.querySelector(".modal3");
var trigger = document.querySelector(".trigger3");
var closeButton = document.querySelector(".close-button3");

function toggleModal() {
    modal.classList.toggle("show-modal3");
}

function windowOnClick(event) {
    if (event.target === modal) {
        toggleModal();
    }
}

trigger.addEventListener("click", toggleModal);
closeButton.addEventListener("click", toggleModal);
window.addEventListener("click", windowOnClick);