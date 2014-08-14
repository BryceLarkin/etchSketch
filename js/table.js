$(document).ready(function() {
	fillTable(boxSize);
	pointHover();
    document.getElementById("custom1").onclick = function() {custom1()};
});

var boxSize = 16;

function custom1() {
    var boxSize = prompt("Please enter grid size");

}

function pointHover() {
$(".square").mouseenter(
    function() {
        $(this).css("background-color","#4D94DB");
    });
}


function fillTable(boxSize) {
    for(var i = 0; i < boxSize; i++) { 
        $("tbody").append("<tr></tr>"); //append tr to tbody
    }
    for(var i = 0; i < boxSize; i++) {
	$("tr").append("<td><div class=\"square\"></div></td>"); //append col to tr
    }
}
