(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define(['./praiseButton.js'], factory);
    } else if (typeof exports !== "undefined") {
        factory(require('./praiseButton.js'));
    } else {
        var mod = {
            exports: {}
        };
        factory(global.praiseButton);
        global.praiseButtonSpec = mod.exports;
    }
})(this, function (_praiseButton) {
    'use strict';

    var _praiseButton2 = _interopRequireDefault(_praiseButton);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    describe('Thumb test', function () {
        var btn = new _praiseButton2.default();
        btn.like();

        expect(btn.praiseNum).toBe(3);
    });
});