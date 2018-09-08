$(document).ready(function() {
    var bodyWidth = 900;

    var bodyHeight = 370;
    $('.random').each(function(idx, img) {
      var randPosX = Math.floor((Math.random() * bodyWidth));
      var randPosY = Math.floor((Math.random() * bodyHeight));
      console.log(randPosY);
      $(img).css('left', randPosX);
      $(img).css('top', randPosY);
  
    });
  });