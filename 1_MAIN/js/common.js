

$(function(){
	
	
	
	
	
	$(window).on('load',function(){
		$('#header, #footer').addClass('active')

	});
	$('.allMenu').on('click',function(e){
		e.preventDefault();
		if($(this).hasClass('on')){
			$('#header').removeClass('open');
			$(this).removeClass('on');
		}else{
			$('#header').addClass('open');
			$(this).addClass('on');
		}
	
	});

	$('#gnb > li.hasDep > a').on('click',function(e){
		e.preventDefault();
		if($(this).parent().hasClass('on')){
			$(this).next().slideUp(200).parent().removeClass('on')
		}else{
			$(this).next().slideDown(200).parent().addClass('on').siblings().removeClass('on').find('.dep2').slideUp(200);
		}
		
	});

	$('#gnb .dep2  a').on('click',function(){
		$('.allMenu').trigger('click');
	});

	var vh = 0;

	$(window).on('load resize',function(){
		$('.pf_cate > li').each(function(){
			
			$(this).find('ul').css({'max-width':$(this).find('p').outerWidth()});
		});
		vh = $(window).height()
			$('.gnbWrap, .pf_intro').outerHeight(vh);
	});


	$.fn.isInViewport = function() {
	  var elementTop = $(this).offset().top;
	  var elementBottom = elementTop + $(this).outerHeight();

	  var viewportTop = $(window).scrollTop();
	  var viewportBottom = viewportTop + $(window).height();

	  return elementBottom > viewportTop + (vh/8)  && elementTop < viewportBottom - (vh/8) ;
	};

	$(window).on('load resize scroll',function(){
		$('.aniBox').each(function(){
			if($(this).isInViewport()){
				$(this).addClass('gogo');
			}
		});
	});
});