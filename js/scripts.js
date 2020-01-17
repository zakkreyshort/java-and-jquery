$(document).ready(function () {
  $("input[type='button']").click(function () {
    
    var radioValue = $("input[name='language']:checked").val();
    var otherValue = $("input[name='starwars']:checked").val();
    if (radioValue === 'Python' || otherValue === 'darthvader') {
      $("#pythonpanel").show();
      $("#rustpannel").hide();
      $("#swiftpannel").hide();
    } else if (radioValue === 'Rust') {
      $("#rustpannel").show();
      $("#pythonpanel").hide();
      $("#swiftpannel").hide();
    } else {
      $("#swiftpannel").show();
      $("#rustpannel").hide();
      $("#pythonpanel").hide();
    }
    event.preventDefault();
    // event.preventDefault();
  });

  
});




// var favoriteColor = $("#color").val(); think this is proper form for value for color wheel, test.
