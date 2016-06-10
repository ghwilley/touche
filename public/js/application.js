$(document).ready(function() {
  var words = ["Hello", "Bacon", "Parallax", "C'thulu", "Ragnaros"]
  $('button').on('click', function(){
    var rand = words[Math.floor(Math.random()*words.length)]
    var html = '<h1>' + rand + '</h1>'
    // $('.centered').append('<h1 class="hidden">' + rand + '</h1>');
	$(html).hide().appendTo(".centered").fadeIn(3000).fadeOut(3000)
	// delay(5000);
	// window.setTimeout(function(){
 //      $(html).remove();
 //                  }, 600);

  });
});

