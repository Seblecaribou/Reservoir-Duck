$(document).ready(function() {

    $(".datepicker").datepicker({
      prevText: '<i class="fa fa-fw fa-angle-left"></i>',
      nextText: '<i class="fa fa-fw fa-angle-right"></i>'
    });
  });
  
// function showModal() {
//   modalDeplacement.style.display = flex;
// }

// function closeModal() {
//   closeBtn.styleMedia.display = none;
// }

// Get the modal - We need another selector than id, else this line needs repeating for every container
let modal = document.getElementById("modalDeplacement");

// Get the button that opens the modal
let btn = document.getElementById("btnDeplacement");

// Get the <span> element that closes the modal
let closeBtn = document.getElementById("closeBtn");

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "flex";
};

// When the user clicks on <span> (x), close the modal
closeBtn.onclick = function() {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modalDeplacement.style.display = "none";
  }
};

//