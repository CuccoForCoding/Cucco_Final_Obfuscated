// document.addEventListener("DOMContentLoaded", function() {
//     var form = document.querySelector("#form form");

//     form.addEventListener("submit", function(event) {
//         event.preventDefault();

//         var fullName = document.getElementById("full-name").value;
//         var email = document.getElementById("email").value;
//         var phone = document.getElementById("phone").value;
//         var contactMethod = document.querySelector('input[name="contact-method"]:checked').value;
//         var comments = document.getElementById("comments").value;

//         var mailtoLink = "mailto:asuexample_KING_SALMON_@example.com" +
//             "?subject=Form Submission" +
//             "&body=Full Name: " + encodeURIComponent(fullName) +
//             "%0AEmail Address: " + encodeURIComponent(email) +
//             "%0APhone Number: " + encodeURIComponent(phone) +
//             "%0APreferred Contact Method: " + encodeURIComponent(contactMethod) +
//             "%0AComments: " + encodeURIComponent(comments);

//         window.location.href = mailtoLink;
//     });
// });