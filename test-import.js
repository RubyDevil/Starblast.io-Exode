//var abc = [0, 1, 50, 100, 110, 130, 150, 180, 200, 190];

var $ = window.jQuery;

// default
var default = 'default';

// cursor
$('.ace_scroller').css('cursor', 'context-menu');

if(typeof custom_background !== default) {
    $('.insiderenderpanel').css('background', `url("${custom_background}")`)
}
