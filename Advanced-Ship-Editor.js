//var abc = [0, 1, 50, 100, 110, 130, 150, 180, 200, 190];

var $ = window.jQuery;
var _$ = window;

let installed = (typeof window.OSMinstalled !== 'undefined' );

const _defined = (val) => (typeof val !== 'undefined');
const _isNew  = (data) => (typeof window[data] === 'undefined' || window[data] !== Editor[data]);
const _update = (data) => (window[data]  =  Editor[data]);

// Exode Default
const Exode = 'Exode';
var ExodeEditor = {
    custom_background: "https://backgroundlabs.com/files/dark-canvas-background-2353.png", // dark-grey patern
}


// Declare jQuery Functions——————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————
if( ! installed ) {
    _$.keys = {};
    $(document).keydown(e => _$.keys[e.which] = true);
    $(document).keyup(e => delete _$.keys[e.which]);
}
// ——————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————


// Backgrounds Map ——————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————
if( ! installed ) {
    window.backgrounds = {
         1: 'https://t4.ftcdn.net/jpg/02/79/57/75/360_F_279577515_yLkfVqafoxKgt4wKPVF8ry0b9rCiPDQD.jpg',
         2: 'https://media.istockphoto.com/vectors/blue-and-gold-abstract-minimal-geometric-background-abstract-hitech-vector-id1276890189?k=6&m=1276890189&s=612x612&w=0&h=ImQH6LP1JwkFSiCczOX6kc2vnFwN-aolxMlgrUzpDlE=',
         3: 'https://static.vecteezy.com/system/resources/previews/002/490/560/non_2x/abstract-dark-blue-luxury-background-with-golden-line-diagonal-free-vector.jpg',
         4: 'https://i.pinimg.com/736x/e2/86/3f/e2863f9426babeeed49346c570ca9100.jpg',
         5: 'https://static.vecteezy.com/system/resources/previews/002/011/934/non_2x/paper-cut-luxury-gold-background-with-metal-texture-3d-abstract-for-gift-card-poster-on-wall-poster-template-landing-page-ui-ux-cover-book-banner-free-vector.jpg',
         6: 'https://static.vecteezy.com/system/resources/thumbnails/002/011/979/small_2x/paper-cut-luxury-gold-background-with-metal-texture-3d-abstract-for-gift-card-poster-on-wall-poster-template-landing-page-ui-ux-cover-book-banner-free-vector.jpg',
         6: 'https://static.vecteezy.com/system/resources/thumbnails/002/011/923/small_2x/paper-cut-luxury-gold-background-with-metal-texture-3d-abstract-for-gift-card-poster-on-wall-poster-template-landing-page-ui-ux-cover-book-banner-free-vector.jpg',
         7: 'https://image.freepik.com/free-vector/golden-texture-overlap-layers-dark-background_67845-535.jpg',
         8: 'https://image.freepik.com/vecteurs-libre/abstrait-bleu-fonce-texture-element-or-design-hexagonal_131186-5.jpg',
         9: 'https://besthqwallpapers.com/Uploads/4-5-2020/131705/thumb2-gray-abstraction-background-gray-background-with-gold-lines-black-background-luxury-backgrounds.jpg',
        10: 'https://t4.ftcdn.net/jpg/02/94/31/03/360_F_294310340_U86uCJlDb9jYNWAy8a8iX4t6OTHu3JXN.jpg',
        11: 'https://image.freepik.com/free-vector/luxury-background-with-golden-details_23-2148385296.jpg',
        12: 'https://img.freepik.com/vecteurs-libre/style-fond-luxe-or_23-2148639926.jpg?size=626&ext=jpg',
        13: 'https://image.freepik.com/vecteurs-libre/fond-luxe-or_52683-43998.jpg',
        14: 'https://img.freepik.com/vecteurs-libre/luxueux-fond-brun-dore-elegant_132724-56.jpg?size=626&ext=jpg&ga=GA1.2.1523869591.1622851200',
        15: 'https://image.freepik.com/vecteurs-libre/luxueux-fond-brun-dore-elegant_132724-57.jpg',
        16: 'https://img.freepik.com/vecteurs-libre/luxueux-fond-brun-dore-elegant_132724-58.jpg?size=626&ext=jpg',
        17: 'https://image.freepik.com/vecteurs-libre/luxueux-fond-brun-dore-elegant_132724-55.jpg',
        18: 'https://image.freepik.com/vecteurs-libre/fond-ligne-rouge-or-luxe_132724-5.jpg',
        19: 'https://image.freepik.com/vecteurs-libre/fond-ligne-rouge-or-luxe_132724-4.jpg',
        20: 'https://image.freepik.com/vecteurs-libre/fond-ligne-rouge-or-luxe_132724-6.jpg',
        21: 'https://image.freepik.com/vecteurs-libre/fond-ligne-rouge-or-luxe_132724-7.jpg',
        22: 'https://image.freepik.com/vecteurs-libre/fond-ligne-rouge-or-luxe_132724-8.jpg',
        23: 'https://image.freepik.com/vecteurs-libre/fond-ligne-rouge-or-luxe_132724-9.jpg',
        24: 'https://image.freepik.com/vecteurs-libre/fond-ligne-rouge-or-luxe_132724-10.jpg',
        25: 'https://image.freepik.com/vecteurs-libre/fond-ligne-rouge-or-luxe_132724-15.jpg',
        26: 'https://image.freepik.com/vecteurs-libre/fond-ligne-rouge-or-luxe_132724-16.jpg',
        27: 'https://image.freepik.com/vecteurs-libre/fond-ligne-rouge-or-luxe_132724-17.jpg',
        28: 'https://image.freepik.com/vecteurs-libre/fond-ligne-rouge-or-luxe_132724-18.jpg',
        29: 'https://image.freepik.com/vecteurs-libre/fond-ligne-rouge-or-luxe_132724-29.jpg',
        30: 'https://image.freepik.com/vecteurs-libre/fond-ligne-rouge-or-luxe_132724-30.jpg',
        31: 'https://image.freepik.com/vecteurs-libre/fond-ligne-rouge-or-luxe_132724-31.jpg',
        32: 'https://image.freepik.com/vecteurs-libre/fond-ligne-rouge-or-luxe_132724-32.jpg',
        33: 'https://image.freepik.com/vecteurs-libre/fond-ligne-rouge-or-luxe_132724-43.jpg',
        34: 'https://image.freepik.com/vecteurs-libre/fond-ligne-rouge-or-luxe_132724-44.jpg',
        35: 'https://image.freepik.com/vecteurs-libre/fond-ligne-rouge-or-luxe_132724-45.jpg',
        36: 'https://image.freepik.com/vecteurs-libre/fond-ligne-rouge-or-luxe_132724-46.jpg',
        37: 'https://image.freepik.com/vecteurs-libre/fond-ligne-rouge-or-luxe_132724-47.jpg',
        38: 'https://image.freepik.com/vecteurs-libre/fond-ligne-rouge-or-luxe_132724-48.jpg',
        39: 'https://image.freepik.com/vecteurs-libre/fond-ligne-rouge-or-luxe_132724-49.jpg',
        40: 'https://image.freepik.com/vecteurs-libre/fond-ligne-rouge-or-luxe_132724-50.jpg',
        41: 'https://image.freepik.com/vecteurs-libre/fond-ligne-rouge-or-luxe_132724-55.jpg',
        42: 'https://image.freepik.com/vecteurs-libre/fond-ligne-rouge-or-luxe_132724-56.jpg',
        43: 'https://image.freepik.com/vecteurs-libre/fond-ligne-rouge-or-luxe_132724-57.jpg',
        44: 'https://image.freepik.com/vecteurs-libre/fond-ligne-rouge-or-luxe_132724-58.jpg',
        45: 'https://image.freepik.com/vecteurs-libre/fond-ligne-rouge-or-luxe_132724-59.jpg',
        46: 'https://image.freepik.com/vecteurs-libre/fond-ligne-rouge-or-luxe_132724-60.jpg',
        47: 'https://image.freepik.com/vecteurs-libre/fond-ligne-rouge-or-luxe_132724-61.jpg',
        48: 'https://image.freepik.com/vecteurs-libre/fond-ligne-rouge-or-luxe_132724-62.jpg',
        49: 'https://image.freepik.com/vecteurs-libre/fond-ligne-rouge-or-luxe_132724-63.jpg',
        50: 'https://image.freepik.com/vecteurs-libre/fond-ligne-rouge-or-luxe_132724-69.jpg',
        51: 'https://image.freepik.com/vecteurs-libre/fond-ligne-rouge-or-luxe_132724-70.jpg',
        52: 'https://image.freepik.com/vecteurs-libre/fond-ligne-rouge-or-luxe_132724-71.jpg',
        53: 'https://image.freepik.com/vecteurs-libre/fond-ligne-rouge-or-luxe_132724-72.jpg',
        54: 'https://image.freepik.com/vecteurs-libre/fond-ligne-rouge-or-luxe_132724-73.jpg',
        55: 'https://image.freepik.com/vecteurs-libre/fond-ligne-rouge-or-luxe_132724-75.jpg',
        56: 'https://image.freepik.com/vecteurs-libre/fond-ligne-rouge-or-luxe_132724-76.jpg',
        57: 'https://image.freepik.com/vecteurs-libre/fond-ligne-rouge-or-luxe_132724-77.jpg',
        58: 'https://image.freepik.com/vecteurs-libre/fond-ligne-rouge-or-luxe_132724-80.jpg',
        59: 'https://static.vecteezy.com/ti/vecteur-libre/p1/2138811-fond-de-luxe-noir-et-or-gratuit-vectoriel.jpg',
        60: 'https://us.123rf.com/450wm/kundra/kundra1106/kundra110600005/9923368-texture.jpg?ver=6',
    }
}
// ————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————



// Custom Editor Module ——————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————

if( ! installed ) {
    $('#insiderenderpanel').css('background-color','unset'); // unset current background-color
    $('#insiderenderpanel').css('background-image','unset'); // unset current background-image
    $('#insiderenderpanel').css('background-size','cover'); // set background to cover
    //$('<style id="ace_identifier"></style>').appendTo('head')// create identifier style class file
    $('<style id="ace_identifier_color"></style>').appendTo('head')// create identifier color style class file
    $('<style id="ace_identifier_italic"></style>').appendTo('head')// create identifier italic style class file
}

if( _defined(Editor) ) {
    // custom_background
    if( _defined(Editor.custom_background) && _isNew('custom_background') ) {
        switch (Editor.custom_background) {
            case 'Exode': $('#insiderenderpanel').css('background-image', `url("${ExodeEditor.custom_background}")`); break;
            default:
                ( typeof Editor.custom_background === 'number' )
                ? $('#insiderenderpanel').css('background-image', `url("${window.backgrounds[Editor.custom_background]||0}")`)
                : $('#insiderenderpanel').css('background-image', `url("${Editor.custom_background}")`);
                break;
        };
        _update('custom_background')
    }
    //else if( ! isdefined(Editor.custom_background)) { $('#insiderenderpanel').css('background', `url("${ExodeEditor.custom_background}")`); }
    // text_color
    if( _defined(Editor.text_color) && _isNew('text_color') ) {
        switch (Editor.text_color) {
            case 'Exode': $('style#ace_identifier_color').html('.ace_identifier {color: greenyellow}'); break;
            default: $('style#ace_identifier_color').html(`.ace_identifier {color: ${Editor.text_color}}`); break;
        };
        _update('text_color')
    }
    // italic
    if( _defined(Editor.italic) && _isNew('italic') ) {
        switch (Editor.italic) {
            case 'Exode': $('style#ace_identifier_italic').html('.ace_identifier {font-style: italic}'); break;
            default: 
                ( Editor.italic === true )
                ? $('style#ace_identifier_italic').html('.ace_identifier {font-style: italic}')
                : $('style#ace_identifier_italic').html('.ace_identifier {font-style: unset}');
                break;
        };
        _update('italic')
    }
}

// ————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————



// Exode Styles Module ——————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————

    // DEFAULT - STYLES
    if( ! installed ) {
        // change logo
        $('body > div.wrapper > div.header > img')
        .attr('src', 'https://fontmeme.com/permalink/210712/c072cd76192d267f5d1729b84c1f1642.png');
        // change css styles
        $(`<style id="exode-stylesheet">
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
        if( identifier.innerHTML !== 'Exode' ) continue;
        else if( identifier.classList.contains('exode-var') ) continue;
        identifier.setAttribute('class', 'exode-var');
        break;
    }

// ————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————










// editing script above

(function /*Advanced Ship Building Script*/() {
    
    if( installed ) return;
    
    var Cords, a, b, baseModel, dataType, ds, h, isArray, isBody, isObject, isWing, l, ofs, p, pos, sc, t, undef, w, _Array, __save;

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

    undef = function (property) {
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
        if (undef(this[ofs])) {
            this[ofs] = {
                x: 0,
                y: 0,
                z: 0
            };
        } else {
            for (_i = 0, _len = Cords.length; _i < _len; _i++) {
                key = Cords[_i];
                if (undef(this[ofs][key]) || !this[ofs][key]) {
                    this[ofs][key] = 0;
                }
            }
            return this;
        }
        if (undef(this[pos])) {
            this[pos] = {
                x: _Array,
                y: _Array,
                z: _Array
            };
        } else {
            if (undef(this[pos][key]) || !this[pos][key]) {
                for (_j = 0, _len1 = Cords.length; _j < _len1; _j++) {
                    key = Cords[_j];
                    this[pos][key] = _Array;
                }
            }
        }
        if (undef(this[key]) || !this[key]) {
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

}).call(this);


window.OSMinstalled = true
