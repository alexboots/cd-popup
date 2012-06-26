	$(document).ready(function() {	//for coupon-code size, depending on length
	    $('.textfillCode').textfill({ maxFontPixels: 70 });	
		
		var codeLen = jQuery('.couponInfo-layout').text().length;
	
		if(codeLen > 60) //&& (codeLen < 100)) //changes layout based on how long the title is
		{
			$('.pop-title-info').css('height', 42);
			$('.pop-title-info').css('margin-top', 0);
			$('.pop-couponInfo').css('line-height', '21px');
			$('.pop-storeName').css('line-height', '41px');						
		}
		/* This is for a three-row long title. Uncomment this, and the '//&& (codeLen' bit above and it will be live again. [Make sure to add a '(' after the 'if'.]
		if(codeLen > 100)
		{
			$('.pop-title-info').css('height', 62);
			$('.pop-title-info').css('margin-top', -10);
			$('.pop-couponInfo').css('line-height', '21px');
			$('.pop-storeName').css('line-height', '65px');	
			$('.pop-storeName').css('line-height', '65px');	
			$('.pop-couponInfo').css('font-size', 13);								
		}	*/																									    
	});