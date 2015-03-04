
$(document).ready(function() {

//Primera funcionalidad
$.ajax({
	url: "http://localhost:8000/Code/jQuery/text.txt"
}).done(function( html ) {
	$( "#text" ).append( html );
	});
//segunda funcionalidad
$("#botton").click(function(){
	$.ajax({
	url: "http://localhost:8000/Code/jQuery/text2.txt"
})
	.done(function( html ) {
	$( "#text" ).append( html );
	});
});
});
