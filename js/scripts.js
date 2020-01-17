$(document).ready(function () {
  $("input[type='button']").click(function () {
    var radioValue = $("input[name='language']:checked").val();
    var otherValue = $("input[name='starwars']:checked").val();
    if (radioValue === 'Python' && otherValue === 'darthvader') {
      $("#listpython").show();
      $("#listrust").hide();
      $("#listswift").hide();
    } else if (radioValue === 'Rust' && otherValue != 'chewy' ) {
      $("#listrust").show();
      $("#listpython").hide();
      $("#listswift").hide();
    } else {
      $("#listswift").show();
      $("#listrust").hide();
      $("#listpython").hide();
    }
  });
});


// var favoriteColor = $("#color").val(); think this is proper form for value for color wheel, test.
