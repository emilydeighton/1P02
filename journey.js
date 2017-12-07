var start = new Date ();
var starttim = start.getTime();

function stopTime(){
  var end = new Date ();
  var endtim = end.getTime ();

  var difftim = endtim - starttim;

  var diffsec = difftim/1000;

  alert ("You have been on the page for: " + diffsec)
}
