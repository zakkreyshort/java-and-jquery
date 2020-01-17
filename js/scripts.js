$(document).ready(function () {
  $("input[type='button']").click(function () {
    var radioValue = $("input[name='language']:checked").val();
    var otherValue = $("input[name='starwars']:checked").val();
    if (radioValue === "Python" ) {
      $("#pythonpanel").show();
      $("#rustpanel").hide();
      $("#swiftpanel").hide();
    } else if (radioValue === "Rust") {
      $("#rustpanel").show();
      $("#pythonpanel").hide();
      $("#swiftpanel").hide();
    } else {
      $("#swiftpanel").show();
      $("#rustpanel").hide();
      $("#pythonpanel").hide();
    }
    event.preventDefault();
  });
  
  
});




// var favoriteColor = $("#color").val(); think this is proper form for value for color wheel, test.
