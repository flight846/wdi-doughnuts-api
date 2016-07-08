console.clear()


function reload() {
  $.get('http://api.doughnuts.ga/doughnuts')
    .done(function(data){
      data.forEach( function(datum) {
        $('#main').append('<li>the best flavour is ' + datum.flavor + ' <button>DELETE</button></li>')
      })
      
    }).fail(function(jqXHR, textStatus, errorThrown){
      console.log(errorThrown)
    });
}

$('#refresh').click(function(){
  reload();
})

$("#myForm").on( "submit", function( event ) {
  event.preventDefault();
  var data = $( this ).serialize()
  console.log( data );
  
  $.ajax({
    type: "POST",
    url: 'http://api.doughnuts.ga/doughnuts',
    data: data
  }).done(function(response){
      $('#main').append('<li>the best flavour is ' + $('#myInputId').val() + '<button>DELETE</button></li>')
  }).fail(function(jqXHR, textStatus, errorThrown){
    console.log(errorThrown)
  });
  
});
