/* eslint-disable no-extend-native, no-unused-vars */

var $ = window.jQuery;
var _$ = window;

let installed = () => (typeof _$.OSMinstalled !== 'undefined' );

//const _defined = (val) => (typeof val !== 'undefined');
var _undef = function (property) { return typeof property === 'undefined' };
const _deprecated  = (data) => (typeof window[data] === 'undefined' || window[data] !== Editor[data]);
const _update = (data) => (window[data] = Editor[data]);
const _check4 = (element) => { if(_undef(_$.css[element])) _$.css[element] = {} };
const _reload = (data) => {
	var stylesheet = '';
	if(typeof Object.keys(_$.css) !== 'undefined') {
		for(let element of Object.keys(_$.css)) {
			let rules = _$.css[element];
			
			stylesheet += (`
${element} {`)
			
			if(typeof Object.keys(rules) === 'undefined') continue;
			for(let rule of Object.keys(rules)) {
				let configuration = rules[rule];
				
				stylesheet += (`
    ${rule}: ${configuration};`)
				
			}
			
			stylesheet += (`
}`)
			
		}
	}
	$('#exode-styles').remove();
$(`<style id="exode-styles">
${stylesheet}
</style>`).appendTo('head')
	console.log("[Exode Manager]: Updated Syles")
}
const _not = (expression) => (expression === false);

// Exode Default
const Exode = 'Exode';


// Install Exode ——————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————
if( ! installed() ) {
	_$.backgrounds = { 1: 'https://t4.ftcdn.net/jpg/02/79/57/75/360_F_279577515_yLkfVqafoxKgt4wKPVF8ry0b9rCiPDQD.jpg', 2: 'https://media.istockphoto.com/vectors/blue-and-gold-abstract-minimal-geometric-background-abstract-hitech-vector-id1276890189?k=6&m=1276890189&s=612x612&w=0&h=ImQH6LP1JwkFSiCczOX6kc2vnFwN-aolxMlgrUzpDlE=', 3: 'https://static.vecteezy.com/system/resources/previews/002/490/560/non_2x/abstract-dark-blue-luxury-background-with-golden-line-diagonal-free-vector.jpg', 4: 'https://i.pinimg.com/736x/e2/86/3f/e2863f9426babeeed49346c570ca9100.jpg', 5: 'https://static.vecteezy.com/system/resources/previews/002/011/934/non_2x/paper-cut-luxury-gold-background-with-metal-texture-3d-abstract-for-gift-card-poster-on-wall-poster-template-landing-page-ui-ux-cover-book-banner-free-vector.jpg', 6: 'https://static.vecteezy.com/system/resources/thumbnails/002/011/979/small_2x/paper-cut-luxury-gold-background-with-metal-texture-3d-abstract-for-gift-card-poster-on-wall-poster-template-landing-page-ui-ux-cover-book-banner-free-vector.jpg', 6: 'https://static.vecteezy.com/system/resources/thumbnails/002/011/923/small_2x/paper-cut-luxury-gold-background-with-metal-texture-3d-abstract-for-gift-card-poster-on-wall-poster-template-landing-page-ui-ux-cover-book-banner-free-vector.jpg', 7: 'https://image.freepik.com/free-vector/golden-texture-overlap-layers-dark-background_67845-535.jpg', 8: 'https://image.freepik.com/vecteurs-libre/abstrait-bleu-fonce-texture-element-or-design-hexagonal_131186-5.jpg', 9: 'https://besthqwallpapers.com/Uploads/4-5-2020/131705/thumb2-gray-abstraction-background-gray-background-with-gold-lines-black-background-luxury-backgrounds.jpg',10: 'https://t4.ftcdn.net/jpg/02/94/31/03/360_F_294310340_U86uCJlDb9jYNWAy8a8iX4t6OTHu3JXN.jpg',11: 'https://image.freepik.com/free-vector/luxury-background-with-golden-details_23-2148385296.jpg',12: 'https://img.freepik.com/vecteurs-libre/style-fond-luxe-or_23-2148639926.jpg?size=626&ext=jpg',13: 'https://image.freepik.com/vecteurs-libre/fond-luxe-or_52683-43998.jpg',14: 'https://img.freepik.com/vecteurs-libre/luxueux-fond-brun-dore-elegant_132724-56.jpg?size=626&ext=jpg&ga=GA1.2.1523869591.1622851200',15: 'https://image.freepik.com/vecteurs-libre/luxueux-fond-brun-dore-elegant_132724-57.jpg',16: 'https://img.freepik.com/vecteurs-libre/luxueux-fond-brun-dore-elegant_132724-58.jpg?size=626&ext=jpg',17: 'https://image.freepik.com/vecteurs-libre/luxueux-fond-brun-dore-elegant_132724-55.jpg',18: 'https://image.freepik.com/vecteurs-libre/fond-ligne-rouge-or-luxe_132724-5.jpg',19: 'https://image.freepik.com/vecteurs-libre/fond-ligne-rouge-or-luxe_132724-4.jpg',20: 'https://image.freepik.com/vecteurs-libre/fond-ligne-rouge-or-luxe_132724-6.jpg',21: 'https://image.freepik.com/vecteurs-libre/fond-ligne-rouge-or-luxe_132724-55.jpg',22: 'https://image.freepik.com/vecteurs-libre/fond-ligne-rouge-or-luxe_132724-56.jpg',23: 'https://image.freepik.com/vecteurs-libre/fond-ligne-rouge-or-luxe_132724-57.jpg',24: 'https://image.freepik.com/vecteurs-libre/fond-ligne-rouge-or-luxe_132724-58.jpg',25: 'https://image.freepik.com/vecteurs-libre/fond-ligne-rouge-or-luxe_132724-59.jpg',26: 'https://image.freepik.com/vecteurs-libre/fond-ligne-rouge-or-luxe_132724-60.jpg',27: 'https://image.freepik.com/vecteurs-libre/fond-ligne-rouge-or-luxe_132724-61.jpg',28: 'https://image.freepik.com/vecteurs-libre/fond-ligne-rouge-or-luxe_132724-62.jpg',29: 'https://image.freepik.com/vecteurs-libre/fond-ligne-rouge-or-luxe_132724-63.jpg',30: 'https://image.freepik.com/vecteurs-libre/fond-ligne-rouge-or-luxe_132724-69.jpg',31: 'https://image.freepik.com/vecteurs-libre/fond-ligne-rouge-or-luxe_132724-70.jpg',32: 'https://image.freepik.com/vecteurs-libre/fond-ligne-rouge-or-luxe_132724-71.jpg',33: 'https://image.freepik.com/vecteurs-libre/fond-ligne-rouge-or-luxe_132724-72.jpg',34: 'https://image.freepik.com/vecteurs-libre/fond-ligne-rouge-or-luxe_132724-73.jpg',35: 'https://image.freepik.com/vecteurs-libre/fond-ligne-rouge-or-luxe_132724-75.jpg',36: 'https://image.freepik.com/vecteurs-libre/fond-ligne-rouge-or-luxe_132724-76.jpg',37: 'https://image.freepik.com/vecteurs-libre/fond-ligne-rouge-or-luxe_132724-77.jpg',38: 'https://image.freepik.com/vecteurs-libre/fond-ligne-rouge-or-luxe_132724-80.jpg',39: 'https://static.vecteezy.com/ti/vecteur-libre/p1/2138811-fond-de-luxe-noir-et-or-gratuit-vectoriel.jpg',40: 'https://us.123rf.com/450wm/kundra/kundra1106/kundra110600005/9923368-texture.jpg?ver=6', }
    $('<style id="exode-styles">\n\n</style>').appendTo('head') // create CSS style class file
	_$.css = {};
}
// ————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————


// Custom Editor Module ——————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————

if( ! _undef(Editor) ) {
	_check4('#insiderenderpanel');
    // custom_background
    if( ! _undef(Editor.custom_background) && ! _deprecated('custom_background') ) {
		let custom_background = Editor.custom_background
		let _this = '#insiderenderpanel';
		if( _undef(_$.background_deleted) ) {
			_$.css[_this]['background-color'] = 'unset'; /* unset current background-color */
			_$.css[_this]['background-image'] = 'unset'; /* unset current background-image */
			_$.css[_this]['background-size'] = 'cover'; /* set background to cover */
			_$.css[_this]['background-position'] = 'center'; /* set background position to center */
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
		_check4('.ace_identifier')
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
		_check4('.ace_identifier')
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
		_check4('.insiderenderpanel canvas')
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










// editing script below

(function /*Advanced Ship Building Script*/() {
    
    if( installed() ) return;
    
    var Cords, a, b, baseModel, dataType, ds, h, isArray, isBody, isObject, isWing, l, ofs, p, pos, sc, t, _undef, w, _Array, __save;

    pos = 'position';
    w = 'width';
    h = 'height';
    l = 'length';
    b = 'bump';
    sc = 'section_segment';
    ds = 'doubleside';
    ofs = 'offset';
    a = 'angle';
    t = 'texture';
    p = 'propeller';

    Cords = ['x', 'y', 'z'];

    _Array = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

    baseModel = {
        body: {
            section_segments: 8,
            width: _Array,
            height: _Array,
            angle: 0,
            texture: _Array,
            propeller: false
        },
        wing: {
            doubleside: true,
            width: _Array,
            length: _Array,
            angle: _Array,
            texture: _Array,
            bump: null
        }
    };

    __save = new Map();

    _undef = function (property) {
        return typeof property === 'undefined';
    };

    isObject = function (obj) {
        return typeof obj === 'object';
    };

    isArray = function (obj) {
        return Array.isArray(obj);
    };

    dataType = function (obj) {
        if (obj[h] || obj[sc]) {
            return 'body';
        } else if (obj[l] || obj[b] || obj[ds]) {
            return 'wing';
        }
    };

    isBody = function (obj) {
        return dataType(obj) === 'body';
    };

    isWing = function (obj) {
        return dataType(obj) === 'wing';
    };

    Object.prototype.scale = function (ratio) {
        if( ! _undef(this.offset) ) {
            this.offset.x = (_undef(this.offset.x))
            ? undefined : (this.offset.x * ratio);
            this.offset.y = (_undef(this.offset.y))
            ? undefined : (this.offset.y * ratio);
            this.offset.z = (_undef(this.offset.z))
            ? undefined : (this.offset.z * ratio);
        }
        this.width = (_undef(this.width))
        ? undefined : (this.width * ratio);
        if(isBody(this)) {
            if( ! _undef(this.position) ) {
                this.position.x = (_undef(this.position.x))
                ? undefined : (this.position.x * ratio);
                this.position.y = (_undef(this.position.y))
                ? undefined : (this.position.y * ratio);
                this.position.z = (_undef(this.position.z))
                ? undefined : (this.position.z * ratio);
            }
            this.height = (_undef(this.height))
            ? undefined : (this.height * ratio);
        }
        else if(isWing(this)) {
            if( ! _undef(this.bump) ) {
                this.bump.position = (_undef(this.bump.position))
                ? undefined : (this.bump.position * ratio);
                this.bump.size = (_undef(this.bump.size))
                ? undefined : (this.bump.size * ratio);
            }
            this['length'] = (_undef(this['length']))
            ? undefined : (this['length'] * ratio);
            this.angle = (_undef(this.angle))
            ? undefined : (this.angle * ratio);
            this.position = (_undef(this.position))
            ? undefined : (this.position * ratio);
        }
    }

    Object.prototype.revert = Object.prototype.reflect = function () {
        var key, val, _results;
        _results = [];
        for (key in this) {
            val = this[key];
            _results.push(isObject(val) ? (isArray(val) ? (this[key] = val.reverse()) : key === 'position' ? ((this[key].x = this[key].x.reverse()), (this[key].y = this[key].y.swipe().reverse()), (this[key].z = this[key].z.reverse())) : void 0) : void 0);
        }
        return _results;
    };

    Object.prototype.autoComplete = Object.prototype.auto = function () {
        var key, val, _i, _j, _len, _len1, _ref, _results;
        if (_undef(this[ofs])) {
            this[ofs] = {
                x: 0,
                y: 0,
                z: 0
            };
        } else {
            for (_i = 0, _len = Cords.length; _i < _len; _i++) {
                key = Cords[_i];
                if (_undef(this[ofs][key]) || !this[ofs][key]) {
                    this[ofs][key] = 0;
                }
            }
            return this;
        }
        if (_undef(this[pos])) {
            this[pos] = {
                x: _Array,
                y: _Array,
                z: _Array
            };
        } else {
            if (_undef(this[pos][key]) || !this[pos][key]) {
                for (_j = 0, _len1 = Cords.length; _j < _len1; _j++) {
                    key = Cords[_j];
                    this[pos][key] = _Array;
                }
            }
        }
        if (_undef(this[key]) || !this[key]) {
            _ref = baseModel[dataType(this)];
            _results = [];
            for (key in _ref) {
                val = _ref[key];
                _results.push((this[key] = val));
            }
            return _results;
        }
    };

    Object.prototype.loadModel = Object.prototype.loadObj = function (model) {
        var key, val;
        for (key in model) {
            val = model[key];
            if (!this[key]) {
                this[key] = val;
            }
        }
        return this;
    };

    Array.prototype.swipe = function () {
        return this.map(function (val) {
            return val * -1;
        });
    };

    Array.prototype.add = function (num) {
        return this.map(function (val) {
            return val + num;
        });
    };

    Array.prototype.mult = function (num) {
        return this.map(function (val) {
            return val * num;
        });
    };

    Array.prototype.div = function (num) {
        return this.map(function (val) {
            return val / num;
        });
    };

    Array.prototype.min = function (num) {
        return this.map(function (val) {
            if (val < num) {
                return (val = num);
            } else {
                return val;
            }
        });
    };

    Array.prototype.max = function (num) {
        return this.map(function (val) {
            if (val > num) {
                return (val = num);
            } else {
                return val;
            }
        });
    };

    Array.prototype.flat = function () {
        return this.map(function (val) {
            return val - val + 1;
        });
    };

    Array.prototype.ignore = function (arr) {
        return this.map(function (val) {
            if (arr.includes(val)) {
                return (val = 0);
            } else {
                return val;
            }
        });
    };

    Array.prototype.replace = function (x, y) {
        return this.map(function (val) {
            if (isArray(x) && x.length === 2) {
                if (x[0] <= val && val <= x[1]) {
                    return (val = y);
                } else {
                    return val;
                }
            } else if (val === x) {
                return (val = y);
            } else {
                return val;
            }
        });
    };

    Array.prototype.cleanTex = function () {
        this[this.length + 1] = this.length - this.length;
        return this;
    };

    Array.prototype.baseTex = function (base) {
        if (base) {
            this[this.length + 1] = base;
            return this;
        } else {
            return this;
        }
    };


    Array.prototype.step = function(step) {
        var i, _i, _len, _results;
        _results = [];
        for ((step > 0 ? (_i = 0, _len = this.length) : _i = this.length - 1); step > 0 ? _i < _len : _i >= 0; _i += step) {
            i = this[_i];
            _results.push(i);
        }
        return _results;
    };

    Array.prototype.fill = function(val, len) {
        var i, _i, _j, _k, _len, _ref, _ref1, _results, _results1, _results2;
        _ref1 = (len ? (function() {
            _results1 = [];
            for (var _j = 0; 0 <= len ? _j < len : _j > len; 0 <= len ? _j++ : _j--){ _results1.push(_j); }
            return _results1;
        }).apply(this) : this.length === 1 ? (function() {
        _results2 = [];
        for (var _k = 0, _ref = this[0]; 0 <= _ref ? _k < _ref : _k > _ref; 0 <= _ref ? _k++ : _k--){ _results2.push(_k); }
        return _results2;
    }).apply(this) : this);
        _results = [];
        for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
            i = _ref1[_i];
            _results.push(val);
        }
        return _results;
    };

    Array.prototype.copy = function(ID) {
        __save.set(ID, this);
        return this;
    };

    Array.prototype.paste = function(ID) {
        return __save.get(ID);
	};
	

	String.prototype.important = function() {
		return this + " !important"
	}



    for(let key of Array.prototype) {
        Object.defineProperty(Array.prototype, key, {
            enumerable: false
        })
    }
    
    for(let key of Object.keys(Object.prototype)) {
        Object.defineProperty(Object.prototype, key, {
            enumerable: false
        })
    }
    
    for(let key of Object.keys(String.prototype)) {
        Object.defineProperty(String.prototype, key, {
            enumerable: false
        })
    }

}).call(this);


_$.OSMinstalled = true
