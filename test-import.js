//var abc = [0, 1, 50, 100, 110, 130, 150, 180, 200, 190];

Array.prototype.add = function(num) { return this.map(val => val + num) };
Array.prototype.mult = function(num) { return this.map(val => val * num) };

for(let key of Array.prototype) {
    Object.defineProperty(Array.prototype, key, {enumerable: false})
}
