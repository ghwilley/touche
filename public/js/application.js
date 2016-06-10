$(document).ready(function() {

$.get('helloworld.txt', function(data) {
   var tweetArray = data.split("\n");
    // console.log(tweetArray);





  // var words = ["Hello", "Bacon", "Parallax", "C'thulu", "Ragnaros"]
  $('button').on('click', function(){
    var rand = tweetArray[Math.floor(Math.random()*tweetArray.length)]
    var html = '<h1>' + rand + '</h1>'
    // $('.centered').append('<h1 class="hidden">' + rand + '</h1>');
  $(html).hide().appendTo(".centered").fadeIn(3000).fadeOut(3000)
  // delay(5000);
  // window.setTimeout(function(){
 //      $(html).remove();
 //                  }, 600);

  });
  });
});

