  $(function(){
    var dragItem = '<div id="left" style="width: 200px; height: 20px; background: black;">';
    dragItem += '<div style="width: 20px; height: 20px; background: red;"></div>';
    dragItem += '</div>';
  	var fadeDelay = 1000;
  	var fadeDuration = 1000;
    $(document).click(function(e){
       $('<div class="image-wrapper">')
  			.css({
  				"left": e.pageX,
  				"top": e.pageY,
          "background": 'blue'
  			})
  			.append($('<div>hello </div>'))
  			.prependTo('.james-container');
    });
  });





  $(function(){
    var dragItem = '<div style="width: 20px; height: 20px; background: red;"></div>';
  	var fadeDelay = 1000;
  	var fadeDuration = 1000;
    $(document).click(function(e){
       $('<div class="image-wrapper">')
  			.css({
  				"left": e.pageX,
  				"top": e.pageY,
          "background": 'blue'
  			})
  			.append($(dragItem))
  			.prependTo('.james-container');
    });
  });
