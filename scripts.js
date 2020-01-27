$(document).ready(function(){
  $("input[type='button']").click(function(){
    var radioValue = $("input[name='language']:checked").val();
    
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
  });  
});

