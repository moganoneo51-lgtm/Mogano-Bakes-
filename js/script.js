document.addEventListener("DOMContentLoaded", function () {
    console.log("Welcome to Mogano Bakes!");

    // Enquiry form validation
    const enquiryForm = document.getElementById("enquiryForm");

    if (enquiryForm) {
        enquiryForm.addEventListener("submit", function (event) {
            event.preventDefault();

            if (!enquiryForm.checkValidity()) {
                enquiryForm.reportValidity();
                return;
            }

            alert("Thank you for your enquiry! Mogano Bakes will get back to you soon.");

            enquiryForm.reset();
        });
    }

    // FAQ accordion functionality
    const faqQuestions = document.querySelectorAll(".faq-question");

    faqQuestions.forEach(function (question) {
        question.addEventListener("click", function () {
            const answer = question.nextElementSibling;
            const isOpen = answer.classList.contains("show");

            answer.classList.toggle("show");
            question.setAttribute("aria-expanded", !isOpen);
        });
    });
    // Services search functionality
    const searchInput = document.getElementById("searchInput");
    const searchMessage = document.getElementById("searchMessage");

    if (searchInput && searchMessage) {
        searchInput.addEventListener("input", function () {
            const searchTerm = searchInput.value.trim().toLowerCase();
            const serviceSections = document.querySelectorAll("main section:not(#serviceSearch):not(#faq)");
            let matches = 0;

            serviceSections.forEach(function (section) {
                const matchesSearch = section.textContent.toLowerCase().includes(searchTerm);
                section.style.display = matchesSearch ? "" : "none";

                if (matchesSearch) {
                    matches++;
                }
            });

            if (searchTerm === "") {
                searchMessage.textContent = "";
                serviceSections.forEach(function (section) {
                    section.style.display = "";
                });
            } else if (matches > 0) {
                searchMessage.textContent = matches + " matching section(s) found.";
            } else {
                searchMessage.textContent = "No matching services found. Try another keyword.";
            }
        });
    }
    // Contact form email functionality
    const contactForm = document.getElementById("contactForm");

    if (contactForm) {
        contactForm.addEventListener("submit", function (event) {
            event.preventDefault();

            if (!contactForm.checkValidity()) {
                contactForm.reportValidity();
                return;
            }

            const email = document.getElementById("contact-email").value;
            const messageType = document.getElementById("message-type").value;
            const message = document.getElementById("contact-message").value;

            const subject = encodeURIComponent("Mogano Bakes - " + messageType);
            const body = encodeURIComponent(
                "Customer email: " + email + "\n\nMessage:\n" + message
            );

            window.location.href =
                "mailto:Moganoneo51@gmail.com?subject=" + subject + "&body=" + body;
        });
    }
});
// Cake image lightbox functionality
function openLightbox(imageSource) {
    const lightbox = document.getElementById("cakeLightbox");
    const lightboxImage = lightbox.querySelector("img");

    lightboxImage.src = imageSource;
    lightbox.style.display = "flex";
}

function closeLightbox() {
    document.getElementById("cakeLightbox").style.display = "none";
}
const cakeLightbox = document.getElementById("cakeLightbox");

cakeLightbox.addEventListener("click", function (event) {
    if (event.target === cakeLightbox) {
        closeLightbox();
    }
});

document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
        closeLightbox();
    }
});