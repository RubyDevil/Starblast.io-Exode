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

	Object.prototype.resize = function (size = 1) {
		var k = ['texture','section_segments','propeller','angle'];
		for (let key in this) {
			let val = this[key];
			if(typeof val == 'boolean' || typeof val == 'number') continue;
			typeof val == 'object' && Array.isArray(val) 
			? (k.includes(key)
				? void 0 
				: this[key] = val.mult(size)) 
			: void 0;
			typeof val == 'object' && !Array.isArray(val) ? (() => {
				for (let _key in val) {
					let _val = val[_key];
					this[key][_key] = typeof _val == 'number' 
					? _val * size 
					: typeof _val == 'object' && Array.isArray(_val) 
						? _val.mult(size) 
						: _val;
				}
			})() : void 0;
		};
		return this;
	}

	Object.prototype.reflect = function () {
		for (let key in this) {
			let val = this[key];
			typeof val == 'object' 
			? (Array.isArray(val) 
				? (this[key] = val.reverse()) 
				: key === 'position' 
					? (
						(this[key].x = val.x.reverse()), 
						(this[key].y = val.y.swipe().reverse()), 
						(this[key].z = val.z.reverse())
					) : void 0) 
			: void 0;
		}
		return this;
	};
/*
    Object.prototype.auto = function () {
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
*/

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
