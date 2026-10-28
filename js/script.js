// Mogano Bakes website JavaScript

document.addEventListener("DOMContentLoaded", function () {
    console.log("Welcome to Mogano Bakes!");

    const enquiryForm = document.getElementById("enquiryForm");

    if (enquiryForm) {
        enquiryForm.addEventListener("submit", function (event) {
            event.preventDefault();

            alert("Thank you for your enquiry! Mogano Bakes will get back to you soon.");

            enquiryForm.reset();
        });
    }
});