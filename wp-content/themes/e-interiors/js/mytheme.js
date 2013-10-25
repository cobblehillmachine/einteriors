$(document).ready(function() {
	bannerH();
	setInputFieldFunctions();

});

$(window).resize(function() {
	bannerH();

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