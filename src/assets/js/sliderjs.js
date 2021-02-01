var HM = {
    //tab
    jqs_slideList: '.slideList',
    jqs_tabList: '.slides .carouselLinks',


    init: function() {
        //init sliders
        var aSliders = $(this.jqs_slideList);
        if (aSliders.length > 0) {
            this.slideShow(aSliders);
        }

        //init the carousels that are lists of links
        // $('.carousel.icons').hellmannsCrsl({
        //     rotateSpeed: 5000,
        //     viewport: '.carouselLinks'
        // });
    },

    slideShow: function(eSlideListParam) {
        var slideList = eSlideListParam,
            slides = slideList.find('li'),
            tabList = slideList.siblings('.carouselLinks'),
            tabs = tabList.find('.object-new'),
            speed = 500;


        tabs.on('click', 'a', function(e) {
            $(this).trigger('slides.swap');
            e.preventDefault();
        });

        //make it automatic, but this doesn't work properly, I'm stuck...
        setInterval(function() {
            var current = parseInt($('li.selected a').data('links-to').split('_')[1],10);
            var idx=current-1;
            var max = $('.carouselLinks li a').length;
            idx = (current<max) ? (idx+1):0;
            $('.object-new a:eq('+idx+')').trigger('click');
        }, 3000);

        /**
         * This is where the animation, i.e. fade, is performing.
         * I find it quite convenient to use bind/trigger principle as it's easier to maintain
         */
        tabs.find('a').bind('slides.swap', function() {
            var self = $(this),
                selfIndex = self.parent().index(),
                targetSlide = slides.eq(selfIndex);

            //fade in/out slides
            slides.filter('.active').stop(true, false).fadeOut(speed, function() {
                $(this).removeClass('active');
            });
            targetSlide.stop(true, false).fadeIn(speed).addClass('active');

            tabs.removeClass('selected');
            self.parent().addClass('selected');
        });
    }
};

HM.init();