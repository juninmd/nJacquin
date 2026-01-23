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

        replaceImage: function(item) {
            var $item = $(item);
            //Skip if image is already replaced
            // We check if the src starts with chrome-extension:// to avoid re-replacing our own images
            if($item.attr('src') && $item.attr('src').indexOf('chrome-extension://') === -1)
            {
                var h = $item.height();
                var w = $item.width();

                //If image loaded
                if(h > 0 && w > 0)
                {
                    //Replace
                    $item.css('width', w + 'px').css('height', h + 'px');
                    $item.attr('src', chrome.runtime.getURL(self.nJacquinImgs[Math.floor(Math.random() * self.nJacquinImgs.length)]));
                }
                else
                {
                    //Replace when loaded
                    $item.load(function(){
                        //Prevent 'infinite' loop
                        if($item.attr('src') && $item.attr('src').indexOf('chrome-extension://') === -1)
                        {
                            var h = $item.height();
                            var w = $item.width();
                            $item.css('width', w + 'px').css('height', h + 'px');
                            $item.attr('src', chrome.runtime.getURL(self.nJacquinImgs[Math.floor(Math.random() * self.nJacquinImgs.length)]));
                        }
                    });
                }
            }
        },

        replaceBackground: function(item) {
            var $item = $(item);
            var backgroundImg = $item.css('background-image');
            if (backgroundImg && backgroundImg != 'none' && backgroundImg.indexOf('chrome-extension://') === -1) {
                $item.css('background-image', 'url(' + chrome.runtime.getURL(self.nJacquinBackgrounds[Math.floor(Math.random() * self.nJacquinBackgrounds.length)]) + ')');
                $item.css('background-position', '0 0');
                $item.css('background-repeat', 'no-repeat');
                $item.css('background-size', 'contain');
            }
        },

        handleImages : function (root)
        {
            var $imgs = $(root).find('img');
            if ($(root).is('img')) {
                $imgs = $imgs.add(root);
            }
            $imgs.each(function(i, item) {
                self.replaceImage(item);
            });
        },

        handleLogo : function (root)
        {
            var selector = '[class*=logo], [class*=header], [id*=header], [id*=logo],' +
            	'[class*=logo] span, [class*=header] span, [id*=header] span, [id*=logo] span,' +
            	'[class*=logo] h1, [class*=header] h1, [id*=header] h1, [id*=logo] h1,'+
		'[class*=logo] a, [class*=header] a, [id*=header] a, [id*=logo] a';

            var $backgroundImages = $(root).find(selector);
            if ($(root).is(selector)) {
                $backgroundImages = $backgroundImages.add(root);
            }

            $backgroundImages.each(function(i, item) {
                self.replaceBackground(item);
            });
        }
    });

    //Run on jQuery ready
    $(function(){
        // Initial replacement
        self.handleImages(document);
        self.handleLogo(document);

        // Observer for dynamic content
        var observer = new MutationObserver(function(mutations) {
            mutations.forEach(function(mutation) {
                if (mutation.addedNodes && mutation.addedNodes.length > 0) {
                    Array.prototype.forEach.call(mutation.addedNodes, function(node) {
                        if (node.nodeType === 1) { // Element node
                            self.handleImages(node);
                            self.handleLogo(node);
                        }
                    });
                }
            });
        });

        observer.observe(document.body, {
            childList: true,
            subtree: true
        });
    });
})(jQuery);
