//var abc = [0, 1, 50, 100, 110, 130, 150, 180, 200, 190];

const defined = (val) => (typeof val === 'undefined');

var $ = window.jQuery;

// default
const Exode = 'Exode';
var ExodeEditor = {
    custom_background: "http://backgroundlabs.com/files/dark-canvas-background-2353.png", // dark-grey patern
}

// style class
$('.exode-var').css({
    'font-style': 'italic !important',
    'font-weight': 'bold !important',
    'color': 'gold !important',
})

function customEditor() {
    switch (true) {
        case defined(Editor.custom_background): {
            switch (Editor.custom_background) {
                case Exode: $('.insiderenderpanel').css('background', `url("${ExodeEditor.custom_background}")`); break;
                default: $('.insiderenderpanel').css('background', `url("${Editor.custom_background}")`); break;
            }
        }
    }
}

document.addEventListener('keydown', markup);

const markup = () => {
    let identifiers = $('span.ace_identifier');
    for(let identifier of identifiers) {
        if( identifier.innerHTML !== Exode ) continue;
        else if( identifier.hasClass('exode-var') ) continue;
        identifier.attr('class', 'exode-var');
        break;
    }
}
