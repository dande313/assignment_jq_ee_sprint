$(document).ready(function(){

  $("img").wrap('<div id="wrapper"></div>');

	$("#wrapper").css({width: $("img").outerWidth(), height: $("img").outerHeight()});

var style = $('<style>' +
'.target{'+
'opacity: 0.5;'+
'border: 3px dotted lime;'+
'width: 50px;'+
'height: 50px;'+
'position: absolute;},'+

'#wrapper{position: relative},'+

'#name-select{'+
'opacity: 0.4;'+
'border: 2px solid #87CEFA;'+
'font-size: 10px;'+
'width: 50px;'+
'height: 50px;}'+
'</style>');

$('html > head').append(style);


function targetAppear(){
  if (tag.targetVisible==false && tag.boxEdit==false && tag.nameSelected==false){
    $("#wrapper").append($(
    '<div class=target></div>'));
    tag.targetVisible=true
  }
}

function targetDisppear(){
    $(".target").fadeOut( "slow" );
    $(".target").remove();
    tag.targetVisible=false;
}

$("#wrapper").on('mouseenter',targetAppear);

$("#wrapper").on('mouseleave',targetDisppear);

$("#wrapper").mousemove(function(e){
  if(tag.nameSelected){
    tag.nameSelected=false
  }
  if (tag.boxEdit==false){
    targetAppear();
    $('.target').css({
     left:  e.pageX - 25,
     top:   e.pageY -25
   });
 }else{
  targetDisppear();
 }
});

var tag= {
  number: 0,
  boxEdit: false,
  targetVisible: false,
  nameSelected: false
}

$("#wrapper").click(function(e){
  targetDisppear();
  if (tag.boxEdit && tag.nameSelected==false){
    tag.number-= 1;
    $("." + tag.number+"tag").remove();
    tag.boxEdit=false;

  }else if (tag.boxEdit==false && tag.nameSelected==false){
  tag.boxEdit=true;
  $("#wrapper").append($('<div></div>').addClass( tag.number + "tag" ));
  var position = {
    left: e.clientX -25,
    top: e.clientY -25
  };
  $("." + tag.number+"tag").css({"position":"absolute",
  "border": "2px solid #87CEFA",
  "width": "50px",
  "height": "50px",
  "top":position.top,
  "left":position.left,
  });
  $("." + tag.number+"tag").after($(
    '<div id=name-select style="font-size:10px;">'+
      '<table>'+
        '<tr><td>Steve</td></tr>'+
        '<tr><td>Bertha</td></tr>'+
        '<tr><td>Voldamort</td></tr>'+
        '<tr><td>Susan</td></tr>'+
        '<tr><td>Jon</td></tr>'+
      '</table>'+
    '</div>'
  ));
  $("#name-select").css({"position":"absolute",
  "border": "2px solid #87CEFA",
  "background": "white",
  "width": "50px",
  "height": "auto",
  "top": (position.top + 50),
  "left": position.left,
  });
}
  });

  $("#wrapper").on("click","#name-select td",makeSelection);

  function makeSelection(){
    var selection = $( this ).text();
    $("." + tag.number+"tag").append($('<div style="color:white;font-size:10px;background-color:#6495ED;position:absolute;bottom:0;width:100%;">'+
    selection+
    '</div>'));
    $("." + tag.number+"tag").css({"height": "60px",
    "border":"2px solid #6495ED"
    });

    $("#name-select").remove();
    targetDisppear();
    tag.nameSelected= true;
    tag.boxEdit= false;
    tag.number+= 1;
  };


});
