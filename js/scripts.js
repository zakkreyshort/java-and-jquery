$(document).ready(function(){
  $("input[type='button']").click(function(){
      var radioValue = $("input[name='language']:checked").val();
      var otherValue = $("input[name='starwars']:checked").val();
      if (radioValue === 'Python'){
        $("#listpython").show(); 
      } else if (radioValue === 'Rust'){
        $("#listrust").show();
      } else {
        $("#listswift").show();
      }
  });
});


// var favoriteColor = $("#color").val(); think this is proper form for value for color wheel, test.
