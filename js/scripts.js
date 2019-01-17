$(document).ready(function() {
  $("form#survey").submit(function(event) {
    event.preventDefault();
    var age = $("input:radio[name=age]:checked").val();
    if (age === "over18") {
      $("#survey").hide();
      $("#over18").show();
    } else {
      $("#survey").hide();
      $("#under18").show();
    }
	});
});
