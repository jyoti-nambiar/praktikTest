(function displayFunction() {

    const contactInfo = document.querySelector(".contact-info");

    const mailBtn = document.querySelector(".mail-btn");
    mailBtn.addEventListener("click", function () {
        contactInfo.classList.toggle("show-div");

    });
})();

