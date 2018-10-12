var modal = document.querySelector(".modal2");
var trigger = document.querySelector(".trigger2");
var closeButton = document.querySelector(".close-button2");

function toggleModal() {
    modal.classList.toggle("show-modal2");
}

function windowOnClick(event) {
    if (event.target === modal) {
        toggleModal();
    }
}

trigger.addEventListener("click", toggleModal);
closeButton.addEventListener("click", toggleModal);
window.addEventListener("click", windowOnClick);