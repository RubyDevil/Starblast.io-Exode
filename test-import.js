//var abc = [0, 1, 50, 100, 110, 130, 150, 180, 200, 190];

var $ = window.jQuery;

// default
var auto = 'auto';

// cursor
$('.ace_scroller').css('cursor', 'context-menu');

if(typeof custom_background !== auto) {
    $('.insiderenderpanel').css('background', `url("${custom_background}")`)
}
