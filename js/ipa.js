
$( document ).on( "pagecreate", function() {
      $("#phoneme").hide();
      $("#point").chained("#type");
      $("#manner").chained("#type");
      $("#voicing").chained("#type");
    });


$( "#form" ).submit(function( event ) {
  $("#phoneme").show();
      
  });

$.ajax({
    url: "js/alphabet.json",
    contentType: "application/json; charset=utf-8",
    dataType: "json"
  });

