$(document).ready(function() {
	var winH = $(document).height();
	$('.overlay').css({'height':winH});
	bannerH();
	setInputFieldFunctions();
	showProducts();
	closeOverlay();
	customSlideshow();
	selectCat();


});

$(window).resize(function() {
	bannerH();
	var winH = $(document).height();
	$('.overlay').css({'height':winH});
});


function setInputFieldFunctions(){
	$('input, textarea').each(function(){
	    var $this = $(this);
	    $this.data('placeholder', $this.attr('placeholder'))
	         .focus(function(){$this.removeAttr('placeholder');})
	         .blur(function(){$this.attr('placeholder', $this.data('placeholder'));});
	});
}

function centerItem(item,iWidth,iHeight){  
   windowWidth = $(window).width();
   windowHeight = $(window).height();
   var w = windowWidth - iWidth; 
   var h = windowHeight - iHeight;
   $(item).css({
       'left': w/2,
       'top':h/2
   });   
}

function bannerH() {
	var imgH = $('#banner img').height();
	var newH = imgH - 628;
	$('#banner').css({'height': imgH});
	$('#banner .page-title').css({'margin-top': newH});
}

function showProducts() {
	$('#shop-cont .product').click(function() {
		var id = $(this).attr('id');
		$('.product-overlay').each(function() {
			if ($(this).hasClass(id)) {
				$(this).fadeIn();
				$('.overlay').fadeIn();
			} 
		})
	});

}

function selectCat() {
	$('#cat-cont .cat-item').each(function() {
		var id = $(this).attr('id');
		$(this).click(function() {
			$('#products-cont .product').each(function() {
				if ($(this).hasClass(id)) {
					$(this).fadeIn();
				} else {
					$(this).hide();
				}
			});
		});
	});
	$('#view-all').click(function() {
		$('#products-cont .product').each(function() {
			$(this).fadeIn();
		});
	});
}

function closeOverlay() {
	$('.product-overlay').fadeOut();
	$('.overlay').fadeOut();
}

function customSlideshow() {
		//rotation speed and timer
		var speed = 4000;
		var run = setInterval('rotate()', speed);	
		//grab the width and calculate left value	
		var item_width = $('#slides img').outerWidth(); 		
		var left_value = item_width * (-1); 		 
		
	    //move the last item before first item, just in case user click prev button
		$('#slides img:first').before($('#slides img:last'));
		//set the default item to the correct position 
		$('#slides .slides-cont').css({'left' : left_value});

		//if user clicked on prev button
		$('#prev').click(function() {
			//get the right position            
			var left_indent = parseInt($('#slides .slides-cont').css('left')) + item_width;
			//slide the item            
			$('#slides .slides-cont').animate({'left' : left_indent}, 1500, 'easeInOutSine', function () {    
	            //move the last item and put it as first item            	
				$('#slides img:first').before($('#slides img:last'));           
				//set the default item to correct position
				$('#slides .slides-cont').css({'left' : left_value});
			});
			//cancel the link behavior            
			return false;
		});
	    

	    //if user clicked on next button
		$('#next').click(function() {
			//get the right position
			var left_indent = parseInt($('#slides .slides-cont').css('left')) - item_width;
			//slide the item
			$('#slides .slides-cont').animate({'left' : left_indent}, 1500, 'easeInOutSine', function () {
	            //move the first item and put it as last item
				$('#slides img:last').after($('#slides img:first'));                 	
				//set the default item to correct position
				$('#slides .slides-cont').css({'left' : left_value});
			});
			//cancel the link behavior
			return false;
		});        

		//if mouse hover, pause the auto rotation, otherwise rotate it
		$('#slides').hover(

			function() {
				clearInterval(run);
			}, 
			function() {
				run = setInterval('rotate()', speed);	
			}
		); 

}
	//a simple function to click next link
	//a timer will call this function, and the rotation will begin :)  
function rotate() {
	$('#next').click();
}
