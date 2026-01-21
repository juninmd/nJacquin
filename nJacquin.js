//nJacquin 
(function($) {
	
    var self = $.nJacquin = new function(){};
	
    $.extend(self, {

    	nJacquinBackgrounds : [
		'http://imagem.band.com.br/f_369062.jpg'
    	],

        nJacquinImgs : [
            'http://imagem.band.com.br/f_369062.jpg',
            'https://conteudo.imguol.com.br/blogs/28/files/2016/05/jacquin-1442338756458_786x550.jpg',
            'https://observatoriodatelevisao.bol.uol.com.br/wp-content/uploads/2015/09/erick-jacquin.jpg',
            'http://conteudo.imguol.com.br/c/entretenimento/2015/06/10/9jun2015--erick-jacquin-come-pedaco-de-forma-esquecida-por-participante-do-masterchef-na-sobremesa-1433907525557_956x500.jpg',
            'http://static1.purebreak.com.br/articles/2/15/43/2/@/76214-erick-jacquin-do-masterchef-brasil-diapo-3.jpg',
            'https://pbs.twimg.com/media/CeLR6keWwAIhsNE.jpg',
            'http://static1.purebreak.com.br/articles/5/18/56/5/@/93213-o-jurado-erick-jacquin-do-masterchef-diapo-2.png',
            'http://i0.statig.com.br/bancodeimagens/2d/1g/2g/2d1g2grv04qcdqimis52hnovt.jpg'
        ],

        handleImages : function (lstImgs, time)
        {
            $.each($('img'), function(i,item) { 
                //Skip if image is already replaced
                if($.inArray($(item).attr('src'), lstImgs) == -1)
                {
					var h = $(item).height();
					var w = $(item).width();
					
					//If image loaded
					if(h > 0 && w > 0)
					{
						//Replace
						$(item).css('width', w + 'px').css('height', h + 'px');
						$(item).attr('src', lstImgs[Math.floor(Math.random() * lstImgs.length)]); 
					}
					else
					{
						//Replace when loaded
						$(item).load(function(){
							//Prevent 'infinite' loop
							if($.inArray($(item).attr('src'), lstImgs) == -1)
							{
								var h = $(item).height();
								var w = $(item).width();
								$(item).css('width', w + 'px').css('height', h + 'px');
								$(item).attr('src', lstImgs[Math.floor(Math.random() * lstImgs.length)]); 
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
            		return backgroundImg && backgroundImg != 'none';
            	}
            );

            $backgroundImages.each(function(i, item) {
            	$(item).css('background-image', 'url(' + bgImgs[Math.floor(Math.random() * bgImgs.length)] + ')');
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
