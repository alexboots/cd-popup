	$(document).ready(function() {	//for coupon-code size, depending on length
	    $('.textfillCode').textfill({ maxFontPixels: 70 });	
		
		var codeLen = jQuery('.couponInfo-layout').text().length;
		if((codeLen > 60) && (codeLen < 100)) //changes layout based on how long the title is
		{
			$('.pop-title-info').css('height', 42);
			$('.pop-title-info').css('margin-top', 0);
			$('.pop-couponInfo').css('line-height', '21px');
			$('.pop-storeName').css('line-height', '41px');						
		}
		if(codeLen > 100)
		{
			$('.pop-title-info').css('height', 62);
			$('.pop-title-info').css('margin-top', -10);
			$('.pop-couponInfo').css('line-height', '21px');
			$('.pop-storeName').css('line-height', '65px');	
			$('.pop-storeName').css('line-height', '65px');	
			$('.pop-couponInfo').css('font-size', 13);								
		}																											    
	});