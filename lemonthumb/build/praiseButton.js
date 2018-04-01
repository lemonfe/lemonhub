(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define(["exports"], factory);
    } else if (typeof exports !== "undefined") {
        factory(exports);
    } else {
        var mod = {
            exports: {}
        };
        factory(mod.exports);
        global.praiseButton = mod.exports;
    }
})(this, function (exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var _createClass = function () {
        function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || false;
                descriptor.configurable = true;
                if ("value" in descriptor) descriptor.writable = true;
                Object.defineProperty(target, descriptor.key, descriptor);
            }
        }

        return function (Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);
            if (staticProps) defineProperties(Constructor, staticProps);
            return Constructor;
        };
    }();

    var PraiseButton = function () {
        function PraiseButton() {
            var num = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

            _classCallCheck(this, PraiseButton);

            this.praiseNum = num;
        }

        _createClass(PraiseButton, [{
            key: "like",
            value: function like() {
                this.praiseNum += 1;
                this.renderNum(this.praiseNum);
            }
        }, {
            key: "unlike",
            value: function unlike() {
                this.praiseNum -= 1;
                this.renderNum(this.praiseNum);
            }
        }, {
            key: "renderNum",
            value: function renderNum(num) {}
        }]);

        return PraiseButton;
    }();

    exports.default = PraiseButton;
});