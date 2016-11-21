// $(document).ready(function() {

// var line1 = $(".black-bishop")
// var line2 = $(".white-bishop").parent();
console.log($(".black-bishop"))

function dragstart_handler(ev) {
 console.log("dragStart");
 ev.dataTransfer.setData("text", ev.target.id);
 console.log(ev.target);
 var diags = $(ev.target).parent().attr("class").split(" ");
 var rightDiag = diags.pop();
 var leftDiag = diags.pop();
 var possibleMoves = $("." + rightDiag + ", ." + leftDiag)

 if (ev.target.id.includes("black")) {
    var opposingClass = "white-bishop";
    var sameSquares = $(".black-bishop").parent();
 } else {
    var opposingClass = "black-bishop";
    var sameSquares = $(".white-bishop").parent();
 }

 var opposingSquares = $("." + opposingClass).parent();
 var classes = $.map(opposingSquares, function(obj) { return obj.className });

 var finalClasses = [];

 for (var i =0; i < classes.length; i++) { 
    var x = classes[i].split(" "); 
    finalClasses.push(x.pop()); 
    finalClasses.push(x.pop()); 
    }

var classString = "." + finalClasses.join(", .")
var blockedCells = $(classString);

var finalMoves = $.grep( possibleMoves, function(cell) { return $.inArray(cell, blockedCells) < 0; });

$(finalMoves).addClass("target")
$(sameSquares).removeClass("target")
  // debugger;

 ev.effectAllowed = "move";
}

function dragover_handler(ev) {
 console.log("dragOver");
 ev.preventDefault();
}

function drop_handler(ev) {
  console.log("Drop");
  ev.preventDefault();
  var id = ev.dataTransfer.getData("text");
  var className = $(document.getElementById(id)).attr("class")
  if ( $(ev.target).attr("class").includes("target") )
    ev.target.appendChild(document.getElementById(id));
    $(".target").removeClass("target");
}

function dragend_handler(ev) {
  console.log("dragEnd");
  // Remove all of the drag data
  ev.dataTransfer.clearData();
}


// });

