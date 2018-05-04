
// Business Logic.
function mypingfunction(myresult){
  var pparray = [];

  for (var i = 1; i <= myresult; i++) {
    if ((i%3) == 0) {
      pparray.push("ping");
    }else if ((i%5) == 0 ){
      pparray.push("pong");
    }else if ((i%15) == 0) {
      pparray.push("pingpong");
    }else {
      pparray.push(i);
    }
  }
return pparray;
}





// User Interface.
$(document).ready(function(){
  $("form#pingform").submit(function(event){
    $("#Results").empty();
    var myresult = parseInt($("input#anumeral").val());
     var pparray = mypingfunction(myresult);
     pparray.forEach(function(myoutput){
       $("#Results").append(myoutput + "</br>");
       event.preventDefault();
     });
  });
});
