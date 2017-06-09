$(document).ready(function(){

  //Defining object "arrow"
  var arrow = {
    //var to determine if menu is already down
    menuDropped: false,

    menuToggle: function(){
      if (arrow.menuDropped){
        //delete drop down rows, if they are aldready down
        $('#menu tr:not(:first)').remove();
        arrow.menuDropped= false;
      }else{
        //if not down, drop it
        arrow.menuDropped= true;
        $("#menuHeader").after(
          '<tr><td colspan="2">&nbsp;</td></tr>'+
          '<tr><td colspan="2">Apples</td></tr>'+
          '<tr><td colspan="2">Oranges</td></tr>'+
          '<tr><td colspan="2">Kiwis</td></tr>'
        );
      };
    },
  }

  //defining "menu"
  var menu = {
    //function for when menu item is selected
    select: function(){
      var selection = $( this ).text();
      $("#input").text(selection);
      $('#menu tr:not(:first)').remove();
      arrow.menuDropped= false;
    },
  };


  //When the "arrow" is clicked...
  $("#arrow").click(arrow.menuToggle);

  //When an item on the menu is selected...
  $("#menu").on("click","td",menu.select);

  //When the "submit" button is clicked..
  $("#submit").click(function(){
    var submittedValue = $("#input").text();
    alert(submittedValue);
  }

  );
});
