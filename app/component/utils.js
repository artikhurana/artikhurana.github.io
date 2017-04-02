"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var Utils = (function () {
    function Utils() {
    }
    /**
     * Method to override jquery params behaviour space as apple doesnt accept space as %2520
     *
     * @param {*} params
     * @returns {string}
     *
     * @memberOf Utils
     */
    Utils.prototype.buildSubmitString = function (params) {
        return decodeURIComponent(decodeURIComponent($.param(params)));
    };
    ;
    Utils = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], Utils);
    return Utils;
}());
exports.Utils = Utils;
//# sourceMappingURL=utils.js.map