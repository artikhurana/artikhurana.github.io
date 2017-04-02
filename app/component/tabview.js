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
var core_1 = require("@angular/core");
var http_1 = require('@angular/http');
var overlay_1 = require('./overlay/overlay');
var utils_1 = require('./utils');
var artist_details_1 = require('./artist-details');
var TabView = (function () {
    function TabView(componentFactoryResolver, jsonp, utils) {
        this.componentFactoryResolver = componentFactoryResolver;
        this.url = 'http://itunes.apple.com/search';
        this.loader = false;
        this.childComponent = this.componentFactoryResolver.resolveComponentFactory(overlay_1.Overlay);
        this._jsonp = jsonp;
        this._utils = utils;
    }
    TabView.prototype.ngOnInit = function () {
    };
    TabView.prototype.selectTab = function (item) {
        if (this.activeItem) {
            this.activeItem.active = false;
        }
        item.active = true;
        this.activeItem = item;
        this.loadData(item.artistName);
    };
    TabView.prototype.onSubmitClick = function (event) {
        var _this = this;
        console.log('Hello');
        var cmpRef = this.target.createComponent(this.childComponent);
        this.clearTab();
        cmpRef.instance['response'].subscribe(function (res) {
            console.log(res);
            _this.data = res.data;
            if (_this.data.length > 0) {
                _this.selectTab(_this.data[0]);
            }
        });
    };
    TabView.prototype.loadData = function (name) {
        var _this = this;
        var params = {
            'limit': 1,
            'callback': 'JSONP_CALLBACK',
            'term': encodeURIComponent(name)
        };
        this.loader = true;
        this._jsonp.get(this.url, {
            search: this._utils.buildSubmitString(params)
        }).subscribe(function (res) {
            var result = res.json().results[0];
            _this.loader = false;
            console.log(res);
            _this.artistDetail = new artist_details_1.ArtistDetail();
            _this.artistDetail.collectionName = result.artistName;
            _this.artistDetail.description = result.longDescription;
            _this.artistDetail.image = result.artworkUrl100;
            _this.artistDetail.previewURL = result.previewUrl;
            _this.artistDetail.price = result.trackPrice;
            _this.artistDetail.trackName = result.trackName;
        });
    };
    TabView.prototype.clearTab = function () {
        this.data = [];
        this.artistDetail = null;
    };
    __decorate([
        core_1.ViewChild('parent', { read: core_1.ViewContainerRef }), 
        __metadata('design:type', (typeof (_a = typeof core_1.ViewContainerRef !== 'undefined' && core_1.ViewContainerRef) === 'function' && _a) || Object)
    ], TabView.prototype, "target", void 0);
    TabView = __decorate([
        core_1.Component({
            selector: 'tabview',
            moduleId: module.id,
            templateUrl: './tabview.html',
            styleUrls: ['./tabview.css']
        }), 
        __metadata('design:paramtypes', [(typeof (_b = typeof core_1.ComponentFactoryResolver !== 'undefined' && core_1.ComponentFactoryResolver) === 'function' && _b) || Object, (typeof (_c = typeof http_1.Jsonp !== 'undefined' && http_1.Jsonp) === 'function' && _c) || Object, utils_1.Utils])
    ], TabView);
    return TabView;
    var _a, _b, _c;
}());
exports.TabView = TabView;
//# sourceMappingURL=tabview.js.map