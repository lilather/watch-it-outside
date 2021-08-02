"use strict";

function backToTop() {
  //click back to top
  var backToTop = document.getElementById("backToTop");
  backToTop.addEventListener("click", function (e) {
    e.preventDefault(), window.scroll({
      top: 0,
      behavior: "smooth"
    });
  }); // when scroll down back to top show

  window.addEventListener("scroll", function () {
    var e = window.innerHeight / 2;
    console.log(window.scrollY);
    console.log(window.scrollY);

    if (this.window.scrollY > e) {
      console.log(backToTop);
    }

    window.scrollY > e ? backToTop.classList.add("showBackToTop") : backToTop.classList.remove("showBackToTop");
  });
}

function getModal() {
  var registerModal = document.getElementById('registerModal');
  registerModal.addEventListener('show.bs.modal', function (event) {
    // Button that triggered the modal
    var button = event.relatedTarget; // Extract info from data-bs-* attributes

    var day = button.getAttribute('data-bs-whatever'); // If necessary, you could initiate an AJAX request here
    // and then do the updating in a callback.
    //
    // Update the modal's content.

    var modalTitle = registerModal.querySelector('.modal-title');
    var modalBodyInput = registerModal.querySelector('.modal-body input');
    modalTitle.textContent = 'Register for ' + day;
    modalBodyInput.value = recipient;
  });
}

backToTop();
getModal();