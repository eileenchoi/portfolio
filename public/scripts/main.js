'use strict';

//smoothscroll plugin

$('a[href^="#"]').on('click', function (event) {
    var target = $(this.getAttribute('href'));
    if (target.length) {
        event.preventDefault();
        $('html, body').stop().animate({
            scrollTop: target.offset().top
        }, 1000);
    }
});
const tilt = $('.js-tilt').tilt();
tilt.on('change', callback);  // parameters: event, transforms
tilt.on('tilt.mouseLeave', callback); // parameters: event
tilt.on('tilt.mouseEnter', callback); // parameters: event

const tilt = $('.js-tilt').tilt();

// Destroy instance
tilt.tilt.destroy.call(tilt);

// Get values of instance
tilt.tilt.getValues.call(tilt); // returns [{},{},etc..]

// Reset instance
tilt.tilt.reset.call(tilt);