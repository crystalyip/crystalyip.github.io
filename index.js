$(document).ready(function() {
    var bodyWidth = 900;
    var bodyHeight = 370;
    $('.random').each(function(idx, img) {
      var randPosX = 0;
      var randPosY = 0;
      randPosX = Math.floor((Math.random() * bodyWidth));
      randPosY = Math.floor((Math.random() * bodyHeight));
      
      $(img).css('left', randPosX);
      $(img).css('top', randPosY);  


      $(img).fadeIn(2000);
    });
  });

  document.getElementById("res").addEventListener('click', function(){
    showFish("fish1");
  });
  document.getElementById("lin").addEventListener('click', function(){
    showFish("fish2");
  });
  document.getElementById("git").addEventListener('click', function(){
    showFish("fish3");
  });

  document.getElementById("sharky").addEventListener('click', function(){
    showFish("shark");
  });

  document.getElementById("fishies").addEventListener('click', function(){
    allFish();
  });
  function showFish(idName){
    
    $('.random').each(function(idx, img) {
      
      if ($(img).attr('id') != idName){
        $(img).fadeOut();
      } else {
        $(img).fadeIn();
        
      }
    });
    $('#talking').fadeIn(2000);
  }
  function allFish(){
    $('#talking').fadeOut(1000);
    $('.random').each(function(idx, img) {
      
      if ($(img).attr('id') == "fish2" || $(img).attr('id') == "fish3"){
        if (!$(img).is(':visible')){
          $(img).fadeIn();
          $(img).addClass('swimR');
        }
      } else {
          if (!$(img).is(':visible')){
            console.log("left");
            $(img).fadeIn();
            $(img).addClass('swimL');
          }
        }

      
      
    });
  }

  document.getElementById("fish2").addEventListener('click', function(){
    window.open('https://www.linkedin.com/in/crystal-y-321817149/');
  });

  document.getElementById("fish3").addEventListener('click', function(){
    window.open('https://github.com/fishnyips');
  });

  document.getElementById("shark").addEventListener('click', function(){
    window.open('https://open.spotify.com/track/5ygDXis42ncn6kYG14lEVG?si=eKAubQd-Qeueb8nx8rS25Q');
  });

  document.getElementById("fish1").addEventListener('click', function(){
    window.open('2018_19CrystalYipResume.pdf');
  });
  

