$(document).ready(function(){

function dragstart_handler(ev) {
 console.log("dragStart");
 ev.dataTransfer.setData("text", ev.target.id);
 console.log(ev.target);
 var diags = $(ev.target).parent().attr("class").split(" ");
 var rightDiag = diags.pop();
 var leftDiag = diags.pop();
 // debugger;
 $("." + rightDiag).addClass("target");
 ev.effectAllowed = "move";
}
function dragover_handler(ev) {
 console.log("dragOver");
 // ev.currentTarget.style.background = "lightblue";
 ev.preventDefault();
}
function drop_handler(ev) {
  console.log("Drop");
  ev.preventDefault();
  var id = ev.dataTransfer.getData("text");
  var className = $(document.getElementById(id)).attr("class")
  // debugger;
  if ( $(ev.target).attr("class").includes("target") )
    ev.target.appendChild(document.getElementById(id));

}

function dragend_handler(ev) {
  console.log("dragEnd");
  // Remove all of the drag data
  ev.dataTransfer.clearData();
}

});







  // $(".cell").click( function(event) {
  //   // debugger;
  //   var selectClasses = $(this).attr("class").split(" ");
  //   var selectRightDiagonal = selectClasses.pop();
  //   var selectLeftDiagonal = selectClasses.pop();
  //   var selectRow = selectClasses.pop();
  //   var selectCol = selectClasses.pop();

  //   $("." + selectRightDiagonal).children(".queen").removeClass("active").fadeOut();
  //   $("." + selectLeftDiagonal).children(".queen").removeClass("active").fadeOut();
  //   $("." + selectRow).children(".queen").removeClass("active").fadeOut();
  //   $("." + selectCol).children(".queen").removeClass("active").fadeOut();

  //   $(this).children(".queen").addClass("active").fadeIn();

  //   if ( $(".active").length === 8 ) {
  //     $(".winner-message").show();
  //   } else {
  //     $(".winner-message").hide();
  //   }

  // })
