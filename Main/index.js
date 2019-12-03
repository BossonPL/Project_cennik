var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component } from "react";
import "./style.scss";

var Main = function (_Component) {
    _inherits(Main, _Component);

    function Main() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, Main);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Main.__proto__ || Object.getPrototypeOf(Main)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            odorosla: 0,
            dzieci: 0,
            mlodziez: 0,
            auto: 0,
            bus: 0,
            energia: 0,
            przyczepa: 0,
            camper: 0,
            namiot2: 0,
            namiot4: 0,
            namiot6: 0,
            motor: 0,
            pies: 0,
            altana: 0,
            numbDays: 0,
            odoroslaPrice: 17,
            dzieciPrice: 10,
            mlodziezPrice: 14,
            autoPrice: 15,
            busPrice: 35,
            energiaPrice: 16,
            przyczepaPrice: 35,
            camperPrice: 40,
            namiot2Price: 14,
            namiot4Price: 18,
            namiot6Price: 30,
            motorPrice: 10,
            piesPrice: 8,
            altanaPrice: 15,
            taxa: 2

        }, _this.onButtonClickPlus = function (e) {
            e.preventDefault();
            var Plus = Number(e.target.value) + 1;
            _this.setState(_defineProperty({}, e.target.name, Plus));
        }, _this.onButtonClickMinus = function (e) {
            e.preventDefault();
            var Minus = Number(e.target.value) - 1;
            Minus < 0 ? _this.setState(_defineProperty({}, e.target.name, 0)) : _this.setState(_defineProperty({}, e.target.name, Minus));
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Main, [{
        key: "render",
        value: function render() {
            var _state = this.state,
                odorosla = _state.odorosla,
                dzieci = _state.dzieci,
                mlodziez = _state.mlodziez,
                auto = _state.auto,
                bus = _state.bus,
                energia = _state.energia,
                przyczepa = _state.przyczepa,
                camper = _state.camper,
                namiot2 = _state.namiot2,
                namiot4 = _state.namiot4,
                namiot6 = _state.namiot6,
                motor = _state.motor,
                pies = _state.pies,
                altana = _state.altana,
                taxa = _state.taxa,
                numbDays = _state.numbDays;
            var _state2 = this.state,
                odoroslaPrice = _state2.odoroslaPrice,
                dzieciPrice = _state2.dzieciPrice,
                mlodziezPrice = _state2.mlodziezPrice,
                autoPrice = _state2.autoPrice,
                busPrice = _state2.busPrice,
                energiaPrice = _state2.energiaPrice,
                przyczepaPrice = _state2.przyczepaPrice,
                camperPrice = _state2.camperPrice,
                namiot2Price = _state2.namiot2Price,
                namiot4Price = _state2.namiot4Price,
                namiot6Price = _state2.namiot6Price,
                motorPrice = _state2.motorPrice,
                piesPrice = _state2.piesPrice,
                altanaPrice = _state2.altanaPrice;

            var dayPrice = odorosla * odoroslaPrice + dzieci * dzieciPrice + mlodziez * mlodziezPrice + auto * autoPrice + bus * busPrice + energia * energiaPrice + przyczepa * przyczepaPrice + camper * camperPrice + namiot2 * namiot2Price + namiot4 * namiot4Price + namiot6 * namiot6Price + motor * motorPrice + pies * piesPrice + altana * altanaPrice + (odorosla + dzieci + mlodziez) * taxa;
            var allPrice = dayPrice * numbDays;
            return React.createElement(
                "div",
                { className: "borderBox" },
                React.createElement(
                    "div",
                    { style: { fontSize: 'xx-large', margin: '50px 0 40px 0', textAlign: 'center' } },
                    " Cennik us\u0142ug na sezon 2019"
                ),
                React.createElement(
                    "div",
                    null,
                    " "
                ),
                React.createElement(
                    "section",
                    { className: "container" },
                    React.createElement(
                        "div",
                        null,
                        React.createElement(
                            "table",
                            { className: "zui-table" },
                            React.createElement(
                                "tbody",
                                null,
                                React.createElement(
                                    "tr",
                                    null,
                                    React.createElement(
                                        "td",
                                        null,
                                        "pobyt osoby doros\u0142ej"
                                    ),
                                    React.createElement(
                                        "td",
                                        null,
                                        React.createElement(
                                            "strong",
                                            null,
                                            odoroslaPrice,
                                            " z\u0142"
                                        )
                                    ),
                                    React.createElement(
                                        "td",
                                        null,
                                        " ",
                                        React.createElement(
                                            "button",
                                            { onClick: this.onButtonClickMinus.bind(this), name: "odorosla", value: odorosla },
                                            " - "
                                        ),
                                        " "
                                    ),
                                    React.createElement(
                                        "td",
                                        null,
                                        " ",
                                        odorosla
                                    ),
                                    React.createElement(
                                        "td",
                                        null,
                                        " ",
                                        React.createElement(
                                            "button",
                                            { onClick: this.onButtonClickPlus.bind(this), name: "odorosla", value: odorosla },
                                            " + "
                                        ),
                                        " "
                                    )
                                ),
                                React.createElement(
                                    "tr",
                                    null,
                                    React.createElement(
                                        "td",
                                        null,
                                        " pobyt dzieci do lat 10"
                                    ),
                                    React.createElement(
                                        "td",
                                        null,
                                        React.createElement(
                                            "strong",
                                            null,
                                            dzieciPrice,
                                            " z\u0142 "
                                        )
                                    ),
                                    React.createElement(
                                        "td",
                                        null,
                                        "  ",
                                        React.createElement(
                                            "button",
                                            { onClick: this.onButtonClickMinus.bind(this), name: "dzieci", value: dzieci },
                                            " - "
                                        ),
                                        " "
                                    ),
                                    React.createElement(
                                        "td",
                                        null,
                                        dzieci,
                                        " "
                                    ),
                                    React.createElement(
                                        "td",
                                        null,
                                        " ",
                                        React.createElement(
                                            "button",
                                            { onClick: this.onButtonClickPlus.bind(this), name: "dzieci", value: dzieci },
                                            " + "
                                        ),
                                        " "
                                    )
                                ),
                                React.createElement(
                                    "tr",
                                    null,
                                    React.createElement(
                                        "td",
                                        null,
                                        "m\u0142odzie\u017C i studenci"
                                    ),
                                    React.createElement(
                                        "td",
                                        null,
                                        React.createElement(
                                            "strong",
                                            null,
                                            " ",
                                            mlodziezPrice,
                                            " z\u0142"
                                        )
                                    ),
                                    React.createElement(
                                        "td",
                                        null,
                                        "  ",
                                        React.createElement(
                                            "button",
                                            { onClick: this.onButtonClickMinus.bind(this), name: "mlodziez", value: mlodziez },
                                            " - "
                                        ),
                                        " "
                                    ),
                                    React.createElement(
                                        "td",
                                        null,
                                        mlodziez,
                                        " "
                                    ),
                                    React.createElement(
                                        "td",
                                        null,
                                        " ",
                                        React.createElement(
                                            "button",
                                            { onClick: this.onButtonClickPlus.bind(this), name: "mlodziez", value: mlodziez },
                                            " + "
                                        ),
                                        " "
                                    )
                                ),
                                React.createElement(
                                    "tr",
                                    null,
                                    React.createElement(
                                        "td",
                                        null,
                                        " samoch\xF3d"
                                    ),
                                    React.createElement(
                                        "td",
                                        null,
                                        React.createElement(
                                            "strong",
                                            null,
                                            autoPrice,
                                            " z\u0142 "
                                        )
                                    ),
                                    React.createElement(
                                        "td",
                                        null,
                                        "  ",
                                        React.createElement(
                                            "button",
                                            { onClick: this.onButtonClickMinus.bind(this), name: "auto", value: auto },
                                            " - "
                                        ),
                                        " "
                                    ),
                                    React.createElement(
                                        "td",
                                        null,
                                        auto,
                                        " "
                                    ),
                                    React.createElement(
                                        "td",
                                        null,
                                        " ",
                                        React.createElement(
                                            "button",
                                            { onClick: this.onButtonClickPlus.bind(this), name: "auto", value: auto },
                                            " + "
                                        ),
                                        " "
                                    )
                                ),
                                React.createElement(
                                    "tr",
                                    null,
                                    React.createElement(
                                        "td",
                                        null,
                                        "bus /van sypialny"
                                    ),
                                    React.createElement(
                                        "td",
                                        null,
                                        React.createElement(
                                            "strong",
                                            null,
                                            busPrice,
                                            " z\u0142 "
                                        )
                                    ),
                                    React.createElement(
                                        "td",
                                        null,
                                        "  ",
                                        React.createElement(
                                            "button",
                                            { onClick: this.onButtonClickMinus.bind(this), name: "bus", value: bus },
                                            " - "
                                        ),
                                        " "
                                    ),
                                    React.createElement(
                                        "td",
                                        null,
                                        bus,
                                        " "
                                    ),
                                    React.createElement(
                                        "td",
                                        null,
                                        " ",
                                        React.createElement(
                                            "button",
                                            { onClick: this.onButtonClickPlus.bind(this), name: "bus", value: bus },
                                            " + "
                                        ),
                                        " "
                                    )
                                ),
                                React.createElement(
                                    "tr",
                                    null,
                                    React.createElement(
                                        "td",
                                        null,
                                        "energia"
                                    ),
                                    React.createElement(
                                        "td",
                                        null,
                                        React.createElement(
                                            "strong",
                                            null,
                                            energiaPrice,
                                            " z\u0142"
                                        )
                                    ),
                                    React.createElement(
                                        "td",
                                        null,
                                        "  ",
                                        React.createElement(
                                            "button",
                                            { onClick: this.onButtonClickMinus.bind(this), name: "energia", value: energia },
                                            " - "
                                        ),
                                        " "
                                    ),
                                    React.createElement(
                                        "td",
                                        null,
                                        energia,
                                        " "
                                    ),
                                    React.createElement(
                                        "td",
                                        null,
                                        " ",
                                        React.createElement(
                                            "button",
                                            { onClick: this.onButtonClickPlus.bind(this), name: "energia", value: energia },
                                            " + "
                                        ),
                                        " "
                                    )
                                ),
                                React.createElement(
                                    "tr",
                                    null,
                                    React.createElement(
                                        "td",
                                        null,
                                        " przyczepa z przedsionkiem"
                                    ),
                                    React.createElement(
                                        "td",
                                        null,
                                        React.createElement(
                                            "strong",
                                            null,
                                            " ",
                                            przyczepaPrice,
                                            " z\u0142"
                                        )
                                    ),
                                    React.createElement(
                                        "td",
                                        null,
                                        "  ",
                                        React.createElement(
                                            "button",
                                            { onClick: this.onButtonClickMinus.bind(this), name: "przyczepa", value: przyczepa },
                                            " - "
                                        ),
                                        " "
                                    ),
                                    React.createElement(
                                        "td",
                                        null,
                                        przyczepa,
                                        " "
                                    ),
                                    React.createElement(
                                        "td",
                                        null,
                                        " ",
                                        React.createElement(
                                            "button",
                                            { onClick: this.onButtonClickPlus.bind(this), name: "przyczepa", value: przyczepa },
                                            " + "
                                        ),
                                        " "
                                    )
                                ),
                                React.createElement(
                                    "tr",
                                    null,
                                    React.createElement(
                                        "td",
                                        null,
                                        " autocaravan"
                                    ),
                                    React.createElement(
                                        "td",
                                        null,
                                        React.createElement(
                                            "strong",
                                            null,
                                            camperPrice,
                                            " z\u0142 "
                                        )
                                    ),
                                    React.createElement(
                                        "td",
                                        null,
                                        "  ",
                                        React.createElement(
                                            "button",
                                            { onClick: this.onButtonClickMinus.bind(this), name: "camper", value: camper },
                                            " - "
                                        ),
                                        " "
                                    ),
                                    React.createElement(
                                        "td",
                                        null,
                                        camper,
                                        " "
                                    ),
                                    React.createElement(
                                        "td",
                                        null,
                                        " ",
                                        React.createElement(
                                            "button",
                                            { onClick: this.onButtonClickPlus.bind(this), name: "camper", value: camper },
                                            " + "
                                        ),
                                        " "
                                    )
                                )
                            )
                        )
                    ),
                    React.createElement(
                        "div",
                        null,
                        React.createElement(
                            "table",
                            { className: "zui-table" },
                            React.createElement(
                                "tbody",
                                null,
                                React.createElement(
                                    "tr",
                                    null,
                                    React.createElement(
                                        "td",
                                        null,
                                        "namiot 2 osobowy"
                                    ),
                                    React.createElement(
                                        "td",
                                        null,
                                        React.createElement(
                                            "strong",
                                            null,
                                            namiot2Price,
                                            " z\u0142 "
                                        )
                                    ),
                                    React.createElement(
                                        "td",
                                        null,
                                        "  ",
                                        React.createElement(
                                            "button",
                                            { onClick: this.onButtonClickMinus.bind(this), name: "namiot2", value: namiot2 },
                                            " - "
                                        ),
                                        " "
                                    ),
                                    React.createElement(
                                        "td",
                                        null,
                                        namiot2,
                                        " "
                                    ),
                                    React.createElement(
                                        "td",
                                        null,
                                        " ",
                                        React.createElement(
                                            "button",
                                            { onClick: this.onButtonClickPlus.bind(this), name: "namiot2", value: namiot2 },
                                            " + "
                                        ),
                                        " "
                                    )
                                ),
                                React.createElement(
                                    "tr",
                                    null,
                                    React.createElement(
                                        "td",
                                        null,
                                        "namiot 3,4 osobowy"
                                    ),
                                    React.createElement(
                                        "td",
                                        null,
                                        React.createElement(
                                            "strong",
                                            null,
                                            namiot4Price,
                                            " z\u0142 "
                                        )
                                    ),
                                    React.createElement(
                                        "td",
                                        null,
                                        "  ",
                                        React.createElement(
                                            "button",
                                            { onClick: this.onButtonClickMinus.bind(this), name: "namiot4", value: namiot4 },
                                            " - "
                                        ),
                                        " "
                                    ),
                                    React.createElement(
                                        "td",
                                        null,
                                        namiot4,
                                        " "
                                    ),
                                    React.createElement(
                                        "td",
                                        null,
                                        " ",
                                        React.createElement(
                                            "button",
                                            { onClick: this.onButtonClickPlus.bind(this), name: "namiot4", value: namiot4 },
                                            " + "
                                        ),
                                        " "
                                    )
                                ),
                                React.createElement(
                                    "tr",
                                    null,
                                    React.createElement(
                                        "td",
                                        null,
                                        "namiot 5,6 osobowy"
                                    ),
                                    React.createElement(
                                        "td",
                                        null,
                                        React.createElement(
                                            "strong",
                                            null,
                                            namiot6Price,
                                            " z\u0142 "
                                        )
                                    ),
                                    React.createElement(
                                        "td",
                                        null,
                                        "  ",
                                        React.createElement(
                                            "button",
                                            { onClick: this.onButtonClickMinus.bind(this), name: "namiot6", value: namiot6 },
                                            " - "
                                        ),
                                        " "
                                    ),
                                    React.createElement(
                                        "td",
                                        null,
                                        namiot6,
                                        " "
                                    ),
                                    React.createElement(
                                        "td",
                                        null,
                                        " ",
                                        React.createElement(
                                            "button",
                                            { onClick: this.onButtonClickPlus.bind(this), name: "namiot6", value: namiot6 },
                                            " + "
                                        ),
                                        " "
                                    )
                                ),
                                React.createElement(
                                    "tr",
                                    null,
                                    React.createElement(
                                        "td",
                                        null,
                                        "motocykl"
                                    ),
                                    React.createElement(
                                        "td",
                                        null,
                                        React.createElement(
                                            "strong",
                                            null,
                                            motorPrice,
                                            " z\u0142"
                                        )
                                    ),
                                    React.createElement(
                                        "td",
                                        null,
                                        "  ",
                                        React.createElement(
                                            "button",
                                            { onClick: this.onButtonClickMinus.bind(this), name: "motor", value: motor },
                                            " - "
                                        ),
                                        " "
                                    ),
                                    React.createElement(
                                        "td",
                                        null,
                                        motor,
                                        " "
                                    ),
                                    React.createElement(
                                        "td",
                                        null,
                                        " ",
                                        React.createElement(
                                            "button",
                                            { onClick: this.onButtonClickPlus.bind(this), name: "motor", value: motor },
                                            " + "
                                        ),
                                        " "
                                    )
                                ),
                                React.createElement(
                                    "tr",
                                    null,
                                    React.createElement(
                                        "td",
                                        null,
                                        " pies,zwierz\u0119ta domowe"
                                    ),
                                    React.createElement(
                                        "td",
                                        null,
                                        React.createElement(
                                            "strong",
                                            null,
                                            piesPrice,
                                            " z\u0142 "
                                        )
                                    ),
                                    React.createElement(
                                        "td",
                                        null,
                                        "  ",
                                        React.createElement(
                                            "button",
                                            { onClick: this.onButtonClickMinus.bind(this), name: "pies", value: pies },
                                            " - "
                                        ),
                                        " "
                                    ),
                                    React.createElement(
                                        "td",
                                        null,
                                        pies,
                                        " "
                                    ),
                                    React.createElement(
                                        "td",
                                        null,
                                        " ",
                                        React.createElement(
                                            "button",
                                            { onClick: this.onButtonClickPlus.bind(this), name: "pies", value: pies },
                                            " + "
                                        ),
                                        " "
                                    )
                                ),
                                React.createElement(
                                    "tr",
                                    null,
                                    React.createElement(
                                        "td",
                                        null,
                                        "altanka, pawilon ogrodowy"
                                    ),
                                    React.createElement(
                                        "td",
                                        null,
                                        React.createElement(
                                            "strong",
                                            null,
                                            altanaPrice,
                                            " z\u0142"
                                        )
                                    ),
                                    React.createElement(
                                        "td",
                                        null,
                                        "  ",
                                        React.createElement(
                                            "button",
                                            { onClick: this.onButtonClickMinus.bind(this), name: "altana", value: altana },
                                            " - "
                                        ),
                                        " "
                                    ),
                                    React.createElement(
                                        "td",
                                        null,
                                        altana,
                                        " "
                                    ),
                                    React.createElement(
                                        "td",
                                        null,
                                        " ",
                                        React.createElement(
                                            "button",
                                            { onClick: this.onButtonClickPlus.bind(this), name: "altana", value: altana },
                                            " + "
                                        ),
                                        " "
                                    )
                                ),
                                React.createElement(
                                    "tr",
                                    null,
                                    React.createElement(
                                        "td",
                                        null,
                                        "Ilo\u015B\u0107 dni pobytu ?"
                                    ),
                                    React.createElement(
                                        "td",
                                        null,
                                        " "
                                    ),
                                    React.createElement(
                                        "td",
                                        null,
                                        "  ",
                                        React.createElement(
                                            "button",
                                            { onClick: this.onButtonClickMinus.bind(this), name: "numbDays", value: numbDays },
                                            " - "
                                        ),
                                        " "
                                    ),
                                    React.createElement(
                                        "td",
                                        null,
                                        numbDays,
                                        " "
                                    ),
                                    React.createElement(
                                        "td",
                                        null,
                                        " ",
                                        React.createElement(
                                            "button",
                                            { onClick: this.onButtonClickPlus.bind(this), name: "numbDays", value: numbDays },
                                            " + "
                                        ),
                                        " "
                                    )
                                ),
                                React.createElement(
                                    "tr",
                                    null,
                                    React.createElement(
                                        "td",
                                        null,
                                        React.createElement(
                                            "em",
                                            null,
                                            "Op\u0142ata miejscowa za osob\u0119 "
                                        )
                                    ),
                                    React.createElement(
                                        "td",
                                        { colSpan: 4 },
                                        React.createElement(
                                            "strong",
                                            null,
                                            "\xA0  ",
                                            taxa,
                                            " z\u0142 "
                                        )
                                    )
                                ),
                                React.createElement(
                                    "tr",
                                    null,
                                    React.createElement(
                                        "td",
                                        null,
                                        "Cena za dob\u0119"
                                    ),
                                    React.createElement(
                                        "td",
                                        { colSpan: 4 },
                                        " ",
                                        dayPrice
                                    )
                                ),
                                React.createElement(
                                    "tr",
                                    null,
                                    React.createElement(
                                        "td",
                                        null,
                                        "Cena za ca\u0142y pobyt"
                                    ),
                                    React.createElement(
                                        "td",
                                        { colSpan: 4 },
                                        " ",
                                        allPrice
                                    )
                                )
                            )
                        )
                    )
                )
            );
        }
    }]);

    return Main;
}(Component);

export default Main;