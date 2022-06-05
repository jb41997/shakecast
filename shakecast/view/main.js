(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"app/shakecast-admin/shakecast-admin.module": [
		"./src/app/shakecast-admin/shakecast-admin.module.ts",
		"app-shakecast-admin-shakecast-admin-module"
	],
	"app/shakecast/shakecast.module": [
		"./src/app/shakecast/shakecast.module.ts",
		"app-shakecast-shakecast-module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return __webpack_require__.e(ids[1]).then(function() {
		var id = ids[0];
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\r\n    font-family: Arial;\r\n    color: #444444;\r\n}\r\n\r\n.stick-to-top {\r\n    position: fixed;\r\n    top: 0;\r\n    width: 100%;\r\n    z-index: 500;\r\n}\r\n\r\nbody {\r\n    margin: 0;\r\n}\r\n\r\nhtml, body\r\n{\r\n    height: 100%;\r\n}\r\n\r\n/* For Tables */\r\n\r\n.my-table th, .my-table td {\r\n    text-align: left;\r\n    padding: 5px;\r\n    border-bottom: 1px solid #ddd;\r\n}\r\n\r\n.col-1 {\r\n    width: 8.33%;\r\n    display: inline-block;\r\n}\r\n\r\n.col-2 {\r\n    width: 16.66%;\r\n    display: inline-block;\r\n}\r\n\r\n.col-3 {\r\n    width: 25%;\r\n    display: inline-block;\r\n}\r\n\r\n.col-4 {\r\n    width: 33.33%;\r\n    display: inline-block;\r\n}\r\n\r\n.col-5 {\r\n    width: 41.66%;\r\n    display: inline-block;\r\n}\r\n\r\n.col-6 {\r\n    width: 50%;\r\n    display: inline-block;\r\n}\r\n\r\n.col-7 {\r\n    width: 58.33%;\r\n    display: inline-block;\r\n}\r\n\r\n.col-8 {\r\n    width: 66.66%;\r\n    display: inline-block;\r\n}\r\n\r\n.col-9 {\r\n    width: 75%;\r\n    display: inline-block;\r\n}\r\n\r\n.col-10 {\r\n    width: 83.33%;\r\n    display: inline-block;\r\n}\r\n\r\n.col-11 {\r\n    width: 91.66%;\r\n    display: inline-block;\r\n}\r\n\r\n.col-12 {\r\n    width: 100%;\r\n    display: inline-block;\r\n}\r\n\r\n.router-buffer {\r\n    width:100%;\r\n    height: 100px;\r\n}\r\n\r\n.button {\r\n    display: inline-block;\r\n    border: 3px solid #55aaee;\r\n    background: #ffffff;\r\n    margin: 5px;\r\n    padding: 5px;\r\n    cursor: pointer;\r\n    border-radius: 5px;\r\n    box-shadow: 1px 1px 3px 1px rgba(0,0,0,0.3);\r\n    -webkit-box-shadow: 1px 1px 3px 1px rgba(0,0,0,0.3);\r\n    -moz-box-shadow: 1px 1px 3px 1px rgba(0,0,0,0.3);\r\n}\r\n\r\n.button:hover {\r\n    background: #55aaee;\r\n    color: #ffffff;\r\n    box-shadow: 1px 1px 4px 2px rgba(0,0,0,0.3);\r\n    -webkit-box-shadow: 1px 1px 4px 2px rgba(0,0,0,0.3);\r\n    -moz-box-shadow: 1px 1px 4px 2px rgba(0,0,0,0.3);\r\n}\r\n\r\n.the-view {\r\n    min-height: 100vh;\r\n}\r\n\r\n.shaking-table:hover th {\r\n  opacity: 1;\r\n}\r\n\r\n.marker-cluster-gray {\r\n    background: rgba(127,127,127,.7)\r\n}\r\n\r\n.marker-cluster-gray div {\r\n    background: rgba(127,127,127,.9)\r\n}\r\n\r\n.marker-cluster-green {\r\n    background: rgba(0,127,0,.7)\r\n}\r\n\r\n.marker-cluster-green div {\r\n    background: rgba(0,127,0,.9)\r\n}\r\n\r\n.marker-cluster-yellow {\r\n    background: rgba(255,215,0,.7)\r\n}\r\n\r\n.marker-cluster-yellow div {\r\n    background: rgba(255,215,0,.9)\r\n}\r\n\r\n.marker-cluster-orange {\r\n    background: rgba(255,165,0,.7)\r\n}\r\n\r\n.marker-cluster-orange div {\r\n    background: rgba(255,165,0,.9)\r\n}\r\n\r\n.marker-cluster-red {\r\n    background: rgba(255,0,0,.7)\r\n}\r\n\r\n.marker-cluster-red div {\r\n    background: rgba(255,0,0,.9)\r\n}\r\n\r\n.marker-cluster span {\r\n    color: white;\r\n    font-weight: bold;\r\n}\r\n\r\np a {\r\n    color: #55aaee\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIsY0FBYztBQUNsQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixNQUFNO0lBQ04sV0FBVztJQUNYLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxTQUFTO0FBQ2I7O0FBRUE7O0lBRUksWUFBWTtBQUNoQjs7QUFFQSxlQUFlOztBQUNmO0lBQ0ksZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWiw2QkFBNkI7QUFDakM7O0FBRUE7SUFDSSxZQUFZO0lBQ1oscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLFVBQVU7SUFDVixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLFVBQVU7SUFDVixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLFVBQVU7SUFDVixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQix5QkFBeUI7SUFDekIsbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCxZQUFZO0lBQ1osZUFBZTtJQUNmLGtCQUFrQjtJQUNsQiwyQ0FBMkM7SUFDM0MsbURBQW1EO0lBQ25ELGdEQUFnRDtBQUNwRDs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixjQUFjO0lBQ2QsMkNBQTJDO0lBQzNDLG1EQUFtRDtJQUNuRCxnREFBZ0Q7QUFDcEQ7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7SUFDSTtBQUNKOztBQUVBO0lBQ0k7QUFDSjs7QUFFQTtJQUNJO0FBQ0o7O0FBRUE7SUFDSTtBQUNKOztBQUVBO0lBQ0k7QUFDSjs7QUFFQTtJQUNJO0FBQ0o7O0FBRUE7SUFDSTtBQUNKOztBQUVBO0lBQ0k7QUFDSjs7QUFFQTtJQUNJO0FBQ0o7O0FBRUE7SUFDSTtBQUNKOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIioge1xyXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsO1xyXG4gICAgY29sb3I6ICM0NDQ0NDQ7XHJcbn1cclxuXHJcbi5zdGljay10by10b3Age1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICB6LWluZGV4OiA1MDA7XHJcbn1cclxuXHJcbmJvZHkge1xyXG4gICAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG5odG1sLCBib2R5XHJcbntcclxuICAgIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLyogRm9yIFRhYmxlcyAqL1xyXG4ubXktdGFibGUgdGgsIC5teS10YWJsZSB0ZCB7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZGQ7XHJcbn1cclxuXHJcbi5jb2wtMSB7XHJcbiAgICB3aWR0aDogOC4zMyU7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn1cclxuXHJcbi5jb2wtMiB7XHJcbiAgICB3aWR0aDogMTYuNjYlO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcblxyXG4uY29sLTMge1xyXG4gICAgd2lkdGg6IDI1JTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufVxyXG5cclxuLmNvbC00IHtcclxuICAgIHdpZHRoOiAzMy4zMyU7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn1cclxuXHJcbi5jb2wtNSB7XHJcbiAgICB3aWR0aDogNDEuNjYlO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcblxyXG4uY29sLTYge1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufVxyXG5cclxuLmNvbC03IHtcclxuICAgIHdpZHRoOiA1OC4zMyU7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn1cclxuXHJcbi5jb2wtOCB7XHJcbiAgICB3aWR0aDogNjYuNjYlO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcblxyXG4uY29sLTkge1xyXG4gICAgd2lkdGg6IDc1JTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufVxyXG5cclxuLmNvbC0xMCB7XHJcbiAgICB3aWR0aDogODMuMzMlO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcblxyXG4uY29sLTExIHtcclxuICAgIHdpZHRoOiA5MS42NiU7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn1cclxuXHJcbi5jb2wtMTIge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn1cclxuXHJcbi5yb3V0ZXItYnVmZmVyIHtcclxuICAgIHdpZHRoOjEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMHB4O1xyXG59XHJcblxyXG4uYnV0dG9uIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGJvcmRlcjogM3B4IHNvbGlkICM1NWFhZWU7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG4gICAgbWFyZ2luOiA1cHg7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBib3gtc2hhZG93OiAxcHggMXB4IDNweCAxcHggcmdiYSgwLDAsMCwwLjMpO1xyXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAxcHggMXB4IDNweCAxcHggcmdiYSgwLDAsMCwwLjMpO1xyXG4gICAgLW1vei1ib3gtc2hhZG93OiAxcHggMXB4IDNweCAxcHggcmdiYSgwLDAsMCwwLjMpO1xyXG59XHJcblxyXG4uYnV0dG9uOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQ6ICM1NWFhZWU7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgIGJveC1zaGFkb3c6IDFweCAxcHggNHB4IDJweCByZ2JhKDAsMCwwLDAuMyk7XHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDFweCAxcHggNHB4IDJweCByZ2JhKDAsMCwwLDAuMyk7XHJcbiAgICAtbW96LWJveC1zaGFkb3c6IDFweCAxcHggNHB4IDJweCByZ2JhKDAsMCwwLDAuMyk7XHJcbn1cclxuXHJcbi50aGUtdmlldyB7XHJcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcclxufVxyXG5cclxuLnNoYWtpbmctdGFibGU6aG92ZXIgdGgge1xyXG4gIG9wYWNpdHk6IDE7XHJcbn1cclxuXHJcbi5tYXJrZXItY2x1c3Rlci1ncmF5IHtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMTI3LDEyNywxMjcsLjcpXHJcbn1cclxuXHJcbi5tYXJrZXItY2x1c3Rlci1ncmF5IGRpdiB7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDEyNywxMjcsMTI3LC45KVxyXG59XHJcblxyXG4ubWFya2VyLWNsdXN0ZXItZ3JlZW4ge1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgwLDEyNywwLC43KVxyXG59XHJcblxyXG4ubWFya2VyLWNsdXN0ZXItZ3JlZW4gZGl2IHtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwxMjcsMCwuOSlcclxufVxyXG5cclxuLm1hcmtlci1jbHVzdGVyLXllbGxvdyB7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwyMTUsMCwuNylcclxufVxyXG5cclxuLm1hcmtlci1jbHVzdGVyLXllbGxvdyBkaXYge1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgyNTUsMjE1LDAsLjkpXHJcbn1cclxuXHJcbi5tYXJrZXItY2x1c3Rlci1vcmFuZ2Uge1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgyNTUsMTY1LDAsLjcpXHJcbn1cclxuXHJcbi5tYXJrZXItY2x1c3Rlci1vcmFuZ2UgZGl2IHtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LDE2NSwwLC45KVxyXG59XHJcblxyXG4ubWFya2VyLWNsdXN0ZXItcmVkIHtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LDAsMCwuNylcclxufVxyXG5cclxuLm1hcmtlci1jbHVzdGVyLXJlZCBkaXYge1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgyNTUsMCwwLC45KVxyXG59XHJcblxyXG4ubWFya2VyLWNsdXN0ZXIgc3BhbiB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxucCBhIHtcclxuICAgIGNvbG9yOiAjNTVhYWVlXHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"router.url.indexOf('/shakecast') >= 0\">\r\n    <navbar></navbar>\r\n    <page-title></page-title>\r\n</div>\r\n<div class=\"router-buffer\">\r\n</div>\r\n\r\n<div class=\"the-view\">\r\n    <router-outlet></router-outlet>\r\n</div>\r\n\r\n<messaging></messaging>\r\n\r\n<simple-notifications [options]=\"options\"></simple-notifications>\r\n\r\n<screen-dimmer></screen-dimmer>\r\n\r\n<loading-comp></loading-comp>\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/user.service */ "./src/app/core/user.service.ts");




var AppComponent = /** @class */ (function () {
    function AppComponent(userService, router) {
        this.userService = userService;
        this.router = router;
        this.options = {
            timeOut: 4000,
            lastOnBottom: true,
            clickToClose: true,
            maxLength: 0,
            maxStack: 7,
            showProgressBar: false,
            pauseOnHover: true
        };
        this.userService.getUser();
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var angular2_notifications__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular2-notifications */ "./node_modules/angular2-notifications/angular2-notifications.umd.js");
/* harmony import */ var angular2_notifications__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(angular2_notifications__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.routing */ "./src/app/app.routing.ts");
/* harmony import */ var _login_login_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./login/login.module */ "./src/app/login/login.module.ts");
/* harmony import */ var _nav_nav_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./nav/nav.component */ "./src/app/nav/nav.component.ts");
/* harmony import */ var _title_title_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./title/title.component */ "./src/app/title/title.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _messaging_messaging_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./messaging/messaging.component */ "./src/app/messaging/messaging.component.ts");
/* harmony import */ var _loading_loading_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./loading/loading.component */ "./src/app/loading/loading.component.ts");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @core/core.module */ "./src/app/core/core.module.ts");
















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                _core_core_module__WEBPACK_IMPORTED_MODULE_15__["CoreModule"].forRoot(),
                angular2_notifications__WEBPACK_IMPORTED_MODULE_6__["SimpleNotificationsModule"].forRoot(),
                _app_routing__WEBPACK_IMPORTED_MODULE_8__["routing"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_4__["JsonpModule"],
                _login_login_module__WEBPACK_IMPORTED_MODULE_9__["LoginModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_12__["SharedModule"]
            ],
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _nav_nav_component__WEBPACK_IMPORTED_MODULE_10__["NavComponent"],
                _title_title_component__WEBPACK_IMPORTED_MODULE_11__["TitleComponent"],
                _messaging_messaging_component__WEBPACK_IMPORTED_MODULE_13__["MessagingComponent"],
                _loading_loading_component__WEBPACK_IMPORTED_MODULE_14__["LoadingComponent"]
            ],
            providers: [
                _app_routing__WEBPACK_IMPORTED_MODULE_8__["appRoutingProviders"],
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.ts":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: appRoutingProviders, routing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appRoutingProviders", function() { return appRoutingProviders; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routing", function() { return routing; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shakecast_shakecast_routing__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shakecast/shakecast.routing */ "./src/app/shakecast/shakecast.routing.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _shakecast_admin_shakecast_admin_routing__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shakecast-admin/shakecast-admin.routing */ "./src/app/shakecast-admin/shakecast-admin.routing.ts");
/* harmony import */ var _auth_login_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth/login.guard */ "./src/app/auth/login.guard.ts");
/* harmony import */ var _auth_admin_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./auth/admin.guard */ "./src/app/auth/admin.guard.ts");






var appRoutes = _shakecast_shakecast_routing__WEBPACK_IMPORTED_MODULE_1__["shakecastRoutes"].concat(_shakecast_admin_shakecast_admin_routing__WEBPACK_IMPORTED_MODULE_3__["shakecastAdminRoutes"], [
    {
        path: 'login',
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"]
    }
]);
var appRoutingProviders = [
    _auth_login_guard__WEBPACK_IMPORTED_MODULE_4__["LoginGuard"],
    _auth_admin_guard__WEBPACK_IMPORTED_MODULE_5__["AdminGuard"]
];
var routing = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(appRoutes);


/***/ }),

/***/ "./src/app/auth/admin.guard.ts":
/*!*************************************!*\
  !*** ./src/app/auth/admin.guard.ts ***!
  \*************************************/
/*! exports provided: AdminGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminGuard", function() { return AdminGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/user.service */ "./src/app/core/user.service.ts");
/* harmony import */ var angular2_notifications__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular2-notifications */ "./node_modules/angular2-notifications/angular2-notifications.umd.js");
/* harmony import */ var angular2_notifications__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(angular2_notifications__WEBPACK_IMPORTED_MODULE_4__);





var AdminGuard = /** @class */ (function () {
    function AdminGuard(user, router, notService) {
        this.user = user;
        this.router = router;
        this.notService = notService;
    }
    AdminGuard.prototype.canActivate = function (route, state) {
        console.log('AdminGuard#canActivate called');
        if (this.user.user$.value.user_type === 'ADMIN') {
            return true;
        }
        // not logged in so redirect to login page
        this.notService.error('Admin', 'Login as an admin to access this page', { setTimeout: 5000 });
        this.router.navigate(['/shakecast/dashboard']);
    };
    AdminGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            angular2_notifications__WEBPACK_IMPORTED_MODULE_4__["NotificationsService"]])
    ], AdminGuard);
    return AdminGuard;
}());



/***/ }),

/***/ "./src/app/auth/login.guard.ts":
/*!*************************************!*\
  !*** ./src/app/auth/login.guard.ts ***!
  \*************************************/
/*! exports provided: LoginGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginGuard", function() { return LoginGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/user.service */ "./src/app/core/user.service.ts");




var LoginGuard = /** @class */ (function () {
    function LoginGuard(userService, router) {
        this.userService = userService;
        this.router = router;
    }
    LoginGuard.prototype.canActivate = function (route, state) {
        if (this.userService.user$.value) {
            return true;
        }
        // not logged in so redirect to login page
        this.router.navigate(['/login']);
        return false;
    };
    LoginGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], LoginGuard);
    return LoginGuard;
}());



/***/ }),

/***/ "./src/app/core/cookie.service.ts":
/*!****************************************!*\
  !*** ./src/app/core/cookie.service.ts ***!
  \****************************************/
/*! exports provided: CookieService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CookieService", function() { return CookieService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CookieService = /** @class */ (function () {
    function CookieService() {
    }
    CookieService.prototype.setCookie = function (cname, cvalue, exdays) {
        if (exdays === void 0) { exdays = 1; }
        var d = new Date();
        d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
        var expires = "expires=" + d.toUTCString();
        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    };
    CookieService.prototype.getCookie = function (cname) {
        var name = cname + "=";
        var ca = document.cookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    };
    CookieService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CookieService);
    return CookieService;
}());



/***/ }),

/***/ "./src/app/core/core.module.ts":
/*!*************************************!*\
  !*** ./src/app/core/core.module.ts ***!
  \*************************************/
/*! exports provided: CoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return CoreModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angular2_notifications__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular2-notifications */ "./node_modules/angular2-notifications/angular2-notifications.umd.js");
/* harmony import */ var angular2_notifications__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angular2_notifications__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _title_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./title.service */ "./src/app/core/title.service.ts");
/* harmony import */ var _group_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./group.service */ "./src/app/core/group.service.ts");
/* harmony import */ var _users_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./users.service */ "./src/app/core/users.service.ts");
/* harmony import */ var _time_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./time.service */ "./src/app/core/time.service.ts");
/* harmony import */ var _panel_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./panel.service */ "./src/app/core/panel.service.ts");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./user.service */ "./src/app/core/user.service.ts");
/* harmony import */ var _earthquake_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./earthquake.service */ "./src/app/core/earthquake.service.ts");
/* harmony import */ var _facility_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./facility.service */ "./src/app/core/facility.service.ts");
/* harmony import */ var _notification_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./notification.service */ "./src/app/core/notification.service.ts");
/* harmony import */ var _map_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./map.service */ "./src/app/core/map.service.ts");
/* harmony import */ var _screen_dimmer_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./screen-dimmer.service */ "./src/app/core/screen-dimmer.service.ts");
/* harmony import */ var _stick_to_top_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./stick-to-top.service */ "./src/app/core/stick-to-top.service.ts");
/* harmony import */ var _messages_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./messages.service */ "./src/app/core/messages.service.ts");
/* harmony import */ var _cookie_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./cookie.service */ "./src/app/core/cookie.service.ts");
/* harmony import */ var _loading_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./loading.service */ "./src/app/core/loading.service.ts");



















var CoreModule = /** @class */ (function () {
    function CoreModule() {
    }
    CoreModule_1 = CoreModule;
    CoreModule.forRoot = function () {
        return {
            ngModule: CoreModule_1,
            providers: [
                _notification_service__WEBPACK_IMPORTED_MODULE_12__["NotificationService"],
                angular2_notifications__WEBPACK_IMPORTED_MODULE_3__["NotificationsService"],
                _title_service__WEBPACK_IMPORTED_MODULE_4__["TitleService"],
                _group_service__WEBPACK_IMPORTED_MODULE_5__["GroupService"],
                _users_service__WEBPACK_IMPORTED_MODULE_6__["UsersService"],
                _time_service__WEBPACK_IMPORTED_MODULE_7__["TimeService"],
                _panel_service__WEBPACK_IMPORTED_MODULE_8__["PanelService"],
                _user_service__WEBPACK_IMPORTED_MODULE_9__["UserService"],
                _earthquake_service__WEBPACK_IMPORTED_MODULE_10__["EarthquakeService"],
                _facility_service__WEBPACK_IMPORTED_MODULE_11__["FacilityService"],
                _map_service__WEBPACK_IMPORTED_MODULE_13__["MapService"],
                _screen_dimmer_service__WEBPACK_IMPORTED_MODULE_14__["ScreenDimmerService"],
                _stick_to_top_service__WEBPACK_IMPORTED_MODULE_15__["StickToTopService"],
                _messages_service__WEBPACK_IMPORTED_MODULE_16__["MessagesService"],
                _cookie_service__WEBPACK_IMPORTED_MODULE_17__["CookieService"],
                _loading_service__WEBPACK_IMPORTED_MODULE_18__["LoadingService"]
            ]
        };
    };
    var CoreModule_1;
    CoreModule = CoreModule_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]
        })
    ], CoreModule);
    return CoreModule;
}());



/***/ }),

/***/ "./src/app/core/earthquake.service.ts":
/*!********************************************!*\
  !*** ./src/app/core/earthquake.service.ts ***!
  \********************************************/
/*! exports provided: EarthquakeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EarthquakeService", function() { return EarthquakeService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core_map_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @core/map.service */ "./src/app/core/map.service.ts");
/* harmony import */ var _core_notification_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @core/notification.service */ "./src/app/core/notification.service.ts");
/* harmony import */ var angular2_notifications__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angular2-notifications */ "./node_modules/angular2-notifications/angular2-notifications.umd.js");
/* harmony import */ var angular2_notifications__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(angular2_notifications__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _core_facility_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @core/facility.service */ "./src/app/core/facility.service.ts");
/* harmony import */ var _core_loading_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @core/loading.service */ "./src/app/core/loading.service.ts");










var EarthquakeService = /** @class */ (function () {
    function EarthquakeService(_http, notService, mapService, facService, _router, toastService, loadingService) {
        this._http = _http;
        this.notService = notService;
        this.mapService = mapService;
        this.facService = facService;
        this._router = _router;
        this.toastService = toastService;
        this.loadingService = loadingService;
        this.earthquakeData = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](null);
        this.dataLoading = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](null);
        this.plotting = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](null);
        this.showScenarioSearch = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](null);
        this.selectEvent = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](null);
        this.current = [];
        this.filter = {
            shakemap: true,
            facilities: false,
            timeframe: 'week'
        };
        this.configs = { clearOnPlot: 'all' };
        this.selected = null;
    }
    EarthquakeService.prototype.getData = function (filter) {
        var _this = this;
        if (filter === void 0) { filter = {}; }
        this.filter = filter;
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('filter', JSON.stringify(filter));
        for (var key in filter) {
            if (filter[key]) {
                params = params.set(key, JSON.stringify(filter[key]));
            }
        }
        this._http.get('api/events', { params: params })
            .subscribe(function (result) {
            _this.earthquakeData.next(result);
            _this.selected = result.features[0];
        }, function (err) {
            _this.toastService.alert('Event Error', 'Unable to retreive some event information');
        });
    };
    EarthquakeService.prototype.clearData = function () {
        this.mapService.clearMap();
    };
    EarthquakeService.prototype.getDataFromWeb = function (filter) {
        var _this = this;
        if (filter === void 0) { filter = {}; }
        if (this.facService.sub) {
            this.facService.sub.unsubscribe();
        }
        this.loadingService.add('Scenarios');
        var scenario = filter['scenariosOnly'];
        var usgs;
        if (scenario) {
            usgs = 'https://earthquake.usgs.gov/fdsnws/scenario/1/query';
        }
        else {
            usgs = 'https://earthquake.usgs.gov/fdsnws/event/1/query';
        }
        filter['format'] = 'geojson';
        // get params from filter
        if (!filter['starttime']) {
            filter['starttime'] = '2005-01-01';
        }
        if (!filter['minmagnitude']) {
            filter['minmagnitude'] = '6';
        }
        // only get events with shakemaps
        if (!scenario) {
            filter['producttype'] = 'shakemap';
        }
        else {
            filter['producttype'] = 'shakemap-scenario';
        }
        // get bounds
        filter['maxlatitude'] = this.mapService.bounds.getNorth();
        filter['minlatitude'] = this.mapService.bounds.getSouth();
        filter['maxlongitude'] = this.mapService.bounds.getEast();
        filter['minlongitude'] = this.mapService.bounds.getWest();
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        for (var search in filter) {
            if ((search !== 'scenariosOnly') && (filter[search])) {
                params = params.set(search, filter[search]);
            }
        }
        this._http.get(usgs, { params: params })
            .subscribe(function (result) {
            // convert from geoJSON to sc conventions
            var data = [];
            if (result.hasOwnProperty('features')) {
                data = _this.geoJsonToSc(result['features']);
            }
            else {
                data = _this.geoJsonToSc([result]);
            }
            for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
                var eq = data_1[_i];
                eq['scenario'] = scenario;
            }
            var geoJson = {
                features: data,
                type: 'FeatureCollection'
            };
            _this.earthquakeData.next(geoJson);
            _this.loadingService.finish('Scenarios');
        }, function (error) {
            _this.earthquakeData.next([]);
            _this.loadingService.finish('Scenarios');
        });
    };
    EarthquakeService.prototype.downloadScenario = function (scenario_id, scenario) {
        var _this = this;
        if (scenario === void 0) { scenario = false; }
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('scenario', JSON.stringify(scenario));
        this._http.get('api/scenario-download/' + scenario_id, { params: params })
            .subscribe(function (result) {
            _this.toastService.success('Scenario: ' + scenario_id, 'Download starting...');
        });
    };
    EarthquakeService.prototype.deleteScenario = function (scenario_id) {
        var _this = this;
        this._http.delete('api/scenario-delete/' + scenario_id)
            .subscribe(function (result) {
            _this.toastService.success('Delete Scenario: ' + scenario_id, 'Deleting... This may take a moment');
        });
    };
    EarthquakeService.prototype.runScenario = function (scenario_id) {
        var _this = this;
        this._http.post('api/scenario-run/' + scenario_id, {})
            .subscribe(function (result) {
            _this.toastService.success('Run Scenario: ' + scenario_id, 'Running Scenario... This may take a moment');
        });
    };
    EarthquakeService.prototype.getFacilityData = function (facility) {
        var _this = this;
        var params_ = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('facility', JSON.stringify(facility['properties']['shakecast_id']));
        this._http.get('api/events', { params: params_ })
            .subscribe(function (result) {
            _this.earthquakeData.next(result.data);
            _this.current = result.data;
        });
    };
    EarthquakeService.prototype.plotEq = function (eq) {
        if (eq) {
            this.selectEvent.next(eq);
        }
        else {
            this.clearData();
        }
    };
    EarthquakeService.prototype.geoJsonToSc = function (geoJson) {
        /*
        Change field names from geoJson events to what we would
        Expect from the ShakeCast database
        */
        for (var _i = 0, geoJson_1 = geoJson; _i < geoJson_1.length; _i++) {
            var eq = geoJson_1[_i];
            eq.properties['shakecast_id'] = null;
            eq.properties['event_id'] = eq['id'];
            eq.properties['magnitude'] = eq['properties']['mag'];
            eq.properties['lon'] = eq['geometry']['coordinates'][0];
            eq.properties['lat'] = eq['geometry']['coordinates'][1];
            eq.properties['depth'] = eq['geometry']['coordinates'][2];
            eq.properties['place'] = eq['properties']['place'];
            if (eq['properties']['types'].indexOf('shakemap') > 0) {
                eq.properties['shakemaps'] = 1;
            }
            else {
                eq.properties['shakemaps'] = 0;
            }
        }
        return geoJson;
    };
    EarthquakeService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _core_notification_service__WEBPACK_IMPORTED_MODULE_6__["NotificationService"],
            _core_map_service__WEBPACK_IMPORTED_MODULE_5__["MapService"],
            _core_facility_service__WEBPACK_IMPORTED_MODULE_8__["FacilityService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            angular2_notifications__WEBPACK_IMPORTED_MODULE_7__["NotificationsService"],
            _core_loading_service__WEBPACK_IMPORTED_MODULE_9__["LoadingService"]])
    ], EarthquakeService);
    return EarthquakeService;
}());



/***/ }),

/***/ "./src/app/core/facility.service.ts":
/*!******************************************!*\
  !*** ./src/app/core/facility.service.ts ***!
  \******************************************/
/*! exports provided: FacilityService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FacilityService", function() { return FacilityService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var angular2_notifications__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular2-notifications */ "./node_modules/angular2-notifications/angular2-notifications.umd.js");
/* harmony import */ var angular2_notifications__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(angular2_notifications__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _core_map_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @core/map.service */ "./src/app/core/map.service.ts");
/* harmony import */ var _core_loading_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @core/loading.service */ "./src/app/core/loading.service.ts");







var FacilityService = /** @class */ (function () {
    function FacilityService(_http, mapService, notService, loadingService) {
        this._http = _http;
        this.mapService = mapService;
        this.notService = notService;
        this.loadingService = loadingService;
        this.facilityData = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](null);
        this.facilityCount = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](null);
        this.facilityDataUpdate = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](null);
        this.facilityInfo = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](null);
        this.facilityShaking = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](null);
        this.impactSummary = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](null);
        this.selection = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](null);
        this.select = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](null);
        this.selectedFacs = [];
        this.filter = {
            limit: 50
        };
        this.sub = null;
    }
    FacilityService.prototype.getData = function (filter) {
        var _this = this;
        if (filter === void 0) { filter = {}; }
        if (this.sub) {
            this.sub.unsubscribe();
        }
        // Unselect current facilities
        this.unselectAll();
        this.loadingService.add('Facilities');
        var params_ = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        params_ = params_.append('filter', JSON.stringify(filter));
        for (var key in filter) {
            if (filter[key]) {
                params_ = params_.append(key, filter[key]);
            }
        }
        this.sub = this._http.get('api/facilities', { params: params_ })
            .subscribe(function (result) {
            _this.selectedFacs = [];
            _this.facilityData.next(result);
            _this.loadingService.finish('Facilities');
        }, function (error) {
            _this.loadingService.finish('Facilities');
        });
    };
    FacilityService.prototype.updateData = function (filter) {
        var _this = this;
        if (filter === void 0) { filter = {}; }
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('filter', JSON.stringify(filter));
        this._http.get('api/facility-data', { params: params })
            .subscribe(function (result) {
            _this.facilityDataUpdate.next(result.data);
        });
    };
    FacilityService.prototype.getImpactSummary = function (event_id) {
        var _this = this;
        this.sub = this._http.get('api/shakemaps/' + event_id + '/impact-summary')
            .subscribe(function (result) {
            _this.impactSummary.next(result);
        }, function (error) {
            _this.impactSummary.next(null);
        });
    };
    FacilityService.prototype.getFacilityShaking = function (facility, event) {
        /* Get shaking history for a specific event and facility */
        var _this = this;
        this.loadingService.add('Facilities');
        this._http.get('api/facility-shaking/' + facility['shakecast_id'] + '/' + event['event_id'])
            .subscribe(function (result) {
            if (result.data) {
                _this.facilityShaking.next(result.data);
            }
            _this.loadingService.finish('Facilities');
        }, function (error) {
            _this.loadingService.finish('Facilities');
        });
    };
    FacilityService.prototype.selectAll = function () {
        this.selection.next('all');
    };
    FacilityService.prototype.unselectAll = function () {
        this.selection.next('none');
    };
    FacilityService.prototype.deleteFacs = function () {
        var _this = this;
        this.notService.success('Deleting Facilities', 'Deleting ' + this.selectedFacs.length + ' facilities');
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('inventory', JSON.stringify(this.selectedFacs));
        params = params.append('inventory_type', 'facility');
        this._http.delete('api/facilities', { params: params })
            .subscribe(function (result) {
            _this.getData();
        });
    };
    FacilityService.prototype.removeFac = function (fac) {
        this.mapService.removeFac(fac);
    };
    FacilityService.prototype.clearMap = function () {
        this.mapService.clearMap();
    };
    FacilityService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _core_map_service__WEBPACK_IMPORTED_MODULE_5__["MapService"],
            angular2_notifications__WEBPACK_IMPORTED_MODULE_4__["NotificationsService"],
            _core_loading_service__WEBPACK_IMPORTED_MODULE_6__["LoadingService"]])
    ], FacilityService);
    return FacilityService;
}());



/***/ }),

/***/ "./src/app/core/group.service.ts":
/*!***************************************!*\
  !*** ./src/app/core/group.service.ts ***!
  \***************************************/
/*! exports provided: GroupService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupService", function() { return GroupService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _core_map_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core/map.service */ "./src/app/core/map.service.ts");





var GroupService = /** @class */ (function () {
    function GroupService(http, mapService) {
        this.http = http;
        this.mapService = mapService;
        this.loadingData = new rxjs__WEBPACK_IMPORTED_MODULE_3__["ReplaySubject"](1);
        this.groupData = new rxjs__WEBPACK_IMPORTED_MODULE_3__["ReplaySubject"](1);
        this.groupSummary = new rxjs__WEBPACK_IMPORTED_MODULE_3__["ReplaySubject"](1);
        this.groupUsers = new rxjs__WEBPACK_IMPORTED_MODULE_3__["ReplaySubject"](1);
        this.groupFacilities = new rxjs__WEBPACK_IMPORTED_MODULE_3__["ReplaySubject"](1);
        this.selection = new rxjs__WEBPACK_IMPORTED_MODULE_3__["ReplaySubject"](1);
        this.dataList = [];
        this.current_group = null;
        this.filter = {};
    }
    GroupService.prototype.getData = function (filter) {
        var _this = this;
        if (filter === void 0) { filter = {}; }
        this.loadingData.next(true);
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        params = params.set('filter', JSON.stringify(filter));
        this.http.get('api/groups', { params: params })
            .subscribe(function (result) {
            _this.groupData.next(result);
            _this.dataList = result;
            _this.current_group = result[0];
            _this.loadingData.next(false);
        });
    };
    GroupService.prototype.getUsers = function (groupId) {
        var _this = this;
        this.http.get("/api/groups/" + groupId + "/users").subscribe(function (users) {
            _this.groupUsers.next(users);
        });
    };
    GroupService.prototype.getFacilities = function (groupId) {
        var _this = this;
        this.http.get("/api/groups/" + groupId + "/facilities").subscribe(function (facilities) {
            _this.groupFacilities.next(facilities);
        });
    };
    GroupService.prototype.selectAll = function () {
        this.selection.next('all');
    };
    GroupService.prototype.unselectAll = function () {
        this.selection.next('none');
    };
    GroupService.prototype.deleteGroups = function (group) {
        var _this = this;
        this.loadingData.next(true);
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        params = params.append('inventory', JSON.stringify(group));
        params = params.append('inventory_type', 'group');
        this.http.delete('api/groups', { params: params })
            .subscribe(function (result) {
            _this.getData();
            _this.loadingData.next(false);
        });
    };
    GroupService.prototype.plotGroup = function (group) {
        this.mapService.plotGroup(group);
    };
    GroupService.prototype.clearMap = function () {
        this.mapService.clearMap();
    };
    GroupService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _core_map_service__WEBPACK_IMPORTED_MODULE_4__["MapService"]])
    ], GroupService);
    return GroupService;
}());



/***/ }),

/***/ "./src/app/core/loading.service.ts":
/*!*****************************************!*\
  !*** ./src/app/core/loading.service.ts ***!
  \*****************************************/
/*! exports provided: LoadingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingService", function() { return LoadingService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");



var LoadingService = /** @class */ (function () {
    function LoadingService() {
        this.loading = [];
        this.update = new rxjs__WEBPACK_IMPORTED_MODULE_2__["ReplaySubject"](1);
    }
    LoadingService.prototype.add = function (name) {
        this.loading.push(name);
        this.update.next(name);
    };
    LoadingService.prototype.finish = function (name) {
        var new_loading = [];
        for (var idx in this.loading) {
            if (this.loading[idx] !== name) {
                new_loading.push(this.loading[idx]);
            }
        }
        this.loading = new_loading;
        this.update.next('remove-' + name);
    };
    LoadingService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LoadingService);
    return LoadingService;
}());



/***/ }),

/***/ "./src/app/core/map.service.ts":
/*!*************************************!*\
  !*** ./src/app/core/map.service.ts ***!
  \*************************************/
/*! exports provided: MapService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapService", function() { return MapService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");




var MapService = /** @class */ (function () {
    function MapService(_http) {
        this._http = _http;
        this.bounds = null;
        this.eqMarker = new rxjs__WEBPACK_IMPORTED_MODULE_2__["ReplaySubject"](1);
        this.facMarkers = new rxjs__WEBPACK_IMPORTED_MODULE_2__["ReplaySubject"](1);
        this.groupPoly = new rxjs__WEBPACK_IMPORTED_MODULE_2__["ReplaySubject"](1);
        this.removeFacMarkers = new rxjs__WEBPACK_IMPORTED_MODULE_2__["ReplaySubject"](1);
        this.clearMapNotify = new rxjs__WEBPACK_IMPORTED_MODULE_2__["ReplaySubject"](1);
        this.center = new rxjs__WEBPACK_IMPORTED_MODULE_2__["ReplaySubject"](1);
    }
    MapService.prototype.plotEq = function (eq, clear) {
        if (clear === void 0) { clear = null; }
        var eqMarker = this.makeMarker(eq);
        eqMarker['type'] = 'earthquake';
        eqMarker['zoom'] = 8;
        eqMarker['draggable'] = false;
        this.eqMarker.next(eqMarker);
    };
    MapService.prototype.makeFacMarker = function (fac, clear) {
        if (clear === void 0) { clear = false; }
        var marker = this.makeMarker(fac);
        marker['type'] = 'facility';
        marker['zoom'] = 8;
        marker['draggable'] = false;
        // adjust for facilities having only max/min lat/lon
        marker.lat = (marker['lat_min'] + marker['lat_max']) / 2;
        marker.lon = (marker['lon_min'] + marker['lon_max']) / 2;
        return marker;
    };
    MapService.prototype.makeFacMarkers = function (facs, clear) {
        if (clear === void 0) { clear = true; }
        var markers = Array(facs.length);
        for (var _i = 0, _a = Object.keys(facs); _i < _a.length; _i++) {
            var fac_id = _a[_i];
            var fac = facs[fac_id];
            var marker = this.makeMarker(fac);
            marker['type'] = 'facility';
            marker['zoom'] = 8;
            marker['draggable'] = false;
            // adjust for facilities having only max/min lat/lon
            marker.lat = (marker['lat_min'] + marker['lat_max']) / 2;
            marker.lon = (marker['lon_min'] + marker['lon_max']) / 2;
            markers[fac_id] = marker;
        }
        this.facMarkers.next(markers);
    };
    MapService.prototype.plotGroup = function (group) {
        this.groupPoly.next(group);
    };
    MapService.prototype.plotUser = function (user, clear) {
        if (clear === void 0) { clear = false; }
    };
    MapService.prototype.setCenter = function (marker) {
        this.center.next(marker);
    };
    MapService.prototype.removeFac = function (fac) {
        this.removeFacMarkers.next(fac);
    };
    MapService.prototype.makeMarker = function (notMarker) {
        var marker = {
            type: '',
            lat: 0,
            lon: 0,
            draggable: false
        };
        for (var _i = 0, _a = Object.keys(notMarker); _i < _a.length; _i++) {
            var prop = _a[_i];
            marker[prop] = notMarker[prop];
        }
        return marker;
    };
    MapService.prototype.clearMap = function () {
        this.clearMapNotify.next(true);
    };
    MapService.prototype.getMapKey = function () {
        return this._http.get('api/map-key');
    };
    MapService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], MapService);
    return MapService;
}());



/***/ }),

/***/ "./src/app/core/messages.service.ts":
/*!******************************************!*\
  !*** ./src/app/core/messages.service.ts ***!
  \******************************************/
/*! exports provided: MessagesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessagesService", function() { return MessagesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var angular2_notifications__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular2-notifications */ "./node_modules/angular2-notifications/angular2-notifications.umd.js");
/* harmony import */ var angular2_notifications__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(angular2_notifications__WEBPACK_IMPORTED_MODULE_4__);





var MessagesService = /** @class */ (function () {
    function MessagesService(_http, notService) {
        this._http = _http;
        this.notService = notService;
        this.messages = new rxjs__WEBPACK_IMPORTED_MODULE_3__["ReplaySubject"](1);
    }
    MessagesService.prototype.getMessages = function () {
        var _this = this;
        this._http.get('api/messages')
            .subscribe(function (result) {
            _this.messages.next(result);
        });
    };
    MessagesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            angular2_notifications__WEBPACK_IMPORTED_MODULE_4__["NotificationsService"]])
    ], MessagesService);
    return MessagesService;
}());



/***/ }),

/***/ "./src/app/core/notification.service.ts":
/*!**********************************************!*\
  !*** ./src/app/core/notification.service.ts ***!
  \**********************************************/
/*! exports provided: NotificationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationService", function() { return NotificationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");




var NotificationService = /** @class */ (function () {
    function NotificationService(_http) {
        this._http = _http;
        this.notifications = new rxjs__WEBPACK_IMPORTED_MODULE_3__["ReplaySubject"](1);
    }
    NotificationService.prototype.getNotifications = function (eq) {
        var _this = this;
        if (eq) {
            var params_ = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().append('event_id', eq.properties.event_id);
            this._http.get('api/notifications', { params: params_ })
                .subscribe(function (result) {
                _this.notifications.next(result);
            });
        }
    };
    NotificationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], NotificationService);
    return NotificationService;
}());



/***/ }),

/***/ "./src/app/core/panel.service.ts":
/*!***************************************!*\
  !*** ./src/app/core/panel.service.ts ***!
  \***************************************/
/*! exports provided: PanelService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PanelService", function() { return PanelService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");



var PanelService = /** @class */ (function () {
    function PanelService() {
        this.controlLeft = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
        this.controlRight = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
        this.controlBottom = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
    }
    PanelService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PanelService);
    return PanelService;
}());



/***/ }),

/***/ "./src/app/core/screen-dimmer.service.ts":
/*!***********************************************!*\
  !*** ./src/app/core/screen-dimmer.service.ts ***!
  \***********************************************/
/*! exports provided: ScreenDimmerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScreenDimmerService", function() { return ScreenDimmerService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");



var ScreenDimmerService = /** @class */ (function () {
    function ScreenDimmerService() {
        this.dim = new rxjs__WEBPACK_IMPORTED_MODULE_2__["ReplaySubject"](1);
    }
    ScreenDimmerService.prototype.dimScreen = function () {
        this.dim.next(true);
    };
    ScreenDimmerService.prototype.undimScreen = function () {
        this.dim.next(false);
    };
    ScreenDimmerService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], ScreenDimmerService);
    return ScreenDimmerService;
}());



/***/ }),

/***/ "./src/app/core/stick-to-top.service.ts":
/*!**********************************************!*\
  !*** ./src/app/core/stick-to-top.service.ts ***!
  \**********************************************/
/*! exports provided: StickToTopService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StickToTopService", function() { return StickToTopService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var StickToTopService = /** @class */ (function () {
    function StickToTopService() {
        this.stackHeight = 0;
    }
    StickToTopService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], StickToTopService);
    return StickToTopService;
}());



/***/ }),

/***/ "./src/app/core/time.service.ts":
/*!**************************************!*\
  !*** ./src/app/core/time.service.ts ***!
  \**************************************/
/*! exports provided: TimeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimeService", function() { return TimeService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TimeService = /** @class */ (function () {
    function TimeService() {
    }
    TimeService.prototype.toUTCDate = function (date) {
        var _utc = new Date(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate(), date.getUTCHours(), date.getUTCMinutes(), date.getUTCSeconds());
        return _utc;
    };
    TimeService.prototype.getUTCTime = function () {
        var date = new Date();
        var _utc = new Date(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate(), date.getUTCHours(), date.getUTCMinutes(), date.getUTCSeconds());
        return _utc;
    };
    TimeService.prototype.getOffsetTime = function (hourOffset) {
        var date = new Date();
        var _utc = new Date(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate(), date.getUTCHours() + hourOffset, date.getUTCMinutes(), date.getUTCSeconds());
        return _utc;
    };
    TimeService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TimeService);
    return TimeService;
}());



/***/ }),

/***/ "./src/app/core/title.service.ts":
/*!***************************************!*\
  !*** ./src/app/core/title.service.ts ***!
  \***************************************/
/*! exports provided: TitleService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TitleService", function() { return TitleService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");



var TitleService = /** @class */ (function () {
    function TitleService() {
        this.title = new rxjs__WEBPACK_IMPORTED_MODULE_2__["ReplaySubject"](1);
    }
    TitleService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], TitleService);
    return TitleService;
}());



/***/ }),

/***/ "./src/app/core/user.service.ts":
/*!**************************************!*\
  !*** ./src/app/core/user.service.ts ***!
  \**************************************/
/*! exports provided: User, UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");


// user.service.ts




var User = /** @class */ (function () {
    function User(username, password) {
        this.username = username;
        this.password = password;
    }
    return User;
}());

var UserService = /** @class */ (function () {
    function UserService(_http, router) {
        this._http = _http;
        this.router = router;
        this.user$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
        this.loggedIn = false;
        this.isAdmin = false;
        this.username = '';
    }
    UserService.prototype.login = function (username, password) {
        return this._http.post('api/login', { username: username,
            password: password });
    };
    UserService.prototype.logout = function () {
        var _this = this;
        this._http.get('api/logout')
            .subscribe(function (resp) {
            _this.loggedIn = false;
            _this.router.navigate(['/login']);
        });
    };
    UserService.prototype.getUser = function () {
        var _this = this;
        this._http.get('api/users/current').subscribe(function (user) {
            if (!user) {
                _this.router.navigate(['/login']);
            }
            _this.user$.next(user);
        });
    };
    UserService.prototype.handleError = function (error) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        var errMsg = (error.message) ? error.message :
            error.status ? error.status + " - " + error.statusText : 'Server error';
        console.error(errMsg); // log to console instead
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(errMsg);
    };
    UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/core/users.service.ts":
/*!***************************************!*\
  !*** ./src/app/core/users.service.ts ***!
  \***************************************/
/*! exports provided: UsersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersService", function() { return UsersService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var angular2_notifications__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular2-notifications */ "./node_modules/angular2-notifications/angular2-notifications.umd.js");
/* harmony import */ var angular2_notifications__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(angular2_notifications__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _core_map_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @core/map.service */ "./src/app/core/map.service.ts");






var UsersService = /** @class */ (function () {
    function UsersService(_http, mapService, notService) {
        this._http = _http;
        this.mapService = mapService;
        this.notService = notService;
        this.loadingData = new rxjs__WEBPACK_IMPORTED_MODULE_3__["ReplaySubject"](1);
        this.userData = new rxjs__WEBPACK_IMPORTED_MODULE_3__["ReplaySubject"](1);
        this.selection = new rxjs__WEBPACK_IMPORTED_MODULE_3__["ReplaySubject"](1);
        this.saveUsersFromList = new rxjs__WEBPACK_IMPORTED_MODULE_3__["ReplaySubject"](1);
        this.current_user = null;
        this.filter = {};
    }
    UsersService.prototype.getData = function (filter) {
        var _this = this;
        if (filter === void 0) { filter = {}; }
        this.loadingData.next(true);
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('filter', JSON.stringify(filter));
        this._http.get('api/users', { params: params })
            .subscribe(function (result) {
            _this.userData.next(result);
            _this.current_user = result[0];
            _this.loadingData.next(false);
        });
    };
    UsersService.prototype.getCurrentUser = function () {
        var _this = this;
        this._http.get('api/users/current')
            .subscribe(function (result) {
            _this.userData.next([result]);
            _this.loadingData.next(false);
        });
    };
    UsersService.prototype.selectAll = function () {
        this.selection.next('all');
    };
    UsersService.prototype.unselectAll = function () {
        this.selection.next('none');
    };
    UsersService.prototype.saveUsers = function (users) {
        var _this = this;
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': 'my-auth-token'
            })
        };
        this.notService.success('User Info', 'Saving your changes...');
        this._http.post('api/users', { users: users }, httpOptions)
            .subscribe(function (result) {
            _this.loadingData.next(false);
        });
    };
    UsersService.prototype.deleteUsers = function (users) {
        var _this = this;
        this.notService.success('Delete User', 'Deleting ' + users.length + ' user');
        this.loadingData.next(true);
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('inventory', JSON.stringify(users));
        params = params.append('inventory_type', 'user');
        this._http.delete('api/inventory/delete', { params: params })
            .subscribe(function (result) {
            _this.getData();
            _this.loadingData.next(false);
        });
    };
    UsersService.prototype.plotUser = function (user) {
        this.mapService.plotUser(user);
    };
    UsersService.prototype.clearMap = function () {
        this.mapService.clearMap();
    };
    UsersService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _core_map_service__WEBPACK_IMPORTED_MODULE_5__["MapService"],
            angular2_notifications__WEBPACK_IMPORTED_MODULE_4__["NotificationsService"]])
    ], UsersService);
    return UsersService;
}());



/***/ }),

/***/ "./src/app/loading/loading.component.css":
/*!***********************************************!*\
  !*** ./src/app/loading/loading.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\r\n    position: fixed;\r\n    top: 50%;\r\n    left: 50%;\r\n    -webkit-transform: translateX(-50%) translateY(-50%);\r\n            transform: translateX(-50%) translateY(-50%);\r\n    text-align: center;\r\n}\r\n\r\n.spinning-icon {\r\n    height: 50px;\r\n    width: 50px;\r\n    border-radius: 50%;\r\n    position: relative;\r\n    border: 2px dashed white;\r\n    -webkit-transform: translateX(-50%);\r\n            transform: translateX(-50%);\r\n    -webkit-animation-name: spin;\r\n            animation-name: spin;\r\n    -webkit-animation-duration: 4000ms;\r\n            animation-duration: 4000ms;\r\n    -webkit-animation-iteration-count: infinite;\r\n            animation-iteration-count: infinite;\r\n    -webkit-animation-timing-function: linear;\r\n            animation-timing-function: linear;\r\n}\r\n\r\n.loading {\r\n    margin: 0;\r\n    text-align: center;\r\n    color: white;\r\n}\r\n\r\n.messages {\r\n    background: rgba(0,0,0,.4);\r\n    padding: 10px;\r\n    border-radius: 10px;\r\n}\r\n\r\n/* Safari */\r\n\r\n@-webkit-keyframes spin {\r\n  0% { -webkit-transform: rotate(0deg); }\r\n  100% { -webkit-transform: rotate(360deg); }\r\n}\r\n\r\n@keyframes spin {\r\n  0% { -webkit-transform: rotate(0deg); transform: rotate(0deg); }\r\n  100% { -webkit-transform: rotate(360deg); transform: rotate(360deg); }\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9hZGluZy9sb2FkaW5nLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxlQUFlO0lBQ2YsUUFBUTtJQUNSLFNBQVM7SUFDVCxvREFBNEM7WUFBNUMsNENBQTRDO0lBQzVDLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQix3QkFBd0I7SUFDeEIsbUNBQTJCO1lBQTNCLDJCQUEyQjtJQUMzQiw0QkFBb0I7WUFBcEIsb0JBQW9CO0lBQ3BCLGtDQUEwQjtZQUExQiwwQkFBMEI7SUFDMUIsMkNBQW1DO1lBQW5DLG1DQUFtQztJQUNuQyx5Q0FBaUM7WUFBakMsaUNBQWlDO0FBQ3JDOztBQUVBO0lBQ0ksU0FBUztJQUNULGtCQUFrQjtJQUNsQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksMEJBQTBCO0lBQzFCLGFBQWE7SUFDYixtQkFBbUI7QUFDdkI7O0FBRUEsV0FBVzs7QUFDWDtFQUNFLEtBQUssK0JBQStCLEVBQUU7RUFDdEMsT0FBTyxpQ0FBaUMsRUFBRTtBQUM1Qzs7QUFFQTtFQUNFLEtBQUssK0JBQXVCLEVBQXZCLHVCQUF1QixFQUFFO0VBQzlCLE9BQU8saUNBQXlCLEVBQXpCLHlCQUF5QixFQUFFO0FBQ3BDIiwiZmlsZSI6InNyYy9hcHAvbG9hZGluZy9sb2FkaW5nLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpIHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5zcGlubmluZy1pY29uIHtcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgYm9yZGVyOiAycHggZGFzaGVkIHdoaXRlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xyXG4gICAgYW5pbWF0aW9uLW5hbWU6IHNwaW47XHJcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDQwMDBtcztcclxuICAgIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xyXG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogbGluZWFyO1xyXG59XHJcblxyXG4ubG9hZGluZyB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5tZXNzYWdlcyB7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsMCwwLC40KTtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG59XHJcblxyXG4vKiBTYWZhcmkgKi9cclxuQC13ZWJraXQta2V5ZnJhbWVzIHNwaW4ge1xyXG4gIDAlIHsgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTsgfVxyXG4gIDEwMCUgeyAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7IH1cclxufVxyXG5cclxuQGtleWZyYW1lcyBzcGluIHtcclxuICAwJSB7IHRyYW5zZm9ybTogcm90YXRlKDBkZWcpOyB9XHJcbiAgMTAwJSB7IHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7IH1cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/loading/loading.component.html":
/*!************************************************!*\
  !*** ./src/app/loading/loading.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"loadingService.loading.length > 0\" class=\"container\">\r\n\t<img class=\"spinning-icon\" src=\"assets/sc_logo.png\">\r\n\t<div class=\"messages\">\r\n\t\t<div *ngFor=\"let data of loadingService.loading\">\r\n\t\t\t<h3 class=\"loading\">Loading {{ data }}...</h3>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/loading/loading.component.ts":
/*!**********************************************!*\
  !*** ./src/app/loading/loading.component.ts ***!
  \**********************************************/
/*! exports provided: LoadingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingComponent", function() { return LoadingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_loading_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/loading.service */ "./src/app/core/loading.service.ts");



var LoadingComponent = /** @class */ (function () {
    function LoadingComponent(loadingService, ref) {
        this.loadingService = loadingService;
        this.ref = ref;
        this.subscriptions = [];
    }
    LoadingComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscriptions.push(this.loadingService.update.subscribe(function (update) {
            _this.ref.detectChanges();
        }));
    };
    LoadingComponent.prototype.endSubscriptions = function () {
        for (var sub in this.subscriptions) {
            this.subscriptions[sub].unsubscribe();
        }
    };
    LoadingComponent.prototype.ngOnDestroy = function () {
        this.endSubscriptions();
    };
    LoadingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'loading-comp',
            template: __webpack_require__(/*! ./loading.component.html */ "./src/app/loading/loading.component.html"),
            styles: [__webpack_require__(/*! ./loading.component.css */ "./src/app/loading/loading.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_loading_service__WEBPACK_IMPORTED_MODULE_2__["LoadingService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])
    ], LoadingComponent);
    return LoadingComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".login-title {\r\n    align-items: center;\r\n    padding: 10px;\r\n    text-align: center;\r\n    margin-top: 5%;\r\n}\r\n\r\n.login-title h1 {\r\n    color: #444444;\r\n    font-size: 85px;\r\n    font-family: Arial;\r\n    margin: 0px\r\n}\r\n\r\n.login-title * {\r\n    display: inline-block;\r\n}\r\n\r\n.login-title .sc-logo {\r\n    width: 80px;\r\n    height: auto;\r\n}\r\n\r\n.login-title .logo {\r\n    border-radius: 50%;\r\n}\r\n\r\n.login {\r\n    padding: 10px;\r\n    margin-left: 20px;\r\n}\r\n\r\ninput {\r\n    font-size: 24px;\r\n    padding: 5px;\r\n    margin: 5px;\r\n}\r\n\r\n.login-form {\r\n    width: 30%;\r\n    min-width: 300px;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    display: flex;\r\n    flex-direction: column;\r\n    margin-top: 2%;\r\n    border-radius: 5px;\r\n    box-shadow: 1px 1px 15px 1px #55aaee;\r\n    -webkit-box-shadow: 1px 1px 15px 1px #55aaee;\r\n    -moz-box-shadow: 1px 1px 15px 1px #55aaee;\r\n    background: #ffffff;\r\n}\r\n\r\n.form-contents {\r\n    padding: 20px;\r\n}\r\n\r\n.button {\r\n    float: right;\r\n}\r\n\r\n.button-container {\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    text-align: center;\r\n}\r\n\r\n.usgs-logo-container {\r\n    position: fixed;\r\n    bottom: 0;\r\n    width: 100%;\r\n    z-index: -1;\r\n}\r\n\r\n.usgs-logo {\r\n    float: left;\r\n    padding: 10px;\r\n    opacity: .4;\r\n    margin-right: 5%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQjtBQUNKOztBQUVBO0lBQ0kscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLFlBQVk7SUFDWixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLG9DQUFvQztJQUNwQyw0Q0FBNEM7SUFDNUMseUNBQXlDO0lBQ3pDLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsU0FBUztJQUNULFdBQVc7SUFDWCxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsYUFBYTtJQUNiLFdBQVc7SUFDWCxnQkFBZ0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvZ2luLXRpdGxlIHtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luLXRvcDogNSU7XHJcbn1cclxuXHJcbi5sb2dpbi10aXRsZSBoMSB7XHJcbiAgICBjb2xvcjogIzQ0NDQ0NDtcclxuICAgIGZvbnQtc2l6ZTogODVweDtcclxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbDtcclxuICAgIG1hcmdpbjogMHB4XHJcbn1cclxuXHJcbi5sb2dpbi10aXRsZSAqIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufVxyXG5cclxuLmxvZ2luLXRpdGxlIC5zYy1sb2dvIHtcclxuICAgIHdpZHRoOiA4MHB4O1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG59XHJcblxyXG4ubG9naW4tdGl0bGUgLmxvZ28ge1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG59XHJcblxyXG4ubG9naW4ge1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG59XHJcblxyXG5pbnB1dCB7XHJcbiAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICBtYXJnaW46IDVweDtcclxufVxyXG5cclxuLmxvZ2luLWZvcm0ge1xyXG4gICAgd2lkdGg6IDMwJTtcclxuICAgIG1pbi13aWR0aDogMzAwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgbWFyZ2luLXRvcDogMiU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBib3gtc2hhZG93OiAxcHggMXB4IDE1cHggMXB4ICM1NWFhZWU7XHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDFweCAxcHggMTVweCAxcHggIzU1YWFlZTtcclxuICAgIC1tb3otYm94LXNoYWRvdzogMXB4IDFweCAxNXB4IDFweCAjNTVhYWVlO1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcclxufVxyXG5cclxuLmZvcm0tY29udGVudHMge1xyXG4gICAgcGFkZGluZzogMjBweDtcclxufVxyXG5cclxuLmJ1dHRvbiB7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbn1cclxuXHJcbi5idXR0b24tY29udGFpbmVyIHtcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4udXNncy1sb2dvLWNvbnRhaW5lciB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHotaW5kZXg6IC0xO1xyXG59XHJcblxyXG4udXNncy1sb2dvIHtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIG9wYWNpdHk6IC40O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA1JTtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"login-title\">\r\n    \r\n    <div class=\"sc-logo\">\r\n        <img class=\"logo\" src=\"assets/sc_logo.png\">\r\n    </div>\r\n\r\n    <h1>ShakeCast</h1>\r\n\r\n</div>\r\n\r\n<form class=\"login-form\">\r\n    <div class=\"form-contents\">\r\n        <input type=\"text\" id=\"username\" name=\"username\"\r\n        placeholder=\"Username\" [(ngModel)]=\"user.username\"\r\n        required>\r\n\r\n        <input type=\"password\" id=\"password\" name=\"password\" \r\n        placeholder=\"Password\" [(ngModel)]=\"user.password\"\r\n        required>\r\n\r\n        <h2 class=\"button\" (click)=\"onSubmit(user.username, user.password)\">Login</h2>\r\n    </div>\r\n</form>\r\n\r\n<div class=\"usgs-logo-container\">\r\n    <img class=\"usgs-logo\" src=\"assets/USGS_logo.png\">\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angular2_notifications__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular2-notifications */ "./node_modules/angular2-notifications/angular2-notifications.umd.js");
/* harmony import */ var angular2_notifications__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angular2_notifications__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _core_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core/user.service */ "./src/app/core/user.service.ts");





var LoginComponent = /** @class */ (function () {
    function LoginComponent(userService, router, notService) {
        this.userService = userService;
        this.router = router;
        this.notService = notService;
        this.user = new _core_user_service__WEBPACK_IMPORTED_MODULE_4__["User"]('', '');
    }
    LoginComponent.prototype.onSubmit = function (username, password) {
        var _this = this;
        this.userService.login(username, password).subscribe(function (result) {
            if (result.shakecast_id) {
                _this.userService.user$.next(result);
                _this.userService.loggedIn = true;
                _this.userService.isAdmin = result.isAdmin;
                _this.userService.username = username;
                _this.router.navigate(['/shakecast']);
                _this.notService.success('Login', 'Welcome, ' + _this.userService.username);
            }
            else {
                _this.notService.error('Login Failed', 'Invalid Username or Password');
                _this.userService.loggedIn = false;
                _this.userService.isAdmin = false;
            }
        });
    };
    LoginComponent.prototype.keyboardInput = function (event) {
        if (event.keyCode === 13) {
            this.onSubmit(this.user.username, this.user.password);
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:keydown', ['$event']),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], LoginComponent.prototype, "keyboardInput", null);
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            angular2_notifications__WEBPACK_IMPORTED_MODULE_3__["NotificationsService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/login/login.module.ts":
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/*! exports provided: LoginModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginModule", function() { return LoginModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login.component */ "./src/app/login/login.component.ts");





var LoginModule = /** @class */ (function () {
    function LoginModule() {
    }
    LoginModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]
            ],
            declarations: [
                _login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"]
            ],
            providers: []
        })
    ], LoginModule);
    return LoginModule;
}());



/***/ }),

/***/ "./src/app/messaging/messaging.component.ts":
/*!**************************************************!*\
  !*** ./src/app/messaging/messaging.component.ts ***!
  \**************************************************/
/*! exports provided: MessagingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessagingComponent", function() { return MessagingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angular2_notifications__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular2-notifications */ "./node_modules/angular2-notifications/angular2-notifications.umd.js");
/* harmony import */ var angular2_notifications__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angular2_notifications__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _core_messages_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/messages.service */ "./src/app/core/messages.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var MessagingComponent = /** @class */ (function () {
    function MessagingComponent(notService, messService, _router) {
        this.notService = notService;
        this.messService = messService;
        this._router = _router;
        this.subscriptions = [];
        this.messageTime = (new Date()).getTime() / 1000;
    }
    MessagingComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscriptions.push(Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["timer"])(0, 10000)
            .subscribe(function (data) {
            if (_this._router.url !== '/login') {
                _this.messService.getMessages();
            }
        }));
        this.subscriptions.push(this.messService.messages.subscribe(function (messages) {
            _this.onNotification(messages);
        }));
    };
    MessagingComponent.prototype.makeNotification = function (message) {
        if (message['title'] && message['message']) {
            if (message['success'] === true) {
                this.notService.success(message['title'], message['message'], { timeOut: 0 });
            }
            else if (message['success'] === false) {
                this.notService.error(message['title'], message['message'], { timeOut: 0 });
            }
            else {
                this.notService.info(message['title'], message['message'], { timeOut: 0 });
            }
        }
    };
    MessagingComponent.prototype.onNotification = function (messages) {
        for (var _i = 0, _a = Object.keys(messages); _i < _a.length; _i++) {
            var key = _a[_i];
            var messTime = parseFloat(key);
            if (messTime > this.messageTime) {
                // Print message
                this.makeNotification(messages[messTime]);
                this.messageTime = messTime;
            }
        }
    };
    MessagingComponent.prototype.ngOnDestroy = function () {
        this.endSubscriptions();
    };
    MessagingComponent.prototype.endSubscriptions = function () {
        for (var _i = 0, _a = this.subscriptions; _i < _a.length; _i++) {
            var sub = _a[_i];
            this.subscriptions[sub].unsubscribe();
        }
    };
    MessagingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'messaging',
            template: '',
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [angular2_notifications__WEBPACK_IMPORTED_MODULE_2__["NotificationsService"],
            _core_messages_service__WEBPACK_IMPORTED_MODULE_3__["MessagesService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], MessagingComponent);
    return MessagingComponent;
}());



/***/ }),

/***/ "./src/app/nav/nav.component.css":
/*!***************************************!*\
  !*** ./src/app/nav/nav.component.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header {\r\n    background-color: #fff;\r\n    border-radius: 10px;\r\n    border: 5px solid #55aaee;\r\n    height: 40px;\r\n    position: fixed;\r\n    display: flex;\r\n    align-items: center;\r\n    vertical-align: middle;\r\n    transition: top 0.2s ease-in-out;\r\n    z-index: 1000;\r\n    width: 80%;\r\n    top:0;\r\n    margin-top: 5px;\r\n    min-width: 695px;\r\n    max-width: 1000px;\r\n    left: 50%;\r\n    -webkit-transform: translateX(-50%);\r\n            transform: translateX(-50%);\r\n    box-shadow: 0px 2px 3px 1px rgba(0,0,0,0.3);\r\n    -webkit-box-shadow: 0px 2px 3px 1px rgba(0,0,0,0.3);\r\n    -moz-box-shadow: 0px 2px 3px 1px rgba(0,0,0,0.3);\r\n}\r\n\r\n.header-space {\r\n    width: 100%;\r\n    height: 40px;\r\n}\r\n\r\np {\r\n    display: inline-block;\r\n    margin-bottom: 0px;\r\n    margin-left: 35px;\r\n    margin-top: 0px;\r\n    position: absolute;\r\n    font-weight: bold;\r\n}\r\n\r\n.sc-logo {\r\n    display: inline-block;\r\n    border-radius: 50%;\r\n    margin-top: 0px;\r\n    margin-left: 10px;\r\n    height: 20px;\r\n    width: auto;\r\n}\r\n\r\n.cont {\r\n    position: relative;\r\n    width: 165px;\r\n    margin-left: auto;\r\n    display: flex;\r\n    align-items: center;\r\n}\r\n\r\n.nav-bar {\r\n    margin-left: 5px;\r\n}\r\n\r\n.link {\r\n    display: inline-block;\r\n    text-align: center;\r\n    border-bottom: 3px solid #eeeeee;\r\n    background: #eeeeee;\r\n    padding:5px;\r\n    margin-left:5px;\r\n    cursor: pointer;\r\n    box-shadow: 1px 1px 2px 1px rgba(0,0,0,0.3);\r\n    -webkit-box-shadow: 1px 1px 2px 1px rgba(0,0,0,0.3);\r\n    -moz-box-shadow: 1px 1px 2px 1px rgba(0,0,0,0.3);\r\n}\r\n\r\n.link:hover {\r\n    border-bottom: 3px solid #55aaee;\r\n    box-shadow: 0px 0px 3px 1px rgba(0,0,0,0.4);\r\n    -webkit-box-shadow: 0px 0px 3px 1px rgba(0,0,0,0.4);\r\n    -moz-box-shadow: 0px 0px 3px 1px rgba(0,0,0,0.4);\r\n}\r\n\r\na {\r\n    text-decoration: none;\r\n    font-weight: bold;\r\n}\r\n\r\n.block-stack {\r\n    height: 40px;\r\n    margin-left: auto;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2L25hdi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQix5QkFBeUI7SUFDekIsWUFBWTtJQUNaLGVBQWU7SUFDZixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHNCQUFzQjtJQUN0QixnQ0FBZ0M7SUFDaEMsYUFBYTtJQUNiLFVBQVU7SUFDVixLQUFLO0lBQ0wsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsU0FBUztJQUNULG1DQUEyQjtZQUEzQiwyQkFBMkI7SUFDM0IsMkNBQTJDO0lBQzNDLG1EQUFtRDtJQUNuRCxnREFBZ0Q7QUFDcEQ7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2IsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLGtCQUFrQjtJQUNsQixnQ0FBZ0M7SUFDaEMsbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCxlQUFlO0lBQ2YsZUFBZTtJQUNmLDJDQUEyQztJQUMzQyxtREFBbUQ7SUFDbkQsZ0RBQWdEO0FBQ3BEOztBQUVBO0lBQ0ksZ0NBQWdDO0lBQ2hDLDJDQUEyQztJQUMzQyxtREFBbUQ7SUFDbkQsZ0RBQWdEO0FBQ3BEOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixpQkFBaUI7QUFDckIiLCJmaWxlIjoic3JjL2FwcC9uYXYvbmF2LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgYm9yZGVyOiA1cHggc29saWQgIzU1YWFlZTtcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgIHRyYW5zaXRpb246IHRvcCAwLjJzIGVhc2UtaW4tb3V0O1xyXG4gICAgei1pbmRleDogMTAwMDtcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgICB0b3A6MDtcclxuICAgIG1hcmdpbi10b3A6IDVweDtcclxuICAgIG1pbi13aWR0aDogNjk1cHg7XHJcbiAgICBtYXgtd2lkdGg6IDEwMDBweDtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcclxuICAgIGJveC1zaGFkb3c6IDBweCAycHggM3B4IDFweCByZ2JhKDAsMCwwLDAuMyk7XHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCAycHggM3B4IDFweCByZ2JhKDAsMCwwLDAuMyk7XHJcbiAgICAtbW96LWJveC1zaGFkb3c6IDBweCAycHggM3B4IDFweCByZ2JhKDAsMCwwLDAuMyk7XHJcbn1cclxuXHJcbi5oZWFkZXItc3BhY2Uge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbn1cclxuXHJcbnAge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDM1cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAwcHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLnNjLWxvZ28ge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgbWFyZ2luLXRvcDogMHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICB3aWR0aDogYXV0bztcclxufVxyXG5cclxuLmNvbnQge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgd2lkdGg6IDE2NXB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLm5hdi1iYXIge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcclxufVxyXG5cclxuLmxpbmsge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkICNlZWVlZWU7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZWVlZWVlO1xyXG4gICAgcGFkZGluZzo1cHg7XHJcbiAgICBtYXJnaW4tbGVmdDo1cHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBib3gtc2hhZG93OiAxcHggMXB4IDJweCAxcHggcmdiYSgwLDAsMCwwLjMpO1xyXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAxcHggMXB4IDJweCAxcHggcmdiYSgwLDAsMCwwLjMpO1xyXG4gICAgLW1vei1ib3gtc2hhZG93OiAxcHggMXB4IDJweCAxcHggcmdiYSgwLDAsMCwwLjMpO1xyXG59XHJcblxyXG4ubGluazpob3ZlciB7XHJcbiAgICBib3JkZXItYm90dG9tOiAzcHggc29saWQgIzU1YWFlZTtcclxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggM3B4IDFweCByZ2JhKDAsMCwwLDAuNCk7XHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCAwcHggM3B4IDFweCByZ2JhKDAsMCwwLDAuNCk7XHJcbiAgICAtbW96LWJveC1zaGFkb3c6IDBweCAwcHggM3B4IDFweCByZ2JhKDAsMCwwLDAuNCk7XHJcbn1cclxuXHJcbmEge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi5ibG9jay1zdGFjayB7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxufVxyXG5cclxuIl19 */"

/***/ }),

/***/ "./src/app/nav/nav.component.html":
/*!****************************************!*\
  !*** ./src/app/nav/nav.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"header\" [@scrollChange]=\"scrollUp\" (mouseover)=\"setHover(true)\" (mouseleave)=\"setHover(false)\">\r\n    <div class=\"nav-bar\">\r\n        <div *ngIf=\"!(router.url.indexOf('/shakecast-admin') >= 0)\">\r\n            <div class=\"link\" (click)=\"changeRoute('/shakecast/dashboard')\">\r\n                <a routerLink=\"/shakecast/dashboard\">Dashboard</a>\r\n            </div>\r\n            <div class=\"link\" (click)=\"changeRoute('/shakecast/user-profile')\">\r\n                <a routerLink=\"/shakecast/user-profile\">User Profile</a>\r\n            </div>\r\n            <ng-container *ngIf=\"userService.user$ | async as user\">\r\n              <div class=\"link\" \r\n                      *ngIf=\"user.user_type == 'ADMIN'\"\r\n                      (click)=\"changeRoute('/shakecast-admin')\">\r\n                  <a routerLink=\"/shakecast-admin\">Admin Panel</a>\r\n              </div>\r\n            </ng-container>\r\n            <div class=\"link\" (click)=\"logout()\">\r\n                <a (click)=\"logout()\">Logout</a>\r\n            </div>\r\n        </div>\r\n        <div *ngIf=\"router.url.indexOf('/shakecast-admin') >= 0\">\r\n            <div class=\"link\" (click)=\"changeRoute('/shakecast-admin/facilities')\">\r\n                <a routerLink=\"/shakecast-admin/facilities\">Facilities</a>\r\n            </div>\r\n            <div class=\"link\" (click)=\"changeRoute('/shakecast-admin/users')\">\r\n                <a routerLink=\"/shakecast-admin/users\">Users and Groups</a>\r\n            </div>\r\n            <div class=\"link\" (click)=\"changeRoute('/shakecast-admin/scenarios')\">\r\n                <a routerLink=\"/shakecast-admin/scenarios\">Scenarios</a>\r\n            </div>\r\n            <div class=\"link\" (click)=\"changeRoute('/shakecast-admin/notifications')\">\r\n                <a routerLink=\"/shakecast-admin/notifications\">Notifications</a>\r\n            </div>\r\n            <div class=\"link\" \r\n                (click)=\"changeRoute('/shakecast-admin/config')\">\r\n                <a routerLink=\"/shakecast-admin/config\">Settings</a>\r\n            </div>\r\n            <div class=\"link\" (click)=\"changeRoute('/shakecast')\">\r\n                <a routerLink=\"/shakecast\">Back to ShakeCast</a>\r\n            </div>\r\n            <div class=\"link\" (click)=\"logout()\">\r\n                <a (click)=\"logout()\">Logout</a>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"cont\">\r\n        <!-- <img class=\"sc-logo\" src=\"/images/sc_logo.png\"> -->\r\n        <img class=\"block-stack\" src=\"assets/block_stack2.png\">\r\n        <!-- <p>ShakeCast</p> -->\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/nav/nav.component.ts":
/*!**************************************!*\
  !*** ./src/app/nav/nav.component.ts ***!
  \**************************************/
/*! exports provided: NavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavComponent", function() { return NavComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _shared_animations_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/animations/animations */ "./src/app/shared/animations/animations.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @core/user.service */ "./src/app/core/user.service.ts");
/* harmony import */ var angular2_notifications__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular2-notifications */ "./node_modules/angular2-notifications/angular2-notifications.umd.js");
/* harmony import */ var angular2_notifications__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(angular2_notifications__WEBPACK_IMPORTED_MODULE_6__);







var NavComponent = /** @class */ (function () {
    function NavComponent(userService, notService, router) {
        this.userService = userService;
        this.notService = notService;
        this.router = router;
        this.scrollUp = 'down';
        this.scrolled = document.querySelector('body').scrollTop;
        this.ignoreTime = 0;
        this.hovering = false;
    }
    NavComponent.prototype.ngOnInit = function () {
        var _this = this;
        Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["timer"])(0, 1000)
            .subscribe(function (x) {
            if (!_this.hovering) {
                _this.ignoreTime += .5;
                if (_this.scrolled !== document.scrollingElement.scrollTop) {
                    if (_this.scrolled > (document.scrollingElement.scrollTop) ||
                        (document.scrollingElement.scrollTop === 0)) {
                        // show the element
                        if (_this.scrollUp === 'up') {
                            console.log('scroll up');
                            _this.scrollUp = 'down';
                            _this.ignoreTime = 0;
                        }
                    }
                    else if (_this.scrolled < document.scrollingElement.scrollTop) {
                        // hide the element
                        if (_this.scrollUp === 'down') {
                            console.log('scroll down');
                            _this.scrollUp = 'up';
                        }
                    }
                    _this.scrolled = document.scrollingElement.scrollTop;
                }
                // hide the header after 5 seconds of ignoreTime
                // unless at the top of the page
                if ((_this.ignoreTime > 5) && (document.scrollingElement.scrollTop !== 0)) {
                    _this.scrollUp = 'up';
                }
            }
        });
    };
    NavComponent.prototype.setHover = function (boolIn) {
        this.hovering = boolIn;
        if (this.hovering) {
            this.scrollUp = 'down';
            this.ignoreTime = 0;
        }
    };
    NavComponent.prototype.changeRoute = function (url) {
        this.router.navigate([url]);
    };
    NavComponent.prototype.logout = function () {
        this.userService.logout();
        this.notService.success('Logout', 'success');
    };
    NavComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'navbar',
            template: __webpack_require__(/*! ./nav.component.html */ "./src/app/nav/nav.component.html"),
            animations: [_shared_animations_animations__WEBPACK_IMPORTED_MODULE_3__["navAnimation"]],
            styles: [__webpack_require__(/*! ./nav.component.css */ "./src/app/nav/nav.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"],
            angular2_notifications__WEBPACK_IMPORTED_MODULE_6__["NotificationsService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], NavComponent);
    return NavComponent;
}());



/***/ }),

/***/ "./src/app/shakecast-admin/config/config.component.css":
/*!*************************************************************!*\
  !*** ./src/app/shakecast-admin/config/config.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".settings {\r\n    position: relative;\r\n    z-index: 2;\r\n    background: #fff;\r\n}\r\n\r\n.section {\r\n    border-bottom: 20px dashed #efefef;\r\n    padding: 10px;\r\n    margin: 10px;\r\n}\r\n\r\n.item {\r\n    display: inline-block;\r\n    margin: 5px;\r\n    border: 2px solid #55aaee;\r\n    border-radius: 5px;\r\n    padding: 10px;\r\n    box-shadow: 1px 1px 5px 1px rgba(0,0,0,0.3);\r\n    -webkit-box-shadow: 1px 1px 5px 1px rgba(0,0,0,0.3);\r\n    -moz-box-shadow: 1px 1px 5px 1px rgba(0,0,0,0.3);\r\n}\r\n\r\n.item p {\r\n    display: inline-block;\r\n}\r\n\r\n.item label {\r\n    font-weight: bold\r\n}\r\n\r\n.item input {\r\n    font-size: 15px;\r\n}\r\n\r\nth {\r\n    text-align: right;\r\n}\r\n\r\n.spin-table td, .spin-table tr {\r\n    border-width: 0px;\r\n}\r\n\r\n.save, .reset {\r\n    display: inline-block;\r\n    margin-left: 10px;\r\n    margin-right: 10px;\r\n}\r\n\r\n.button:hover .fa {\r\n    color:white;\r\n}\r\n\r\n#db-str {\r\n    text-align: center;\r\n    margin: 2px;\r\n    font-style: italic;\r\n    color: rgba(0,0,0,.5);\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hha2VjYXN0LWFkbWluL2NvbmZpZy9jb25maWcuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksa0NBQWtDO0lBQ2xDLGFBQWE7SUFDYixZQUFZO0FBQ2hCOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLFdBQVc7SUFDWCx5QkFBeUI7SUFDekIsa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYiwyQ0FBMkM7SUFDM0MsbURBQW1EO0lBQ25ELGdEQUFnRDtBQUNwRDs7QUFFQTtJQUNJLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJO0FBQ0o7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLGlCQUFpQjtJQUNqQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixxQkFBcUI7QUFDekIiLCJmaWxlIjoic3JjL2FwcC9zaGFrZWNhc3QtYWRtaW4vY29uZmlnL2NvbmZpZy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNldHRpbmdzIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHotaW5kZXg6IDI7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG59XHJcblxyXG4uc2VjdGlvbiB7XHJcbiAgICBib3JkZXItYm90dG9tOiAyMHB4IGRhc2hlZCAjZWZlZmVmO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIG1hcmdpbjogMTBweDtcclxufVxyXG5cclxuLml0ZW0ge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgbWFyZ2luOiA1cHg7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjNTVhYWVlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGJveC1zaGFkb3c6IDFweCAxcHggNXB4IDFweCByZ2JhKDAsMCwwLDAuMyk7XHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDFweCAxcHggNXB4IDFweCByZ2JhKDAsMCwwLDAuMyk7XHJcbiAgICAtbW96LWJveC1zaGFkb3c6IDFweCAxcHggNXB4IDFweCByZ2JhKDAsMCwwLDAuMyk7XHJcbn1cclxuXHJcbi5pdGVtIHAge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcblxyXG4uaXRlbSBsYWJlbCB7XHJcbiAgICBmb250LXdlaWdodDogYm9sZFxyXG59XHJcblxyXG4uaXRlbSBpbnB1dCB7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbn1cclxuXHJcbnRoIHtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG59XHJcblxyXG4uc3Bpbi10YWJsZSB0ZCwgLnNwaW4tdGFibGUgdHIge1xyXG4gICAgYm9yZGVyLXdpZHRoOiAwcHg7XHJcbn1cclxuXHJcbi5zYXZlLCAucmVzZXQge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbn1cclxuXHJcbi5idXR0b246aG92ZXIgLmZhIHtcclxuICAgIGNvbG9yOndoaXRlO1xyXG59XHJcblxyXG4jZGItc3RyIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbjogMnB4O1xyXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gICAgY29sb3I6IHJnYmEoMCwwLDAsLjUpO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/shakecast-admin/config/config.component.html":
/*!**************************************************************!*\
  !*** ./src/app/shakecast-admin/config/config.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"settings\">\r\n    <div class=\"section\">\r\n        <h1 class=\"header\">\r\n            Server Settings\r\n        </h1>\r\n        <div class=\"item\">\r\n            <label for=\"server-name\">Rename your Server: </label>\r\n            <input id=\"server-name\"\r\n                            placeholder=\"ShakeCast\"\r\n                            [(ngModel)]=\"configs.Server.name\">\r\n        </div>\r\n\r\n        <div class=\"item\">\r\n            <label for=\"networks\">Networks to ignore: </label>\r\n            <input id=\"networks\" [(ngModel)]=\"configs.Services.ignore_nets\">\r\n        </div>\r\n\r\n        <div class=\"item\">\r\n            <label for=\"scPort\">ShakeCast Server Port: </label>\r\n            <input id=\"scPort\" [(ngModel)]=\"configs.port\">\r\n        </div>\r\n\r\n        <div class=\"item\">\r\n            <label for=\"scWebPort\">Web Server Port: </label>\r\n            <input id=\"scWebPort\" [(ngModel)]=\"configs.web_port\">\r\n        </div>\r\n\r\n        <div class=\"item\">\r\n            <label for=\"db\">Database: </label>\r\n            <select id=\"db\" [(ngModel)]=\"configs.DBConnection.type\">\r\n                <option *ngFor=\"let opt of dbOptions\" [value]=\"opt.value\">{{ opt.name }}</option>\r\n            </select>\r\n\r\n            <div *ngIf=\"configs.DBConnection.type == 'mysql'\">\r\n                <h3 id=\"db-str\">\r\n                    {{configs.DBConnection.username}}:{{'*'.repeat(configs.DBConnection.password.length)}}@{{configs.DBConnection.server}}/pycast\r\n                    </h3>\r\n                <input placeholder=\"Username\" type=\"text\" [(ngModel)]=\"configs.DBConnection.username\">\r\n                <input placeholder=\"Password\" type=\"password\" [(ngModel)]=\"configs.DBConnection.password\">\r\n                <input placeholder=\"Server\" type=\"text\" [(ngModel)]=\"configs.DBConnection.server\">\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"item\">\r\n            <label for=\"proxy\">Use a proxy: </label>\r\n            <input type=\"checkbox\"\r\n                        id=\"proxy\"\r\n                        [(ngModel)]=\"configs.Proxy.use\">\r\n\r\n            <div *ngIf=\"configs.Proxy.use\">\r\n                <input placeholder=\"Username\" type=\"text\" [(ngModel)]=\"configs.Proxy.username\">\r\n                <input placeholder=\"Password\" type=\"password\" [(ngModel)]=\"configs.Proxy.password\">\r\n                <input placeholder=\"Port\" type=\"text\" [(ngModel)]=\"configs.Proxy.port\">\r\n                <input placeholder=\"Server\" type=\"text\" [(ngModel)]=\"configs.Proxy.server\">\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"item\">\r\n            <label for=\"version\">Software Version: </label><p>{{ configs?.Server?.update?.software_version }}</p>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"section\">\r\n        <h1 class=\"header\">Clock Settings</h1>\r\n        <div class=\"item\">\r\n            <table>\r\n                <tr>\r\n                    <th>UTC time: </th>\r\n                    <td>{{ utcTime | date:'dd-M-yyyy H:mm'}}</td>\r\n                </tr>\r\n                <tr>\r\n                    <th>ShakeCast Time: <info [text]=\"'Change the ShakeCast Time for your notifications to\r\n                                                        use a different time zone than UTC'\"\r\n                                                [side]=\"'left'\"></info></th>\r\n                    <td>{{ offsetTime | date:'dd-M-yyyy H:mm'}}</td>\r\n                    <table class=\"spin-table\">\r\n                        <tr class=\"button spin\" (click)=\"hourUp()\"><th><i class=\"fa fa-chevron-up\"></i></th></tr>\r\n                        <tr class=\"button spin\" (click)=\"hourDown()\"><th><i class=\"fa fa-chevron-down\"></i></th></tr>\r\n                    </table>\r\n                </tr>\r\n                <tr>\r\n                    <th>Nighttime: <info [text]=\"'ShakeCast allows you to set a different minimum\r\n                                                    magnitude while you\\'re not at work. This way,\r\n                                                    you won\\'t be bothered by multiple small magnitude\r\n                                                    earthquakes while you\\'re at home. This Nighttime\r\n                                                    setting determines what time the minimum magnitude\r\n                                                    change goes into effect.'\"\r\n                                            [side]=\"'left'\"></info></th>\r\n                    <td>{{ configs.Services.nighttime }}:00</td>\r\n                    <table class=\"spin-table\">\r\n                        <tr class=\"button spin\"\r\n                            (click)=\"nighttimeUp()\"><th><i class=\"fa fa-chevron-up\"></i></th></tr>\r\n                        <tr class=\"button spin\"\r\n                            (click)=\"nighttimeDown()\"><th><i class=\"fa fa-chevron-down\"></i></th></tr>\r\n                    </table>\r\n                </tr>\r\n                <tr>\r\n                    <th>Morning: <info [text]=\"'ShakeCast allows you to set a different minimum\r\n                                                    magnitude while you\\'re not at work. This way,\r\n                                                    you won\\'t be bothered by multiple small magnitude\r\n                                                    earthquakes while you\\'re at home. This Morning\r\n                                                    setting determines what time the minimum magnitude\r\n                                                    switches back to normal. If there were any smaller\r\n                                                    earthquakes over night, you will receive notifications\r\n                                                    for them now.'\"\r\n                                            [side]=\"'left'\"></info></th>\r\n                    <td>{{ configs.Services.morning }}:00</td>\r\n                    <table class=\"spin-table\">\r\n                        <tr class=\"button spin\"\r\n                            (click)=\"morningUp()\"><th><i class=\"fa fa-chevron-up\"></i></th></tr>\r\n                        <tr class=\"button spin\"\r\n                            (click)=\"morningDown()\"><th><i class=\"fa fa-chevron-down\"></i></th></tr>\r\n                    </table>\r\n                </tr>\r\n                <tr>\r\n                    <th>Nighttime Min Magnitude: <info [text]=\"'ShakeCast allows you to set a different minimum\r\n                                                                    magnitude while you\\'re not at work. This way,\r\n                                                                    you won\\'t be bothered by multiple small magnitude\r\n                                                                    earthquakes while you\\'re at home.\r\n                                                                    You can set that minimum magnitude here. If you\r\n                                                                    do not wish to utilize this setting, set the\r\n                                                                    minimum magnitude to 0.'\"\r\n                                                            [side]=\"'left'\"></info></th>\r\n                    <td>{{ configs.Services.night_eq_mag_cutoff }}</td>\r\n                    <table class=\"spin-table\">\r\n                        <tr class=\"button spin\"\r\n                            (click)=\"configs.Services.night_eq_mag_cutoff = configs.Services.night_eq_mag_cutoff + 1\"><th><i class=\"fa fa-chevron-up\"></i></th></tr>\r\n                        <tr class=\"button spin\"\r\n                            (click)=\"configs.Services.night_eq_mag_cutoff = configs.Services.night_eq_mag_cutoff - 1\"><th><i class=\"fa fa-chevron-down\"></i></th></tr>\r\n                    </table>\r\n                <tr>\r\n\r\n            </table>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"section\">\r\n        <h1 class=\"header\">\r\n            SMTP\r\n        </h1>\r\n        <div class=\"item\">\r\n            <input placeholder=\"Username\" type=\"text\" [(ngModel)]=\"configs.SMTP.username\">\r\n            <input placeholder=\"Password\" type=\"password\" [(ngModel)]=\"configs.SMTP.password\">\r\n            <input placeholder=\"Security\" type=\"text\" [(ngModel)]=\"configs.SMTP.security\">\r\n            <input placeholder=\"Port\" type=\"text\" [(ngModel)]=\"configs.SMTP.port\">\r\n            <input placeholder=\"Server\" type=\"text\" [(ngModel)]=\"configs.SMTP.server\">\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<h1 class=\"button save\" (click)=\"saveConfigs()\">Save</h1>\r\n<h1 class=\"button reset\" (click)=\"resetConfigs()\">Reset</h1>\r\n<h1 class=\"button\" (click)=\"confService.systemTest()\">Run a System Test</h1>\r\n"

/***/ }),

/***/ "./src/app/shakecast-admin/config/config.component.ts":
/*!************************************************************!*\
  !*** ./src/app/shakecast-admin/config/config.component.ts ***!
  \************************************************************/
/*! exports provided: ConfigComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigComponent", function() { return ConfigComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _core_title_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/title.service */ "./src/app/core/title.service.ts");
/* harmony import */ var _shakecast_admin_update_update_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @shakecast-admin/update/update.service */ "./src/app/shakecast-admin/update/update.service.ts");
/* harmony import */ var _config_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./config.service */ "./src/app/shakecast-admin/config/config.service.ts");
/* harmony import */ var _core_time_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @core/time.service */ "./src/app/core/time.service.ts");
/* harmony import */ var angular2_notifications__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angular2-notifications */ "./node_modules/angular2-notifications/angular2-notifications.umd.js");
/* harmony import */ var angular2_notifications__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(angular2_notifications__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(underscore__WEBPACK_IMPORTED_MODULE_8__);









var ConfigComponent = /** @class */ (function () {
    function ConfigComponent(confService, timeService, notService, titleService, updateServer) {
        this.confService = confService;
        this.timeService = timeService;
        this.notService = notService;
        this.titleService = titleService;
        this.updateServer = updateServer;
        this.subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subscription"]();
        this.oldConfigs = {};
        this.configs = { "Logging": { "log_file": "", "log_level": "", "log_rotate": 0 }, "DBConnection": { "username": "", "retry_count": 0, "password": "", "type": "sqlite", "retry_interval": 0 }, "Notification": { "default_template_new_event": "", "default_template_inspection": "", "default_template_pdf": "" }, "SMTP": { "username": "", "from": "", "envelope_from": "", "server": "", "security": "", "password": "", "port": 0 }, "Server": { "software_version": "", "name": "", "DNS": "" }, "gmap_key": "", "Proxy": { "username": "", "use": false, "password": "", "port": 0, "server": "" }, "Services": { "use_geo_json": true, "ignore_nets": [], "new_eq_mag_cutoff": 0, "keep_eq_for": 0, "nighttime": 0, "check_new_int": 0, "night_eq_mag_cutoff": 0, "geo_json_web": "", "eq_req_products": [], "morning": 0, "archive_mag": 0, "geo_json_int": 0 }, "timezone": 0 };
        this.utcTime = null;
        this.offsetTime = null;
        this.enteringNet = false;
        this.newNet = '';
        this.dbOptions = [{ 'name': 'SQLite', 'value': 'sqlite' },
            { 'name': 'MySQL', 'value': 'mysql' }];
    }
    ConfigComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.titleService.title.next('Settings');
        this.subscriptions.add(this.confService.configs.subscribe(function (configs) {
            _this.configs = configs;
            _this.oldConfigs = JSON.parse(JSON.stringify(_this.configs));
            _this.offsetTime = _this.timeService.getOffsetTime(configs.timezone);
            _this.subscriptions.add(Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["timer"])(0, 500)
                .subscribe(function (x) {
                _this.utcTime = _this.timeService.getUTCTime();
                _this.offsetTime = _this.timeService.getOffsetTime(configs.timezone);
            }));
        }));
        this.confService.getConfigs();
        this.utcTime = this.timeService.getUTCTime();
    };
    ConfigComponent.prototype.hourUp = function () {
        this.configs.timezone += 1;
    };
    ConfigComponent.prototype.hourDown = function () {
        this.configs.timezone -= 1;
    };
    ConfigComponent.prototype.nighttimeUp = function () {
        this.configs.Services.nighttime += 1;
    };
    ConfigComponent.prototype.nighttimeDown = function () {
        this.configs.Services.nighttime -= 1;
    };
    ConfigComponent.prototype.morningUp = function () {
        this.configs.Services.morning += 1;
    };
    ConfigComponent.prototype.morningDown = function () {
        this.configs.Services.morning -= 1;
    };
    ConfigComponent.prototype.saveConfigs = function () {
        if (!underscore__WEBPACK_IMPORTED_MODULE_8__["isEqual"](this.configs, this.oldConfigs)) {
            this.confService.saveConfigs(this.configs);
            this.oldConfigs = JSON.parse(JSON.stringify(this.configs));
        }
        else {
            this.notService.info('No Changes', 'These configs are already in place!');
        }
    };
    ConfigComponent.prototype.resetConfigs = function () {
        this.configs = JSON.parse(JSON.stringify(this.oldConfigs));
    };
    ConfigComponent.prototype.setTime = function () {
    };
    ConfigComponent.prototype.keyboardInput = function (event) {
        if (this.enteringNet === true) {
            if (event.keyCode === 13) {
                if (this.newNet !== '') {
                    this.configs.Services.ignore_nets.push(this.newNet);
                    this.newNet = '';
                    this.enteringNet = false;
                }
            }
        }
    };
    ConfigComponent.prototype.ngOnDestroy = function () {
        this.subscriptions.unsubscribe();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:keydown', ['$event']),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], ConfigComponent.prototype, "keyboardInput", null);
    ConfigComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'config',
            template: __webpack_require__(/*! ./config.component.html */ "./src/app/shakecast-admin/config/config.component.html"),
            styles: [__webpack_require__(/*! ./config.component.css */ "./src/app/shakecast-admin/config/config.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_config_service__WEBPACK_IMPORTED_MODULE_5__["ConfigService"],
            _core_time_service__WEBPACK_IMPORTED_MODULE_6__["TimeService"],
            angular2_notifications__WEBPACK_IMPORTED_MODULE_7__["NotificationsService"],
            _core_title_service__WEBPACK_IMPORTED_MODULE_3__["TitleService"],
            _shakecast_admin_update_update_service__WEBPACK_IMPORTED_MODULE_4__["UpdateService"]])
    ], ConfigComponent);
    return ConfigComponent;
}());



/***/ }),

/***/ "./src/app/shakecast-admin/config/config.service.ts":
/*!**********************************************************!*\
  !*** ./src/app/shakecast-admin/config/config.service.ts ***!
  \**********************************************************/
/*! exports provided: ConfigService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigService", function() { return ConfigService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var angular2_notifications__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular2-notifications */ "./node_modules/angular2-notifications/angular2-notifications.umd.js");
/* harmony import */ var angular2_notifications__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(angular2_notifications__WEBPACK_IMPORTED_MODULE_4__);





var ConfigService = /** @class */ (function () {
    function ConfigService(http, notService) {
        this.http = http;
        this.notService = notService;
        this.loadingData = new rxjs__WEBPACK_IMPORTED_MODULE_3__["ReplaySubject"](1);
        this.configs = new rxjs__WEBPACK_IMPORTED_MODULE_3__["ReplaySubject"](1);
    }
    ConfigService.prototype.getConfigs = function () {
        var _this = this;
        this.loadingData.next(true);
        this.http.get('api/configs')
            .subscribe(function (result) {
            _this.configs.next(result);
            _this.loadingData.next(false);
        });
    };
    ConfigService.prototype.saveConfigs = function (newConfigs) {
        var _this = this;
        this.http.post('api/configs', { configs: newConfigs }).subscribe(function (result) {
            _this.notService.success('Success!', 'New Configurations Saved');
        });
    };
    ConfigService.prototype.systemTest = function () {
        var _this = this;
        this.notService.success('System Test', 'System test starting...');
        this.http.get('api/system-test')
            .subscribe(function (result) {
            if (!result) {
                _this.notService.error('System Test Failed', 'Unable to reach the ShakeCast server');
            }
            _this.loadingData.next(false);
        });
    };
    ConfigService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            angular2_notifications__WEBPACK_IMPORTED_MODULE_4__["NotificationsService"]])
    ], ConfigService);
    return ConfigService;
}());



/***/ }),

/***/ "./src/app/shakecast-admin/facilities/facilities.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/shakecast-admin/facilities/facilities.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".map-container {\r\n    width: 100%;\r\n    height: 100%;\r\n    top: 0;\r\n    position: fixed;\r\n}\r\n\r\n.fac-list {\r\n    height: 230px;\r\n    white-space: nowrap;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hha2VjYXN0LWFkbWluL2ZhY2lsaXRpZXMvZmFjaWxpdGllcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixNQUFNO0lBQ04sZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7QUFDdkIiLCJmaWxlIjoic3JjL2FwcC9zaGFrZWNhc3QtYWRtaW4vZmFjaWxpdGllcy9mYWNpbGl0aWVzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFwLWNvbnRhaW5lciB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHRvcDogMDtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxufVxyXG5cclxuLmZhYy1saXN0IHtcclxuICAgIGhlaWdodDogMjMwcHg7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/shakecast-admin/facilities/facilities.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/shakecast-admin/facilities/facilities.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"map-container\">\r\n    <my-map></my-map>\r\n</div>\r\n\r\n<panels-right-panel\r\n        [title]=\"'Facilities'\"\r\n        [open]=\"true\">\r\n    <facility-list></facility-list>\r\n</panels-right-panel>\r\n\r\n<panels-left-panel>\r\n    <facility-info></facility-info>\r\n</panels-left-panel>\r\n\r\n<panels-bottom-panel>\r\n    <facility-filter></facility-filter>\r\n</panels-bottom-panel>"

/***/ }),

/***/ "./src/app/shakecast-admin/facilities/facilities.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/shakecast-admin/facilities/facilities.component.ts ***!
  \********************************************************************/
/*! exports provided: FacilitiesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FacilitiesComponent", function() { return FacilitiesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _core_facility_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/facility.service */ "./src/app/core/facility.service.ts");
/* harmony import */ var _core_earthquake_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core/earthquake.service */ "./src/app/core/earthquake.service.ts");
/* harmony import */ var _core_title_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @core/title.service */ "./src/app/core/title.service.ts");






var FacilitiesComponent = /** @class */ (function () {
    function FacilitiesComponent(facService, titleService, eqService) {
        this.facService = facService;
        this.titleService = titleService;
        this.eqService = eqService;
        this.subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subscription"]();
        this.facList = [];
    }
    FacilitiesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.eqService.clearData();
        this.titleService.title.next('Facilities');
        this.subscriptions.add(this.facService.facilityData.subscribe(function (facs) {
            if ((facs != null) && (facs.length > 0)) {
                _this.facList = facs;
                _this.facService.select.next(facs[0]);
            }
        }));
        this.facService.getData(this.facService.filter);
    };
    FacilitiesComponent.prototype.plotFac = function (fac) {
        this.facService.select.next(fac);
    };
    FacilitiesComponent.prototype.endSubscriptions = function () {
        this.subscriptions.unsubscribe();
    };
    FacilitiesComponent.prototype.ngOnDestroy = function () {
        this.facService.clearMap();
        this.facService.facilityData.next([]);
        this.facService.facilityCount.next([]);
        this.facService.select.next(null);
        this.eqService.selectEvent.next(null);
        this.eqService.earthquakeData.next(null);
        this.endSubscriptions();
    };
    FacilitiesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'facilities',
            template: __webpack_require__(/*! ./facilities.component.html */ "./src/app/shakecast-admin/facilities/facilities.component.html"),
            styles: [__webpack_require__(/*! ./facilities.component.css */ "./src/app/shakecast-admin/facilities/facilities.component.css"), __webpack_require__(/*! ../../shared/css/data-list.css */ "./src/app/shared/css/data-list.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_facility_service__WEBPACK_IMPORTED_MODULE_3__["FacilityService"],
            _core_title_service__WEBPACK_IMPORTED_MODULE_5__["TitleService"],
            _core_earthquake_service__WEBPACK_IMPORTED_MODULE_4__["EarthquakeService"]])
    ], FacilitiesComponent);
    return FacilitiesComponent;
}());



/***/ }),

/***/ "./src/app/shakecast-admin/facilities/facility-info/facility-info.component.css":
/*!**************************************************************************************!*\
  !*** ./src/app/shakecast-admin/facilities/facility-info/facility-info.component.css ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header {\r\n    border-bottom: 5px solid #55aaee;\r\n    color: white;\r\n}\r\n\r\n.info-header {\r\n    color: white;\r\n    margin-bottom: 0;\r\n}\r\n\r\n.desc {\r\n    text-align: center;\r\n    background: #efefef;\r\n    padding: 10px;\r\n    margin: 10px;\r\n    font-weight: bold;\r\n    box-shadow: 1px 1px 2px 1px rgba(0,0,0,0.3);\r\n    -webkit-box-shadow: 1px 1px 2px 1px rgba(0,0,0,0.3);\r\n    -moz-box-shadow: 1px 1px 2px 1px rgba(0,0,0,0.3);\r\n    overflow: scroll;\r\n    color: black;\r\n}\r\n\r\n.location {\r\n    color: white;\r\n    font-style: italic;\r\n\r\n}\r\n\r\n.colors-table th {\r\n    padding: 5px;\r\n    color:white;\r\n    border-radius: 5px;\r\n    margin: 3px;\r\n}\r\n\r\n.fragility h2 {\r\n    margin: 10px 0 5px 0;\r\n    color: white;\r\n}\r\n\r\n.fragility p {\r\n    color:white;\r\n    margin:0;\r\n}\r\n\r\n.type {\r\n    color: white;\r\n    margin: 0 0 20px 0;\r\n}\r\n\r\n/*\r\n\r\n.info-content {\r\n    height: 95%;\r\n    padding: 5px;\r\n    overflow: hidden;\r\n}\r\n\r\n.hide {\r\n    position: absolute;\r\n    bottom: 10px;\r\n    left: 10px;\r\n}\r\n\r\n.header {\r\n    border-bottom: 5px solid #AED8FA;\r\n}\r\n\r\n\r\n\r\n.fragility-title {\r\n    margin-bottom: 0;\r\n    text-align: center;\r\n}\r\n\r\n.fragility-table {\r\n    margin-top: 10px\r\n}\r\n\r\ntable {\r\n    width: 100%;\r\n}\r\n\r\n.colors-table {\r\n    padding-left: 1em;\r\n    padding-right: 1em;\r\n}\r\n\r\n.colors-table th {\r\n    padding: .5em;\r\n}\r\n\r\n.shaking-history-link {\r\n    display: flex;\r\n    align-items: center;\r\n    flex-direction: column;\r\n    cursor: pointer;\r\n    margin-top: 30%;\r\n    height: 4.5em;\r\n}\r\n\r\n.shaking-history-link h1 {\r\n    color:#55aaee;\r\n    margin-bottom: 2px;\r\n    text-shadow: 5px 5px 5px rgba(0,0,0,0.3);\r\n}\r\n.triangle {\r\n    color: #55aaee;\r\n    font-size: 100px;\r\n    transform: rotate(-90deg) translateX(500%);\r\n    text-shadow: -5px 5px 5px rgba(0,0,0,0.3);\r\n}\r\n\r\n.shaking-history-link:hover .triangle {\r\n    text-shadow: -5px 5px 5px rgba(0,0,0,0.5);\r\n}\r\n.shaking-history-link:hover h1 {\r\n    text-shadow: 5px 5px 5px rgba(0,0,0,0.5);\r\n}\r\n\r\n.shaking-history {\r\n    top: 100%;\r\n    position: relative;\r\n}\r\n\r\n.impact {\r\n    padding: 10px;\r\n    border: 1px solid rgba(0,0,0,.3);\r\n    border-radius: 5px;\r\n    margin-top: 10%;\r\n    box-shadow: 1px 1px 3px 1px rgba(0,0,0,0.3);\r\n    -webkit-box-shadow: 1px 1px 3px 1px rgba(0,0,0,0.3);\r\n    -moz-box-shadow: 1px 1px 3px 1px rgba(0,0,0,0.3);\r\n}\r\n\r\n.impact h2 {\r\n    margin-top:5px;\r\n    margin-bottom: 5px;\r\n}\r\n\r\n.impact-level {\r\n    position: relative;\r\n    padding: 10px;\r\n    margin-top: 0;\r\n    width: 75%;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    text-align: center\r\n}\r\n\r\n.shaking-table {\r\n    width: 100%;\r\n}\r\n\r\n.shaking-table table th, .shaking-table table td {\r\n    padding: 5px;\r\n    text-align: center;\r\n}\r\n\r\n.shaking-table table {\r\n    border-right: 3px solid #AED8FA;\r\n}\r\n*/\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hha2VjYXN0LWFkbWluL2ZhY2lsaXRpZXMvZmFjaWxpdHktaW5mby9mYWNpbGl0eS1pbmZvLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQ0FBZ0M7SUFDaEMsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLDJDQUEyQztJQUMzQyxtREFBbUQ7SUFDbkQsZ0RBQWdEO0lBQ2hELGdCQUFnQjtJQUNoQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGtCQUFrQjs7QUFFdEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osV0FBVztJQUNYLGtCQUFrQjtJQUNsQixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxvQkFBb0I7SUFDcEIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxRQUFRO0FBQ1o7O0FBRUE7SUFDSSxZQUFZO0lBQ1osa0JBQWtCO0FBQ3RCOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBZ0hDIiwiZmlsZSI6InNyYy9hcHAvc2hha2VjYXN0LWFkbWluL2ZhY2lsaXRpZXMvZmFjaWxpdHktaW5mby9mYWNpbGl0eS1pbmZvLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGVyIHtcclxuICAgIGJvcmRlci1ib3R0b206IDVweCBzb2xpZCAjNTVhYWVlO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uaW5mby1oZWFkZXIge1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcclxufVxyXG5cclxuLmRlc2Mge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZDogI2VmZWZlZjtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBtYXJnaW46IDEwcHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGJveC1zaGFkb3c6IDFweCAxcHggMnB4IDFweCByZ2JhKDAsMCwwLDAuMyk7XHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDFweCAxcHggMnB4IDFweCByZ2JhKDAsMCwwLDAuMyk7XHJcbiAgICAtbW96LWJveC1zaGFkb3c6IDFweCAxcHggMnB4IDFweCByZ2JhKDAsMCwwLDAuMyk7XHJcbiAgICBvdmVyZmxvdzogc2Nyb2xsO1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG59XHJcblxyXG4ubG9jYXRpb24ge1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG5cclxufVxyXG5cclxuLmNvbG9ycy10YWJsZSB0aCB7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICBjb2xvcjp3aGl0ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIG1hcmdpbjogM3B4O1xyXG59XHJcblxyXG4uZnJhZ2lsaXR5IGgyIHtcclxuICAgIG1hcmdpbjogMTBweCAwIDVweCAwO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uZnJhZ2lsaXR5IHAge1xyXG4gICAgY29sb3I6d2hpdGU7XHJcbiAgICBtYXJnaW46MDtcclxufVxyXG5cclxuLnR5cGUge1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgbWFyZ2luOiAwIDAgMjBweCAwO1xyXG59XHJcbi8qXHJcblxyXG4uaW5mby1jb250ZW50IHtcclxuICAgIGhlaWdodDogOTUlO1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuLmhpZGUge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm90dG9tOiAxMHB4O1xyXG4gICAgbGVmdDogMTBweDtcclxufVxyXG5cclxuLmhlYWRlciB7XHJcbiAgICBib3JkZXItYm90dG9tOiA1cHggc29saWQgI0FFRDhGQTtcclxufVxyXG5cclxuXHJcblxyXG4uZnJhZ2lsaXR5LXRpdGxlIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5mcmFnaWxpdHktdGFibGUge1xyXG4gICAgbWFyZ2luLXRvcDogMTBweFxyXG59XHJcblxyXG50YWJsZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmNvbG9ycy10YWJsZSB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDFlbTtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDFlbTtcclxufVxyXG5cclxuLmNvbG9ycy10YWJsZSB0aCB7XHJcbiAgICBwYWRkaW5nOiAuNWVtO1xyXG59XHJcblxyXG4uc2hha2luZy1oaXN0b3J5LWxpbmsge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgbWFyZ2luLXRvcDogMzAlO1xyXG4gICAgaGVpZ2h0OiA0LjVlbTtcclxufVxyXG5cclxuLnNoYWtpbmctaGlzdG9yeS1saW5rIGgxIHtcclxuICAgIGNvbG9yOiM1NWFhZWU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAycHg7XHJcbiAgICB0ZXh0LXNoYWRvdzogNXB4IDVweCA1cHggcmdiYSgwLDAsMCwwLjMpO1xyXG59XHJcbi50cmlhbmdsZSB7XHJcbiAgICBjb2xvcjogIzU1YWFlZTtcclxuICAgIGZvbnQtc2l6ZTogMTAwcHg7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtOTBkZWcpIHRyYW5zbGF0ZVgoNTAwJSk7XHJcbiAgICB0ZXh0LXNoYWRvdzogLTVweCA1cHggNXB4IHJnYmEoMCwwLDAsMC4zKTtcclxufVxyXG5cclxuLnNoYWtpbmctaGlzdG9yeS1saW5rOmhvdmVyIC50cmlhbmdsZSB7XHJcbiAgICB0ZXh0LXNoYWRvdzogLTVweCA1cHggNXB4IHJnYmEoMCwwLDAsMC41KTtcclxufVxyXG4uc2hha2luZy1oaXN0b3J5LWxpbms6aG92ZXIgaDEge1xyXG4gICAgdGV4dC1zaGFkb3c6IDVweCA1cHggNXB4IHJnYmEoMCwwLDAsMC41KTtcclxufVxyXG5cclxuLnNoYWtpbmctaGlzdG9yeSB7XHJcbiAgICB0b3A6IDEwMCU7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5pbXBhY3Qge1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwwLDAsLjMpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgbWFyZ2luLXRvcDogMTAlO1xyXG4gICAgYm94LXNoYWRvdzogMXB4IDFweCAzcHggMXB4IHJnYmEoMCwwLDAsMC4zKTtcclxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMXB4IDFweCAzcHggMXB4IHJnYmEoMCwwLDAsMC4zKTtcclxuICAgIC1tb3otYm94LXNoYWRvdzogMXB4IDFweCAzcHggMXB4IHJnYmEoMCwwLDAsMC4zKTtcclxufVxyXG5cclxuLmltcGFjdCBoMiB7XHJcbiAgICBtYXJnaW4tdG9wOjVweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxufVxyXG5cclxuLmltcGFjdC1sZXZlbCB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMDtcclxuICAgIHdpZHRoOiA3NSU7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgIHRleHQtYWxpZ246IGNlbnRlclxyXG59XHJcblxyXG4uc2hha2luZy10YWJsZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLnNoYWtpbmctdGFibGUgdGFibGUgdGgsIC5zaGFraW5nLXRhYmxlIHRhYmxlIHRkIHtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLnNoYWtpbmctdGFibGUgdGFibGUge1xyXG4gICAgYm9yZGVyLXJpZ2h0OiAzcHggc29saWQgI0FFRDhGQTtcclxufVxyXG4qLyJdfQ== */"

/***/ }),

/***/ "./src/app/shakecast-admin/facilities/facility-info/facility-info.component.html":
/*!***************************************************************************************!*\
  !*** ./src/app/shakecast-admin/facilities/facility-info/facility-info.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"fac-info\">\r\n  <div class=\"info-content\" *ngIf=\"facility\">\r\n      <ng-container *ngIf=\"facility.properties as props\">\r\n      <div class=\"header\">\r\n          <h1 class=\"info-header\">{{ props.name }}</h1>\r\n          <p class=\"type\">Type: {{ props.props_type }}</p>\r\n          <p class=\"desc\" *ngIf=\"props.description\">{{ props.description }}</p>\r\n          <p class=\"location\">{{ (props.lat_max + props.lat_min) / 2 }}, {{ (props.lon_max + props.lon_min) / 2 }}\r\n      </div>\r\n\r\n      <div class=\"fragility\">\r\n          <h2>Fagility</h2>\r\n          <p>Metric: {{ props.metric }}</p>\r\n          <table class=\"colors-table\" style=\"width:100%;text-align:center\">\r\n              <tr>\r\n                  <th *ngIf=\"props.green\" style=\"background-color:green;\">\r\n                      {{ props.green }}\r\n                  </th>\r\n                  <th *ngIf=\"props.yellow\" style=\"background-color:gold;\">\r\n                      {{ props.yellow }}\r\n                  </th>\r\n                  <th *ngIf=\"props.orange\" style=\"background-color:orange;\">\r\n                      {{ props.orange }}\r\n                  </th>\r\n                  <th *ngIf=\"props.red\" style=\"background-color:red;\">\r\n                      {{ props.red }}\r\n                  </th>\r\n              </tr>\r\n          </table>\r\n      </div>\r\n\r\n      <h2 class=\"info-header\">Shaking History</h2>\r\n\r\n      <div class=\"eq-list\">\r\n          <earthquake-list\r\n            [facility]=\"props.shakecast_id\"></earthquake-list>\r\n      </div>\r\n    </ng-container>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/shakecast-admin/facilities/facility-info/facility-info.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/shakecast-admin/facilities/facility-info/facility-info.component.ts ***!
  \*************************************************************************************/
/*! exports provided: FacilityInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FacilityInfoComponent", function() { return FacilityInfoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _core_facility_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core/facility.service */ "./src/app/core/facility.service.ts");
/* harmony import */ var _core_earthquake_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @core/earthquake.service */ "./src/app/core/earthquake.service.ts");






var FacilityInfoComponent = /** @class */ (function () {
    function FacilityInfoComponent(facService, eqService, _router) {
        this.facService = facService;
        this.eqService = eqService;
        this._router = _router;
        this.subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subscription"]();
        this.show = false;
        this.facility = null;
        this.facilityShaking = null;
        this.showFragilityInfo = false;
    }
    FacilityInfoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscriptions.add(this.facService.select.subscribe(function (facility) {
            _this.onFacility(facility);
        }));
        this.subscriptions.add(this.facService.facilityShaking.subscribe(function (shaking) {
            _this.facilityShaking = shaking;
        }));
    };
    FacilityInfoComponent.prototype.onFacility = function (facility) {
        if (!facility) {
            this.facility = null;
            return;
        }
    };
    FacilityInfoComponent.prototype.ngOnDestroy = function () {
        this.endSubscriptions();
    };
    FacilityInfoComponent.prototype.endSubscriptions = function () {
        this.subscriptions.unsubscribe();
    };
    FacilityInfoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'facility-info',
            template: __webpack_require__(/*! ./facility-info.component.html */ "./src/app/shakecast-admin/facilities/facility-info/facility-info.component.html"),
            styles: [__webpack_require__(/*! ./facility-info.component.css */ "./src/app/shakecast-admin/facilities/facility-info/facility-info.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_facility_service__WEBPACK_IMPORTED_MODULE_4__["FacilityService"],
            _core_earthquake_service__WEBPACK_IMPORTED_MODULE_5__["EarthquakeService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], FacilityInfoComponent);
    return FacilityInfoComponent;
}());



/***/ }),

/***/ "./src/app/shakecast-admin/facilities/facility-list.component.css":
/*!************************************************************************!*\
  !*** ./src/app/shakecast-admin/facilities/facility-list.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYWtlY2FzdC1hZG1pbi9mYWNpbGl0aWVzL2ZhY2lsaXR5LWxpc3QuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/shakecast-admin/facilities/facility-list.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/shakecast-admin/facilities/facility-list.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"data-list-inner-container\" *ngIf=\"facilityData as facData\">\r\n    <div *ngIf=\"!loadingData\">\r\n        <div *ngIf=\"facData.features as facilities\">\r\n            <div class=\"data\" \r\n                    [@selected]=\"fac?.selected\" \r\n                    *ngFor=\"let fac of facilities\" \r\n                    (click)=\"clickFac(fac)\">\r\n                <div [@headerSelected]=\"fac?.selected\" class=\"data-header\" [style.border]=\"'5px solid ' + fac?.shaking?.alert_level\">\r\n                    <h3>{{ fac.properties.name }}</h3>\r\n                </div>\r\n                <div class=\"data-body\">\r\n                    <div class=\"data-info-container\">\r\n                        <table class=\"container-table\">\r\n                            <tr>\r\n                                <th>Type: </th><td><p>{{ fac.properties.facility_type }}</p></td>\r\n                            </tr>\r\n                            <tr>\r\n                                <th>Location: </th><td><p>{{ (fac.properties.lat_max + fac.properties.lat_min) / 2 }}, {{ (fac.properties.lon_max + fac.properties.lon_min) / 2 }}</p></td>\r\n                            </tr>\r\n                        </table>\r\n                        <div class=\"updated\">\r\n                            <p>Updated: {{ fac.properties.updated * 1000 | date }}</p>\r\n                            <p>|</p>\r\n                            <p>{{ fac.properties.updated_by }}</p>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div *ngIf=\"facData.features.length == 0\">\r\n            <h2 class=\"data-list-no-data\">\r\n              (Drag and drop XML files here to upload)\r\n            </h2>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/shakecast-admin/facilities/facility-list.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/shakecast-admin/facilities/facility-list.component.ts ***!
  \***********************************************************************/
/*! exports provided: FacilityListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FacilityListComponent", function() { return FacilityListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _core_facility_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @core/facility.service */ "./src/app/core/facility.service.ts");
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(underscore__WEBPACK_IMPORTED_MODULE_6__);







var FacilityListComponent = /** @class */ (function () {
    function FacilityListComponent(facService, element, _router) {
        this.facService = facService;
        this.element = element;
        this._router = _router;
        this.loadingData = false;
        this.shownFacilityData = [];
        this.facilityData = [];
        this.lastShownFacIndex = 0;
        this.selectedFacs = [];
        this.filter = {};
        this.subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subscription"]();
    }
    FacilityListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscriptions.add(this.facService.facilityData.subscribe(function (facs) {
            if (!facs || !facs.features) {
                _this.facilityData = null;
                return;
            }
            _this.facilityData = facs;
            if (_this.selectedFacs.length === 0) {
                // add a facility if the array is empty
                _this.facService.selectedFacs = _this.selectedFacs;
            }
            if ((_this.facilityData.features.length > 0) && (_this._router.url === '/shakecast-admin/facilities')) {
                if (!_this.selectedFacs) {
                    _this.selectedFacs.push(_this.facilityData[0]);
                    _this.facService.selectedFacs.push(_this.facilityData[0]);
                }
                _this.clickFac(_this.facilityData.features[0]);
            }
        }));
        this.subscriptions.add(this.facService.facilityDataUpdate.subscribe(function (facs) {
            if (facs != null) {
                _this.facilityData.features = _this.facilityData.features.concat(facs.features);
            }
        }));
        this.subscriptions.add(this.facService.selection.subscribe(function (select) {
            if (select === 'all') {
                _this.selectAll();
            }
            else if (select === 'none') {
                _this.unselectAll();
            }
            else if (select === 'delete') {
            }
            _this.facService.selectedFacs = _this.selectedFacs;
        }));
    };
    FacilityListComponent.prototype.clickFac = function (fac) {
        if (fac.selected === 'yes') {
            fac.selected = 'no';
        }
        else {
            fac.selected = 'yes';
        }
        if (fac.selected === 'yes') {
            // add it to the list
            this.selectedFacs.push(fac);
            this.plotFac(fac);
        }
        else {
            // remove it from the list
            var index = underscore__WEBPACK_IMPORTED_MODULE_6__["findIndex"](this.selectedFacs, { shakecast_id: fac.shakecast_id });
            this.selectedFacs.splice(index, 1);
            this.removeFac(fac);
        }
        this.facService.selectedFacs = this.selectedFacs;
    };
    FacilityListComponent.prototype.selectAll = function () {
        this.unselectAll();
        for (var _i = 0, _a = this.facilityData.features; _i < _a.length; _i++) {
            var fac = _a[_i];
            fac.selected = 'yes';
            this.selectedFacs.push(fac);
            this.plotFac(fac);
        }
    };
    FacilityListComponent.prototype.unselectAll = function () {
        for (var _i = 0, _a = this.selectedFacs; _i < _a.length; _i++) {
            var fac = _a[_i];
            fac.selected = 'no';
            this.removeFac(fac);
        }
        this.selectedFacs = [];
        this.facService.selectedFacs = [];
    };
    FacilityListComponent.prototype.removeFac = function (fac) {
        this.facService.removeFac(fac);
    };
    FacilityListComponent.prototype.plotFac = function (fac) {
        this.facService.select.next(fac);
    };
    FacilityListComponent.prototype.ngOnDestroy = function () {
        this.endSubscriptions();
    };
    FacilityListComponent.prototype.endSubscriptions = function () {
        this.subscriptions.unsubscribe();
    };
    FacilityListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'facility-list',
            template: __webpack_require__(/*! ./facility-list.component.html */ "./src/app/shakecast-admin/facilities/facility-list.component.html"),
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('selected', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('yes', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ transform: 'translateY(-10px)' })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('no', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ transform: 'translateY(0px)' })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('* => *', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('100ms ease-in-out'))
                ]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('headerSelected', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('yes', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ 'background-color': '#7af' })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('no', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ 'background-color': '*' }))
                ])
            ],
            styles: [__webpack_require__(/*! ./facility-list.component.css */ "./src/app/shakecast-admin/facilities/facility-list.component.css"), __webpack_require__(/*! ../../shared/css/data-list.css */ "./src/app/shared/css/data-list.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_facility_service__WEBPACK_IMPORTED_MODULE_5__["FacilityService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], FacilityListComponent);
    return FacilityListComponent;
}());



/***/ }),

/***/ "./src/app/shakecast-admin/groups/groups.component.css":
/*!*************************************************************!*\
  !*** ./src/app/shakecast-admin/groups/groups.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".map {\r\n    width: 100%;\r\n    height: 500px;\r\n}\r\n\r\n.map-container {\r\n    width: 100%;\r\n    height: 500px;\r\n    position: relative;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hha2VjYXN0LWFkbWluL2dyb3Vwcy9ncm91cHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7SUFDWCxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksV0FBVztJQUNYLGFBQWE7SUFDYixrQkFBa0I7QUFDdEIiLCJmaWxlIjoic3JjL2FwcC9zaGFrZWNhc3QtYWRtaW4vZ3JvdXBzL2dyb3Vwcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hcCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogNTAwcHg7XHJcbn1cclxuXHJcbi5tYXAtY29udGFpbmVyIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA1MDBweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/shakecast-admin/groups/groups.component.html":
/*!**************************************************************!*\
  !*** ./src/app/shakecast-admin/groups/groups.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"map-container\">\r\n    <my-map class=\"map\" stickToTop></my-map>\r\n</div>\r\n\r\n<div class=\"data-list-outer-container\">\r\n    <group-list></group-list>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/shakecast-admin/groups/groups.component.ts":
/*!************************************************************!*\
  !*** ./src/app/shakecast-admin/groups/groups.component.ts ***!
  \************************************************************/
/*! exports provided: GroupsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupsComponent", function() { return GroupsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_title_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/title.service */ "./src/app/core/title.service.ts");
/* harmony import */ var _core_group_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/group.service */ "./src/app/core/group.service.ts");




var GroupsComponent = /** @class */ (function () {
    function GroupsComponent(groupService, titleService) {
        this.groupService = groupService;
        this.titleService = titleService;
    }
    GroupsComponent.prototype.ngOnInit = function () {
        this.titleService.title.next('Groups');
    };
    GroupsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'groups',
            template: __webpack_require__(/*! ./groups.component.html */ "./src/app/shakecast-admin/groups/groups.component.html"),
            styles: [__webpack_require__(/*! ./groups.component.css */ "./src/app/shakecast-admin/groups/groups.component.css"), __webpack_require__(/*! ../../shared/css/data-list.css */ "./src/app/shared/css/data-list.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_group_service__WEBPACK_IMPORTED_MODULE_3__["GroupService"],
            _core_title_service__WEBPACK_IMPORTED_MODULE_2__["TitleService"]])
    ], GroupsComponent);
    return GroupsComponent;
}());



/***/ }),

/***/ "./src/app/shakecast-admin/notifications/notification.service.ts":
/*!***********************************************************************!*\
  !*** ./src/app/shakecast-admin/notifications/notification.service.ts ***!
  \***********************************************************************/
/*! exports provided: NotificationHTMLService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationHTMLService", function() { return NotificationHTMLService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var angular2_notifications__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular2-notifications */ "./node_modules/angular2-notifications/angular2-notifications.umd.js");
/* harmony import */ var angular2_notifications__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(angular2_notifications__WEBPACK_IMPORTED_MODULE_4__);





var NotificationHTMLService = /** @class */ (function () {
    function NotificationHTMLService(_http, notService) {
        this._http = _http;
        this.notService = notService;
        this.loadingData = new rxjs__WEBPACK_IMPORTED_MODULE_3__["ReplaySubject"](1);
        this.notification = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](null);
        this.config = new rxjs__WEBPACK_IMPORTED_MODULE_3__["ReplaySubject"](1);
        this.tempNames = new rxjs__WEBPACK_IMPORTED_MODULE_3__["ReplaySubject"](1);
        this.imageNames = new rxjs__WEBPACK_IMPORTED_MODULE_3__["ReplaySubject"](1);
        this.name = new rxjs__WEBPACK_IMPORTED_MODULE_3__["ReplaySubject"](1);
    }
    NotificationHTMLService.prototype.getNotification = function (name, notType, config) {
        var _this = this;
        if (config === void 0) { config = null; }
        this.loadingData.next(true);
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('config', JSON.stringify(config));
        this._http.get('api/notification-html/' + notType + '/' + name, { params: params, responseType: 'text' })
            .subscribe(function (result) {
            _this.name.next(name);
            _this.notification.next(result);
            _this.loadingData.next(false);
        });
    };
    NotificationHTMLService.prototype.getConfigs = function (notType, name) {
        var _this = this;
        this.loadingData.next(true);
        this._http.get('api/notification-config/' + notType + '/' + name)
            .subscribe(function (result) {
            _this.config.next(result);
            _this.loadingData.next(false);
        });
    };
    NotificationHTMLService.prototype.getTemplateNames = function () {
        var _this = this;
        this.loadingData.next(true);
        this._http.get('api/template-names')
            .subscribe(function (result) {
            _this.tempNames.next(result);
            _this.loadingData.next(false);
        });
    };
    NotificationHTMLService.prototype.newTemplate = function (name) {
        var _this = this;
        this._http.get('api/new-template/' + name)
            .subscribe(function (result) {
            if (result === true) {
                _this.notService.success('Template Created', 'Created ' + name + ' template');
                _this.getNotification(name, 'new_event');
                _this.getConfigs('new_event', name);
            }
            else {
                _this.notService.success('Template Creation Failed', 'Check application permissions');
            }
        });
    };
    NotificationHTMLService.prototype.saveConfigs = function (name, config) {
        var _this = this;
        this._http.post('api/notification-config/' + config.type + '/' + name, { config: config }).subscribe(function (result) {
            _this.notService.success('Success!', 'New Configurations Saved');
        });
    };
    NotificationHTMLService.prototype.getImageNames = function () {
        var _this = this;
        this._http.get('api/images/')
            .subscribe(function (result) {
            _this.imageNames.next(result);
        });
    };
    NotificationHTMLService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            angular2_notifications__WEBPACK_IMPORTED_MODULE_4__["NotificationsService"]])
    ], NotificationHTMLService);
    return NotificationHTMLService;
}());



/***/ }),

/***/ "./src/app/shakecast-admin/notifications/notifications.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/shakecast-admin/notifications/notifications.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".item input, .item select, .item textarea {\r\n    font-size: 15px;\r\n}\r\n\r\n.container {\r\n    width: 100%;\r\n    background: #fff;\r\n    display: flex;\r\n}\r\n\r\n#notDropdown {\r\n    width: 200px;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    position: relative;\r\n    height: 40px;\r\n    font-size: 20px;\r\n    text-align: center;\r\n}\r\n\r\n.column {\r\n    display: inline-block;\r\n    padding: 5px;\r\n    height: 100vh;\r\n    width: 40%;\r\n    overflow: scroll;\r\n}\r\n\r\n.not-column, .conf-column {\r\n    z-index: 2;\r\n    background: white;\r\n    margin: 5px;\r\n    border-radius: 10px;\r\n}\r\n\r\n.not-column {\r\n    width: 55%;\r\n    border: 2px solid #55aaee;\r\n}\r\n\r\n.event-type {\r\n    cursor: pointer;\r\n    border: 3px solid #ffffff;\r\n    border-radius: 5px;\r\n    padding: 5px;\r\n}\r\n\r\n.event-type:hover {\r\n    background: #55aaee;\r\n    border-color: #55aaee;\r\n    color: #ffffff;\r\n}\r\n\r\n.event-type.selected {\r\n    border: 3px solid #55aaee;\r\n}\r\n\r\n.control-buttons {\r\n    margin: 20px;\r\n}\r\n\r\n.section {\r\n    border-bottom: 20px dashed #efefef;\r\n    padding: 10px;\r\n    margin: 10px;\r\n    text-align: center;\r\n}\r\n\r\n.section label {\r\n    font-weight: bold\r\n}\r\n\r\n.section.last {\r\n    border: none;\r\n}\r\n\r\n#templateName {\r\n    width:100%\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hha2VjYXN0LWFkbWluL25vdGlmaWNhdGlvbnMvbm90aWZpY2F0aW9ucy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osZUFBZTtJQUNmLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixZQUFZO0lBQ1osYUFBYTtJQUNiLFVBQVU7SUFDVixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsaUJBQWlCO0lBQ2pCLFdBQVc7SUFDWCxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxVQUFVO0lBQ1YseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixxQkFBcUI7SUFDckIsY0FBYztBQUNsQjs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxrQ0FBa0M7SUFDbEMsYUFBYTtJQUNiLFlBQVk7SUFDWixrQkFBa0I7QUFDdEI7O0FBR0E7SUFDSTtBQUNKOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9zaGFrZWNhc3QtYWRtaW4vbm90aWZpY2F0aW9ucy9ub3RpZmljYXRpb25zLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaXRlbSBpbnB1dCwgLml0ZW0gc2VsZWN0LCAuaXRlbSB0ZXh0YXJlYSB7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbn1cclxuXHJcbi5jb250YWluZXIge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxufVxyXG5cclxuI25vdERyb3Bkb3duIHtcclxuICAgIHdpZHRoOiAyMDBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uY29sdW1uIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICB3aWR0aDogNDAlO1xyXG4gICAgb3ZlcmZsb3c6IHNjcm9sbDtcclxufVxyXG5cclxuLm5vdC1jb2x1bW4sIC5jb25mLWNvbHVtbiB7XHJcbiAgICB6LWluZGV4OiAyO1xyXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICBtYXJnaW46IDVweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbn1cclxuXHJcbi5ub3QtY29sdW1uIHtcclxuICAgIHdpZHRoOiA1NSU7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjNTVhYWVlO1xyXG59XHJcblxyXG4uZXZlbnQtdHlwZSB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBib3JkZXI6IDNweCBzb2xpZCAjZmZmZmZmO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG59XHJcblxyXG4uZXZlbnQtdHlwZTpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjNTVhYWVlO1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjNTVhYWVlO1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbn1cclxuXHJcbi5ldmVudC10eXBlLnNlbGVjdGVkIHtcclxuICAgIGJvcmRlcjogM3B4IHNvbGlkICM1NWFhZWU7XHJcbn1cclxuXHJcbi5jb250cm9sLWJ1dHRvbnMge1xyXG4gICAgbWFyZ2luOiAyMHB4O1xyXG59XHJcblxyXG4uc2VjdGlvbiB7XHJcbiAgICBib3JkZXItYm90dG9tOiAyMHB4IGRhc2hlZCAjZWZlZmVmO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIG1hcmdpbjogMTBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuXHJcbi5zZWN0aW9uIGxhYmVsIHtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkXHJcbn1cclxuXHJcbi5zZWN0aW9uLmxhc3Qge1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG59XHJcblxyXG4jdGVtcGxhdGVOYW1lIHtcclxuICAgIHdpZHRoOjEwMCVcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/shakecast-admin/notifications/notifications.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/shakecast-admin/notifications/notifications.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"not-column column\">\r\n    <ng-container *ngIf=\"notHTMLService.notification | async as notification\">\r\n      <div class=\"notification\" [innerHTML]=\"notification | safeHtml\"></div>\r\n    </ng-container>\r\n  </div>\r\n\r\n  <div class=\"conf-column column\">\r\n    <div class=\"section\">\r\n      <div class=\"item\" *ngIf=\"!enteringNew\">\r\n        <label for=\"notDropdown\">Pick a template: </label>\r\n        <select class=\"not-dropdown\"\r\n            id=\"notDropdown\"\r\n            [(ngModel)]=\"name\"\r\n            (change)=\"getNotification(name, eventType)\">\r\n          <ng-container *ngIf=\"notHTMLService.tempNames | async as tempNames\">\r\n            <option *ngFor=\"let eachName of tempNames\" [ngValue]=\"eachName\">\r\n              {{ eachName }}\r\n            </option>\r\n          </ng-container>\r\n        </select>\r\n      </div>\r\n\r\n      <div class=\"item\">\r\n        <label for=\"newTemplate\" *ngIf=\"!enteringNew\">Or</label>\r\n        <h3 class=\"button\"\r\n            id=\"newTemplate\"\r\n            *ngIf=\"!enteringNew\"\r\n            (click)=\"enteringNew = true\">\r\n          Create a New Template\r\n        </h3>\r\n\r\n        <label for=\"templateName\" *ngIf=\"enteringNew\"\r\n          >Creating New Template</label>\r\n        <input class=\"template-name\"\r\n            id=\"templateName\"\r\n            *ngIf=\"enteringNew\"\r\n            [(ngModel)]=\"newName\"\r\n            placeholder=\"Give it a name, then hit enter\" />\r\n        <h3 class=\"button\" *ngIf=\"enteringNew\" (click)=\"enteringNew = false\">\r\n          Cancel\r\n        </h3>\r\n      </div>\r\n\r\n      <div class=\"item\">\r\n        <h3 class=\"conf event-type button\"\r\n            [ngClass]=\"{ selected: eventType == 'new_event' }\"\r\n            (click)=\"getNotification(name, 'new_event')\">\r\n          New Event\r\n        </h3>\r\n        <h3\r\n            class=\"conf event-type button\"\r\n            [ngClass]=\"{ selected: eventType == 'inspection' }\"\r\n            (click)=\"getNotification(name, 'inspection')\">\r\n          Facilities\r\n        </h3>\r\n        <h3 class=\"conf event-type button\"\r\n            [ngClass]=\"{ selected: eventType == 'pdf' }\"\r\n            (click)=\"getNotification(name, 'pdf')\">\r\n          PDF\r\n        </h3>\r\n      </div>\r\n    </div>\r\n\r\n    <ng-container *ngIf=\"eventType === 'new_event'\">\r\n      <notifications-new-event></notifications-new-event>\r\n    </ng-container>\r\n    <ng-container *ngIf=\"eventType === 'inspection'\">\r\n      <notifications-facilities></notifications-facilities>\r\n    </ng-container>\r\n    <ng-container *ngIf=\"eventType === 'pdf'\">\r\n      <notifications-pdf></notifications-pdf>\r\n    </ng-container>\r\n\r\n    <div class=\"control-buttons\">\r\n      <h2 class=\"button\" (click)=\"saveConfigs()\">Save</h2>\r\n      <h2 class=\"button\" (click)=\"reset()\">Reset</h2>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/shakecast-admin/notifications/notifications.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/shakecast-admin/notifications/notifications.component.ts ***!
  \**************************************************************************/
/*! exports provided: NotificationsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationsComponent", function() { return NotificationsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_title_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/title.service */ "./src/app/core/title.service.ts");
/* harmony import */ var _notification_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./notification.service */ "./src/app/shakecast-admin/notifications/notification.service.ts");
/* harmony import */ var angular2_notifications__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular2-notifications */ "./node_modules/angular2-notifications/angular2-notifications.umd.js");
/* harmony import */ var angular2_notifications__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(angular2_notifications__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(underscore__WEBPACK_IMPORTED_MODULE_6__);







var NotificationsComponent = /** @class */ (function () {
    function NotificationsComponent(titleService, notHTMLService, notService) {
        this.titleService = titleService;
        this.notHTMLService = notHTMLService;
        this.notService = notService;
        this.subscriptions = [];
        this.notification = '';
        this.name = 'default';
        this.tempNames = [];
        this.config = {};
        this.oldConfig = {};
        this.previewConfig = {};
        this.eventType = 'new_event';
        this.enteringNew = false;
        this.newName = '';
        this.imageNames = [];
    }
    NotificationsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.titleService.title.next('Notifications');
        this.subscriptions.push(this.notHTMLService.config.subscribe(function (config) {
            _this.config = config;
            _this.oldConfig = JSON.parse(JSON.stringify(config));
            _this.previewConfig = JSON.parse(JSON.stringify(config));
        }));
        this.subscriptions.push(this.notHTMLService.name.subscribe(function (name) {
            _this.name = name;
        }));
        this.subscriptions.push(Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["timer"])(0, 3000).subscribe(function (x) {
            _this.preview(_this.name, _this.eventType, _this.config);
        }));
        this.notHTMLService.getNotification(this.name, this.eventType);
        this.notHTMLService.getConfigs('new_event', this.name);
        this.notHTMLService.getTemplateNames();
        this.notHTMLService.getImageNames();
    };
    NotificationsComponent.prototype.getNotification = function (name, eventType, config) {
        if (config === void 0) { config = null; }
        this.eventType = eventType;
        this.name = name;
        this.notHTMLService.getNotification(name, eventType, config);
        this.notHTMLService.getConfigs(eventType, name);
    };
    NotificationsComponent.prototype.preview = function (name, eventType, config) {
        if (config === void 0) { config = null; }
        if (!underscore__WEBPACK_IMPORTED_MODULE_6__["isEqual"](this.config, this.previewConfig)) {
            this.notHTMLService.getNotification(name, eventType, config);
            this.previewConfig = JSON.parse(JSON.stringify(this.config));
        }
    };
    NotificationsComponent.prototype.saveConfigs = function () {
        if (!underscore__WEBPACK_IMPORTED_MODULE_6__["isEqual"](this.config, this.oldConfig)) {
            this.notHTMLService.saveConfigs(this.name, this.config);
            this.oldConfig = JSON.parse(JSON.stringify(this.config));
        }
        else {
            this.notService.info('No Changes', 'These configs are already in place!');
        }
    };
    NotificationsComponent.prototype.reset = function () {
        this.config = JSON.parse(JSON.stringify(this.oldConfig));
    };
    NotificationsComponent.prototype.keyboardInput = function (event) {
        if (this.enteringNew === true) {
            if (event.keyCode === 13) {
                if (this.newName !== '') {
                    // remove unwanted characters
                    var cleanName = this.newName.replace(/[^\w]/gi, '');
                    this.notHTMLService.newTemplate(cleanName);
                    this.enteringNew = false;
                    this.newName = '';
                    this.notHTMLService.getTemplateNames();
                }
            }
        }
        else {
            if (event.keyCode === 13) {
                this.preview(this.name, this.eventType, this.config);
            }
        }
    };
    NotificationsComponent.prototype.endSubscriptions = function () {
        for (var _i = 0, _a = this.subscriptions; _i < _a.length; _i++) {
            var sub = _a[_i];
            sub.unsubscribe();
        }
    };
    NotificationsComponent.prototype.ngOnDestroy = function () {
        this.endSubscriptions();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('notificationContainer'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], NotificationsComponent.prototype, "notContainer", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:keydown', ['$event']),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], NotificationsComponent.prototype, "keyboardInput", null);
    NotificationsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'notifications',
            template: __webpack_require__(/*! ./notifications.component.html */ "./src/app/shakecast-admin/notifications/notifications.component.html"),
            styles: [__webpack_require__(/*! ./notifications.component.css */ "./src/app/shakecast-admin/notifications/notifications.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_title_service__WEBPACK_IMPORTED_MODULE_2__["TitleService"],
            _notification_service__WEBPACK_IMPORTED_MODULE_3__["NotificationHTMLService"],
            angular2_notifications__WEBPACK_IMPORTED_MODULE_4__["NotificationsService"]])
    ], NotificationsComponent);
    return NotificationsComponent;
}());



/***/ }),

/***/ "./src/app/shakecast-admin/scenarios/scenarios.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/shakecast-admin/scenarios/scenarios.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".map-container {\r\n    width: 100%;\r\n    height: 100%;\r\n    top: 0;\r\n    position: fixed;\r\n}\r\n\r\n.control {\r\n    padding: 10px;\r\n    text-align: center;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hha2VjYXN0LWFkbWluL3NjZW5hcmlvcy9zY2VuYXJpb3MuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osTUFBTTtJQUNOLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isa0JBQWtCO0FBQ3RCIiwiZmlsZSI6InNyYy9hcHAvc2hha2VjYXN0LWFkbWluL3NjZW5hcmlvcy9zY2VuYXJpb3MuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXAtY29udGFpbmVyIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG59XHJcblxyXG4uY29udHJvbCB7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/shakecast-admin/scenarios/scenarios.component.html":
/*!********************************************************************!*\
  !*** ./src/app/shakecast-admin/scenarios/scenarios.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"map-container\">\r\n    <my-map class=\"map\"></my-map>\r\n</div>\r\n\r\n<panels-right-panel\r\n        [title]=\"'Scenarios'\"\r\n        [open]=\"true\">\r\n\r\n    <earthquake-list></earthquake-list>\r\n</panels-right-panel>\r\n\r\n<panels-left-panel *ngIf=\"searchShown\" [open]=\"true\">\r\n    <scenario-search></scenario-search>\r\n</panels-left-panel>\r\n\r\n<panels-bottom-panel>\r\n    <div class=\"control\">\r\n        <div *ngIf=\"!searchShown\">\r\n            <h3 class=\"button\" (click)=\"getMore()\">Download More from the Web</h3>\r\n            <!--\r\n            <h3 class=\"button\" (click)=\"getMore()\">Search your Earthquake Database</h3>\r\n            -->\r\n            <h3 class=\"button\" (click)=\"eqService.runScenario(eqService.selected.properties.event_id)\">Run Scenario</h3>\r\n            <h3 class=\"button\" (click)=\"deleteScenario()\">Delete Selected</h3>\r\n        </div>\r\n        <div *ngIf=\"searchShown\">\r\n            <h3 class=\"button\" (click)=\"eqService.downloadScenario(eqService.selected.properties.event_id, eqService.selected.scenario)\">Download Selected</h3>\r\n            <h3 class=\"button\" (click)=\"userScenarios()\">Back</h3>\r\n        </div>\r\n    </div>\r\n</panels-bottom-panel>\r\n"

/***/ }),

/***/ "./src/app/shakecast-admin/scenarios/scenarios.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/shakecast-admin/scenarios/scenarios.component.ts ***!
  \******************************************************************/
/*! exports provided: ScenariosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScenariosComponent", function() { return ScenariosComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_title_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/title.service */ "./src/app/core/title.service.ts");
/* harmony import */ var _core_earthquake_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/earthquake.service */ "./src/app/core/earthquake.service.ts");
/* harmony import */ var _core_panel_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core/panel.service */ "./src/app/core/panel.service.ts");





var ScenariosComponent = /** @class */ (function () {
    function ScenariosComponent(titleService, eqService, panelService) {
        this.titleService = titleService;
        this.eqService = eqService;
        this.panelService = panelService;
        this.subscriptions = [];
        this.searchShown = false;
    }
    ScenariosComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.titleService.title.next('Scenarios');
        this.subscriptions.push(this.eqService.showScenarioSearch.subscribe(function (show) {
            _this.searchShown = show;
        }));
        this.subscriptions.push(this.eqService.earthquakeData.subscribe(function (eqs) {
            _this.onEqData(eqs);
        }));
        this.eqService.getData({ 'scenario': true });
    };
    ScenariosComponent.prototype.onEqData = function (eqs) {
        if ((!eqs) || (!eqs.features) || (eqs.features.length === 0)) {
            return null;
        }
        this.eqService.selectEvent.next(eqs.features[0]);
    };
    ScenariosComponent.prototype.getMore = function () {
        this.eqService.earthquakeData.next(null);
        this.searchShown = true;
        this.panelService.controlLeft.next('shown');
    };
    ScenariosComponent.prototype.userScenarios = function () {
        this.eqService.showScenarioSearch.next(false);
        this.eqService.getData({ 'scenario': true });
        this.searchShown = false;
        this.panelService.controlLeft.next('hidden');
    };
    ScenariosComponent.prototype.deleteScenario = function () {
        this.eqService.deleteScenario(this.eqService.selected.properties.event_id);
    };
    ScenariosComponent.prototype.ngOnDestroy = function () {
        this.endSubscriptions();
        this.eqService.selectEvent.next(null);
        this.eqService.earthquakeData.next(null);
    };
    ScenariosComponent.prototype.endSubscriptions = function () {
        for (var _i = 0, _a = this.subscriptions; _i < _a.length; _i++) {
            var sub = _a[_i];
            sub.unsubscribe();
        }
    };
    ScenariosComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'scenarios',
            template: __webpack_require__(/*! ./scenarios.component.html */ "./src/app/shakecast-admin/scenarios/scenarios.component.html"),
            styles: [__webpack_require__(/*! ./scenarios.component.css */ "./src/app/shakecast-admin/scenarios/scenarios.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_title_service__WEBPACK_IMPORTED_MODULE_2__["TitleService"],
            _core_earthquake_service__WEBPACK_IMPORTED_MODULE_3__["EarthquakeService"],
            _core_panel_service__WEBPACK_IMPORTED_MODULE_4__["PanelService"]])
    ], ScenariosComponent);
    return ScenariosComponent;
}());



/***/ }),

/***/ "./src/app/shakecast-admin/shakecast-admin.component.html":
/*!****************************************************************!*\
  !*** ./src/app/shakecast-admin/shakecast-admin.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div ng2FileDrop (fileOver)=\"showUpload()\">\r\n    <update></update>\r\n    <router-outlet></router-outlet>\r\n    <upload></upload>\r\n</div>"

/***/ }),

/***/ "./src/app/shakecast-admin/shakecast-admin.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/shakecast-admin/shakecast-admin.component.ts ***!
  \**************************************************************/
/*! exports provided: ShakeCastAdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShakeCastAdminComponent", function() { return ShakeCastAdminComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _upload_upload_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./upload/upload.service */ "./src/app/shakecast-admin/upload/upload.service.ts");
/* harmony import */ var _shared_animations_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shared/animations/animations */ "./src/app/shared/animations/animations.ts");




var ShakeCastAdminComponent = /** @class */ (function () {
    function ShakeCastAdminComponent(uploadService) {
        this.uploadService = uploadService;
    }
    ShakeCastAdminComponent.prototype.showUpload = function () {
        this.uploadService.showUpload();
    };
    ShakeCastAdminComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'shakecast-admin',
            template: __webpack_require__(/*! ./shakecast-admin.component.html */ "./src/app/shakecast-admin/shakecast-admin.component.html"),
            animations: [_shared_animations_animations__WEBPACK_IMPORTED_MODULE_3__["fadeAnimation"]]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_upload_upload_service__WEBPACK_IMPORTED_MODULE_2__["UploadService"]])
    ], ShakeCastAdminComponent);
    return ShakeCastAdminComponent;
}());



/***/ }),

/***/ "./src/app/shakecast-admin/shakecast-admin.routing.ts":
/*!************************************************************!*\
  !*** ./src/app/shakecast-admin/shakecast-admin.routing.ts ***!
  \************************************************************/
/*! exports provided: shakecastAdminRoutes, routing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shakecastAdminRoutes", function() { return shakecastAdminRoutes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routing", function() { return routing; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shakecast_admin_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shakecast-admin.component */ "./src/app/shakecast-admin/shakecast-admin.component.ts");
/* harmony import */ var _facilities_facilities_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./facilities/facilities.component */ "./src/app/shakecast-admin/facilities/facilities.component.ts");
/* harmony import */ var _groups_groups_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./groups/groups.component */ "./src/app/shakecast-admin/groups/groups.component.ts");
/* harmony import */ var _users_users_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./users/users.component */ "./src/app/shakecast-admin/users/users.component.ts");
/* harmony import */ var _config_config_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./config/config.component */ "./src/app/shakecast-admin/config/config.component.ts");
/* harmony import */ var _scenarios_scenarios_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./scenarios/scenarios.component */ "./src/app/shakecast-admin/scenarios/scenarios.component.ts");
/* harmony import */ var _notifications_notifications_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./notifications/notifications.component */ "./src/app/shakecast-admin/notifications/notifications.component.ts");
/* harmony import */ var _auth_login_guard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../auth/login.guard */ "./src/app/auth/login.guard.ts");
/* harmony import */ var _auth_admin_guard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../auth/admin.guard */ "./src/app/auth/admin.guard.ts");










var appRoutes = [
    {
        path: '',
        component: _shakecast_admin_component__WEBPACK_IMPORTED_MODULE_1__["ShakeCastAdminComponent"],
        canActivate: [_auth_login_guard__WEBPACK_IMPORTED_MODULE_8__["LoginGuard"], _auth_admin_guard__WEBPACK_IMPORTED_MODULE_9__["AdminGuard"]],
        children: [
            {
                path: 'facilities',
                component: _facilities_facilities_component__WEBPACK_IMPORTED_MODULE_2__["FacilitiesComponent"]
            },
            {
                path: 'groups',
                component: _groups_groups_component__WEBPACK_IMPORTED_MODULE_3__["GroupsComponent"]
            },
            {
                path: 'users',
                component: _users_users_component__WEBPACK_IMPORTED_MODULE_4__["UsersComponent"]
            },
            {
                path: 'scenarios',
                component: _scenarios_scenarios_component__WEBPACK_IMPORTED_MODULE_6__["ScenariosComponent"]
            },
            {
                path: 'notifications',
                component: _notifications_notifications_component__WEBPACK_IMPORTED_MODULE_7__["NotificationsComponent"]
            },
            {
                path: 'config',
                component: _config_config_component__WEBPACK_IMPORTED_MODULE_5__["ConfigComponent"]
            },
            {
                path: '',
                redirectTo: 'facilities',
                pathMatch: 'full'
            }
        ]
    }
];
var shakecastAdminRoutes = [
    {
        path: 'shakecast-admin',
        loadChildren: 'app/shakecast-admin/shakecast-admin.module#ShakeCastAdminModule'
    }
];
var routing = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(appRoutes);


/***/ }),

/***/ "./src/app/shakecast-admin/update/update.service.ts":
/*!**********************************************************!*\
  !*** ./src/app/shakecast-admin/update/update.service.ts ***!
  \**********************************************************/
/*! exports provided: UpdateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateService", function() { return UpdateService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var angular2_notifications__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular2-notifications */ "./node_modules/angular2-notifications/angular2-notifications.umd.js");
/* harmony import */ var angular2_notifications__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(angular2_notifications__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");






var UpdateService = /** @class */ (function () {
    function UpdateService(_http, notService) {
        this._http = _http;
        this.notService = notService;
        this.info = new rxjs__WEBPACK_IMPORTED_MODULE_2__["ReplaySubject"](1);
    }
    UpdateService.prototype.getData = function () {
        // This function is out of date with ShakeCast update practices
        /*
        this._http.get('api/software-update')
            .subscribe((result: any) => {
                this.info.next(result);
            });
            */
    };
    UpdateService.prototype.updateShakecast = function () {
        var _this = this;
        this._http.post('api/software-update', {})
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (result) { return result.json(); }))
            .subscribe(function (result) {
            _this.info.next(result);
            if (result['required'] === false) {
                _this.notService.success('Software Update', 'Update Complete');
            }
            else {
                _this.notService.alert('Software Update', 'Update Failed');
            }
        });
    };
    UpdateService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
            angular2_notifications__WEBPACK_IMPORTED_MODULE_4__["NotificationsService"]])
    ], UpdateService);
    return UpdateService;
}());



/***/ }),

/***/ "./src/app/shakecast-admin/upload/upload.service.ts":
/*!**********************************************************!*\
  !*** ./src/app/shakecast-admin/upload/upload.service.ts ***!
  \**********************************************************/
/*! exports provided: UploadService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadService", function() { return UploadService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");



var UploadService = /** @class */ (function () {
    function UploadService() {
        this.show = new rxjs__WEBPACK_IMPORTED_MODULE_2__["ReplaySubject"](1);
    }
    UploadService.prototype.showUpload = function () {
        this.show.next(true);
    };
    UploadService.prototype.hideUpload = function () {
        this.show.next(false);
    };
    UploadService.prototype.clearQueue = function () {
    };
    UploadService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], UploadService);
    return UploadService;
}());



/***/ }),

/***/ "./src/app/shakecast-admin/users/users.component.css":
/*!***********************************************************!*\
  !*** ./src/app/shakecast-admin/users/users.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".map-container {\r\n    width: 100%;\r\n    height: 100%;\r\n    top: 0;\r\n    position: fixed;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hha2VjYXN0LWFkbWluL3VzZXJzL3VzZXJzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLE1BQU07SUFDTixlQUFlO0FBQ25CIiwiZmlsZSI6InNyYy9hcHAvc2hha2VjYXN0LWFkbWluL3VzZXJzL3VzZXJzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFwLWNvbnRhaW5lciB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHRvcDogMDtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/shakecast-admin/users/users.component.html":
/*!************************************************************!*\
  !*** ./src/app/shakecast-admin/users/users.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"map-container\">\r\n    <my-map class=\"map\"></my-map>\r\n</div>\r\n\r\n<panels-left-panel\r\n        [title]=\"'Users'\"\r\n        [open]=\"true\">\r\n\r\n    <user-list></user-list>\r\n\r\n    <h2 class=\"button\" (click)=\"deleteCurrentUser()\">Delete User</h2>\r\n    <h2 class=\"button\" (click)=\"saveUsers()\">Save Data</h2>\r\n</panels-left-panel>\r\n\r\n\r\n<panels-right-panel\r\n        [title]=\"'Groups'\"\r\n        [open]=\"true\">\r\n\r\n    <group-list></group-list>\r\n</panels-right-panel>\r\n"

/***/ }),

/***/ "./src/app/shakecast-admin/users/users.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/shakecast-admin/users/users.component.ts ***!
  \**********************************************************/
/*! exports provided: UsersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersComponent", function() { return UsersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _core_group_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/group.service */ "./src/app/core/group.service.ts");
/* harmony import */ var _core_title_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core/title.service */ "./src/app/core/title.service.ts");
/* harmony import */ var _core_users_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @core/users.service */ "./src/app/core/users.service.ts");
/* harmony import */ var _core_map_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @core/map.service */ "./src/app/core/map.service.ts");
/* harmony import */ var _shared_animations_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @shared/animations/animations */ "./src/app/shared/animations/animations.ts");








var UsersComponent = /** @class */ (function () {
    function UsersComponent(groupService, titleService, usersService, mapService) {
        this.groupService = groupService;
        this.titleService = titleService;
        this.usersService = usersService;
        this.mapService = mapService;
        this.subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subscription"]();
        this.groupData = [];
        this.showLeft = 'shown';
        this.showRight = 'shown';
        this.showBottom = 'hidden';
    }
    UsersComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.titleService.title.next('Users and Groups');
        this.subscriptions.add(this.groupService.groupData.subscribe(function (data) {
            _this.groupData = data;
            _this.groupService.clearMap();
        }));
    };
    UsersComponent.prototype.deleteCurrentUser = function () {
        this.usersService.deleteUsers([this.usersService.current_user]);
    };
    UsersComponent.prototype.saveUsers = function () {
        this.usersService.saveUsersFromList.next(true);
    };
    UsersComponent.prototype.ngOnDestroy = function () {
        this.subscriptions.unsubscribe();
    };
    UsersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'users',
            template: __webpack_require__(/*! ./users.component.html */ "./src/app/shakecast-admin/users/users.component.html"),
            animations: [_shared_animations_animations__WEBPACK_IMPORTED_MODULE_7__["showLeft"], _shared_animations_animations__WEBPACK_IMPORTED_MODULE_7__["showRight"], _shared_animations_animations__WEBPACK_IMPORTED_MODULE_7__["showBottom"]],
            styles: [__webpack_require__(/*! ./users.component.css */ "./src/app/shakecast-admin/users/users.component.css"), __webpack_require__(/*! ../../shared/css/data-list.css */ "./src/app/shared/css/data-list.css"), __webpack_require__(/*! ../../shared/css/panels.css */ "./src/app/shared/css/panels.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_group_service__WEBPACK_IMPORTED_MODULE_3__["GroupService"],
            _core_title_service__WEBPACK_IMPORTED_MODULE_4__["TitleService"],
            _core_users_service__WEBPACK_IMPORTED_MODULE_5__["UsersService"],
            _core_map_service__WEBPACK_IMPORTED_MODULE_6__["MapService"]])
    ], UsersComponent);
    return UsersComponent;
}());



/***/ }),

/***/ "./src/app/shakecast/dashboard/dashboard.component.css":
/*!*************************************************************!*\
  !*** ./src/app/shakecast/dashboard/dashboard.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".outer-dash-container {\r\n    height: 100vh;\r\n}\r\n\r\n.map-container {\r\n    width: 100%;\r\n    height: 100%;\r\n    top: 0;\r\n    position: fixed;\r\n}\r\n\r\n.not-container {\r\n    padding: 10px;\r\n}\r\n\r\n.content-container {\r\n    text-align: center;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hha2VjYXN0L2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLE1BQU07SUFDTixlQUFlO0FBQ25COztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0QiIsImZpbGUiOiJzcmMvYXBwL3NoYWtlY2FzdC9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIub3V0ZXItZGFzaC1jb250YWluZXIge1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxufVxyXG5cclxuLm1hcC1jb250YWluZXIge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbn1cclxuXHJcbi5ub3QtY29udGFpbmVyIHtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbn1cclxuXHJcbi5jb250ZW50LWNvbnRhaW5lciB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/shakecast/dashboard/dashboard.component.html":
/*!**************************************************************!*\
  !*** ./src/app/shakecast/dashboard/dashboard.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"map-container\">\r\n    <my-map class=\"map\"></my-map>\r\n</div>\r\n\r\n<ng-container *ngIf=\"earthquakeData as eqData\">\r\n    <panels-right-panel\r\n        [title]=\"eqData.length + ' Recent Earthquakes'\"\r\n        [open]=\"true\">\r\n\r\n        <earthquake-list></earthquake-list>\r\n\r\n    </panels-right-panel>\r\n</ng-container>\r\n\r\n\r\n<panels-left-panel\r\n    [title]=\"'Notifications'\">\r\n    <info \r\n        text=\"A list of notifications sent to specific groups for\r\n        this event. Double check your notification group settings \r\n        if you should have received a notification for this event, \r\n        but did not.\"\r\n        side=\"left\"></info>\r\n    <ng-container *ngIf=\"eqService.selectEvent | async as selected\">\r\n      <notification-dash\r\n        [event]=\"selected\">\r\n      </notification-dash>\r\n    </ng-container>\r\n</panels-left-panel>\r\n\r\n\r\n<panels-bottom-panel>\r\n    <eq-filter class=\"eq-filter\"></eq-filter>\r\n</panels-bottom-panel>\r\n"

/***/ }),

/***/ "./src/app/shakecast/dashboard/dashboard.component.ts":
/*!************************************************************!*\
  !*** ./src/app/shakecast/dashboard/dashboard.component.ts ***!
  \************************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_earthquake_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/earthquake.service */ "./src/app/core/earthquake.service.ts");
/* harmony import */ var _core_title_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/title.service */ "./src/app/core/title.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(underscore__WEBPACK_IMPORTED_MODULE_5__);






var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(eqService, titleService) {
        this.eqService = eqService;
        this.titleService = titleService;
        this.facilityData = [];
        this.earthquakeData = [];
        this.subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subscription"]();
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.titleService.title.next('Dashboard');
        this.eqService.filter['timeframe'] = 'day';
        this.eqService.filter['shakemap'] = true;
        this.eqService.filter['scenario'] = false;
        this.subscriptions.add(Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["timer"])(0, 60000)
            .subscribe(function (x) {
            _this.eqService.getData(_this.eqService.filter);
        }));
        this.subscriptions.add(this.eqService.earthquakeData.subscribe(function (eqs) {
            _this.onEqData(eqs);
        }));
    };
    DashboardComponent.prototype.onEqData = function (eqFeatureCollection) {
        if (!eqFeatureCollection || !eqFeatureCollection.features) {
            return null;
        }
        // if the list is updated, show it
        var events = eqFeatureCollection.features;
        if (!underscore__WEBPACK_IMPORTED_MODULE_5__["isEqual"](this.earthquakeData, events)) {
            this.earthquakeData = events;
            if (events && events.length > 0) {
                // select new event if it just showed up
                this.eqService.selectEvent.next(events[0]);
            }
        }
    };
    DashboardComponent.prototype.endSubscriptions = function () {
        this.subscriptions.unsubscribe();
    };
    DashboardComponent.prototype.ngOnDestroy = function () {
        this.eqService.earthquakeData.next([]);
        this.eqService.selectEvent.next(null);
        this.eqService.clearData();
        this.endSubscriptions();
    };
    DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/shakecast/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/shakecast/dashboard/dashboard.component.css"), __webpack_require__(/*! ../../shared/css/panels.css */ "./src/app/shared/css/panels.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_earthquake_service__WEBPACK_IMPORTED_MODULE_2__["EarthquakeService"],
            _core_title_service__WEBPACK_IMPORTED_MODULE_3__["TitleService"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/shakecast/earthquakes/earthquake-list.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/shakecast/earthquakes/earthquake-list.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYWtlY2FzdC9lYXJ0aHF1YWtlcy9lYXJ0aHF1YWtlLWxpc3QuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/shakecast/earthquakes/earthquake-list.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/shakecast/earthquakes/earthquake-list.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"data-list-inner-container\">\r\n    <div class=\"data-list\">\r\n\r\n        <ng-container *ngIf=\"eqService.earthquakeData | async as eqData;\r\n                                else noData\">\r\n                <div class=\"data\"\r\n                    *ngFor=\"let eq of eqData.features\" (click)=\"plotEq(eq)\"\r\n                    [@selected]=\"eq === eqService.selected\">\r\n                  <ng-container *ngIf=\"eq.properties as props\">\r\n                    <div class=\"data-header\" [@headerSelected]=\"eq === eqService.selected\">\r\n                        <h3>{{eq.properties.event_id}}</h3>\r\n                    </div>\r\n                    <div class=\"data-body\">\r\n                        <div class=\"data-info-container\">\r\n                            <table>\r\n                                <tr>\r\n                                    <th>Magnitude: </th><td><p>{{props.magnitude}}</p></td>\r\n                                </tr>\r\n                                <tr>\r\n                                    <th>Location: </th><td><p>{{props.lat}}, {{props.lon}}</p></td>\r\n                                </tr>\r\n                                <tr>\r\n                                    <th>Time: </th><td>{{ props.time * 1000 | date:'HH:mm - d/M/y' }}</td>\r\n                                </tr>\r\n                            </table>\r\n                            <p class=\"place\">{{props.place}}</p>\r\n                        </div>\r\n                    </div>\r\n                  </ng-container>\r\n                </div>\r\n        </ng-container>\r\n\r\n        <ng-template #noData>\r\n            <h1 class=\"data-list-no-data\">No Earthquake Data</h1>\r\n        </ng-template>\r\n\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/shakecast/earthquakes/earthquake-list.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/shakecast/earthquakes/earthquake-list.component.ts ***!
  \********************************************************************/
/*! exports provided: EarthquakeListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EarthquakeListComponent", function() { return EarthquakeListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var _core_earthquake_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/earthquake.service */ "./src/app/core/earthquake.service.ts");




var EarthquakeListComponent = /** @class */ (function () {
    function EarthquakeListComponent(eqService) {
        this.eqService = eqService;
        this.selected = null;
        this.facility = null;
        this.filter = {
            shakemap: false,
            facilities: false
        };
    }
    EarthquakeListComponent.prototype.ngOnInit = function () {
        if (this.facility) {
            this.eqService.getData({ facility: this.facility });
        }
    };
    EarthquakeListComponent.prototype.plotEq = function (eq) {
        this.selected = eq;
        this.eqService.selected = eq;
        this.eqService.selectEvent.next(eq);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], EarthquakeListComponent.prototype, "facility", void 0);
    EarthquakeListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'earthquake-list',
            template: __webpack_require__(/*! ./earthquake-list.component.html */ "./src/app/shakecast/earthquakes/earthquake-list.component.html"),
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('selected', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('true', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ transform: 'translateY(-10px)' })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('false', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ transform: 'translateY(0px)' })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('* => *', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('200ms ease-out'))
                ]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('headerSelected', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('true', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ 'background-color': '#7af' })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('false', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ 'background-color': '*' }))
                ])
            ],
            styles: [__webpack_require__(/*! ./earthquake-list.component.css */ "./src/app/shakecast/earthquakes/earthquake-list.component.css"), __webpack_require__(/*! ../../shared/css/data-list.css */ "./src/app/shared/css/data-list.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_earthquake_service__WEBPACK_IMPORTED_MODULE_3__["EarthquakeService"]])
    ], EarthquakeListComponent);
    return EarthquakeListComponent;
}());



/***/ }),

/***/ "./src/app/shakecast/shakecast.component.html":
/*!****************************************************!*\
  !*** ./src/app/shakecast/shakecast.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"display:inline\">\r\n    <router-outlet></router-outlet>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/shakecast/shakecast.component.ts":
/*!**************************************************!*\
  !*** ./src/app/shakecast/shakecast.component.ts ***!
  \**************************************************/
/*! exports provided: ShakeCastComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShakeCastComponent", function() { return ShakeCastComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_animations_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/animations/animations */ "./src/app/shared/animations/animations.ts");



var ShakeCastComponent = /** @class */ (function () {
    function ShakeCastComponent() {
    }
    ShakeCastComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'shakecast',
            template: __webpack_require__(/*! ./shakecast.component.html */ "./src/app/shakecast/shakecast.component.html"),
            animations: [_shared_animations_animations__WEBPACK_IMPORTED_MODULE_2__["fadeAnimation"]]
        })
    ], ShakeCastComponent);
    return ShakeCastComponent;
}());



/***/ }),

/***/ "./src/app/shakecast/shakecast.routing.ts":
/*!************************************************!*\
  !*** ./src/app/shakecast/shakecast.routing.ts ***!
  \************************************************/
/*! exports provided: shakecastRoutes, routing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shakecastRoutes", function() { return shakecastRoutes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routing", function() { return routing; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shakecast_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shakecast.component */ "./src/app/shakecast/shakecast.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/shakecast/dashboard/dashboard.component.ts");
/* harmony import */ var _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user-profile/user-profile.component */ "./src/app/shakecast/user-profile/user-profile.component.ts");
/* harmony import */ var _auth_login_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../auth/login.guard */ "./src/app/auth/login.guard.ts");





var appRoutes = [
    {
        path: '',
        component: _shakecast_component__WEBPACK_IMPORTED_MODULE_1__["ShakeCastComponent"],
        canActivate: [_auth_login_guard__WEBPACK_IMPORTED_MODULE_4__["LoginGuard"]],
        children: [
            {
                path: '',
                component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__["DashboardComponent"]
            },
            {
                path: 'user-profile',
                component: _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_3__["UserProfileComponent"]
            },
            {
                path: 'dashboard',
                redirectTo: ''
            }
        ]
    }
];
var shakecastRoutes = [
    {
        path: '',
        redirectTo: '/shakecast',
        pathMatch: 'full'
    },
    {
        path: 'shakecast',
        loadChildren: 'app/shakecast/shakecast.module#ShakeCastModule'
    }
];
var routing = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(appRoutes);


/***/ }),

/***/ "./src/app/shakecast/user-profile/user-profile.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/shakecast/user-profile/user-profile.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h1 {\r\n    font-size: 50px;\r\n    text-align: center;\r\n}\r\n\r\n.info {\r\n    width: 30%;\r\n    min-width: 300px;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    display: flex;\r\n    flex-direction: column;\r\n    margin-top: 2%;\r\n    border-radius: 5px;\r\n    box-shadow: 1px 1px 15px 1px #55aaee;\r\n    -webkit-box-shadow: 1px 1px 15px 1px #55aaee;\r\n    -moz-box-shadow: 1px 1px 15px 1px #55aaee;\r\n    background: #ffffff;\r\n}\r\n\r\n.info input {\r\n    font-size: 16px;\r\n    padding: 5px;\r\n    margin: 5px;\r\n}\r\n\r\ninfo label {\r\n    font-size: 16px;\r\n    font-weight: bold;\r\n}\r\n\r\n.button {\r\n    left: 50%;\r\n    position: relative;\r\n    -webkit-transform: translateX(-50%) translateY(50%);\r\n            transform: translateX(-50%) translateY(50%);\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hha2VjYXN0L3VzZXItcHJvZmlsZS91c2VyLXByb2ZpbGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGVBQWU7SUFDZixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLG9DQUFvQztJQUNwQyw0Q0FBNEM7SUFDNUMseUNBQXlDO0lBQ3pDLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGVBQWU7SUFDZixZQUFZO0lBQ1osV0FBVztBQUNmOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLFNBQVM7SUFDVCxrQkFBa0I7SUFDbEIsbURBQTJDO1lBQTNDLDJDQUEyQztBQUMvQyIsImZpbGUiOiJzcmMvYXBwL3NoYWtlY2FzdC91c2VyLXByb2ZpbGUvdXNlci1wcm9maWxlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoMSB7XHJcbiAgICBmb250LXNpemU6IDUwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5pbmZvIHtcclxuICAgIHdpZHRoOiAzMCU7XHJcbiAgICBtaW4td2lkdGg6IDMwMHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIG1hcmdpbi10b3A6IDIlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgYm94LXNoYWRvdzogMXB4IDFweCAxNXB4IDFweCAjNTVhYWVlO1xyXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAxcHggMXB4IDE1cHggMXB4ICM1NWFhZWU7XHJcbiAgICAtbW96LWJveC1zaGFkb3c6IDFweCAxcHggMTVweCAxcHggIzU1YWFlZTtcclxuICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbn1cclxuXHJcbi5pbmZvIGlucHV0IHtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICAgIG1hcmdpbjogNXB4O1xyXG59XHJcblxyXG5pbmZvIGxhYmVsIHtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4uYnV0dG9uIHtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKSB0cmFuc2xhdGVZKDUwJSk7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/shakecast/user-profile/user-profile.component.html":
/*!********************************************************************!*\
  !*** ./src/app/shakecast/user-profile/user-profile.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"user\">\r\n    <h1>{{ user.username }}</h1>\r\n\r\n    <div class=\"info\">\r\n        <input placeholder=\"New Password\" type=\"password\" [(ngModel)]=\"user.password\">\r\n        <input placeholder=\"Email\" [(ngModel)]=\"user.email\">\r\n    </div>\r\n\r\n    <h3 class=\"button\" (click)=\"usersService.saveUsers([user])\">Save User Info</h3>\r\n</div>"

/***/ }),

/***/ "./src/app/shakecast/user-profile/user-profile.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/shakecast/user-profile/user-profile.component.ts ***!
  \******************************************************************/
/*! exports provided: UserProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserProfileComponent", function() { return UserProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_title_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/title.service */ "./src/app/core/title.service.ts");
/* harmony import */ var _core_users_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/users.service */ "./src/app/core/users.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");





var UserProfileComponent = /** @class */ (function () {
    function UserProfileComponent(usersService, titleService) {
        this.usersService = usersService;
        this.titleService = titleService;
        this.user = null;
        this.subs = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subscription"]();
    }
    UserProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.titleService.title.next('User Profile');
        this.subs.add(this.usersService.userData.subscribe(function (users) {
            _this.user = users[0];
        }));
        this.usersService.getCurrentUser();
    };
    UserProfileComponent.prototype.ngOnDestroy = function () {
        this.endSubscriptions();
    };
    UserProfileComponent.prototype.endSubscriptions = function () {
        this.subs.unsubscribe();
    };
    UserProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'user-profile',
            template: __webpack_require__(/*! ./user-profile.component.html */ "./src/app/shakecast/user-profile/user-profile.component.html"),
            styles: [__webpack_require__(/*! ./user-profile.component.css */ "./src/app/shakecast/user-profile/user-profile.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_users_service__WEBPACK_IMPORTED_MODULE_3__["UsersService"],
            _core_title_service__WEBPACK_IMPORTED_MODULE_2__["TitleService"]])
    ], UserProfileComponent);
    return UserProfileComponent;
}());



/***/ }),

/***/ "./src/app/shared/animations/animations.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/animations/animations.ts ***!
  \*************************************************/
/*! exports provided: fadeAnimation, navAnimation, showLeft, showRight, showBottom */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fadeAnimation", function() { return fadeAnimation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "navAnimation", function() { return navAnimation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showLeft", function() { return showLeft; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showRight", function() { return showRight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showBottom", function() { return showBottom; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");

// Component transition animations
var fadeAnimation = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('routeAnimation', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('*', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1 })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('void => *', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0 }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])(500)
    ]),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])(500, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0 })))
]);
var navAnimation = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('scrollChange', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('up', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ top: '-60px' })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('down', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ top: 0 })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => *', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('250ms ease-in-out')
    ])
]);
var showLeft = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('showLeft', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('hidden', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(0%)' })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('shown', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(100%)' })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => *', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('250ms ease-in-out')
    ])
]);
var showRight = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('showRight', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('hidden', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(0%)' })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('shown', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(-100%)' })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => *', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('250ms ease-in-out')
    ])
]);
var showBottom = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('showBottom', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('hidden', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateY(0%)' })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('shown', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateY(-100%)' })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => *', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('250ms ease-in-out')
    ])
]);


/***/ }),

/***/ "./src/app/shared/css/data-list.css":
/*!******************************************!*\
  !*** ./src/app/shared/css/data-list.css ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".data-list-outer-container {\r\n    height: 100%;\r\n    width: 100%;\r\n    position: relative;\r\n    overflow: visible;\r\n}\r\n\r\n.data-list-inner-container {\r\n    overflow: scroll;\r\n}\r\n\r\n.data-list {\r\n    height: 100%;\r\n    width: 100%;\r\n}\r\n\r\n.data {\r\n    margin-top: 20px;\r\n    background: #fff;\r\n    width: 20%;\r\n    min-width: 280px;\r\n    display: inline-block;\r\n    min-height: 200px;\r\n    margin-left: 5px;\r\n    margin-right: 5px;\r\n    border-width: 1px; \r\n    border-radius: 5px;\r\n    border-style: solid;\r\n    border-color:#aaaaaa;\r\n    vertical-align: top;\r\n    cursor: pointer;\r\n    -webkit-transform: translateX(0%) translateY(0%);\r\n            transform: translateX(0%) translateY(0%);\r\n    transition: -webkit-transform .1s ease-in-out;\r\n    transition: transform .1s ease-in-out;\r\n    transition: transform .1s ease-in-out, -webkit-transform .1s ease-in-out;\r\n    box-shadow: 1px 1px 5px 1px rgba(0,0,0,0.3);\r\n    -webkit-box-shadow: 1px 1px 5px 1px rgba(0,0,0,0.3);\r\n    -moz-box-shadow: 1px 1px 5px 1px rgba(0,0,0,0.3);\r\n}\r\n\r\n.data.selected {\r\n    margin-top: 10px;\r\n    box-shadow: 1px 1px 5px 2px rgba(0,0,0,0.4);\r\n    -webkit-box-shadow: 1px 1px 5px 2px rgba(0,0,0,0.4);\r\n    -moz-box-shadow: 1px 1px 5px 2px rgba(0,0,0,0.4);\r\n}\r\n\r\n.data-list-no-data {\r\n    color: white;\r\n    text-align: center;\r\n    width: 100%;\r\n    text-align: center;\r\n}\r\n\r\n.data-list-no-data-container {\r\n    height: 100%;\r\n    display: flex;\r\n    align-items: center;\r\n}\r\n\r\n/* header */\r\n\r\n.data-header {\r\n    min-height: 40px;\r\n    border-radius: 4px;\r\n    background-color: #aaaaaa;\r\n    overflow-x: scroll;\r\n}\r\n\r\n.data:hover .data-header {\r\n    background-color: #cccccc\r\n}\r\n\r\n.data-header h3 {\r\n    margin-top: 0;\r\n    margin-bottom: 0;\r\n    text-align: center;\r\n    padding: 5px;\r\n}\r\n\r\n/* body */\r\n\r\n.data-info-container {\r\n    margin: 5px;\r\n    text-align: center;\r\n    overflow: scroll;\r\n}\r\n\r\n.data p {\r\n    white-space: normal;\r\n    text-align: center;\r\n}\r\n\r\n.data th, .data td {\r\n    text-align: left;\r\n    border-bottom: 1px solid #ddd;\r\n    padding: 5px;\r\n}\r\n\r\n.data td p {\r\n    padding: 0px;\r\n    margin: 0px;\r\n}\r\n\r\n.data table {\r\n    width: 95%;\r\n}\r\n\r\n.data .container-table {\r\n    margin-bottom: 20px;\r\n}\r\n\r\n.updated {\r\n    position: absolute;\r\n    bottom: 0;\r\n}\r\n\r\n.updated p {\r\n    font-size: 10px;\r\n    display: inline-block;\r\n    margin-left: 5px;\r\n}\r\n\r\n.data .delete {\r\n    float: right;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2Nzcy9kYXRhLWxpc3QuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsVUFBVTtJQUNWLGdCQUFnQjtJQUNoQixxQkFBcUI7SUFDckIsaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsb0JBQW9CO0lBQ3BCLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsZ0RBQXdDO1lBQXhDLHdDQUF3QztJQUN4Qyw2Q0FBcUM7SUFBckMscUNBQXFDO0lBQXJDLHdFQUFxQztJQUNyQywyQ0FBMkM7SUFDM0MsbURBQW1EO0lBQ25ELGdEQUFnRDtBQUNwRDs7QUFHQTtJQUNJLGdCQUFnQjtJQUNoQiwyQ0FBMkM7SUFDM0MsbURBQW1EO0lBQ25ELGdEQUFnRDtBQUNwRDs7QUFFQTtJQUNJLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsV0FBVztJQUNYLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2IsbUJBQW1CO0FBQ3ZCOztBQUVBLFdBQVc7O0FBQ1g7SUFDSSxnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLHlCQUF5QjtJQUN6QixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSTtBQUNKOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsWUFBWTtBQUNoQjs7QUFFQSxTQUFTOztBQUNUO0lBQ0ksV0FBVztJQUNYLGtCQUFrQjtJQUNsQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLDZCQUE2QjtJQUM3QixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7QUFDZjs7QUFFQTtJQUNJLFVBQVU7QUFDZDs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixTQUFTO0FBQ2I7O0FBQ0E7SUFDSSxlQUFlO0lBQ2YscUJBQXFCO0lBQ3JCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLFlBQVk7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvY3NzL2RhdGEtbGlzdC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZGF0YS1saXN0LW91dGVyLWNvbnRhaW5lciB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG92ZXJmbG93OiB2aXNpYmxlO1xyXG59XHJcblxyXG4uZGF0YS1saXN0LWlubmVyLWNvbnRhaW5lciB7XHJcbiAgICBvdmVyZmxvdzogc2Nyb2xsO1xyXG59XHJcblxyXG4uZGF0YS1saXN0IHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uZGF0YSB7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIHdpZHRoOiAyMCU7XHJcbiAgICBtaW4td2lkdGg6IDI4MHB4O1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgbWluLWhlaWdodDogMjAwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbiAgICBib3JkZXItd2lkdGg6IDFweDsgXHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gICAgYm9yZGVyLWNvbG9yOiNhYWFhYWE7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDAlKSB0cmFuc2xhdGVZKDAlKTtcclxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAuMXMgZWFzZS1pbi1vdXQ7XHJcbiAgICBib3gtc2hhZG93OiAxcHggMXB4IDVweCAxcHggcmdiYSgwLDAsMCwwLjMpO1xyXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAxcHggMXB4IDVweCAxcHggcmdiYSgwLDAsMCwwLjMpO1xyXG4gICAgLW1vei1ib3gtc2hhZG93OiAxcHggMXB4IDVweCAxcHggcmdiYSgwLDAsMCwwLjMpO1xyXG59XHJcblxyXG5cclxuLmRhdGEuc2VsZWN0ZWQge1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIGJveC1zaGFkb3c6IDFweCAxcHggNXB4IDJweCByZ2JhKDAsMCwwLDAuNCk7XHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDFweCAxcHggNXB4IDJweCByZ2JhKDAsMCwwLDAuNCk7XHJcbiAgICAtbW96LWJveC1zaGFkb3c6IDFweCAxcHggNXB4IDJweCByZ2JhKDAsMCwwLDAuNCk7XHJcbn1cclxuXHJcbi5kYXRhLWxpc3Qtbm8tZGF0YSB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmRhdGEtbGlzdC1uby1kYXRhLWNvbnRhaW5lciB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLyogaGVhZGVyICovXHJcbi5kYXRhLWhlYWRlciB7XHJcbiAgICBtaW4taGVpZ2h0OiA0MHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2FhYWFhYTtcclxuICAgIG92ZXJmbG93LXg6IHNjcm9sbDtcclxufVxyXG5cclxuLmRhdGE6aG92ZXIgLmRhdGEtaGVhZGVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNjY2NjY2NcclxufVxyXG5cclxuLmRhdGEtaGVhZGVyIGgzIHtcclxuICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG59XHJcblxyXG4vKiBib2R5ICovXHJcbi5kYXRhLWluZm8tY29udGFpbmVyIHtcclxuICAgIG1hcmdpbjogNXB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgb3ZlcmZsb3c6IHNjcm9sbDtcclxufVxyXG5cclxuLmRhdGEgcCB7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uZGF0YSB0aCwgLmRhdGEgdGQge1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGRkO1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG59XHJcblxyXG4uZGF0YSB0ZCBwIHtcclxuICAgIHBhZGRpbmc6IDBweDtcclxuICAgIG1hcmdpbjogMHB4O1xyXG59XHJcblxyXG4uZGF0YSB0YWJsZSB7XHJcbiAgICB3aWR0aDogOTUlO1xyXG59XHJcblxyXG4uZGF0YSAuY29udGFpbmVyLXRhYmxlIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbn1cclxuXHJcbi51cGRhdGVkIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbTogMDtcclxufVxyXG4udXBkYXRlZCBwIHtcclxuICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbn1cclxuXHJcbi5kYXRhIC5kZWxldGUge1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/shared/css/panels.css":
/*!***************************************!*\
  !*** ./src/app/shared/css/panels.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".right-panel, .left-panel, .bottom-panel {\r\n    position: fixed;\r\n    background: rgba(50,50,50,0.6);\r\n    overflow: visible;\r\n    z-index: 2;\r\n}\r\n\r\n.toggle {\r\n    position: absolute;\r\n}\r\n\r\n.right-panel .toggle {\r\n    left: 0;\r\n    -webkit-transform: translateX(-100%);\r\n            transform: translateX(-100%)\r\n}\r\n\r\n.left-panel .toggle {\r\n    right: 0;\r\n    -webkit-transform: translateX(100%);\r\n            transform: translateX(100%)\r\n}\r\n\r\n.left-panel .toggle, .right-panel .toggle {\r\n    height: 100%;\r\n    width: 0;\r\n}\r\n\r\n.bottom-panel .toggle {\r\n    width: 100%;\r\n    height: 0;\r\n    top: 0;\r\n    -webkit-transform: translateY(-100%);\r\n            transform: translateY(-100%);\r\n    text-align: center;\r\n}\r\n\r\n.toggle-click {\r\n    position: relative;\r\n    cursor: pointer;\r\n    border-radius: 50%;\r\n}\r\n\r\n.left-panel .toggle-click, .right-panel .toggle-click {\r\n    top: 50%;\r\n}\r\n\r\n.right-panel .toggle-click {\r\n    -webkit-transform: translateY(-50%) translateX(-50%) rotate(-135deg);\r\n            transform: translateY(-50%) translateX(-50%) rotate(-135deg);\r\n    border-top: 25px solid rgba(50,50,50,.6);\r\n    border-right: 25px solid rgba(50,50,50,.6);\r\n    border-bottom: 25px solid transparent;\r\n    border-left: 25px solid transparent;\r\n}\r\n\r\n.left-panel .toggle-click {\r\n    -webkit-transform: translateY(-50%) translateX(-50%) rotate(45deg);\r\n            transform: translateY(-50%) translateX(-50%) rotate(45deg);\r\n    border-top: 25px solid rgba(50,50,50,.6);\r\n    border-right: 25px solid rgba(50,50,50,.6);\r\n    border-bottom: 25px solid transparent;\r\n    border-left: 25px solid transparent;\r\n}\r\n\r\n.bottom-panel .toggle-click {\r\n    left: 50%;\r\n    -webkit-transform: translateX(-50%) translateY(-50%) rotate(-45deg);\r\n            transform: translateX(-50%) translateY(-50%) rotate(-45deg);\r\n    border-top: 25px solid rgba(50,50,50,.6);\r\n    border-right: 25px solid rgba(50,50,50,.6);    \r\n    border-bottom: 25px solid transparent;\r\n    border-left: 25px solid transparent;\r\n}\r\n\r\n.right-panel .toggle-click .arrow-icon {\r\n    position: absolute;\r\n    -webkit-transform: translateY(-100%) translateX(15%)  rotate(135deg);\r\n            transform: translateY(-100%) translateX(15%)  rotate(135deg);\r\n}\r\n\r\n.left-panel .toggle-click .arrow-icon {\r\n    position: absolute;\r\n    -webkit-transform: translateY(-100%) translateX(30%) rotate(-45deg);\r\n            transform: translateY(-100%) translateX(30%) rotate(-45deg);\r\n}\r\n\r\n.bottom-panel .toggle-click .arrow-icon {\r\n    position: absolute;\r\n    -webkit-transform: translateX(107%) translateY(-100%) rotate(45deg);\r\n            transform: translateX(107%) translateY(-100%) rotate(45deg);\r\n    right: 50%;\r\n}\r\n\r\n.arrow-icon:before {\r\n    content:'';\r\n    height: 100%;\r\n    display: inline-block;\r\n    vertical-align: middle;\r\n}\r\n\r\n.arrow-icon span {\r\n    display:inline-block;\r\n    vertical-align: middle;\r\n}\r\n\r\n.fa {\r\n    color:white;\r\n}\r\n\r\n.toggle-click:hover {\r\n    border-top: 25px solid rgba(80,150,255,.7) !important;\r\n    border-right: 25px solid rgba(80,150,255,.7) !important;\r\n}\r\n\r\n.right-panel, .left-panel {\r\n    height: 100%;\r\n    width: 25%;\r\n    top: 0;\r\n}\r\n\r\n.right-panel {\r\n    left: 100%;\r\n}\r\n\r\n.left-panel {\r\n    left: -25%;\r\n}\r\n\r\n.bottom-panel {\r\n    top: 100%;\r\n    width: 50%;\r\n    left: 25%;\r\n}\r\n\r\n.panel-title {\r\n    text-align: center;\r\n    font-size: 72;\r\n    color: white;\r\n    margin: 5px;\r\n}\r\n\r\n.panel-scroll-container {\r\n    height: 90%;\r\n    border-radius: 5px;\r\n    overflow: scroll;\r\n}\r\n\r\n.inner-shadow {\r\n    position: absolute;\r\n    /*\r\n    height: 90%;\r\n    width: 100%;\r\n    */\r\n    top: 0;\r\n    bottom: 0;\r\n    right: 0;\r\n    box-shadow: inset 0px 0px 40px 0px #000;\r\n    -moz-box-shadow: inset 0px 0px 40px 0px #000;\r\n    -webkit-box-shadow: inset 0px 0px 40px 0px #000;\r\n    pointer-events: none;\r\n    border-radius: 5px;\r\n}\r\n\r\n.panel-content {\r\n    padding: 2.5%;\r\n    height: 100%;\r\n    text-align: center;\r\n    overflow: auto;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2Nzcy9wYW5lbHMuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZUFBZTtJQUNmLDhCQUE4QjtJQUM5QixpQkFBaUI7SUFDakIsVUFBVTtBQUNkOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksT0FBTztJQUNQLG9DQUEyQjtZQUEzQjtBQUNKOztBQUVBO0lBQ0ksUUFBUTtJQUNSLG1DQUEwQjtZQUExQjtBQUNKOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFFBQVE7QUFDWjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxTQUFTO0lBQ1QsTUFBTTtJQUNOLG9DQUE0QjtZQUE1Qiw0QkFBNEI7SUFDNUIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxRQUFRO0FBQ1o7O0FBRUE7SUFDSSxvRUFBNEQ7WUFBNUQsNERBQTREO0lBQzVELHdDQUF3QztJQUN4QywwQ0FBMEM7SUFDMUMscUNBQXFDO0lBQ3JDLG1DQUFtQztBQUN2Qzs7QUFFQTtJQUNJLGtFQUEwRDtZQUExRCwwREFBMEQ7SUFDMUQsd0NBQXdDO0lBQ3hDLDBDQUEwQztJQUMxQyxxQ0FBcUM7SUFDckMsbUNBQW1DO0FBQ3ZDOztBQUVBO0lBQ0ksU0FBUztJQUNULG1FQUEyRDtZQUEzRCwyREFBMkQ7SUFDM0Qsd0NBQXdDO0lBQ3hDLDBDQUEwQztJQUMxQyxxQ0FBcUM7SUFDckMsbUNBQW1DO0FBQ3ZDOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLG9FQUE0RDtZQUE1RCw0REFBNEQ7QUFDaEU7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsbUVBQTJEO1lBQTNELDJEQUEyRDtBQUMvRDs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixtRUFBMkQ7WUFBM0QsMkRBQTJEO0lBQzNELFVBQVU7QUFDZDs7QUFFQTtJQUNJLFVBQVU7SUFDVixZQUFZO0lBQ1oscUJBQXFCO0lBQ3JCLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLG9CQUFvQjtJQUNwQixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxxREFBcUQ7SUFDckQsdURBQXVEO0FBQzNEOztBQUdBO0lBQ0ksWUFBWTtJQUNaLFVBQVU7SUFDVixNQUFNO0FBQ1Y7O0FBRUE7SUFDSSxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxTQUFTO0lBQ1QsVUFBVTtJQUNWLFNBQVM7QUFDYjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsWUFBWTtJQUNaLFdBQVc7QUFDZjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCOzs7S0FHQztJQUNELE1BQU07SUFDTixTQUFTO0lBQ1QsUUFBUTtJQUNSLHVDQUF1QztJQUN2Qyw0Q0FBNEM7SUFDNUMsK0NBQStDO0lBQy9DLG9CQUFvQjtJQUNwQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixjQUFjO0FBQ2xCIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2Nzcy9wYW5lbHMuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJpZ2h0LXBhbmVsLCAubGVmdC1wYW5lbCwgLmJvdHRvbS1wYW5lbCB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDUwLDUwLDUwLDAuNik7XHJcbiAgICBvdmVyZmxvdzogdmlzaWJsZTtcclxuICAgIHotaW5kZXg6IDI7XHJcbn1cclxuXHJcbi50b2dnbGUge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG59XHJcblxyXG4ucmlnaHQtcGFuZWwgLnRvZ2dsZSB7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKVxyXG59XHJcblxyXG4ubGVmdC1wYW5lbCAudG9nZ2xlIHtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMCUpXHJcbn1cclxuXHJcbi5sZWZ0LXBhbmVsIC50b2dnbGUsIC5yaWdodC1wYW5lbCAudG9nZ2xlIHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiAwO1xyXG59XHJcblxyXG4uYm90dG9tLXBhbmVsIC50b2dnbGUge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDA7XHJcbiAgICB0b3A6IDA7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwMCUpO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4udG9nZ2xlLWNsaWNrIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxufVxyXG5cclxuLmxlZnQtcGFuZWwgLnRvZ2dsZS1jbGljaywgLnJpZ2h0LXBhbmVsIC50b2dnbGUtY2xpY2sge1xyXG4gICAgdG9wOiA1MCU7XHJcbn1cclxuXHJcbi5yaWdodC1wYW5lbCAudG9nZ2xlLWNsaWNrIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKSB0cmFuc2xhdGVYKC01MCUpIHJvdGF0ZSgtMTM1ZGVnKTtcclxuICAgIGJvcmRlci10b3A6IDI1cHggc29saWQgcmdiYSg1MCw1MCw1MCwuNik7XHJcbiAgICBib3JkZXItcmlnaHQ6IDI1cHggc29saWQgcmdiYSg1MCw1MCw1MCwuNik7XHJcbiAgICBib3JkZXItYm90dG9tOiAyNXB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyLWxlZnQ6IDI1cHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbn1cclxuXHJcbi5sZWZ0LXBhbmVsIC50b2dnbGUtY2xpY2sge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpIHRyYW5zbGF0ZVgoLTUwJSkgcm90YXRlKDQ1ZGVnKTtcclxuICAgIGJvcmRlci10b3A6IDI1cHggc29saWQgcmdiYSg1MCw1MCw1MCwuNik7XHJcbiAgICBib3JkZXItcmlnaHQ6IDI1cHggc29saWQgcmdiYSg1MCw1MCw1MCwuNik7XHJcbiAgICBib3JkZXItYm90dG9tOiAyNXB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyLWxlZnQ6IDI1cHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbn1cclxuXHJcbi5ib3R0b20tcGFuZWwgLnRvZ2dsZS1jbGljayB7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSkgdHJhbnNsYXRlWSgtNTAlKSByb3RhdGUoLTQ1ZGVnKTtcclxuICAgIGJvcmRlci10b3A6IDI1cHggc29saWQgcmdiYSg1MCw1MCw1MCwuNik7XHJcbiAgICBib3JkZXItcmlnaHQ6IDI1cHggc29saWQgcmdiYSg1MCw1MCw1MCwuNik7ICAgIFxyXG4gICAgYm9yZGVyLWJvdHRvbTogMjVweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICAgIGJvcmRlci1sZWZ0OiAyNXB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG59XHJcblxyXG4ucmlnaHQtcGFuZWwgLnRvZ2dsZS1jbGljayAuYXJyb3ctaWNvbiB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwMCUpIHRyYW5zbGF0ZVgoMTUlKSAgcm90YXRlKDEzNWRlZyk7XHJcbn1cclxuXHJcbi5sZWZ0LXBhbmVsIC50b2dnbGUtY2xpY2sgLmFycm93LWljb24ge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMDAlKSB0cmFuc2xhdGVYKDMwJSkgcm90YXRlKC00NWRlZyk7XHJcbn1cclxuXHJcbi5ib3R0b20tcGFuZWwgLnRvZ2dsZS1jbGljayAuYXJyb3ctaWNvbiB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTA3JSkgdHJhbnNsYXRlWSgtMTAwJSkgcm90YXRlKDQ1ZGVnKTtcclxuICAgIHJpZ2h0OiA1MCU7XHJcbn1cclxuXHJcbi5hcnJvdy1pY29uOmJlZm9yZSB7XHJcbiAgICBjb250ZW50OicnO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxufVxyXG5cclxuLmFycm93LWljb24gc3BhbiB7XHJcbiAgICBkaXNwbGF5OmlubGluZS1ibG9jaztcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbn1cclxuXHJcbi5mYSB7XHJcbiAgICBjb2xvcjp3aGl0ZTtcclxufVxyXG5cclxuLnRvZ2dsZS1jbGljazpob3ZlciB7XHJcbiAgICBib3JkZXItdG9wOiAyNXB4IHNvbGlkIHJnYmEoODAsMTUwLDI1NSwuNykgIWltcG9ydGFudDtcclxuICAgIGJvcmRlci1yaWdodDogMjVweCBzb2xpZCByZ2JhKDgwLDE1MCwyNTUsLjcpICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcblxyXG4ucmlnaHQtcGFuZWwsIC5sZWZ0LXBhbmVsIHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiAyNSU7XHJcbiAgICB0b3A6IDA7XHJcbn1cclxuXHJcbi5yaWdodC1wYW5lbCB7XHJcbiAgICBsZWZ0OiAxMDAlO1xyXG59XHJcblxyXG4ubGVmdC1wYW5lbCB7XHJcbiAgICBsZWZ0OiAtMjUlO1xyXG59XHJcblxyXG4uYm90dG9tLXBhbmVsIHtcclxuICAgIHRvcDogMTAwJTtcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICBsZWZ0OiAyNSU7XHJcbn1cclxuXHJcbi5wYW5lbC10aXRsZSB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDcyO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgbWFyZ2luOiA1cHg7XHJcbn1cclxuXHJcbi5wYW5lbC1zY3JvbGwtY29udGFpbmVyIHtcclxuICAgIGhlaWdodDogOTAlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgb3ZlcmZsb3c6IHNjcm9sbDtcclxufVxyXG5cclxuLmlubmVyLXNoYWRvdyB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAvKlxyXG4gICAgaGVpZ2h0OiA5MCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgICovXHJcbiAgICB0b3A6IDA7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIGJveC1zaGFkb3c6IGluc2V0IDBweCAwcHggNDBweCAwcHggIzAwMDtcclxuICAgIC1tb3otYm94LXNoYWRvdzogaW5zZXQgMHB4IDBweCA0MHB4IDBweCAjMDAwO1xyXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiBpbnNldCAwcHggMHB4IDQwcHggMHB4ICMwMDA7XHJcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxufVxyXG5cclxuLnBhbmVsLWNvbnRlbnQge1xyXG4gICAgcGFkZGluZzogMi41JTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG92ZXJmbG93OiBhdXRvO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/shared/directives/scroll-toggle.directive.ts":
/*!**************************************************************!*\
  !*** ./src/app/shared/directives/scroll-toggle.directive.ts ***!
  \**************************************************************/
/*! exports provided: ScrollToggleDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScrollToggleDirective", function() { return ScrollToggleDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");



var ScrollToggleDirective = /** @class */ (function () {
    function ScrollToggleDirective(el) {
        this.el = el;
        this.scrolled = document.querySelector('body').scrollTop;
        this.scrollUp = false;
    }
    ScrollToggleDirective.prototype.ngOnInit = function () {
        var _this = this;
        console.log('Scroll Directive');
        Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["timer"])(0, 500)
            .subscribe(function (x) {
            if (_this.scrolled !== document.querySelector('body').scrollTop) {
                if (_this.scrolled > (document.querySelector('body').scrollTop + 100)) {
                    // show the element
                    if (_this.scrollUp === true) {
                        console.log('Show element');
                        _this.scrollUp = false;
                    }
                }
                else if (_this.scrolled < document.querySelector('body').scrollTop) {
                    // hide the element
                    if (_this.scrollUp === false) {
                        console.log('hide element');
                        console.log(_this.el);
                        _this.scrollUp = true;
                    }
                }
                _this.scrolled = document.querySelector('body').scrollTop;
            }
            console.log(_this.scrolled);
        });
    };
    ScrollToggleDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[scroll-toggle]',
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
    ], ScrollToggleDirective);
    return ScrollToggleDirective;
}());



/***/ }),

/***/ "./src/app/shared/directives/stick-to-top.directive.ts":
/*!*************************************************************!*\
  !*** ./src/app/shared/directives/stick-to-top.directive.ts ***!
  \*************************************************************/
/*! exports provided: StickToTopDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StickToTopDirective", function() { return StickToTopDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _core_stick_to_top_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/stick-to-top.service */ "./src/app/core/stick-to-top.service.ts");





var StickToTopDirective = /** @class */ (function () {
    function StickToTopDirective(el, sttService) {
        this.el = el;
        this.sttService = sttService;
        this.scrolled = document.querySelector('body').scrollTop;
        this.stuck = false;
        this.stuckTop = 0;
        this.top = 0;
        this.height = 0;
        this.init = true;
        this.didScroll = false;
        this.subs = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subscription"]();
        this.top = el.nativeElement.offsetTop;
    }
    StickToTopDirective.prototype.ngOnInit = function () {
        var _this = this;
        this.checkLock();
        this.subs.add(Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["timer"])(0, 10)
            .subscribe(function (x) {
            if (_this.didScroll) {
                _this.didScroll = false;
                _this.checkLock();
            }
        }));
    };
    StickToTopDirective.prototype.setDidScroll = function (e) {
        this.didScroll = true;
    };
    StickToTopDirective.prototype.checkLock = function (event) {
        if (event === void 0) { event = null; }
        if (this.init) {
            this.init = false;
            this.height = this.el.nativeElement.parentElement.offsetHeight;
        }
        this.scrolled = document.querySelector('body').scrollTop;
        if (this.stuck) {
            if (this.el.nativeElement.parentElement.getBoundingClientRect().top + this.height >=
                this.sttService.stackHeight) {
                this.stuckTop = this.top;
                this.sttService.stackHeight -= this.height;
                this.stuck = false;
            }
        }
        else if (this.sttService.stackHeight >=
            this.el.nativeElement.parentElement.getBoundingClientRect().top) {
            if (!this.stuck) {
                this.stuckTop = this.sttService.stackHeight;
                this.sttService.stackHeight += this.height;
                this.stuck = true;
            }
        }
    };
    StickToTopDirective.prototype.ngOnDestroy = function () {
        if (this.stuck) {
            this.sttService.stackHeight -= this.height;
        }
        this.subs.unsubscribe();
    };
    StickToTopDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[stickToTop]',
            host: { '[class.stick-to-top]': 'stuck',
                '[style.top.px]': 'stuckTop',
                '(window:scroll)': 'setDidScroll($event)' }
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"],
            _core_stick_to_top_service__WEBPACK_IMPORTED_MODULE_3__["StickToTopService"]])
    ], StickToTopDirective);
    return StickToTopDirective;
}());



/***/ }),

/***/ "./src/app/shared/earthquake-blurb/earthquake-blurb.component.css":
/*!************************************************************************!*\
  !*** ./src/app/shared/earthquake-blurb/earthquake-blurb.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "th, td {\r\n    text-align: left;\r\n    padding: 5px;\r\n    border-bottom: 1px solid #ddd;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2VhcnRocXVha2UtYmx1cmIvZWFydGhxdWFrZS1ibHVyYi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWiw2QkFBNkI7QUFDakMiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvZWFydGhxdWFrZS1ibHVyYi9lYXJ0aHF1YWtlLWJsdXJiLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0aCwgdGQge1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGRkO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/shared/earthquake-blurb/earthquake-blurb.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/shared/earthquake-blurb/earthquake-blurb.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<table class=\"table\">    \r\n    <tr>\r\n        <th>ID:</th>\r\n        <td>{{ eq.event_id }}</td>\r\n    </tr>\r\n    <tr> \r\n        <th>Magnitude:</th>\r\n        <td>{{ eq.magnitude }}</td>\r\n    </tr>\r\n    <tr>\r\n        <th>Depth:</th>\r\n        <td>{{ eq.depth }}</td>\r\n    </tr>\r\n    <tr>\r\n        <th>Latitude:</th>\r\n        <td>{{ eq.lat }}</td>\r\n    </tr>\r\n    <tr>\r\n        <th>Longitude:</th>\r\n        <td>{{ eq.lon }}</td>\r\n    </tr>\r\n    <tr>\r\n        <th>Description:</th>\r\n        <td>{{ eq.place }}</td>\r\n    </tr>\r\n</table>"

/***/ }),

/***/ "./src/app/shared/earthquake-blurb/earthquake-blurb.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/shared/earthquake-blurb/earthquake-blurb.component.ts ***!
  \***********************************************************************/
/*! exports provided: EarthquakeBlurbComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EarthquakeBlurbComponent", function() { return EarthquakeBlurbComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var EarthquakeBlurbComponent = /** @class */ (function () {
    function EarthquakeBlurbComponent() {
    }
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], EarthquakeBlurbComponent.prototype, "eq", void 0);
    EarthquakeBlurbComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'earthquake-blurb',
            template: __webpack_require__(/*! ./earthquake-blurb.component.html */ "./src/app/shared/earthquake-blurb/earthquake-blurb.component.html"),
            styles: [__webpack_require__(/*! ./earthquake-blurb.component.css */ "./src/app/shared/earthquake-blurb/earthquake-blurb.component.css")]
        })
    ], EarthquakeBlurbComponent);
    return EarthquakeBlurbComponent;
}());



/***/ }),

/***/ "./src/app/shared/info/info.component.css":
/*!************************************************!*\
  !*** ./src/app/shared/info/info.component.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\r\n    display: inline-block;\r\n}\r\n\r\n.info-click {\r\n    cursor: pointer;\r\n    margin-left: 5px;\r\n}\r\n\r\n.fa-question-circle {\r\n    color: #55aaee;\r\n}\r\n\r\n.info-container {\r\n    position: absolute;\r\n    display: inline-block;\r\n    max-width: 300px;\r\n    min-width: 200px;\r\n}\r\n\r\n.info {    \r\n    z-index: 3;\r\n    display: inline-block;\r\n    position: absolute;\r\n    border: 1px solid #444444;\r\n    box-shadow: 1px 1px 3px 1px rgba(0,0,0,0.3);\r\n    -webkit-box-shadow: 1px 1px 3px 1px rgba(0,0,0,0.3);\r\n    -moz-box-shadow: 1px 1px 3px 1px rgba(0,0,0,0.3);\r\n}\r\n\r\n.info p {\r\n    font-size: 14px;\r\n    font-weight: bold;\r\n    text-align: center;\r\n}\r\n\r\n.triangle-left, .triangle-right {\r\n    position: relative;\r\n    padding: 5px;\r\n    margin-top: 15px;\r\n    background: white;\r\n    border-radius: 10px;\r\n}\r\n\r\n.triangle-right {\r\n    -webkit-transform: translateX(-100%);\r\n            transform: translateX(-100%);\r\n}\r\n\r\n.triangle-left.top, .triangle-right.top {\r\n    background: white\r\n}\r\n\r\n.triangle-left.top:after, .triangle-right.top:after, .triangle-left.top:before, .triangle-right.top:before {\r\n    content: \"\";\r\n    position: absolute;\r\n    border-style: solid;\r\n    display: block;\r\n    width: 0;\r\n    top: -15px;\r\n    bottom: auto;\r\n}\r\n\r\n.triangle-left.top:after {\r\n    left: 10px;\r\n    border-width: 15px 0 0 10px;\r\n}\r\n\r\n.triangle-left.top:before {\r\n    left: 9px;\r\n    top: -17px;\r\n    border-width: 16px 0 0 12px;\r\n}\r\n\r\n.triangle-right.top:after {\r\n    left: 92%;\r\n    margin-left: 1px;\r\n    border-width: 15px 10px 0 0;\r\n}\r\n\r\n.triangle-right.top:before {\r\n    left: 92%;\r\n    top: -18px;\r\n    border-width: 17px 12px 0 0;\r\n}\r\n\r\n.triangle-left.top:after, .triangle-right.top:after {\r\n    border-color: transparent white;\r\n}\r\n\r\n.triangle-left.top:before, .triangle-right.top:before {\r\n    border-color: transparent #444444;\r\n}\r\n\r\n#close {\r\n    float: right;\r\n    margin: 0;\r\n    cursor: pointer;\r\n}\r\n\r\np {\r\n    font-size: .4em;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2luZm8vaW5mby5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0kscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIscUJBQXFCO0lBQ3JCLGdCQUFnQjtJQUNoQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxVQUFVO0lBQ1YscUJBQXFCO0lBQ3JCLGtCQUFrQjtJQUNsQix5QkFBeUI7SUFDekIsMkNBQTJDO0lBQzNDLG1EQUFtRDtJQUNuRCxnREFBZ0Q7QUFDcEQ7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUdqQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxvQ0FBNEI7WUFBNUIsNEJBQTRCO0FBQ2hDOztBQUVBO0lBQ0k7QUFDSjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLGNBQWM7SUFDZCxRQUFRO0lBQ1IsVUFBVTtJQUNWLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsMkJBQTJCO0FBQy9COztBQUVBO0lBQ0ksU0FBUztJQUNULFVBQVU7SUFDViwyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSSxTQUFTO0lBQ1QsZ0JBQWdCO0lBQ2hCLDJCQUEyQjtBQUMvQjs7QUFFQTtJQUNJLFNBQVM7SUFDVCxVQUFVO0lBQ1YsMkJBQTJCO0FBQy9COztBQUVBO0lBQ0ksK0JBQStCO0FBQ25DOztBQUVBO0lBQ0ksaUNBQWlDO0FBQ3JDOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFNBQVM7SUFDVCxlQUFlO0FBQ25COztBQUVBO0lBQ0ksZUFBZTtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9pbmZvL2luZm8uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcblxyXG4uaW5mby1jbGljayB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xyXG59XHJcblxyXG4uZmEtcXVlc3Rpb24tY2lyY2xlIHtcclxuICAgIGNvbG9yOiAjNTVhYWVlO1xyXG59XHJcblxyXG4uaW5mby1jb250YWluZXIge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgbWF4LXdpZHRoOiAzMDBweDtcclxuICAgIG1pbi13aWR0aDogMjAwcHg7XHJcbn1cclxuXHJcbi5pbmZvIHsgICAgXHJcbiAgICB6LWluZGV4OiAzO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzQ0NDQ0NDtcclxuICAgIGJveC1zaGFkb3c6IDFweCAxcHggM3B4IDFweCByZ2JhKDAsMCwwLDAuMyk7XHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDFweCAxcHggM3B4IDFweCByZ2JhKDAsMCwwLDAuMyk7XHJcbiAgICAtbW96LWJveC1zaGFkb3c6IDFweCAxcHggM3B4IDFweCByZ2JhKDAsMCwwLDAuMyk7XHJcbn1cclxuXHJcbi5pbmZvIHAge1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi50cmlhbmdsZS1sZWZ0LCAudHJpYW5nbGUtcmlnaHQge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgbWFyZ2luLXRvcDogMTVweDtcclxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgLW1vei1ib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxufVxyXG5cclxuLnRyaWFuZ2xlLXJpZ2h0IHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSk7XHJcbn1cclxuXHJcbi50cmlhbmdsZS1sZWZ0LnRvcCwgLnRyaWFuZ2xlLXJpZ2h0LnRvcCB7XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZVxyXG59XHJcblxyXG4udHJpYW5nbGUtbGVmdC50b3A6YWZ0ZXIsIC50cmlhbmdsZS1yaWdodC50b3A6YWZ0ZXIsIC50cmlhbmdsZS1sZWZ0LnRvcDpiZWZvcmUsIC50cmlhbmdsZS1yaWdodC50b3A6YmVmb3JlIHtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB3aWR0aDogMDtcclxuICAgIHRvcDogLTE1cHg7XHJcbiAgICBib3R0b206IGF1dG87XHJcbn1cclxuXHJcbi50cmlhbmdsZS1sZWZ0LnRvcDphZnRlciB7XHJcbiAgICBsZWZ0OiAxMHB4O1xyXG4gICAgYm9yZGVyLXdpZHRoOiAxNXB4IDAgMCAxMHB4O1xyXG59XHJcblxyXG4udHJpYW5nbGUtbGVmdC50b3A6YmVmb3JlIHtcclxuICAgIGxlZnQ6IDlweDtcclxuICAgIHRvcDogLTE3cHg7XHJcbiAgICBib3JkZXItd2lkdGg6IDE2cHggMCAwIDEycHg7XHJcbn1cclxuXHJcbi50cmlhbmdsZS1yaWdodC50b3A6YWZ0ZXIge1xyXG4gICAgbGVmdDogOTIlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDFweDtcclxuICAgIGJvcmRlci13aWR0aDogMTVweCAxMHB4IDAgMDtcclxufVxyXG5cclxuLnRyaWFuZ2xlLXJpZ2h0LnRvcDpiZWZvcmUge1xyXG4gICAgbGVmdDogOTIlO1xyXG4gICAgdG9wOiAtMThweDtcclxuICAgIGJvcmRlci13aWR0aDogMTdweCAxMnB4IDAgMDtcclxufVxyXG5cclxuLnRyaWFuZ2xlLWxlZnQudG9wOmFmdGVyLCAudHJpYW5nbGUtcmlnaHQudG9wOmFmdGVyIHtcclxuICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQgd2hpdGU7XHJcbn1cclxuXHJcbi50cmlhbmdsZS1sZWZ0LnRvcDpiZWZvcmUsIC50cmlhbmdsZS1yaWdodC50b3A6YmVmb3JlIHtcclxuICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQgIzQ0NDQ0NDtcclxufVxyXG5cclxuI2Nsb3NlIHtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxucCB7XHJcbiAgICBmb250LXNpemU6IC40ZW07XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/shared/info/info.component.html":
/*!*************************************************!*\
  !*** ./src/app/shared/info/info.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <div class=\"info-click\" (click)=\"showInfo='yes'\">\r\n        <i class=\"fa fa-question-circle\" aria-hidden=\"true\"></i>\r\n    </div>\r\n\r\n    <div class=\"info-container\" *ngIf=\"showInfo=='yes'\">\r\n        <div class=\"info top\"\r\n                [class.triangle-left]=\"side=='left'\"\r\n                [class.triangle-right]=\"side=='right'\">\r\n            <i class=\"fa fa-times\" id=\"close\" aria-hidden=\"true\" (click)=\"showInfo='no'\"></i>\r\n            <p [innerHtml]=\"text\"></p>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/shared/info/info.component.ts":
/*!***********************************************!*\
  !*** ./src/app/shared/info/info.component.ts ***!
  \***********************************************/
/*! exports provided: InfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoComponent", function() { return InfoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var InfoComponent = /** @class */ (function () {
    function InfoComponent() {
        this.showInfo = 'no';
    }
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], InfoComponent.prototype, "text", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], InfoComponent.prototype, "side", void 0);
    InfoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'info',
            template: __webpack_require__(/*! ./info.component.html */ "./src/app/shared/info/info.component.html"),
            styles: [__webpack_require__(/*! ./info.component.css */ "./src/app/shared/info/info.component.css")]
        })
    ], InfoComponent);
    return InfoComponent;
}());



/***/ }),

/***/ "./src/app/shared/maps/facility-count/facility-count.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/shared/maps/facility-count/facility-count.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9tYXBzL2ZhY2lsaXR5LWNvdW50L2ZhY2lsaXR5LWNvdW50LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/shared/maps/facility-count/facility-count.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/shared/maps/facility-count/facility-count.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-container *ngIf=\"types\">\r\n  <div class=\"fac\" *ngFor=\"let item of types | keyvalue\">\r\n    {{ item.key }}: {{ item.value }}\r\n  </div>\r\n</ng-container>\r\n"

/***/ }),

/***/ "./src/app/shared/maps/facility-count/facility-count.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/shared/maps/facility-count/facility-count.component.ts ***!
  \************************************************************************/
/*! exports provided: FacilityCountComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FacilityCountComponent", function() { return FacilityCountComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_facility_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/facility.service */ "./src/app/core/facility.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");




var FacilityCountComponent = /** @class */ (function () {
    function FacilityCountComponent(facService) {
        this.facService = facService;
        this.subs = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subscription"]();
        this.types = {};
    }
    FacilityCountComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subs.add(this.facService.facilityData.subscribe(function (facilities) {
            if (!facilities || !facilities.features) {
                _this.types = {};
                return null;
            }
            _this.onFacilities(facilities.features);
        }));
    };
    FacilityCountComponent.prototype.onFacilities = function (facilities) {
        var facTypes = {};
        facilities.forEach(function (fac) {
            if (!facTypes[fac.properties.facility_type]) {
                facTypes[fac.properties.facility_type] = 1;
            }
            else {
                facTypes[fac.properties.facility_type] += 1;
            }
        });
        this.types = facTypes;
    };
    FacilityCountComponent.prototype.ngOnDestroy = function () {
        this.subs.unsubscribe();
    };
    FacilityCountComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'shared-facility-count',
            template: __webpack_require__(/*! ./facility-count.component.html */ "./src/app/shared/maps/facility-count/facility-count.component.html"),
            styles: [__webpack_require__(/*! ./facility-count.component.css */ "./src/app/shared/maps/facility-count/facility-count.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_facility_service__WEBPACK_IMPORTED_MODULE_2__["FacilityService"]])
    ], FacilityCountComponent);
    return FacilityCountComponent;
}());



/***/ }),

/***/ "./src/app/shared/maps/impact/impact.component.css":
/*!*********************************************************!*\
  !*** ./src/app/shared/maps/impact/impact.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".shaking-table {\r\n  width: 90%;\r\n  left: 5%;\r\n  position: relative;\r\n}\r\n\r\n.shaking-table th {\r\n  color: white;\r\n  padding-left: 5px;\r\n  padding-right: 5px;\r\n  border-radius: 5px;\r\n  box-shadow: 1px 1px 3px 1px rgba(0,0,0,0.3);\r\n  -webkit-box-shadow: 1px 1px 3px 1px rgba(0,0,0,0.3);\r\n  -moz-box-shadow: 1px 1px 3px 1px rgba(0,0,0,0.3);\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL21hcHMvaW1wYWN0L2ltcGFjdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsVUFBVTtFQUNWLFFBQVE7RUFDUixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsMkNBQTJDO0VBQzNDLG1EQUFtRDtFQUNuRCxnREFBZ0Q7QUFDbEQiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvbWFwcy9pbXBhY3QvaW1wYWN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2hha2luZy10YWJsZSB7XHJcbiAgd2lkdGg6IDkwJTtcclxuICBsZWZ0OiA1JTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5zaGFraW5nLXRhYmxlIHRoIHtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XHJcbiAgcGFkZGluZy1yaWdodDogNXB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBib3gtc2hhZG93OiAxcHggMXB4IDNweCAxcHggcmdiYSgwLDAsMCwwLjMpO1xyXG4gIC13ZWJraXQtYm94LXNoYWRvdzogMXB4IDFweCAzcHggMXB4IHJnYmEoMCwwLDAsMC4zKTtcclxuICAtbW96LWJveC1zaGFkb3c6IDFweCAxcHggM3B4IDFweCByZ2JhKDAsMCwwLDAuMyk7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/shared/maps/impact/impact.component.html":
/*!**********************************************************!*\
  !*** ./src/app/shared/maps/impact/impact.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<table class=\"shaking-table\" *ngIf=\"shakingData as sData\">\r\n    <ng-container *ngIf=\"totalShaking > 0; else noImpact\">\r\n        <tr>\r\n            <th style=\"background-color:red\" [style.width]=\"((sData?.red/totalShaking * 90) + 1) + '%'\">\r\n                {{ sData?.red }}\r\n            </th>\r\n            <th style=\"background-color:orange\" [style.width]=\"((sData?.orange/totalShaking * 90) + 1) + '%'\">\r\n                {{ sData?.orange }}\r\n            </th>\r\n            <th style=\"background-color:gold\" [style.width]=\"((sData?.yellow/totalShaking * 90) + 1) + '%'\"> \r\n                {{ sData?.yellow }}\r\n            </th>\r\n            <th style=\"background-color:green;\" [style.width]=\"((sData?.green/totalShaking * 90) + 1) + '%'\">\r\n                {{ sData?.green }}\r\n            </th>\r\n            <th style=\"background-color:gray;\" [style.width]=\"((sData?.gray/totalShaking * 90) + 1) + '%'\">\r\n                {{ sData?.gray }}\r\n            </th>\r\n        </tr>\r\n    </ng-container>\r\n\r\n    <ng-template #noImpact>\r\n        <tr>\r\n            <th style=\"background-color:gray;width:90%\">\r\n                No Impact\r\n            </th>\r\n        </tr>\r\n    </ng-template>\r\n</table>"

/***/ }),

/***/ "./src/app/shared/maps/impact/impact.component.ts":
/*!********************************************************!*\
  !*** ./src/app/shared/maps/impact/impact.component.ts ***!
  \********************************************************/
/*! exports provided: ImpactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImpactComponent", function() { return ImpactComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _core_earthquake_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/earthquake.service */ "./src/app/core/earthquake.service.ts");
/* harmony import */ var _core_facility_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core/facility.service */ "./src/app/core/facility.service.ts");





var ImpactComponent = /** @class */ (function () {
    function ImpactComponent(facService, eqService) {
        this.facService = facService;
        this.eqService = eqService;
        this.subs = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subscription"]();
        this.shakingData = null;
        this.totalShaking = 0;
    }
    ImpactComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subs.add(this.eqService.selectEvent.subscribe(function (eq) {
            _this.onSelectEq(eq);
        }));
        // subscribe to facility data to create a total shaking div
        this.subs.add(this.facService.impactSummary.subscribe(function (shaking) {
            _this.shakingData = shaking;
            if (shaking) {
                _this.totalShaking = shaking['gray'] +
                    shaking['green'] +
                    shaking['yellow'] +
                    shaking['orange'] +
                    shaking['red'];
            }
            else {
                _this.totalShaking = 0;
            }
        }));
    };
    ImpactComponent.prototype.onSelectEq = function (eq) {
        if (eq == null) {
            this.totalShaking = 0;
            this.shakingData = null;
            return;
        }
        this.facService.getImpactSummary(eq.properties.event_id);
    };
    ImpactComponent.prototype.ngOnDestroy = function () {
        this.facService.impactSummary.next(null);
        this.subs.unsubscribe();
    };
    ImpactComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'shared-impact',
            template: __webpack_require__(/*! ./impact.component.html */ "./src/app/shared/maps/impact/impact.component.html"),
            styles: [__webpack_require__(/*! ./impact.component.css */ "./src/app/shared/maps/impact/impact.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_facility_service__WEBPACK_IMPORTED_MODULE_4__["FacilityService"],
            _core_earthquake_service__WEBPACK_IMPORTED_MODULE_3__["EarthquakeService"]])
    ], ImpactComponent);
    return ImpactComponent;
}());



/***/ }),

/***/ "./src/app/shared/maps/layers/epicenter.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/maps/layers/epicenter.ts ***!
  \*************************************************/
/*! exports provided: epicenterLayer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "epicenterLayer", function() { return epicenterLayer; });
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! leaflet */ "./node_modules/leaflet/dist/leaflet-src.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _layer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./layer */ "./src/app/shared/maps/layers/layer.ts");


var epicIcon = leaflet__WEBPACK_IMPORTED_MODULE_0__["icon"]({
    iconUrl: 'assets/epicenter.png',
    iconSize: [40, 40],
    iconAnchor: [20, 20],
    popupAnchor: [0, 0] // point from which the popup should open relative to the iconAnchor
});
function createEventMarker(event) {
    var props = event.properties;
    var marker = leaflet__WEBPACK_IMPORTED_MODULE_0__["marker"]([props.lat, props.lon], { icon: epicIcon });
    var popup = "<table class=\"my-table\">\n                            <tr>\n                                <th>ID:</th>\n                                <td>" + props.event_id + "</td>\n                            </tr>\n                            <tr> \n                                <th>Magnitude:</th>\n                                <td>" + props.magnitude + "</td>\n                            </tr>\n                            <tr>\n                                <th>Depth:</th>\n                                <td>" + props.depth + "</td>\n                            </tr>\n                            <tr>\n                                <th>Latitude:</th>\n                                <td>" + props.lat + "</td>\n                            </tr>\n                            <tr>\n                                <th>Longitude:</th>\n                                <td>" + props.lon + "</td>\n                            </tr>\n                            <tr>\n                                <th>Description:</th>\n                                <td>" + props.place + "</td>\n                            </tr>\n                        </table>";
    marker.bindPopup(popup);
    return marker;
}
function layerGenerator(event, product) {
    if (product === void 0) { product = null; }
    return createEventMarker(event);
}
var epiLayer = new _layer__WEBPACK_IMPORTED_MODULE_1__["Layer"]('Epicenter', 'epicenter', layerGenerator);
epiLayer.legendImages = ['assets/legend-epicenter.png'];
var epicenterLayer = epiLayer;


/***/ }),

/***/ "./src/app/shared/maps/layers/facility.ts":
/*!************************************************!*\
  !*** ./src/app/shared/maps/layers/facility.ts ***!
  \************************************************/
/*! exports provided: basicFacilityIcon, facilityLayer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "basicFacilityIcon", function() { return basicFacilityIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "facilityLayer", function() { return facilityLayer; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! leaflet */ "./node_modules/leaflet/dist/leaflet-src.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(underscore__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var leaflet_markercluster__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! leaflet.markercluster */ "./node_modules/leaflet.markercluster/dist/leaflet.markercluster-src.js");
/* harmony import */ var leaflet_markercluster__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(leaflet_markercluster__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _layer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./layer */ "./src/app/shared/maps/layers/layer.ts");





var basicFacilityIcon = leaflet__WEBPACK_IMPORTED_MODULE_1__["divIcon"]({
    className: 'custom-div-icon',
    html: '<i style="height:20px;" class="fa fa-3x fa-lg fa-map-marker">',
    iconSize: [20, 20],
    iconAnchor: [9, 5],
    popupAnchor: [0, 0] // point from which the popup should open relative to the iconAnchor
});
function addFacMarker(fac, silent) {
    if (silent === void 0) { silent = false; }
    if (!this.map) {
        return null;
    }
    // create event marker and plot it
    var marker = this.createFacMarker(fac);
    var sc_id = fac.shakecast_id.toString();
    var existingMarker = this.data.facilityMarkers[sc_id];
    // Check if the marker already exists
    if (underscore__WEBPACK_IMPORTED_MODULE_2__["isEqual"](this.data.facMarker, marker)) {
        // Do nothing. This facility is already selected
    }
    else if (existingMarker) {
        if (this.data.facilityLayer.hasLayer(this.data.facMarker)) {
            this.data.facilityLayer.removeLayer(this.data.facMarker);
            this.data.facilityCluster.addLayer(this.data.facMarker);
            this.data.facilityCluster.addTo(this.data.facilityLayer);
            this.data.facilityLayer.addTo(this.map);
        }
        this.data.facMarker = existingMarker;
        this.data.facilityCluster.removeLayer(this.data.facMarker);
        this.data.facMarker.addTo(this.data.facilityLayer);
        this.data.facilityLayer.addTo(this.map);
        marker.bindPopup(marker.popupContent);
    }
    else {
        if (this.data.facilityLayer.hasLayer(this.data.facMarker)) {
            this.data.facilityLayer.removeLayer(this.data.facMarker);
            this.data.facilityCluster.addLayer(this.data.facMarker);
            this.data.facilityCluster.addTo(this.data.facilityLayer);
            this.data.facilityLayer.addTo(this.map);
        }
        this.data.facMarker = marker;
        this.data.facilityMarkers[sc_id] = marker;
        this.data.facMarker.addTo(this.data.facilityLayer);
        this.data.facilityLayer.addTo(this.map);
        marker.bindPopup(marker.popupContent);
    }
    if (silent === false) {
        this.data.facMarker.openPopup();
    }
}
function createFacMarker(fac) {
    var alert = 'gray';
    if ((fac['shaking']) && (fac['shaking']['alert_level'] !== 'gray')) {
        alert = fac['shaking']['alert_level'];
    }
    var icon_ = basicFacilityIcon;
    icon_.options.html = "<i style=\"color:" + alert + "\" class=\"fa fa-3x fa-lg fa-map-marker\">";
    var marker = leaflet__WEBPACK_IMPORTED_MODULE_1__["marker"]([fac.lat, fac.lon], { icon: icon_ });
    var desc = '';
    if (fac.html) {
        marker['popupContent'] = fac.html;
    }
    else {
        if (fac.description) {
            desc = fac.description;
        }
        else {
            desc = 'No Description';
        }
        var colorTable = "\n        <table class=\"colors-table\" style=\"width:100%;text-align:center\">\n            <tr>\n                <th>Fragility</th>\n            </tr>\n            <tr>\n                <td>\n                <table style=\"width:100%\">\n                    <tr>\n                ";
        if (fac['green'] > 0) {
            colorTable += "<th style=\"background-color:green;padding:2px;color:white\">\n                        " + fac['metric'] + ': ' + fac['green'] + "\n                    </th>";
        }
        if (fac['yellow'] > 0) {
            colorTable += "<th style=\"background-color:gold;padding:2px;color:white\">\n                        " + fac['metric'] + ': ' + fac['yellow'] + "\n                    </th>";
        }
        if (fac['orange'] > 0) {
            colorTable += "<th style=\"background-color:orange;padding:2px;color:white\">\n                        " + fac['metric'] + ': ' + fac['orange'] + "\n                    </th>";
        }
        if (fac['red'] > 0) {
            colorTable += "<th style=\"background-color:red;padding:2px;color:white\">\n                        " + fac['metric'] + ': ' + fac['red'] + "\n                    </th>";
        }
        colorTable += "</td>\n                    </tr>\n                </table>\n            </tr>\n        </table>";
        marker['popupContent'] = "<table style=\"text-align:center;\">\n                                    <tr>\n                                        <th>" + fac.name + " </th>\n                                    </tr>\n                                    <tr>\n                                        <td style=\"font-style:italic;\">" +
            desc + "\n                                        </td>\n                                    </tr>\n                                    <tr>\n                                        <table class=\"fragility-table\">\n                                            <tr>\n                                                " + colorTable + "\n                                            </tr>\n                                        </table>\n                                    </tr>\n                                </table>";
    }
    if (fac['shaking']) {
        var shakingColor = fac['shaking']['alert_level'];
        if (shakingColor === 'yellow') {
            shakingColor = 'gold';
        }
        marker['popupContent'] += "<table style=\"border-top:2px solid #444444;width:100%;\">\n                                        <tr>\n                                            <table style=\"width:90%;margin-left:5%;border-bottom:2px solid #dedede;padding-bottom:0\">\n                                                <tr>\n                                                    <th style=\"text-align:center\">Alert Level</th>\n                                                </tr>\n                                            </table>\n                                        </tr>\n                                        <tr>\n                                            <table style=\"width:100%;text-align:center;\">\n                                                <tr style=\"background:" + shakingColor + "\">\n                                                    <th style=\"text-align:center;color:white\">" + fac['shaking']['metric'] + ": " +
            fac['shaking'][fac['shaking']['metric'].toLowerCase()] + "</th>\n                                                </tr>\n                                            </table>\n                                        </tr>\n                                    </table>";
    }
    marker['facility'] = fac;
    return marker;
}
function removeFacMarker(fac) {
    var sc_id = fac.properties.shakecast_id.toString();
    var marker = this.data.facilityMarkers[sc_id];
    if (this.data.facilityLayer.hasLayer(marker)) {
        this.data.facilityLayer.removeLayer(marker);
    }
    else if (this.data.facilityCluster.hasLayer(marker)) {
        this.data.facilityCluster.removeLayer(marker);
    }
    delete this.data.facilityMarkers[sc_id];
}
function createFacCluster(cluster) {
    var childCount = cluster.getChildCount();
    var facs = cluster.getAllChildMarkers();
    var c = ' marker-cluster-';
    if (childCount < 10) {
        c += 'small';
    }
    else if (childCount < 100) {
        c += 'medium';
    }
    else {
        c += 'large';
    }
    var color_c = '';
    if (facs[0]['facility']['shaking']) {
        var shaking = 'gray';
        for (var fac_id in facs) {
            if ((!underscore__WEBPACK_IMPORTED_MODULE_2__["contains"](['green', 'yellow', 'orange', 'red'], shaking)) &&
                (underscore__WEBPACK_IMPORTED_MODULE_2__["contains"](['green', 'yellow', 'orange', 'red'], facs[fac_id]['facility']['shaking']['alert_level']))) {
                shaking = facs[fac_id]['facility']['shaking']['alert_level'];
            }
            else if ((!underscore__WEBPACK_IMPORTED_MODULE_2__["contains"](['yellow', 'orange', 'red'], shaking)) &&
                (underscore__WEBPACK_IMPORTED_MODULE_2__["contains"](['yellow', 'orange', 'red'], facs[fac_id]['facility']['shaking']['alert_level']))) {
                shaking = facs[fac_id]['facility']['shaking']['alert_level'];
            }
            else if ((!underscore__WEBPACK_IMPORTED_MODULE_2__["contains"](['orange', 'red'], shaking)) &&
                (underscore__WEBPACK_IMPORTED_MODULE_2__["contains"](['orange', 'red'], facs[fac_id]['facility']['shaking']['alert_level']))) {
                shaking = facs[fac_id]['facility']['shaking']['alert_level'];
            }
            else if ((!underscore__WEBPACK_IMPORTED_MODULE_2__["contains"](['red'], shaking)) &&
                (underscore__WEBPACK_IMPORTED_MODULE_2__["contains"](['red'], facs[fac_id]['facility']['shaking']['alert_level']))) {
                shaking = facs[fac_id]['facility']['shaking']['alert_level'];
            }
        }
        color_c = 'marker-cluster-' + shaking;
    }
    else {
        color_c = 'marker-cluster-green';
    }
    return new leaflet__WEBPACK_IMPORTED_MODULE_1__["DivIcon"]({ html: '<div><span>' + childCount + '</span></div>',
        className: 'marker-cluster' + c + ' ' + color_c, iconSize: new leaflet__WEBPACK_IMPORTED_MODULE_1__["Point"](40, 40) });
}
function clear() {
    this.data = {
        facilityLayer: leaflet__WEBPACK_IMPORTED_MODULE_1__["featureGroup"](),
        facilityCluster: leaflet__WEBPACK_IMPORTED_MODULE_1__["markerClusterGroup"]({
            iconCreateFunction: createFacCluster
        }),
        facilityMarkers: {},
        facMarker: leaflet__WEBPACK_IMPORTED_MODULE_1__["marker"]()
    };
}
function layerGenerator(event, facData) { }
var FacilityLayer = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](FacilityLayer, _super);
    function FacilityLayer() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.addFacMarker = addFacMarker;
        _this.removeFacMarker = removeFacMarker;
        _this.createFacMarker = createFacMarker;
        _this.map = null;
        _this.clear = clear;
        _this.data = {
            facilityLayer: leaflet__WEBPACK_IMPORTED_MODULE_1__["featureGroup"](),
            facilityCluster: leaflet__WEBPACK_IMPORTED_MODULE_1__["markerClusterGroup"]({
                iconCreateFunction: createFacCluster
            }),
            facilityMarkers: {},
            facMarker: leaflet__WEBPACK_IMPORTED_MODULE_1__["marker"]()
        };
        return _this;
    }
    return FacilityLayer;
}(_layer__WEBPACK_IMPORTED_MODULE_4__["Layer"]));
var fLayer = new FacilityLayer('Facility', 'facility', layerGenerator);
fLayer.url = function (event) {
    return 'api/shakemaps/' + event.event_id + '/facilities';
};
var facilityLayer = fLayer;


/***/ }),

/***/ "./src/app/shared/maps/layers/group.ts":
/*!*********************************************!*\
  !*** ./src/app/shared/maps/layers/group.ts ***!
  \*********************************************/
/*! exports provided: groupLayer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "groupLayer", function() { return groupLayer; });
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! leaflet */ "./node_modules/leaflet/dist/leaflet-src.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _layer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./layer */ "./src/app/shared/maps/layers/layer.ts");


function generateGroupPoly(group) {
    var groupLayer_ = new leaflet__WEBPACK_IMPORTED_MODULE_0__["GeoJSON"](group);
    var popupStr = generatePopup(group);
    groupLayer_.bindPopup(popupStr);
    return groupLayer_;
}
function translate(color) {
    return {
        gray: 'None',
        grey: 'None',
        green: 'Low',
        yellow: 'Medium',
        orange: 'Medium-High',
        red: 'High'
    }[color.toLowerCase()];
}
function generatePopup(group) {
    var popupStr = '';
    popupStr += "\n            <table \"colors-table\" style=\"\">\n                <tr>\n                    <th><h1 style=\"text-align:center\"> " + group['properties']['name'] + "</h1></th>\n                </tr>\n                <tr>\n                    <th>\n                        <h3 style=\"margin:0;border-bottom:2px #444444 solid\">Facilities: </h3>\n                    </th>\n                </tr>\n                <tr>\n                    <td>\n                        <table>";
    for (var fac_type in group['properties']['specs']['facilities']) {
        if (group['properties']['specs']['facilities'].hasOwnProperty(fac_type)) {
            popupStr += "\n                            <tr>\n                                <th>" + fac_type + ": </th>\n                                <td>" + group['properties']['specs']['facilities'][fac_type] + "</td>\n                            </tr>";
        }
    }
    popupStr += "</table>\n                </td>\n            </tr>\n            <tr>\n                <th><h3 style=\"margin:0;border-bottom:2px #444444 solid\">Notification Preferences: </h3></th>\n            </tr>\n        ";
    if (group['properties']['specs']['new_event'] > 0) {
        popupStr += "\n            <tr>\n                <td>\n                    <table>\n                        <th>New Events with Minimum Magnitude: </th>\n                        <td>" + group['properties']['specs']['new_event'] + "</td>\n                    </table>\n                </td>\n            </tr>\n        ";
    }
    if (group['properties']['specs']['inspection'].length > 0) {
        popupStr += "\n            <tr>\n                <th style=\"text-align:center\">Facility Alert Levels</th>\n            </tr>\n            <tr>\n                <td>\n                    <table style=\"width:100%;text-align:center\">\n        ";
        for (var _i = 0, _a = group['properties']['specs']['inspection']; _i < _a.length; _i++) {
            var inspection = _a[_i];
            var inspColor = inspection;
            if (inspColor === 'yellow') {
                inspColor = 'gold';
            }
            popupStr += '<th style="color:white;padding:3px;border-radius:5px;background:' +
                inspColor +
                '">' + translate(inspection) + '</th>';
        }
        popupStr += '</tr></td></table>';
    }
    if (group['properties']['specs']['scenario'].length > 0) {
        popupStr += "\n            <tr>\n                <th style=\"text-align:center\">Scenario Alert Levels</th>\n            </tr>\n            <tr>\n                <td>\n                    <table style=\"width:100%;text-align:center\">\n        ";
        for (var _b = 0, _c = group['properties']['specs']['scenario']; _b < _c.length; _b++) {
            var inspection = _c[_b];
            var inspColor = inspection;
            if (inspColor === 'yellow') {
                inspColor = 'gold';
            }
            popupStr += '<th style="color:white;padding:3px;border-radius:5px;background:' +
                inspColor +
                '">' + translate(inspection) + '</th>';
        }
        popupStr += '</tr></td></table>';
    }
    popupStr += "<tr>\n                    <table>\n                        <th>Template: </th>\n                        <td>" + group['properties']['specs']['template'] + "</td>\n                    </table>\n                </tr>\n            </table>";
    return popupStr;
}
function layerGenerator(group, product) {
    if (product === void 0) { product = null; }
    return generateGroupPoly(group);
}
var groupLayer = new _layer__WEBPACK_IMPORTED_MODULE_1__["Layer"]('Group', 'group', layerGenerator);


/***/ }),

/***/ "./src/app/shared/maps/layers/impact.ts":
/*!**********************************************!*\
  !*** ./src/app/shared/maps/layers/impact.ts ***!
  \**********************************************/
/*! exports provided: impactLayer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "impactLayer", function() { return impactLayer; });
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! leaflet */ "./node_modules/leaflet/dist/leaflet-src.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(underscore__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _layer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./layer */ "./src/app/shared/maps/layers/layer.ts");
/* harmony import */ var leaflet_makimarkers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! leaflet-makimarkers */ "./node_modules/leaflet-makimarkers/Leaflet.MakiMarkers.js");
/* harmony import */ var leaflet_makimarkers__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(leaflet_makimarkers__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var leaflet_markercluster__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! leaflet.markercluster */ "./node_modules/leaflet.markercluster/dist/leaflet.markercluster-src.js");
/* harmony import */ var leaflet_markercluster__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(leaflet_markercluster__WEBPACK_IMPORTED_MODULE_4__);





function generatePopup(fac) {
    var selectShakingTh = "border-top:2px dashed black;border-left:2px dashed black;border-right:2px dashed black;";
    var selectShakingTd = "border-bottom:2px dashed black;border-left:2px dashed black;border-right:2px dashed black;";
    var selectShaking = 'border:2px dashed black';
    var shakingStyles = 'top:100%;transform:translateY(-100%);position:relative;';
    var popup = "\n    <div style=\"min-width:300px;text-align:center\">\n        <h3 style=\"margin-bottom:0;\">" + fac.name + "</h3>\n        <p style=\"margin-top:0;font-size:.8em;font-style:italic;\">" + fac.facility_type + "</p>\n        <p style=\"margin-bottom:0;\">" + (fac.description ? fac.description : 'No Description') + "</p>\n        <p style=\"margin-top:5px;\">" + fac.lat + ", " + fac.lon + "</p>\n\n        <div style=\"height:4em;width:80%;left:10%;position:relative;display:flex\">\n            <div style=\"height:100%;width:18%;margin-left:2%\"\n                title=\"" + fac.shaking.gray.toFixed(2) + "%\">\n                <div style=\"" + shakingStyles + "background:grey;height:" + (fac.shaking.gray + 5) + "%;" + (fac.shaking.alert_level === 'gray' ? selectShaking : '') + "\"></div>\n            </div>\n            <div style=\"height:100%;width:18%;margin-left:2%\"\n                title=\"" + fac.shaking.green.toFixed(2) + "%\">\n                <div style=\"" + shakingStyles + "background:green;height:" + (fac.shaking.green + 5) + "%;" + (fac.shaking.alert_level === 'green' ? selectShaking : '') + "\"></div>\n            </div>\n            <div style=\"height:100%;width:18%;margin-left:2%\"\n                title=\"" + fac.shaking.yellow.toFixed(2) + "%\">\n                <div style=\"" + shakingStyles + "background:gold;height:" + (fac.shaking.yellow + 5) + "%;" + (fac.shaking.alert_level === 'yellow' ? selectShaking : '') + "\"></div>\n            </div>\n            <div style=\"height:100%;width:18%;margin-left:2%\"\n                title=\"" + fac.shaking.orange.toFixed(2) + "%\">\n                <div style=\"" + shakingStyles + "background:orange;height:" + (fac.shaking.orange + 5) + "%;" + (fac.shaking.alert_level === 'orange' ? selectShaking : '') + "\"></div>\n            </div>\n            <div style=\"height:100%;width:18%;margin-left:2%\"\n                title=\"" + fac.shaking.red.toFixed(2) + "%\">\n                <div style=\"" + shakingStyles + "background:red;height:" + (fac.shaking.red + 5) + "%;" + (fac.shaking.alert_level === 'red' ? selectShaking : '') + "\"></div>\n            </div>\n        </div>\n\n        <table style=\"width:100%;padding:5px;margin-top: 5px;background:rgba(0,0,0,.05);border-radius: 5px;\">\n            <tr>\n                <th style=\"padding:2px;" + (fac.shaking.metric === 'MMI' ? selectShakingTh : '') + "\">\n                    " + (fac.shaking.mmi ? fac.shaking.mmi : '-') + "\n                </th>\n                <th style=\"padding:2px;" + (fac.shaking.metric === 'PGA' ? selectShakingTh : '') + "\">\n                    " + (fac.shaking.pga ? fac.shaking.pga : '-') + "\n                </th>\n                <th style=\"padding:2px;" + (fac.shaking.metric === 'PGV' ? selectShakingTh : '') + "\">\n                    " + (fac.shaking.pgv ? fac.shaking.pgv : '-') + "\n                </th>\n                <th style=\"padding:2px;" + (fac.shaking.metric === 'PSA03' ? selectShakingTh : '') + "\">\n                    " + (fac.shaking.psa03 ? fac.shaking.psa03 : '-') + "\n                </th>\n                <th style=\"padding:2px;" + (fac.shaking.metric === 'PSA10' ? selectShakingTh : '') + "\">\n                    " + (fac.shaking.psa10 ? fac.shaking.psa10 : '-') + "\n                </th>\n                <th style=\"padding:2px;" + (fac.shaking.metric === 'PSA30' ? selectShakingTh : '') + "\">\n                    " + (fac.shaking.psa30 ? fac.shaking.psa30 : '-') + "\n                </th>\n            </tr>\n            <tr>\n                <td style=\"" + (fac.shaking.metric === 'MMI' ? selectShakingTd : '') + "\">\n                    MMI\n                </td>\n                <td style=\"" + (fac.shaking.metric === 'PGA' ? selectShakingTd : '') + "\">\n                    PGA\n                </td>\n                <td style=\"" + (fac.shaking.metric === 'PGV' ? selectShakingTd : '') + "\">\n                    PGV\n                </td>\n                <td style=\"" + (fac.shaking.metric === 'PSA03' ? selectShakingTd : '') + "\">\n                    SA(0.3 s)\n                </td>\n                <td style=\"" + (fac.shaking.metric === 'PSA10' ? selectShakingTd : '') + "\">\n                    SA(1.0 s)\n                </td>\n                <td style=\"" + (fac.shaking.metric === 'PSA30' ? selectShakingTd : '') + "\">\n                    SA(3.0 s)\n                </td>\n            </tr>\n        </table>\n    </div>\n    ";
    return popup;
}
function onEachFeature(feature, layer) {
    // does this feature have a property named popupContent?
    if (feature.properties) {
        layer.bindPopup(generatePopup(feature.properties));
    }
}
function createFacCluster(cluster) {
    var childCount = cluster.getChildCount();
    var facs = cluster.getAllChildMarkers();
    var c = ' marker-cluster-';
    if (childCount < 10) {
        c += 'small';
    }
    else if (childCount < 100) {
        c += 'medium';
    }
    else {
        c += 'large';
    }
    var color_c = '';
    var shaking = 'gray';
    for (var _i = 0, facs_1 = facs; _i < facs_1.length; _i++) {
        var eachFac = facs_1[_i];
        var fac = eachFac.feature.properties;
        if ((!underscore__WEBPACK_IMPORTED_MODULE_1__["contains"](['green', 'yellow', 'orange', 'red'], shaking)) &&
            (underscore__WEBPACK_IMPORTED_MODULE_1__["contains"](['green', 'yellow', 'orange', 'red'], fac['shaking']['alert_level']))) {
            shaking = fac['shaking']['alert_level'];
        }
        else if ((!underscore__WEBPACK_IMPORTED_MODULE_1__["contains"](['yellow', 'orange', 'red'], shaking)) &&
            (underscore__WEBPACK_IMPORTED_MODULE_1__["contains"](['yellow', 'orange', 'red'], fac['shaking']['alert_level']))) {
            shaking = fac['shaking']['alert_level'];
        }
        else if ((!underscore__WEBPACK_IMPORTED_MODULE_1__["contains"](['orange', 'red'], shaking)) &&
            (underscore__WEBPACK_IMPORTED_MODULE_1__["contains"](['orange', 'red'], fac['shaking']['alert_level']))) {
            shaking = fac['shaking']['alert_level'];
        }
        else if ((!underscore__WEBPACK_IMPORTED_MODULE_1__["contains"](['red'], shaking)) &&
            (underscore__WEBPACK_IMPORTED_MODULE_1__["contains"](['red'], fac['shaking']['alert_level']))) {
            shaking = fac['shaking']['alert_level'];
        }
    }
    color_c = 'marker-cluster-' + shaking;
    return new leaflet__WEBPACK_IMPORTED_MODULE_0__["DivIcon"]({ html: '<div><span>' + childCount + '</span></div>', className: 'marker-cluster' + c + ' ' + color_c, iconSize: new leaflet__WEBPACK_IMPORTED_MODULE_0__["Point"](40, 40) });
}
function layerGenerator(event, facData) {
    var geoJsonLayer = leaflet__WEBPACK_IMPORTED_MODULE_0__["geoJson"](facData, {
        onEachFeature: onEachFeature,
        pointToLayer: function (feature, latlng) {
            var fillColor = feature.properties.shaking.alert_level;
            var icon_ = leaflet__WEBPACK_IMPORTED_MODULE_0__["divIcon"]({
                className: 'custom-div-icon',
                html: "<i style=\"color:" + fillColor + "\" class=\"fa fa-3x fa-lg fa-map-marker\">",
                iconSize: [20, 20],
                iconAnchor: [11, 5],
                popupAnchor: [0, 0] // point from which the popup should open relative to the iconAnchor
            });
            return leaflet__WEBPACK_IMPORTED_MODULE_0__["marker"](latlng, { icon: icon_ });
        }
    });
    var facilityCluster = leaflet__WEBPACK_IMPORTED_MODULE_0__["markerClusterGroup"]({
        iconCreateFunction: createFacCluster
    });
    facilityCluster.addLayer(geoJsonLayer);
    return facilityCluster;
}
var fLayer = new _layer__WEBPACK_IMPORTED_MODULE_2__["Layer"]('Facility Shaking', 'impact', layerGenerator);
fLayer.url = function (event) {
    return 'api/shakemaps/' + event.properties.event_id + '/impact';
};
var impactLayer = fLayer;


/***/ }),

/***/ "./src/app/shared/maps/layers/intensity.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/maps/layers/intensity.ts ***!
  \*************************************************/
/*! exports provided: intensityLayer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "intensityLayer", function() { return intensityLayer; });
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! leaflet */ "./node_modules/leaflet/dist/leaflet-src.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _layer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./layer */ "./src/app/shared/maps/layers/layer.ts");


function generateLayer(event, product) {
    if (!product || !product.features) {
        return null;
    }
    var latestProduct = product.features[0];
    if (!latestProduct) {
        return null;
    }
    var imageUrl = "api/shakemaps/" + latestProduct.properties.shakemap_id + "/overlay";
    var imageBounds = [[latestProduct.properties.lat_min,
            latestProduct.properties.lon_min],
        [latestProduct.properties.lat_max,
            latestProduct.properties.lon_max]];
    var overlayLayer = leaflet__WEBPACK_IMPORTED_MODULE_0__["imageOverlay"](imageUrl, imageBounds, { opacity: .4 });
    return overlayLayer;
}
var intLayer = new _layer__WEBPACK_IMPORTED_MODULE_1__["Layer"]('Intensity Map', 'intensity_map', generateLayer);
intLayer.url = function (event) {
    return "api/shakemaps/" + event.properties.event_id;
};
intLayer.productType = 'json';
var intensityLayer = intLayer;


/***/ }),

/***/ "./src/app/shared/maps/layers/layer.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/shared/maps/layers/layer.service.ts ***!
  \*****************************************************/
/*! exports provided: LayerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayerService", function() { return LayerService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _core_loading_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core/loading.service */ "./src/app/core/loading.service.ts");
/* harmony import */ var _epicenter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./epicenter */ "./src/app/shared/maps/layers/epicenter.ts");
/* harmony import */ var _intensity__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./intensity */ "./src/app/shared/maps/layers/intensity.ts");
/* harmony import */ var _group__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./group */ "./src/app/shared/maps/layers/group.ts");
/* harmony import */ var _facility__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./facility */ "./src/app/shared/maps/layers/facility.ts");
/* harmony import */ var _impact__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./impact */ "./src/app/shared/maps/layers/impact.ts");










var LayerService = /** @class */ (function () {
    function LayerService(http, loadingService) {
        this.http = http;
        this.loadingService = loadingService;
        this.error = null;
        this.nextLayer = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
        this.data = {};
        this.waiting = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subscription"]();
        this.needsKey = [_facility__WEBPACK_IMPORTED_MODULE_8__["facilityLayer"]];
        this.needsMap = [_facility__WEBPACK_IMPORTED_MODULE_8__["facilityLayer"]];
        this.layers = {
            'event': [_epicenter__WEBPACK_IMPORTED_MODULE_5__["epicenterLayer"], _intensity__WEBPACK_IMPORTED_MODULE_6__["intensityLayer"], _impact__WEBPACK_IMPORTED_MODULE_9__["impactLayer"]],
            'group': [_group__WEBPACK_IMPORTED_MODULE_7__["groupLayer"]]
        };
    }
    LayerService.prototype.genEventLayers = function (event) {
        this.genLayers(event, 'event');
    };
    LayerService.prototype.genGroupLayers = function (group) {
        this.genLayers(group, 'group');
    };
    LayerService.prototype.genLayers = function (input, type_) {
        var _this = this;
        if (type_ === void 0) { type_ = 'event'; }
        // stop waiting on old map layers
        this.stopWaiting();
        var _loop_1 = function (layer) {
            this_1.loadingService.add(layer.name);
            if (layer.url(input)) {
                // get the product
                var url = layer.url(input);
                this_1.waiting.add(this_1.http.get(url, { responseType: layer['productType'] })
                    .subscribe(function (product) {
                    // generate the layer
                    layer['layer'] = layer.generateLayer(input, product);
                    // let the map know it's ready
                    _this.nextLayer.next(layer);
                    // record data for later usage
                    _this.data[layer['id']] = product;
                }, function (error) {
                    _this.error = error;
                    console.log(error);
                }));
            }
            else {
                layer['layer'] = layer.generateLayer(input);
                this_1.nextLayer.next(layer);
            }
            this_1.loadingService.finish(layer.name);
        };
        var this_1 = this;
        // try to make the layers
        for (var _i = 0, _a = this.layers[type_]; _i < _a.length; _i++) {
            var layer = _a[_i];
            _loop_1(layer);
        }
    };
    /* Facility layers require more options */
    LayerService.prototype.addFacMarker = function (marker) {
        this.loadingService.add('Facility Markers');
        _facility__WEBPACK_IMPORTED_MODULE_8__["facilityLayer"].addFacMarker(marker);
        this.loadingService.finish('Facility Markers');
    };
    LayerService.prototype.removeFacMarker = function (facility) {
        _facility__WEBPACK_IMPORTED_MODULE_8__["facilityLayer"].removeFacMarker(facility);
    };
    LayerService.prototype.clear = function () {
        _facility__WEBPACK_IMPORTED_MODULE_8__["facilityLayer"].clear();
    };
    LayerService.prototype.stopWaiting = function () {
        // Stop existing request for layers
        // this.waiting.unsubscribe();
    };
    LayerService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
            _core_loading_service__WEBPACK_IMPORTED_MODULE_4__["LoadingService"]])
    ], LayerService);
    return LayerService;
}());



/***/ }),

/***/ "./src/app/shared/maps/layers/layer.ts":
/*!*********************************************!*\
  !*** ./src/app/shared/maps/layers/layer.ts ***!
  \*********************************************/
/*! exports provided: Layer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Layer", function() { return Layer; });
var Layer = /** @class */ (function () {
    function Layer(name, id, layerGenerator) {
        /* Optional */
        // Leaflet layer, ready to plot
        this.layer = null;
        // Map API key
        this.mapKey = null;
        // Images to be displayed in a legend
        this.legendImages = [];
        // Type of data for url request
        this.productType = '';
        // Function that generates a url to get specific data
        this.url = function () {
            return null;
        };
        // Data storage for persisting layers
        this.data = {};
        this.name = name;
        this.id = id;
        this.generateLayer = layerGenerator;
    }
    return Layer;
}());



/***/ }),

/***/ "./src/app/shared/maps/map.component.css":
/*!***********************************************!*\
  !*** ./src/app/shared/maps/map.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#map {\r\n  height: 100%;\r\n}\r\n\r\n.impact {\r\n    position: fixed;\r\n    bottom: 50px;\r\n    z-index: 1000;\r\n    width: 90%;\r\n    left: 5%;\r\n    opacity: .5;\r\n    font-size: 1.2em;\r\n    cursor: default;\r\n}\r\n\r\n.impact:hover {\r\n  opacity: 1;\r\n}\r\n\r\n.facility-types {\r\n  position: absolute;\r\n  bottom: 20px;\r\n  padding: 10px;\r\n  z-index: 500;\r\n  opacity: .5;\r\n  cursor: default;\r\n}\r\n\r\n.facility-types:hover {\r\n  opacity: 1;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL21hcHMvbWFwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsWUFBWTtJQUNaLGFBQWE7SUFDYixVQUFVO0lBQ1YsUUFBUTtJQUNSLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsZUFBZTtBQUNuQjs7QUFFQTtFQUNFLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osYUFBYTtFQUNiLFlBQVk7RUFDWixXQUFXO0VBQ1gsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFVBQVU7QUFDWiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9tYXBzL21hcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI21hcCB7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4uaW1wYWN0IHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIGJvdHRvbTogNTBweDtcclxuICAgIHotaW5kZXg6IDEwMDA7XHJcbiAgICB3aWR0aDogOTAlO1xyXG4gICAgbGVmdDogNSU7XHJcbiAgICBvcGFjaXR5OiAuNTtcclxuICAgIGZvbnQtc2l6ZTogMS4yZW07XHJcbiAgICBjdXJzb3I6IGRlZmF1bHQ7XHJcbn1cclxuXHJcbi5pbXBhY3Q6aG92ZXIge1xyXG4gIG9wYWNpdHk6IDE7XHJcbn1cclxuXHJcbi5mYWNpbGl0eS10eXBlcyB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJvdHRvbTogMjBweDtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIHotaW5kZXg6IDUwMDtcclxuICBvcGFjaXR5OiAuNTtcclxuICBjdXJzb3I6IGRlZmF1bHQ7XHJcbn1cclxuXHJcbi5mYWNpbGl0eS10eXBlczpob3ZlciB7XHJcbiAgb3BhY2l0eTogMTtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/shared/maps/map.component.html":
/*!************************************************!*\
  !*** ./src/app/shared/maps/map.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"map\">\r\n    <h3>\r\n        <shared-facility-count class=\"facility-types\"></shared-facility-count>\r\n    </h3>\r\n\r\n    <div class=\"impact\">\r\n        <shared-impact></shared-impact>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/shared/maps/map.component.ts":
/*!**********************************************!*\
  !*** ./src/app/shared/maps/map.component.ts ***!
  \**********************************************/
/*! exports provided: MapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapComponent", function() { return MapComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _core_map_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/map.service */ "./src/app/core/map.service.ts");
/* harmony import */ var _core_earthquake_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core/earthquake.service */ "./src/app/core/earthquake.service.ts");
/* harmony import */ var _layers_layer_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./layers/layer.service */ "./src/app/shared/maps/layers/layer.service.ts");
/* harmony import */ var _core_facility_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @core/facility.service */ "./src/app/core/facility.service.ts");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! leaflet */ "./node_modules/leaflet/dist/leaflet-src.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var leaflet_makimarkers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! leaflet-makimarkers */ "./node_modules/leaflet-makimarkers/Leaflet.MakiMarkers.js");
/* harmony import */ var leaflet_makimarkers__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(leaflet_makimarkers__WEBPACK_IMPORTED_MODULE_8__);









var MapComponent = /** @class */ (function () {
    function MapComponent(mapService, facService, eqService, layerService) {
        this.mapService = mapService;
        this.facService = facService;
        this.eqService = eqService;
        this.layerService = layerService;
        this.center = {};
        this.mapKey = null;
        this.onMap = [];
        this.subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subscription"]();
        this.layerControl = leaflet__WEBPACK_IMPORTED_MODULE_7__["control"];
        this.error = null;
    }
    MapComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.mapService.getMapKey().subscribe(function (key) {
            _this.mapKey = key;
            _this.initMap();
            // set key for map layers
            for (var _i = 0, _a = _this.layerService.needsKey; _i < _a.length; _i++) {
                var layer = _a[_i];
                layer.mapKey = key;
            }
            // allow access to map controls
            for (var _b = 0, _c = _this.layerService.needsMap; _b < _c.length; _b++) {
                var layer = _c[_b];
                layer.map = _this.map;
            }
        });
    };
    MapComponent.prototype.initMap = function () {
        var _this = this;
        this.map = leaflet__WEBPACK_IMPORTED_MODULE_7__["map"]('map', {
            scrollWheelZoom: false
        }).setView([51.505, -0.09], 8);
        this.map.on('moveend', function (event) { _this.updateBounds(event); });
        // create basemap
        var basemap = this.getBasemap();
        basemap.addTo(this.map);
        this.layerControl = leaflet__WEBPACK_IMPORTED_MODULE_7__["control"].layers({ 'Basemap': basemap }, null).addTo(this.map);
        this.subscriptions.add(this.eqService.selectEvent.subscribe(function (event) {
            _this.onEvent(event);
        }));
        this.subscriptions.add(this.mapService.groupPoly.subscribe(function (group) {
            _this.onGroup(group);
        }));
        this.subscriptions.add(this.layerService.nextLayer.subscribe(function (layer) {
            if (layer != null) {
                _this.onLayer(layer);
            }
        }));
        this.subscriptions.add(this.facService.select.subscribe(function (fac) {
            if (fac != null) {
                var facMarker = _this.mapService.makeFacMarker(fac.properties);
                _this.layerService.addFacMarker(facMarker);
                _this.map.panTo(new leaflet__WEBPACK_IMPORTED_MODULE_7__["LatLng"](facMarker.lat, facMarker.lon));
            }
        }));
        // subscribe to REMOVING facility markers
        this.subscriptions.add(this.mapService.removeFacMarkers.subscribe(function (fac) {
            _this.layerService.removeFacMarker(fac);
        }));
        // subscribe to clearing the map
        this.subscriptions.add(this.mapService.clearMapNotify.subscribe(function (notification) {
            _this.clearLayers();
        }));
    };
    MapComponent.prototype.onEvent = function (event) {
        this.clearLayers();
        if (event === null) {
            return;
        }
        else {
            this.layerService.genEventLayers(event);
        }
    };
    MapComponent.prototype.onGroup = function (group) {
        this.layerService.genGroupLayers(group);
    };
    MapComponent.prototype.onLayer = function (layer) {
        if (!layer.layer || !this.map) {
            return;
        }
        layer['layer'].addTo(this.map);
        this.onMap.push(layer);
        // align map
        var layers = this.onMap.map(function (layer_) {
            return layer_.layer;
        });
        var group = leaflet__WEBPACK_IMPORTED_MODULE_7__["featureGroup"](layers);
        var bounds = group.getBounds();
        if (bounds._southWest && bounds._northEast) {
            this.map.fitBounds(bounds.pad(0.1));
        }
        // open epicenter popup
        if (layer.id === 'epicenter') {
            layer.layer.openPopup();
        }
        // add to map control
        this.layerControl.addOverlay(layer.layer, layer.name);
    };
    MapComponent.prototype.getBasemap = function () {
        return leaflet__WEBPACK_IMPORTED_MODULE_7__["tileLayer"]('https://services.arcgisonline.com/' +
            'arcgis/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}', {
            attribution: 'Esri, HERE, Garmin, Intermap, increment P Corp., ' +
                'GEBCO, USGS, FAO, NPS, NRCAN, GeoBase, IGN, Kadaster NL, ' +
                'Ordnance Survey, Esri Japan, METI, Esri China (Hong Kong), ' +
                'swisstopo, © OpenStreetMap contributors, and the GIS User ' +
                'Community',
            maxZoom: 16
        });
    };
    MapComponent.prototype.clearLayers = function () {
        /*
        Clear all layers besides basemaps
        */
        var _this = this;
        this.map.eachLayer(function (layer) {
            _this.map.removeLayer(layer);
        });
        this.onMap = [];
        this.map.removeControl(this.layerControl);
        var basemap = this.getBasemap();
        basemap.addTo(this.map);
        this.layerControl = leaflet__WEBPACK_IMPORTED_MODULE_7__["control"].layers({ 'Basemap': basemap }, null).addTo(this.map);
    };
    MapComponent.prototype.ngOnDestroy = function () {
        this.layerService.clear();
        this.subscriptions.unsubscribe();
    };
    MapComponent.prototype.updateBounds = function (event) {
        if (this.mapService) {
            this.mapService.bounds = event.target.getBounds();
        }
    };
    MapComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'my-map',
            template: __webpack_require__(/*! ./map.component.html */ "./src/app/shared/maps/map.component.html"),
            styles: [__webpack_require__(/*! ./map.component.css */ "./src/app/shared/maps/map.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_map_service__WEBPACK_IMPORTED_MODULE_3__["MapService"],
            _core_facility_service__WEBPACK_IMPORTED_MODULE_6__["FacilityService"],
            _core_earthquake_service__WEBPACK_IMPORTED_MODULE_4__["EarthquakeService"],
            _layers_layer_service__WEBPACK_IMPORTED_MODULE_5__["LayerService"]])
    ], MapComponent);
    return MapComponent;
}());



/***/ }),

/***/ "./src/app/shared/panels/bottom-panel/bottom-panel.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/shared/panels/bottom-panel/bottom-panel.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".bottom-panel {\r\n    text-align: center;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL3BhbmVscy9ib3R0b20tcGFuZWwvYm90dG9tLXBhbmVsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7QUFDdEIiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvcGFuZWxzL2JvdHRvbS1wYW5lbC9ib3R0b20tcGFuZWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ib3R0b20tcGFuZWwge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/shared/panels/bottom-panel/bottom-panel.component.html":
/*!************************************************************************!*\
  !*** ./src/app/shared/panels/bottom-panel/bottom-panel.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"bottom-panel\" [@showBottom]=\"show\">\r\n\r\n    <div class=\"toggle\" *ngIf=\"control\">\r\n        <div class=\"toggle-click\" (click)=\"toggle()\" style=\"width:0\">\r\n            <span class=\"arrow-icon\" [hidden]=\"show=='shown'\"><i class=\"fa fa-chevron-up\"></i></span>\r\n            <span class=\"arrow-icon\" [hidden]=\"show=='hidden'\"><i class=\"fa fa-chevron-down\"></i></span>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"panel-title\">{{ title }}</div>\r\n    \r\n    <ng-content>\r\n    </ng-content>\r\n</div>"

/***/ }),

/***/ "./src/app/shared/panels/bottom-panel/bottom-panel.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/shared/panels/bottom-panel/bottom-panel.component.ts ***!
  \**********************************************************************/
/*! exports provided: BottomPanelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BottomPanelComponent", function() { return BottomPanelComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _shared_animations_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shared/animations/animations */ "./src/app/shared/animations/animations.ts");
/* harmony import */ var _core_panel_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core/panel.service */ "./src/app/core/panel.service.ts");





var BottomPanelComponent = /** @class */ (function () {
    function BottomPanelComponent(controlService) {
        this.controlService = controlService;
        this.show = 'hidden';
        this.subs = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subscription"]();
        this.open = false;
        this.control = true;
    }
    BottomPanelComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subs.add(this.controlService.controlBottom.subscribe(function (command) {
            if (command) {
                _this.show = command;
            }
        }));
        if (this.open) {
            this.show = 'shown';
        }
        else {
            this.show = 'hidden';
        }
    };
    BottomPanelComponent.prototype.toggle = function () {
        if (this.show == 'hidden') {
            this.show = 'shown';
        }
        else {
            this.show = 'hidden';
        }
    };
    BottomPanelComponent.prototype.ngOnDestroy = function () {
        this.subs.unsubscribe();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], BottomPanelComponent.prototype, "title", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], BottomPanelComponent.prototype, "open", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], BottomPanelComponent.prototype, "control", void 0);
    BottomPanelComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'panels-bottom-panel',
            template: __webpack_require__(/*! ./bottom-panel.component.html */ "./src/app/shared/panels/bottom-panel/bottom-panel.component.html"),
            animations: [_shared_animations_animations__WEBPACK_IMPORTED_MODULE_3__["showBottom"]],
            styles: [__webpack_require__(/*! ./bottom-panel.component.css */ "./src/app/shared/panels/bottom-panel/bottom-panel.component.css"), __webpack_require__(/*! ../../../shared/css/panels.css */ "./src/app/shared/css/panels.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_panel_service__WEBPACK_IMPORTED_MODULE_4__["PanelService"]])
    ], BottomPanelComponent);
    return BottomPanelComponent;
}());



/***/ }),

/***/ "./src/app/shared/panels/left-panel/left-panel.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/shared/panels/left-panel/left-panel.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9wYW5lbHMvbGVmdC1wYW5lbC9sZWZ0LXBhbmVsLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/shared/panels/left-panel/left-panel.component.html":
/*!********************************************************************!*\
  !*** ./src/app/shared/panels/left-panel/left-panel.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"left-panel\" [@showLeft]=\"show\">\r\n\r\n    <div class=\"toggle\" *ngIf=\"control\">\r\n        <div class=\"toggle-click\" (click)=\"toggle()\">\r\n            <span class=\"arrow-icon\" [hidden]=\"show=='shown'\"><i class=\"fa fa-chevron-right\"></i></span>\r\n            <span class=\"arrow-icon\" [hidden]=\"show=='hidden'\"><i class=\"fa fa-chevron-left\"></i></span>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"panel-content\">\r\n        <h1 class=\"panel-title\">{{ title }}</h1>\r\n\r\n        <ng-content>\r\n        </ng-content>\r\n\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/shared/panels/left-panel/left-panel.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/shared/panels/left-panel/left-panel.component.ts ***!
  \******************************************************************/
/*! exports provided: LeftPanelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeftPanelComponent", function() { return LeftPanelComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _shared_animations_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shared/animations/animations */ "./src/app/shared/animations/animations.ts");
/* harmony import */ var _core_panel_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core/panel.service */ "./src/app/core/panel.service.ts");





var LeftPanelComponent = /** @class */ (function () {
    function LeftPanelComponent(controlService) {
        this.controlService = controlService;
        this.show = 'hidden';
        this.subs = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subscription"]();
        this.open = false;
        this.control = true;
    }
    LeftPanelComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subs.add(this.controlService.controlLeft.subscribe(function (command) {
            if (command) {
                _this.show = command;
            }
        }));
        if (this.open) {
            this.show = 'shown';
        }
        else {
            this.show = 'hidden';
        }
    };
    LeftPanelComponent.prototype.toggle = function () {
        if (this.show === 'hidden') {
            this.show = 'shown';
        }
        else {
            this.show = 'hidden';
        }
    };
    LeftPanelComponent.prototype.ngOnDestroy = function () {
        this.subs.unsubscribe();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], LeftPanelComponent.prototype, "title", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], LeftPanelComponent.prototype, "open", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], LeftPanelComponent.prototype, "control", void 0);
    LeftPanelComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'panels-left-panel',
            template: __webpack_require__(/*! ./left-panel.component.html */ "./src/app/shared/panels/left-panel/left-panel.component.html"),
            animations: [_shared_animations_animations__WEBPACK_IMPORTED_MODULE_3__["showLeft"]],
            styles: [__webpack_require__(/*! ./left-panel.component.css */ "./src/app/shared/panels/left-panel/left-panel.component.css"), __webpack_require__(/*! ../../../shared/css/panels.css */ "./src/app/shared/css/panels.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_panel_service__WEBPACK_IMPORTED_MODULE_4__["PanelService"]])
    ], LeftPanelComponent);
    return LeftPanelComponent;
}());



/***/ }),

/***/ "./src/app/shared/panels/panels.module.ts":
/*!************************************************!*\
  !*** ./src/app/shared/panels/panels.module.ts ***!
  \************************************************/
/*! exports provided: PanelsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PanelsModule", function() { return PanelsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _left_panel_left_panel_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./left-panel/left-panel.component */ "./src/app/shared/panels/left-panel/left-panel.component.ts");
/* harmony import */ var _right_panel_right_panel_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./right-panel/right-panel.component */ "./src/app/shared/panels/right-panel/right-panel.component.ts");
/* harmony import */ var _bottom_panel_bottom_panel_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./bottom-panel/bottom-panel.component */ "./src/app/shared/panels/bottom-panel/bottom-panel.component.ts");






var PanelsModule = /** @class */ (function () {
    function PanelsModule() {
    }
    PanelsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
            ],
            declarations: [_left_panel_left_panel_component__WEBPACK_IMPORTED_MODULE_3__["LeftPanelComponent"], _right_panel_right_panel_component__WEBPACK_IMPORTED_MODULE_4__["RightPanelComponent"], _bottom_panel_bottom_panel_component__WEBPACK_IMPORTED_MODULE_5__["BottomPanelComponent"]],
            exports: [_left_panel_left_panel_component__WEBPACK_IMPORTED_MODULE_3__["LeftPanelComponent"], _right_panel_right_panel_component__WEBPACK_IMPORTED_MODULE_4__["RightPanelComponent"], _bottom_panel_bottom_panel_component__WEBPACK_IMPORTED_MODULE_5__["BottomPanelComponent"]]
        })
    ], PanelsModule);
    return PanelsModule;
}());



/***/ }),

/***/ "./src/app/shared/panels/right-panel/right-panel.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/shared/panels/right-panel/right-panel.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9wYW5lbHMvcmlnaHQtcGFuZWwvcmlnaHQtcGFuZWwuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/shared/panels/right-panel/right-panel.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/shared/panels/right-panel/right-panel.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"right-panel\" [@showRight]=\"show\">\r\n\r\n    <div class=\"toggle\" *ngIf=\"control\">\r\n        <div class=\"toggle-click\" (click)=\"toggle()\">\r\n            <span class=\"arrow-icon\" [hidden]=\"show=='shown'\"><i class=\"fa fa-chevron-left\"></i></span>\r\n            <span class=\"arrow-icon\" [hidden]=\"show=='hidden'\"><i class=\"fa fa-chevron-right\"></i></span>\r\n        </div>\r\n    </div>\r\n    \r\n    <div class=\"panel-content\">\r\n        \r\n            <h1 *ngIf=\"title\" \r\n                    class=\"panel-title\">\r\n                {{ title }}\r\n            </h1>\r\n            \r\n            <div class=\"panel-scroll-container\">\r\n                <div class=\"inner-shadow\"></div>\r\n\r\n                <ng-content></ng-content>\r\n\r\n            </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/shared/panels/right-panel/right-panel.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/shared/panels/right-panel/right-panel.component.ts ***!
  \********************************************************************/
/*! exports provided: RightPanelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RightPanelComponent", function() { return RightPanelComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _shared_animations_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shared/animations/animations */ "./src/app/shared/animations/animations.ts");
/* harmony import */ var _core_panel_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core/panel.service */ "./src/app/core/panel.service.ts");





var RightPanelComponent = /** @class */ (function () {
    function RightPanelComponent(controlService) {
        this.controlService = controlService;
        this.show = 'shown';
        this.subs = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subscription"]();
        this.open = false;
        this.control = true;
    }
    RightPanelComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subs.add(this.controlService.controlBottom.subscribe(function (command) {
            if (command) {
                _this.show = command;
            }
        }));
        if (this.open) {
            this.show = 'shown';
        }
        else {
            this.show = 'hidden';
        }
    };
    RightPanelComponent.prototype.toggle = function () {
        if (this.show == 'hidden') {
            this.show = 'shown';
        }
        else {
            this.show = 'hidden';
        }
    };
    RightPanelComponent.prototype.ngOnDestroy = function () {
        this.subs.unsubscribe();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], RightPanelComponent.prototype, "title", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], RightPanelComponent.prototype, "open", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], RightPanelComponent.prototype, "control", void 0);
    RightPanelComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'panels-right-panel',
            template: __webpack_require__(/*! ./right-panel.component.html */ "./src/app/shared/panels/right-panel/right-panel.component.html"),
            animations: [_shared_animations_animations__WEBPACK_IMPORTED_MODULE_3__["showRight"]],
            styles: [__webpack_require__(/*! ./right-panel.component.css */ "./src/app/shared/panels/right-panel/right-panel.component.css"), __webpack_require__(/*! ../../../shared/css/panels.css */ "./src/app/shared/css/panels.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_panel_service__WEBPACK_IMPORTED_MODULE_4__["PanelService"]])
    ], RightPanelComponent);
    return RightPanelComponent;
}());



/***/ }),

/***/ "./src/app/shared/safe-html.pipe.ts":
/*!******************************************!*\
  !*** ./src/app/shared/safe-html.pipe.ts ***!
  \******************************************/
/*! exports provided: SafeHtmlPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SafeHtmlPipe", function() { return SafeHtmlPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");



var SafeHtmlPipe = /** @class */ (function () {
    function SafeHtmlPipe(sanitizer) {
        this.sanitizer = sanitizer;
    }
    SafeHtmlPipe.prototype.transform = function (htmlString) {
        return this.sanitizer.bypassSecurityTrustHtml(htmlString);
    };
    SafeHtmlPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'safeHtml'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]])
    ], SafeHtmlPipe);
    return SafeHtmlPipe;
}());



/***/ }),

/***/ "./src/app/shared/screen-dimmer/screen-dimmer.component.css":
/*!******************************************************************!*\
  !*** ./src/app/shared/screen-dimmer/screen-dimmer.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".screen-dimmer {\r\n    width: 100%;\r\n    height: 100%;\r\n    opacity: 0;\r\n    position: fixed;\r\n    top: 0;\r\n    z-index: -1;\r\n    background: #222222;\r\n    transition: opacity .5s ease-in-out;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL3NjcmVlbi1kaW1tZXIvc2NyZWVuLWRpbW1lci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixVQUFVO0lBQ1YsZUFBZTtJQUNmLE1BQU07SUFDTixXQUFXO0lBQ1gsbUJBQW1CO0lBQ25CLG1DQUFtQztBQUN2QyIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9zY3JlZW4tZGltbWVyL3NjcmVlbi1kaW1tZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zY3JlZW4tZGltbWVyIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHRvcDogMDtcclxuICAgIHotaW5kZXg6IC0xO1xyXG4gICAgYmFja2dyb3VuZDogIzIyMjIyMjtcclxuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgLjVzIGVhc2UtaW4tb3V0O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/shared/screen-dimmer/screen-dimmer.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/shared/screen-dimmer/screen-dimmer.component.ts ***!
  \*****************************************************************/
/*! exports provided: ScreenDimmerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScreenDimmerComponent", function() { return ScreenDimmerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var _core_screen_dimmer_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/screen-dimmer.service */ "./src/app/core/screen-dimmer.service.ts");




var ScreenDimmerComponent = /** @class */ (function () {
    function ScreenDimmerComponent(sdService) {
        this.sdService = sdService;
        this.subscriptions = [];
        this.dimmerOn = 'no';
    }
    ScreenDimmerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscriptions.push(this.sdService.dim.subscribe(function (dim) {
            if (dim === true) {
                _this.dimmerOn = 'yes';
            }
            else {
                _this.dimmerOn = 'no';
            }
        }));
    };
    ScreenDimmerComponent.prototype.ngOnDestroy = function () {
        this.endSubscriptions();
    };
    ScreenDimmerComponent.prototype.endSubscriptions = function () {
        for (var sub in this.subscriptions) {
            this.subscriptions[sub].unsubscribe();
        }
    };
    ScreenDimmerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'screen-dimmer',
            template: '<div class="screen-dimmer" [@dimmerOn]="dimmerOn"></div>',
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('dimmerOn', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('no', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 0, zIndex: -1 })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('yes', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: .6, zIndex: 999 })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('* => *', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('100ms ease-out'))
                ])
            ],
            styles: [__webpack_require__(/*! ./screen-dimmer.component.css */ "./src/app/shared/screen-dimmer/screen-dimmer.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_screen_dimmer_service__WEBPACK_IMPORTED_MODULE_3__["ScreenDimmerService"]])
    ], ScreenDimmerComponent);
    return ScreenDimmerComponent;
}());



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _maps_map_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./maps/map.component */ "./src/app/shared/maps/map.component.ts");
/* harmony import */ var _shakecast_admin_facilities_facility_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shakecast-admin/facilities/facility-list.component */ "./src/app/shakecast-admin/facilities/facility-list.component.ts");
/* harmony import */ var _shakecast_admin_facilities_facility_info_facility_info_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shakecast-admin/facilities/facility-info/facility-info.component */ "./src/app/shakecast-admin/facilities/facility-info/facility-info.component.ts");
/* harmony import */ var _shakecast_earthquakes_earthquake_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @shakecast/earthquakes/earthquake-list.component */ "./src/app/shakecast/earthquakes/earthquake-list.component.ts");
/* harmony import */ var _earthquake_blurb_earthquake_blurb_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./earthquake-blurb/earthquake-blurb.component */ "./src/app/shared/earthquake-blurb/earthquake-blurb.component.ts");
/* harmony import */ var _directives_stick_to_top_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./directives/stick-to-top.directive */ "./src/app/shared/directives/stick-to-top.directive.ts");
/* harmony import */ var _directives_scroll_toggle_directive__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./directives/scroll-toggle.directive */ "./src/app/shared/directives/scroll-toggle.directive.ts");
/* harmony import */ var _screen_dimmer_screen_dimmer_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./screen-dimmer/screen-dimmer.component */ "./src/app/shared/screen-dimmer/screen-dimmer.component.ts");
/* harmony import */ var _info_info_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./info/info.component */ "./src/app/shared/info/info.component.ts");
/* harmony import */ var _maps_facility_count_facility_count_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./maps/facility-count/facility-count.component */ "./src/app/shared/maps/facility-count/facility-count.component.ts");
/* harmony import */ var _maps_impact_impact_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./maps/impact/impact.component */ "./src/app/shared/maps/impact/impact.component.ts");
/* harmony import */ var _maps_layers_layer_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./maps/layers/layer.service */ "./src/app/shared/maps/layers/layer.service.ts");
/* harmony import */ var _panels_panels_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./panels/panels.module */ "./src/app/shared/panels/panels.module.ts");
/* harmony import */ var _safe_html_pipe__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./safe-html.pipe */ "./src/app/shared/safe-html.pipe.ts");




// Map service and component

// Facility List


// Earthquake List

// Earthquake Blurb

// scroll behavior


// screen dimmer

// in-app documentation






var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _panels_panels_module__WEBPACK_IMPORTED_MODULE_16__["PanelsModule"],
            ],
            declarations: [
                _maps_map_component__WEBPACK_IMPORTED_MODULE_4__["MapComponent"],
                _directives_stick_to_top_directive__WEBPACK_IMPORTED_MODULE_9__["StickToTopDirective"],
                _directives_scroll_toggle_directive__WEBPACK_IMPORTED_MODULE_10__["ScrollToggleDirective"],
                _earthquake_blurb_earthquake_blurb_component__WEBPACK_IMPORTED_MODULE_8__["EarthquakeBlurbComponent"],
                _screen_dimmer_screen_dimmer_component__WEBPACK_IMPORTED_MODULE_11__["ScreenDimmerComponent"],
                _shakecast_earthquakes_earthquake_list_component__WEBPACK_IMPORTED_MODULE_7__["EarthquakeListComponent"],
                _shakecast_admin_facilities_facility_list_component__WEBPACK_IMPORTED_MODULE_5__["FacilityListComponent"],
                _shakecast_admin_facilities_facility_info_facility_info_component__WEBPACK_IMPORTED_MODULE_6__["FacilityInfoComponent"],
                _info_info_component__WEBPACK_IMPORTED_MODULE_12__["InfoComponent"],
                _maps_facility_count_facility_count_component__WEBPACK_IMPORTED_MODULE_13__["FacilityCountComponent"],
                _maps_impact_impact_component__WEBPACK_IMPORTED_MODULE_14__["ImpactComponent"],
                _safe_html_pipe__WEBPACK_IMPORTED_MODULE_17__["SafeHtmlPipe"]
            ],
            providers: [
                _maps_layers_layer_service__WEBPACK_IMPORTED_MODULE_15__["LayerService"]
            ],
            exports: [
                _maps_map_component__WEBPACK_IMPORTED_MODULE_4__["MapComponent"],
                _earthquake_blurb_earthquake_blurb_component__WEBPACK_IMPORTED_MODULE_8__["EarthquakeBlurbComponent"],
                _shakecast_admin_facilities_facility_list_component__WEBPACK_IMPORTED_MODULE_5__["FacilityListComponent"],
                _shakecast_admin_facilities_facility_info_facility_info_component__WEBPACK_IMPORTED_MODULE_6__["FacilityInfoComponent"],
                _shakecast_earthquakes_earthquake_list_component__WEBPACK_IMPORTED_MODULE_7__["EarthquakeListComponent"],
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _directives_stick_to_top_directive__WEBPACK_IMPORTED_MODULE_9__["StickToTopDirective"],
                _directives_scroll_toggle_directive__WEBPACK_IMPORTED_MODULE_10__["ScrollToggleDirective"],
                _screen_dimmer_screen_dimmer_component__WEBPACK_IMPORTED_MODULE_11__["ScreenDimmerComponent"],
                _info_info_component__WEBPACK_IMPORTED_MODULE_12__["InfoComponent"],
                _panels_panels_module__WEBPACK_IMPORTED_MODULE_16__["PanelsModule"],
                _safe_html_pipe__WEBPACK_IMPORTED_MODULE_17__["SafeHtmlPipe"]
            ]
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "./src/app/title/title.component.css":
/*!*******************************************!*\
  !*** ./src/app/title/title.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".title {\r\n    display: inline-block;\r\n    font-size: 45px;\r\n    position: fixed;\r\n    top: 0;\r\n    left: 5%;\r\n    margin-top: 20px;\r\n    color: #46a;\r\n    z-index: 1;\r\n}\r\n\r\nimg {\r\n    height: 30px;\r\n    display: inline-block;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGl0bGUvdGl0bGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHFCQUFxQjtJQUNyQixlQUFlO0lBQ2YsZUFBZTtJQUNmLE1BQU07SUFDTixRQUFRO0lBQ1IsZ0JBQWdCO0lBQ2hCLFdBQVc7SUFDWCxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxZQUFZO0lBQ1oscUJBQXFCO0FBQ3pCIiwiZmlsZSI6InNyYy9hcHAvdGl0bGUvdGl0bGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi50aXRsZSB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBmb250LXNpemU6IDQ1cHg7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiA1JTtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICBjb2xvcjogIzQ2YTtcclxuICAgIHotaW5kZXg6IDE7XHJcbn1cclxuXHJcbmltZyB7XHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/title/title.component.html":
/*!********************************************!*\
  !*** ./src/app/title/title.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3 class=\"title\"><img src=\"assets/block_stack_trans.png\">{{ title }}</h3>\r\n"

/***/ }),

/***/ "./src/app/title/title.component.ts":
/*!******************************************!*\
  !*** ./src/app/title/title.component.ts ***!
  \******************************************/
/*! exports provided: TitleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TitleComponent", function() { return TitleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_title_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/title.service */ "./src/app/core/title.service.ts");



var TitleComponent = /** @class */ (function () {
    function TitleComponent(titleService, cdr) {
        this.titleService = titleService;
        this.cdr = cdr;
        this.subscriptions = [];
        this.title = '';
    }
    TitleComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscriptions.push(this.titleService.title.subscribe(function (title) {
            _this.title = title;
            _this.cdr.detectChanges();
        }));
    };
    TitleComponent.prototype.ngOnDestroy = function () {
        this.endSubscriptions();
    };
    TitleComponent.prototype.endSubscriptions = function () {
        for (var sub in this.subscriptions) {
            this.subscriptions[sub].unsubscribe();
        }
    };
    TitleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'page-title',
            template: __webpack_require__(/*! ./title.component.html */ "./src/app/title/title.component.html"),
            styles: [__webpack_require__(/*! ./title.component.css */ "./src/app/title/title.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_title_service__WEBPACK_IMPORTED_MODULE_2__["TitleService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])
    ], TitleComponent);
    return TitleComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\griz\Desktop\WORKING\SHAKE\shakecast\shakecast\web_src\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map