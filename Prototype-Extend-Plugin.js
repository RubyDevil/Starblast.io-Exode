(function () {

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


    Object.prototype.scale = function (ratio) {
        var _object = this;
        if( ! _undef(this.offset) ) {
            _object.offset.x = (_undef(this.offset.x))
            ? undefined : (this.offset.x * ratio);
            _object.offset.y = (_undef(this.offset.y))
            ? undefined : (this.offset.y * ratio);
            _object.offset.z = (_undef(this.offset.z))
            ? undefined : (this.offset.z * ratio);
        }
        _object.width = (_undef(this.width))
        ? undefined : (this.width.mult(ratio));
        if(isBody(this)) {
            if( ! _undef(this.position) ) {
                _object.position.x = (_undef(this.position.x))
                ? undefined : (this.position.x.mult(ratio));
                _object.position.y = (_undef(this.position.y))
                ? undefined : (this.position.y.mult(ratio));
                _object.position.z = (_undef(this.position.z))
                ? undefined : (this.position.z.mult(ratio));
            }
            _object.height = (_undef(this.height))
            ? undefined : (this.height.mult(ratio));
        }
        else if(isWing(this)) {
            if( ! _undef(this.bump) ) {
                _object.bump.position = (_undef(this.bump.position))
                ? undefined : (this.bump.position * ratio);
                _object.bump.size = (_undef(this.bump.size))
                ? undefined : (this.bump.size * ratio);
            }
            _object.angle = (_undef(this.angle))
            ? undefined : (this.angle.mult(ratio));
            _object.position = (_undef(this.position))
            ? undefined : (this.position.mult(ratio));
        }
        return _object;
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
