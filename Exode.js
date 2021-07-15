/* eslint-disable no-extend-native, no-unused-vars */

var $ = window.jQuery;
var _$ = window;

const installed = () => ( typeof _$.OSMinstalled !== 'undefined' );

const _undef = (property) => ( typeof property === 'undefined' );

const ExodeLog = (info) => { console.log(`[Exode Manager]: ${info}`) };

function _reload() {
	var stylesheet = '';
	if(typeof Object.keys(_$.css) !== 'undefined') {
		for(let element of Object.keys(_$.css)) {
			let rules = _$.css[element];
            stylesheet += (`\n${element} {`);
			if(typeof Object.keys(rules) === 'undefined') continue;
			for(let rule of Object.keys(rules)) {
				let configuration = rules[rule];
				stylesheet += (`\n\t${rule}: ${configuration};`);
			}
			stylesheet += (`\n}`);
		}
	}
	$('#exode-styles').html(stylesheet);
	ExodeLog("Updated Styles");
};


const Exode = 'Exode';


// Install Exode ——————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————
if( ! installed() ) {
	_$.backgrounds = { 1: 'https://t4.ftcdn.net/jpg/02/79/57/75/360_F_279577515_yLkfVqafoxKgt4wKPVF8ry0b9rCiPDQD.jpg', 2: 'https://media.istockphoto.com/vectors/blue-and-gold-abstract-minimal-geometric-background-abstract-hitech-vector-id1276890189?k=6&m=1276890189&s=612x612&w=0&h=ImQH6LP1JwkFSiCczOX6kc2vnFwN-aolxMlgrUzpDlE=', 3: 'https://static.vecteezy.com/system/resources/previews/002/490/560/non_2x/abstract-dark-blue-luxury-background-with-golden-line-diagonal-free-vector.jpg', 4: 'https://i.pinimg.com/736x/e2/86/3f/e2863f9426babeeed49346c570ca9100.jpg', 5: 'https://static.vecteezy.com/system/resources/previews/002/011/934/non_2x/paper-cut-luxury-gold-background-with-metal-texture-3d-abstract-for-gift-card-poster-on-wall-poster-template-landing-page-ui-ux-cover-book-banner-free-vector.jpg', 6: 'https://static.vecteezy.com/system/resources/thumbnails/002/011/979/small_2x/paper-cut-luxury-gold-background-with-metal-texture-3d-abstract-for-gift-card-poster-on-wall-poster-template-landing-page-ui-ux-cover-book-banner-free-vector.jpg', 6: 'https://static.vecteezy.com/system/resources/thumbnails/002/011/923/small_2x/paper-cut-luxury-gold-background-with-metal-texture-3d-abstract-for-gift-card-poster-on-wall-poster-template-landing-page-ui-ux-cover-book-banner-free-vector.jpg', 7: 'https://image.freepik.com/free-vector/golden-texture-overlap-layers-dark-background_67845-535.jpg', 8: 'https://image.freepik.com/vecteurs-libre/abstrait-bleu-fonce-texture-element-or-design-hexagonal_131186-5.jpg', 9: 'https://besthqwallpapers.com/Uploads/4-5-2020/131705/thumb2-gray-abstraction-background-gray-background-with-gold-lines-black-background-luxury-backgrounds.jpg',10: 'https://t4.ftcdn.net/jpg/02/94/31/03/360_F_294310340_U86uCJlDb9jYNWAy8a8iX4t6OTHu3JXN.jpg',11: 'https://image.freepik.com/free-vector/luxury-background-with-golden-details_23-2148385296.jpg',12: 'https://img.freepik.com/vecteurs-libre/style-fond-luxe-or_23-2148639926.jpg?size=626&ext=jpg',13: 'https://image.freepik.com/vecteurs-libre/fond-luxe-or_52683-43998.jpg',14: 'https://img.freepik.com/vecteurs-libre/luxueux-fond-brun-dore-elegant_132724-56.jpg?size=626&ext=jpg&ga=GA1.2.1523869591.1622851200',15: 'https://image.freepik.com/vecteurs-libre/luxueux-fond-brun-dore-elegant_132724-57.jpg',16: 'https://img.freepik.com/vecteurs-libre/luxueux-fond-brun-dore-elegant_132724-58.jpg?size=626&ext=jpg',17: 'https://image.freepik.com/vecteurs-libre/luxueux-fond-brun-dore-elegant_132724-55.jpg',18: 'https://image.freepik.com/vecteurs-libre/fond-ligne-rouge-or-luxe_132724-5.jpg',19: 'https://image.freepik.com/vecteurs-libre/fond-ligne-rouge-or-luxe_132724-4.jpg',20: 'https://image.freepik.com/vecteurs-libre/fond-ligne-rouge-or-luxe_132724-6.jpg',21: 'https://image.freepik.com/vecteurs-libre/fond-ligne-rouge-or-luxe_132724-55.jpg',22: 'https://image.freepik.com/vecteurs-libre/fond-ligne-rouge-or-luxe_132724-56.jpg',23: 'https://image.freepik.com/vecteurs-libre/fond-ligne-rouge-or-luxe_132724-57.jpg',24: 'https://image.freepik.com/vecteurs-libre/fond-ligne-rouge-or-luxe_132724-58.jpg',25: 'https://image.freepik.com/vecteurs-libre/fond-ligne-rouge-or-luxe_132724-59.jpg',26: 'https://image.freepik.com/vecteurs-libre/fond-ligne-rouge-or-luxe_132724-60.jpg',27: 'https://image.freepik.com/vecteurs-libre/fond-ligne-rouge-or-luxe_132724-61.jpg',28: 'https://image.freepik.com/vecteurs-libre/fond-ligne-rouge-or-luxe_132724-62.jpg',29: 'https://image.freepik.com/vecteurs-libre/fond-ligne-rouge-or-luxe_132724-63.jpg',30: 'https://image.freepik.com/vecteurs-libre/fond-ligne-rouge-or-luxe_132724-69.jpg',31: 'https://image.freepik.com/vecteurs-libre/fond-ligne-rouge-or-luxe_132724-70.jpg',32: 'https://image.freepik.com/vecteurs-libre/fond-ligne-rouge-or-luxe_132724-71.jpg',33: 'https://image.freepik.com/vecteurs-libre/fond-ligne-rouge-or-luxe_132724-72.jpg',34: 'https://image.freepik.com/vecteurs-libre/fond-ligne-rouge-or-luxe_132724-73.jpg',35: 'https://image.freepik.com/vecteurs-libre/fond-ligne-rouge-or-luxe_132724-75.jpg',36: 'https://image.freepik.com/vecteurs-libre/fond-ligne-rouge-or-luxe_132724-76.jpg',37: 'https://image.freepik.com/vecteurs-libre/fond-ligne-rouge-or-luxe_132724-77.jpg',38: 'https://image.freepik.com/vecteurs-libre/fond-ligne-rouge-or-luxe_132724-80.jpg',39: 'https://static.vecteezy.com/ti/vecteur-libre/p1/2138811-fond-de-luxe-noir-et-or-gratuit-vectoriel.jpg',40: 'https://us.123rf.com/450wm/kundra/kundra1106/kundra110600005/9923368-texture.jpg?ver=6', }
    $('<style id="exode-styles"></style>').appendTo('head') // create CSS style class file
	_$.css = {};
}
// ————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————



// Install Plugins ——————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————
/** @Prototype_Extend **/
if( _undef(_$.PrototypeExtend) ) {
    $.ajax("https://raw.githubusercontent.com/RubyDevil/Open-Source-Models/main/Prototype-Extend-Plugin.js")
    .done(data => {
        eval(data);
        _$.PrototypeExtend = true;
        return ExodeLog("Prototype Extend Plugin Loaded");
    })
    .fail(e => {
        return ExodeLog("Error => Prototype Extend Plugin Failed");
    });
}
/** @Open_Source_Models **/
if( _undef(_$.OpenSourceModels) ) {
    //...
    _$.OpenSourceModels = true;
}
// ————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————



// Custom Editor Module ——————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————

if( typeof Editor !== 'undefined' ) {

    const _deprecated  = (data) => (typeof window[data] === 'undefined' || window[data] !== Editor[data]);
    const _update = (data) => (window[data] = Editor[data]);
    const _init = (element) => { if(_undef(_$.css[element])) _$.css[element] = {} };

    // custom_background
    if( ! _undef(Editor.custom_background) && ! _deprecated('custom_background') ) {
        _init('#insiderenderpanel');
		let custom_background = Editor.custom_background
		let _this = '#insiderenderpanel';
		if( _undef(_$.background_deleted) ) {
			_$.css[_this]['background-color'] = 'unset';
			_$.css[_this]['background-image'] = 'unset';
			_$.css[_this]['background-size'] = 'cover';
			_$.css[_this]['background-position'] = 'center';
			_$.background_deleted = true;
		}
        switch (custom_background) {
            case 'Exode': _$.css['#insiderenderpanel']['background-image'] = `url("${ExodeEditor.custom_background}")`; break;
            default:
				_$.css[_this]['background-image'] = 
				( typeof custom_background === 'number' )
                ? `url("${window.backgrounds[custom_background]||0}") !important`
                : `url("${custom_background}") !important`;
                break;
		};
        _update('custom_background')
		_reload()
    }
	
	// text_color
    if( ! _undef(Editor.text_color) && _deprecated('text_color') ) {
		_init('.ace_identifier')
		let text_color = Editor.text_color
		let _this = '.ace_identifier';
        switch (Editor.text_color) {
            case 'Exode': _$.css[_this]['color'] = 'GreenYellow'; break;
            default: _$.css[_this]['color'] = text_color; break;
        };
        _update('text_color')
		_reload()
    }
	
	// italic
    if( ! _undef(Editor.italic) && _deprecated('italic') ) {
		_init('.ace_identifier')
		let _this = '.ace_identifier';
        switch (Editor.italic) {
            case 'Exode': _$.css[_this]['font-style'] = 'italic !important'; break;
            default: 
                ( Editor.italic === true )
                ? _$.css[_this]['font-style'] = 'italic !important'
                : _$.css[_this]['font-style'] = 'unset';
                break;
        };
        _update('italic')
		_reload()
    }
	
	// centerize_canvas
    if( ! _undef(Editor.centerize_canvas) && _deprecated('centerize_canvas') ) {
		_init('.insiderenderpanel canvas')
		let centerize_canvas = Editor.centerize_canvas;
		let _this = '.insiderenderpanel canvas';
        switch (centerize_canvas) {
			case 'Exode':
				_$.css[_this]['width'] = 'unset';
				_$.css[_this]['height'] = '100%';
				break;
			default: 
				if(centerize_canvas === true) {
					_$.css[_this]['width'] = 'unset';
					_$.css[_this]['height'] = '100%'
				}
				else {
					_$.css[_this]['width'] = '100%';
					_$.css[_this]['height'] = 'unset'
				}
                break;
        };
		_update('centerize_canvas')
		_reload()
	}
	

	//_UPDATE()
}

// ————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————



// Exode Styles Module ——————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————

    // DEFAULT - STYLES
    if( ! installed() ) {
        // change logo
        $('body > div.wrapper > div.header > img')
        .attr('src', 'https://fontmeme.com/permalink/210712/c072cd76192d267f5d1729b84c1f1642.png');
        // change css styles
        $(`<style id="exode-default-styles">
            html {background: none !important;}
            body {background: #212121 !important;}
            .header {color: #E6E6E6;}
            .iconsbar a, .iconsbar label {background-color: rgba(0,0,0,0.35); background-clip: border-box; border-radius: 10px; border: none;}
            .exode-var {font-style: italic !important; font-weight: bold !important; color: gold !important;}
        </style>`).appendTo('head')
    }

    // live search
    let identifiers = $('span.ace_identifier');
    for(let identifier of identifiers) {
        if( identifier.innerHTML !== 'Exode' && identifier.innerHTML !== 'Editor' ) continue;
        else if( identifier.classList.contains('exode-var') ) continue;
        identifier.setAttribute('class', 'exode-var');
    }

// ————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————

