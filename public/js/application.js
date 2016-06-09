$(document).ready(function() {
  var words = ["Hello", "Bacon", "Parallax", "C'thulu", "Ragnaros"]
  $('button').on('click', function(){
    var rand = words[Math.floor(Math.random()*words.length)]
    console.log(rand);
    $('.msg_display').find('#list').append('<li>' + rand + '</li>');
  });
});

