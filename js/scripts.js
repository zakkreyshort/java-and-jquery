$(document).ready(function(){
  $("input[type='button']").click(function(){
      var radioValue = $("input[name='language']:checked").val();
      if (radioValue === 'Python'){
        $("#listpython").show(); 
      } else if (radioValue === 'Rust'){
        $("#listrust").show();
      } else {
        $("#listswift").show();
      }
  });
});

