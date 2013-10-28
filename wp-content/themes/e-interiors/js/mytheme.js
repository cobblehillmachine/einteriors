$(document).ready(function() {
	var winH = $(document).height();
	$('.overlay').css({'height':winH});
	bannerH();
	setInputFieldFunctions();
	showProducts();
	closeOverlay();

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
	$('#cat-cont .cat-item').click(function() {
		var id = $(this).attr('id');
		$('#products-cont .product').each(function() {
			if ($(this).hasClass(id)) {
				$(this).fadeIn();
			} else {
				$(this).hide();
			}
		})
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