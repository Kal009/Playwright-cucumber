var stringVar = new Map();
var intVar = new Map();

module.exports = {

    setVar: function (key, value) {
        stringVar.set(key, value);
    },

    getVar: function (key) {
       return  stringVar.get(key);
    },

    clearVar: function () {
        stringVar.clear();
    }
}