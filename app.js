let keywords = ["Ember", "Ruby", "Rails", "Elixir", "React", "JavaScript"];

var $input = document.querySelector("input");
var $signin = document.getElementById('signin');
var $modal = document.getElementById('modal');
var $yesButton = document.getElementById('yes');
var $noButton = document.getElementById('no');

$input.addEventListener("keydown", function(event) {
  var inputValue = event.target.value;
  for (var i = 0; i < keywords.length; i++) {
    if (inputValue.includes(keywords[i])) {
      $signin.classList.toggle('hide');
      $modal.classList.toggle('hide');
    }
  };
});

$yesButton.addEventListener("click", function() {
  window.location.href = 'challenge.html'
});

$noButton.addEventListener("click", function() {
  $signin.classList.toggle('hide');
  $modal.classList.toggle('hide');
});

