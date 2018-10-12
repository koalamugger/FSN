var modal = document.querySelector(".modal4");
var trigger = document.querySelector(".trigger4");
var closeButton = document.querySelector(".close-button4");

function toggleModal() {
    modal.classList.toggle("show-modal4");
}

function windowOnClick(event) {
    if (event.target === modal) {
        toggleModal();
    }
}

trigger.addEventListener("click", toggleModal);
closeButton.addEventListener("click", toggleModal);
window.addEventListener("click", windowOnClick);