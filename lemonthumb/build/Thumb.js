(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define(['exports', './praiseButton.js'], factory);
    } else if (typeof exports !== "undefined") {
        factory(exports, require('./praiseButton.js'));
    } else {
        var mod = {
            exports: {}
        };
        factory(mod.exports, global.praiseButton);
        global.Thumb = mod.exports;
    }
})(this, function (exports, _praiseButton) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    var _praiseButton2 = _interopRequireDefault(_praiseButton);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

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

    function _possibleConstructorReturn(self, call) {
        if (!self) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }

        return call && (typeof call === "object" || typeof call === "function") ? call : self;
    }

    var _get = function get(object, property, receiver) {
        if (object === null) object = Function.prototype;
        var desc = Object.getOwnPropertyDescriptor(object, property);

        if (desc === undefined) {
            var parent = Object.getPrototypeOf(object);

            if (parent === null) {
                return undefined;
            } else {
                return get(parent, property, receiver);
            }
        } else if ("value" in desc) {
            return desc.value;
        } else {
            var getter = desc.get;

            if (getter === undefined) {
                return undefined;
            }

            return getter.call(receiver);
        }
    };

    function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
            throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
        }

        subClass.prototype = Object.create(superClass && superClass.prototype, {
            constructor: {
                value: subClass,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
        if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
    }

    var Thumb = function (_PraiseButton) {
        _inherits(Thumb, _PraiseButton);

        function Thumb(ele) {
            _classCallCheck(this, Thumb);

            var _this = _possibleConstructorReturn(this, (Thumb.__proto__ || Object.getPrototypeOf(Thumb)).call(this));

            _this.ele = ele;
            _this.node = '\n            <div class="base unlike">\n\t\t        <div class="mid"></div>\n\t\t        <div class="thumb"></div>\n\t        </div>\n\t        <div class="num">' + _this.praiseNum + '</div>\n        ';

            $(ele).append($(_this.node));

            $(ele).find('.base').on('click', _this.likeToggle.bind(_this));

            return _this;
        }

        _createClass(Thumb, [{
            key: 'likeToggle',
            value: function likeToggle() {
                var flag = $(this.node).find('.unlike') ? 1 : 0;
                if (flag) {
                    console.log('点赞');
                    this.like();
                }
                // else{
                //     console.log('取消点赞');
                //     this.unlike();
                // }
            }
        }, {
            key: 'renderNum',
            value: function renderNum(num) {
                _get(Thumb.prototype.__proto__ || Object.getPrototypeOf(Thumb.prototype), 'renderNum', this).call(this, num);
                $(this.ele).find('.num').text(num);
            }
        }]);

        return Thumb;
    }(_praiseButton2.default);

    exports.default = Thumb;
});