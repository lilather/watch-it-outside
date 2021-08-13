"use strict";

var backToTop = function backToTop() {
  //click back to top
  console.log("ddd");
  var backToTopIcon = document.getElementById("backToTop");
  backToTopIcon.addEventListener("click", function (event) {
    event.preventDefault(), window.scroll({
      top: 0,
      behavior: "smooth"
    });
  }); // when scroll down back to top show

  window.addEventListener("scroll", function (event) {
    event = window.innerHeight / 2;
    window.scrollY > event ? backToTopIcon.classList.add("showBackToTop") : backToTopIcon.classList.remove("showBackToTop");
  });
};

var getModal = function getModal() {
  var registerModal = document.getElementById('registerModal');
  registerModal.addEventListener('show.bs.modal', function (event) {
    // Button that triggered the modal
    var button = event.relatedTarget; // Extract info from data-bs-* attributes

    var day = button.getAttribute('data-bs-day'); // If necessary, you could initiate an AJAX request here
    // and then do the updating in a callback.
    //
    // Update the modal's content.

    var modalTitle = registerModal.querySelector('.modal-title');
    var modalBodyInput = registerModal.querySelector('.modal-body input');
    modalTitle.textContent = 'Register for ' + day;
  });
};

backToTop();
getModal();