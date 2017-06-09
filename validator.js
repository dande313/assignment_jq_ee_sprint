$(document).ready(function(){
  //Char remaining for textField
  var passwordMatch=true

  $("#textField").keyup(textFieldCountUpdate);

  function textFieldCountUpdate(){
    var textCharRemaining= 32 - $("#textField").val().length;
    if (textCharRemaining== 32){
      $("#textCharRemaining").text("");
    }else{
    $("#textCharRemaining").text(" " + textCharRemaining + " chars remaining" );
    };
  }

  //Char remaining for textArea
  $("#textArea").keyup(textAreaCountUpdate);

  function textAreaCountUpdate(){
    var textCharRemaining= 120 - $("#textArea").val().length;
    if (textCharRemaining== 120){
      $("#textAreaCharRemaining").text("");
    }else{
    $("#textAreaCharRemaining").text(" " + textCharRemaining + " chars remaining" );
    };
  }

  //Char remaining for password
  $("#password").keyup(passwordCountUpdate);

  function passwordCountUpdate(){
    var passwordCharRemaining= 16 - $("#password").val().length;
    if (passwordCharRemaining== 16){
      $("#passwordCharRemaining").text("");
    }else{
    $("#passwordCharRemaining").text(" " + passwordCharRemaining + " chars remaining" );
    };
  }


  //Char remaining for password conf.
  function passwordConfCountUpdate(){
    var passwordCharRemaining= 16 - $("#passwordConf").val().length;
    if (passwordCharRemaining== 16){
      $("#passwordConfCharRemaining").text("");
    }else{
    $("#passwordConfCharRemaining").text(" " + passwordCharRemaining + " chars remaining" );
    };
  }

  //Function to check if passwords match
  function passwordMatchCheck(){
    if ($("#passwordConf").val().length== 0){
      $("#passwordMatch").text("");
    }else if($("#passwordConf").val() === $("#password").val()){
      $("#passwordMatch").text("Passwords match");
      passwordMatch=false
    }else{
      $("#passwordMatch").text("Passwords do not match");
      passwordMatch=true;
    }
  }

  //Execute both password conf functions
  $("#passwordConf").keyup(function(){
    passwordConfCountUpdate();
    passwordMatchCheck();
  });

  //button
$("#submit").click(function(event){
  event.preventDefault();
  $("#warning").remove();
  properLength($("#textField"), 4, 32);
  properLength($("#textArea"), 4, 120);
  properLength($("#password"), 4, 120);
  passwordFlag();
});
  // function to determine if input is proper length.
  function properLength(input, min, max){
    if (input.val().length >= min && input.val().length <= max){
      //if so, the red flag (if any) is removed, and warning is removed
      console.log(input.val() + " true");
      input.css({
        'background-color': 'transparent'
      });
    }else{
      //if not, it is flagged in red, and an error message is shown
      console.log(input.val() + " false");
      input.after("<div id=warning>Must be between " + min +" and " + max + " characters.</div>");
      input.css({
        'background-color': 'red'
      });
    }
  }

  function passwordFlag(){
    $("#passwordConf").css({
      'background-color': 'transparent'
      });
    if (passwordMatch){
      $("#passwordConf").css({
        'background-color': 'red'
      });
    }
  }

});
