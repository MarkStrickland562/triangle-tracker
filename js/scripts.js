$(document).ready(function() {
  $("form#dimensions").submit(function(event) {
    event.preventDefault();
    var response = "isoceles";
    var side1 = parseFloat($("#side1").val());
    var side2 = parseFloat($("#side2").val());
    var side3 = parseFloat($("#side3").val());
    //debugger;
    if ( isNaN(side1) || isNaN(side2) ||  isNaN(side3) ) {
      response = "One or more values are not numbers, please enter a number!";
    } else if (side1 + side2 <= side3 || side2 + side3 <= side1 || side1 + side3 <= side2) {
      response = "not a triangle";
    } else if (side1 != side2 && side2 != side3 && side1 != side3) {
      response = "scalene";
    } else if (side1 === side2 && side2 === side3 && side3 === side1) {
      response = "equilateral";
    }
    $("#output").empty().append(response);
	});
});
