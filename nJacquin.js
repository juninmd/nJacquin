//nJacquin 
(function($) {
	
    var self = $.nJacquin = new function(){};
	
    $.extend(self, {

    	nJacquinBackgrounds : [
			'images/jacquin1.jpg',
			'images/jacquin2.jpg',
			'images/jacquin3.jpg',
			'images/jacquin4.jpg',
			'images/jacquin5.jpg',
			'images/jacquin6.jpg',
			'images/jacquin7.png',
			'images/jacquin8.jpg',
			'images/jacquin_local.jpg'
    	],

        nJacquinImgs : [
            'images/jacquin1.jpg',
            'images/jacquin2.jpg',
            'images/jacquin3.jpg',
            'images/jacquin4.jpg',
            'images/jacquin5.jpg',
            'images/jacquin6.jpg',
            'images/jacquin7.png',
            'images/jacquin8.jpg',
            'images/jacquin_local.jpg'
        ],

        handleImages : function (lstImgs, time)
        {
            $.each($('img'), function(i,item) { 
                //Skip if image is already replaced
                // We check if the src starts with chrome-extension:// to avoid re-replacing our own images
                if($(item).attr('src') && $(item).attr('src').indexOf('chrome-extension://') === -1)
                {
					var h = $(item).height();
					var w = $(item).width();
					
					//If image loaded
					if(h > 0 && w > 0)
					{
						//Replace
						$(item).css('width', w + 'px').css('height', h + 'px');
						$(item).attr('src', chrome.runtime.getURL(lstImgs[Math.floor(Math.random() * lstImgs.length)]));
					}
					else
					{
						//Replace when loaded
						$(item).load(function(){
							//Prevent 'infinite' loop
							if($(item).attr('src') && $(item).attr('src').indexOf('chrome-extension://') === -1)
							{
								var h = $(item).height();
								var w = $(item).width();
								$(item).css('width', w + 'px').css('height', h + 'px');
								$(item).attr('src', chrome.runtime.getURL(lstImgs[Math.floor(Math.random() * lstImgs.length)]));
							}
						});
					}
				}
            });

            //Keep replacing
            if (time > 0) {
                setTimeout(function () { self.handleImages(lstImgs, time); }, time);
            }
        },

        handleLogo : function (bgImgs, time)
        {
			$backgroundImages = $(
            	'[class*=logo], [class*=header], [id*=header], [id*=logo],' +
            	'[class*=logo] span, [class*=header] span, [id*=header] span, [id*=logo] span,' +
            	'[class*=logo] h1, [class*=header] h1, [id*=header] h1, [id*=logo] h1,'+
            	'[class*=logo] a, [class*=header] a, [id*=header] a, [id*=logo] a'
            	)
            	.filter(function() {
            		backgroundImg = $(this).css('background-image');
			return backgroundImg && backgroundImg != 'none' && backgroundImg.indexOf('chrome-extension://') === -1;
            	}
            );

            $backgroundImages.each(function(i, item) {
		$(item).css('background-image', 'url(' + chrome.runtime.getURL(bgImgs[Math.floor(Math.random() * bgImgs.length)]) + ')');
            	$(item).css('background-position', '0 0');
            	$(item).css('background-repeat', 'no-repeat');
            	$(item).css('background-size', 'contain');
            });
        }
    });

    //Run on jQuery ready
    $(function(){
        self.handleImages(self.nJacquinImgs, 3000);
     	self.handleLogo(self.nJacquinBackgrounds, 3000);
    });
})(jQuery);
