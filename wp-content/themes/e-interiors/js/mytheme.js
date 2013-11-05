var isMobile = {
    Android: function() {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function() {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function() {
        return navigator.userAgent.match(/iPhone|iPod|iPad/i);
    },
    Opera: function() {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function() {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function() {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
};

$(document).ready(function() {
	if(!isMobile) {
		loadAfterImagesLoaded();
	} else {
		$('#header, #footer, .container, #sidebar').fadeIn('slow');
	}
	var winH = $(document).height();
	$('.overlay').css({'height':winH});
	bannerH();
	setInputFieldFunctions();
	showProducts();
	centerShopOverlay();
	closeOverlay();
	//customSlideshow();
	selectCat();
	//lightboxFix();
	//centerItem('.product-overlay', 1000, 500);
	$('#slides .slides-cont').bxSlider({
	    slideWidth: 800,
	    minSlides: 2,
	    maxSlides: 7,
	    moveSlides: 1,
	    slideMargin: 10,
		speed:1000
	  });
	centerButton('#carousel .bx-controls', 95);
	$('#carousel .bx-wrapper .bx-prev').after('<div id="play" class="control"></div>');
	$('#carousel .bx-wrapper .bx-prev').after('<div id="pause" class="control"></div>');
	var speed = 3000;
	run = setInterval('rotate()', speed);
	sliderControls();

});

$(window).resize(function() {
	bannerH();
	var winH = $(document).height();
	$('.overlay').css({'height':winH});
	//centerItem('.product-overlay', 1000, 500);
	centerButton('#carousel .bx-controls', 95);
	centerShopOverlay();
});

$(window).load(function() {
	loadAfterImagesLoaded();
	var winH = $(document).height();
	$('.overlay').css({'height':winH});
	bannerH();
});

function rotate() {
	$('.bx-next').click();
}

function setInputFieldFunctions(){
	$('input, textarea').each(function(){
	    var $this = $(this);
	    $this.data('placeholder', $this.attr('placeholder'))
	         .focus(function(){$this.removeAttr('placeholder');})
	         .blur(function(){$this.attr('placeholder', $this.data('placeholder'));});
	});
}

function lightboxFix() {
	var imgH = $('#lightboxImage').height();
	var winH = $(window).height();
	if(imgH > winH) {
		$('#lightbox').css({'top': 100 + 'px'});
	}
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

function centerShopOverlay() {
	$('.product-overlay').each(function() {
		winH = $(window).height();
		imgH = $(this).height();
		h = winH - (imgH/2);
		$(this).css({'height':imgH+30});
		$(this).css({'top':(h/2) - 380});
	});
 	
}

function selectCat() {
	$('#cat-cont .cat-item').each(function() {
		var id = $(this).attr('id');
		$(this).click(function() {
			$(this).addClass('selected').siblings().removeClass('selected');
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


function loadAfterImagesLoaded() {  
      // To keep track of how many images have loaded
    var loaded = 0;
      // Let's retrieve how many images there are
    var numImages = $('img').length;
      // Let's bind a function to the loading of EACH image
    $('img').load(function() {
          // One more image has loaded
        ++loaded;
          // Only if ALL the images have loaded
        if (loaded === numImages) {
              // This will be executed ONCE after all images are loaded.
             $('#header, #footer, .container, #sidebar').fadeIn('slow'); 
        }
    });
}

function centerItem(item,iWidth,iHeight){  
   windowWidth = $(window).width();
   windowHeight = $(document).height();
   var w = windowWidth - iWidth; 
   var h = windowHeight - iHeight;
   $(item).css({
       'margin-left': (w/2) - 650,
       'margin-top':(h/2) - 190
   });   
}

function centerButton(item,iWidth){  
   windowWidth = $(window).width();
   var w = windowWidth - iWidth; 
   $(item).css({
       'left': w/2
   });   
}


function sliderControls() {
	$('#carousel #play').on({
		click:function(){clearInterval(run); $(this).css({'display':'none'}); $('#carousel #pause').css({'display':'block'});}
		
	});
	$('#carousel #pause').on({
		
		click:function(){var speed = 3000; run = setInterval('rotate()', speed); $(this).css({'display':'none'}); $('#carousel #play').css({'display':'block'});}
		
	});
}

