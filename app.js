 window.FontAwesomeConfig = {
  searchPseudoElements: true
}

$( document ).ready(function() {
  $('.container').html('test');

  $('.toggle, .fa-toggle').click(function() {
    $(this).toggleClass('collapsed');
  });
})

