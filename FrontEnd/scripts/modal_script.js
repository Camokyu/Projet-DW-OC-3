document.addEventListener('DOMContentLoaded', function() {
var modalTrigger = document.getElementById('modal_trigger');
var modal = document.getElementById('modal');
var modalClose = document.getElementById('modal_close');

modalTrigger.addEventListener('click', function() {
  modal.style.display = 'block';
  console.log("Modale exécutée")
});

modalClose.addEventListener('click', function() {
  modal.style.display = 'none';
});
});

