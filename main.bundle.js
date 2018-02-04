webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".wrapper{\n    background:var(--main-color);\n    min-height:-webkit-fill-available;\n    min-height:-moz-available;\n    min-height:stretch;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div class=\"wrapper\">\n<app-header></app-header>\n<router-outlet></router-outlet>\n</div>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_firestore__ = __webpack_require__("../../../../angularfire2/firestore/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent(db) {
        this.title = 'app';
        // db.collection('images').valueChanges().subscribe(items => {
        //   console.log(items);
        // })
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2_firestore__["a" /* AngularFirestore */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularfire2_firestore__["a" /* AngularFirestore */]) === "function" && _a || Object])
], AppComponent);

var _a;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__header_header_component__ = __webpack_require__("../../../../../src/app/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__thumbnails_thumbnails_component__ = __webpack_require__("../../../../../src/app/thumbnails/thumbnails.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__image_details_image_details_component__ = __webpack_require__("../../../../../src/app/image-details/image-details.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__router_module__ = __webpack_require__("../../../../../src/app/router.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__image_service__ = __webpack_require__("../../../../../src/app/image.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__image_filter__ = __webpack_require__("../../../../../src/app/image.filter.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_angularfire2__ = __webpack_require__("../../../../angularfire2/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_angularfire2_firestore__ = __webpack_require__("../../../../angularfire2/firestore/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__header_header_service__ = __webpack_require__("../../../../../src/app/header/header.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__category_service__ = __webpack_require__("../../../../../src/app/category.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_3__header_header_component__["a" /* HeaderComponent */],
            __WEBPACK_IMPORTED_MODULE_4__thumbnails_thumbnails_component__["a" /* ThumbnailsComponent */],
            __WEBPACK_IMPORTED_MODULE_5__image_details_image_details_component__["a" /* ImageDetailsComponent */],
            __WEBPACK_IMPORTED_MODULE_8__image_filter__["a" /* ImageFilter */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_6__router_module__["a" /* RouteModule */],
            __WEBPACK_IMPORTED_MODULE_9_angularfire2__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_10__environments_environment__["a" /* environment */].firebase),
            __WEBPACK_IMPORTED_MODULE_11_angularfire2_firestore__["b" /* AngularFirestoreModule */],
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_7__image_service__["a" /* ImageService */], __WEBPACK_IMPORTED_MODULE_8__image_filter__["a" /* ImageFilter */], __WEBPACK_IMPORTED_MODULE_12__header_header_service__["a" /* HeaderService */], __WEBPACK_IMPORTED_MODULE_13__category_service__["a" /* CategoryService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/category.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoryService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_firestore__ = __webpack_require__("../../../../angularfire2/firestore/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CategoryService = (function () {
    function CategoryService(db) {
        this.db = db;
        this.categories = this.db.collection('categories');
    }
    CategoryService.prototype.addNewCategory = function () {
        // this.categories.add(this.newCat);
    };
    CategoryService.prototype.getCategories = function () {
        return this.categories.valueChanges();
    };
    return CategoryService;
}());
CategoryService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2_firestore__["a" /* AngularFirestore */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularfire2_firestore__["a" /* AngularFirestore */]) === "function" && _a || Object])
], CategoryService);

var _a;
//# sourceMappingURL=category.service.js.map

/***/ }),

/***/ "../../../../../src/app/header/header.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "header{\n    display:-webkit-box;\n    display:-ms-flexbox;\n    display:flex;\n    background:var(--main-color);\n    -webkit-box-pack:justify;\n        -ms-flex-pack:justify;\n            justify-content:space-between;\n}\nheader ul{\n    list-style:none;\n    margin-bottom:0px !important;\n}\nul li{\n    float:left;\n    padding:20px;\n    color:var(--lightGray-color);\n    border-bottom:3px solid transparent;\n}\nheader ul li:hover , .active{\n    color: var(--highlight-color) !important;\n    border-bottom:3px solid var(--highlight-color) !important;\n}\nul[addCategoryButton] button{\n    float:right;\n    padding:20px;\n}\n\ndiv[categoryModal]{\n    position:fixed;\n    top:0;\n    left:0;\n    width:100%;\n    height:100%;\n    padding-top:100px;\n    background: rgba(0, 0, 0, 0.7);\n    display:none;\n    z-index:1;\n    transition:2s;\n}\n\ndiv[categoryModal] .modalBox{\n    background:white;\n}\ndiv[categoryModal] .modalBox  div[header]{\n    padding:10px;\n    display:-webkit-box;\n    display:-ms-flexbox;\n    display:flex;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n}\ndiv[categoryModal] .modalBox form{\n    padding:20px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<header>\n  <ul collapse>\n    <li class=\"all\" (click)=\"filterBy('all')\">All</li>\n    <li *ngFor=\"let a of categories\" [class.active]=\"activeFilter==a.name\" (click)=\"filterBy(a.name)\">\n      {{a.name | uppercase}}\n    </li>\n  </ul>\n  <ul addCategoryButton (click)='addNewCategory()'>\n    <li>\n      Add Category\n    </li>\n  </ul>\n</header>\n<div id=\"modal\" categoryModal>\n  <div class=\"modalBox\">\n    <div header>\n      <div>\n        Add a new category;\n      </div>\n      <button id=\"close\" (click)=\"closeModal()\">\n        x\n      </button>\n    </div>\n    <form *ngSubmit=\"\">\n      Name:<input type=\"text\" />\n      deesc: <input type=\"text\" />\n    </form>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__image_service__ = __webpack_require__("../../../../../src/app/image.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__header_service__ = __webpack_require__("../../../../../src/app/header/header.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__category_service__ = __webpack_require__("../../../../../src/app/category.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var HeaderComponent = (function () {
    function HeaderComponent(imageService, location, route, headerService, categoryService) {
        this.imageService = imageService;
        this.location = location;
        this.route = route;
        this.headerService = headerService;
        this.categoryService = categoryService;
    }
    HeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activeFilter = 'all';
        this.categoryService.getCategories().subscribe(function (res) {
            _this.categories = res;
        });
    };
    HeaderComponent.prototype.addCategory = function (cat) {
        // this.categoryService.addNewCategory(cat);
    };
    HeaderComponent.prototype.filterBy = function (category) {
        this.activeFilter = category;
        this.route.navigateByUrl('thumbnails');
        this.imageService.filterImages(category);
    };
    HeaderComponent.prototype.addNewCategory = function () {
        var modal = document.getElementById('modal');
        var closeBtn = document.getElementById('close');
        modal.style.display = 'block';
    };
    HeaderComponent.prototype.closeModal = function () {
        document.getElementById('modal').style.display = 'none';
    };
    return HeaderComponent;
}());
HeaderComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-header',
        template: __webpack_require__("../../../../../src/app/header/header.component.html"),
        styles: [__webpack_require__("../../../../../src/app/header/header.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__image_service__["a" /* ImageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__image_service__["a" /* ImageService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_common__["f" /* Location */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_common__["f" /* Location */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__header_service__["a" /* HeaderService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__header_service__["a" /* HeaderService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__category_service__["a" /* CategoryService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__category_service__["a" /* CategoryService */]) === "function" && _e || Object])
], HeaderComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=header.component.js.map

/***/ }),

/***/ "../../../../../src/app/header/header.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_firestore__ = __webpack_require__("../../../../angularfire2/firestore/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HeaderService = (function () {
    function HeaderService(db) {
        this.db = db;
        this.category = this.db.collection('categories');
    }
    HeaderService.prototype.getCategories = function () {
        return this.db.collection('categories').valueChanges();
        // .subscribe(res => {
        //     console.log(res[0]['categories']);
        // })
    };
    return HeaderService;
}());
HeaderService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2_firestore__["a" /* AngularFirestore */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularfire2_firestore__["a" /* AngularFirestore */]) === "function" && _a || Object])
], HeaderService);

var _a;
//# sourceMappingURL=header.service.js.map

/***/ }),

/***/ "../../../../../src/app/image-details/image-details.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".image-block{\n    display:-webkit-box;\n    display:-ms-flexbox;\n    display:flex;\n    padding:10px;\n    background:#222222;\n    -webkit-animation-name:fade;\n            animation-name:fade;\n    -webkit-animation-duration:0.9s;\n            animation-duration:0.9s;\n    -webkit-animation-timing-function: ease;\n            animation-timing-function: ease;\n    position: relative;\n}\ndiv[image]{\n    padding:30px;\n    width:70%;\n    border-right:1px solid #000000;\n    box-shadow: 1px 0 #2a2a2a;\n}\ndiv[image] img{\n    width:90%;\n    display:block;\n    margin:auto;\n    box-shadow: 0 5px 35px rgba(0,0,0,.65);\n}\n\ndiv[arrow]{\n    position: absolute;\n    top:50%;\n    -webkit-transform:translateY(-50%);\n            transform:translateY(-50%);\n    height:70px;\n    width:30px;\n    background:#3d3d3d;\n    display:table;\n    transition:0.2s;\n}\ndiv[arrow]:hover{\n    background:#454545;\n}\n\ndiv[arrow] span{\n    display: table-cell;\n    vertical-align: middle;\n    text-align:center;\n    color:gray;\n    font-size:30px;\n}\n\ndiv[left]{\n    left:0;\n}\n\ndiv[right]{\n    right:0;\n}\n\ndiv[details]{\n    Width:30%;\n    padding:10px 20px 10px 40px;\n    padding:50px;\n    color:#9a9a9a;\n    font-family: 'Maven Pro', sans-serif;\n    position: relative;\n}\n\ndiv[caption]{\n    margin-top:20px;\n}\ni[close]{\n    position: absolute;\n    top: 10px;\n    right: 10px;\n    transition:0.3s;\n    cursor:pointer;\n}\ni[close]:fade{\n    color:white;\n}\n@-webkit-keyframes dropDown{\n    from{\n        opacity:0;\n    }\n    to{\n        opacity:1;\n    }\n}\n@keyframes dropDown{\n    from{\n        opacity:0;\n    }\n    to{\n        opacity:1;\n    }\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/image-details/image-details.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"image-block\">\n  <div left arrow (click)=\"previousImage()\" *ngIf=\"image\">\n    <span><i class=\"material-icons\">keyboard_arrow_left</i></span>\n  </div>\n  <div left arrow (click)=\"gotoThumbnails()\" *ngIf=\"!image\">\n    <span><i class=\"material-icons\">keyboard_arrow_left</i></span>\n  </div>\n  <div image>\n    <img [src]=\"image.url\" />\n  </div>\n\n  <div details>\n    <i class=\"material-icons\" close (click)=\"goBack()\">close</i>\n    <h2>{{ image.title }}</h2>\n      Category: {{ image.category }}\n    <div caption>{{ image.caption }}</div>\n  </div>\n  <div right arrow (click)=\"nextImage()\" *ngIf=\"image\">\n    <span><i class=\"material-icons\">keyboard_arrow_right</i></span>\n  </div>\n  <div right arrow (click)=\"gotoThumbnails()\" *ngIf=\"!image\">\n    <span><i class=\"material-icons\">keyboard_arrow_right</i></span>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/image-details/image-details.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImageDetailsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__image_service__ = __webpack_require__("../../../../../src/app/image.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ImageDetailsComponent = (function () {
    function ImageDetailsComponent(imageService, route, router, location) {
        this.imageService = imageService;
        this.route = route;
        this.router = router;
        this.location = location;
    }
    ImageDetailsComponent.prototype.ngOnInit = function () {
        this.image = this.imageService.getImage(this.route.snapshot.params['id']);
    };
    ImageDetailsComponent.prototype.goBack = function () {
        this.location.back();
    };
    ImageDetailsComponent.prototype.previousImage = function () {
        this.imageId = +this.route.snapshot.params['id'] - 1;
        this.router.navigateByUrl('viewDetails/' + this.imageId);
        this.image = this.imageService.getImage(this.imageId);
    };
    ImageDetailsComponent.prototype.nextImage = function () {
        this.imageId = +this.route.snapshot.params['id'] + 1;
        this.router.navigateByUrl('viewDetails/' + this.imageId);
        this.image = this.imageService.getImage(this.imageId);
    };
    ImageDetailsComponent.prototype.gotoThumbnails = function () {
        this.router.navigateByUrl('thumbnails');
    };
    return ImageDetailsComponent;
}());
ImageDetailsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-image-details',
        template: __webpack_require__("../../../../../src/app/image-details/image-details.component.html"),
        styles: [__webpack_require__("../../../../../src/app/image-details/image-details.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__image_service__["a" /* ImageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__image_service__["a" /* ImageService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_common__["f" /* Location */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_common__["f" /* Location */]) === "function" && _d || Object])
], ImageDetailsComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=image-details.component.js.map

/***/ }),

/***/ "../../../../../src/app/image.filter.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImageFilter; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ImageFilter = (function () {
    function ImageFilter() {
    }
    ImageFilter.prototype.transform = function (imageList, category) {
        if (category == 'all') {
            return imageList;
        }
        else {
            return imageList.filter(function (image) { return image.category == category; });
        }
    };
    return ImageFilter;
}());
ImageFilter = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["X" /* Pipe */])({ name: 'imageFilter' })
], ImageFilter);

//# sourceMappingURL=image.filter.js.map

/***/ }),

/***/ "../../../../../src/app/image.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImageService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__images__ = __webpack_require__("../../../../../src/app/images.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore__ = __webpack_require__("../../../../angularfire2/firestore/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ImageService = (function () {
    function ImageService(db) {
        this.db = db;
        this.filterCategory = 'all';
    }
    ImageService.prototype.getImages = function () {
        return this.db.collection('images').valueChanges();
    };
    ImageService.prototype.getImage = function (id) {
        return __WEBPACK_IMPORTED_MODULE_1__images__["a" /* Images */].find(function (image) { return image.id == id; });
    };
    ImageService.prototype.filterImages = function (filterBy) {
        this.filterCategory = filterBy;
    };
    return ImageService;
}());
ImageService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore__["a" /* AngularFirestore */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore__["a" /* AngularFirestore */]) === "function" && _a || Object])
], ImageService);

var _a;
//# sourceMappingURL=image.service.js.map

/***/ }),

/***/ "../../../../../src/app/images.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Image */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Images; });
var Image = (function () {
    function Image() {
    }
    return Image;
}());

var Images = [
    {
        id: 1,
        title: ' House 1',
        category: 'house',
        caption: 'My First House',
        url: 'https://i.ytimg.com/vi/JvkrkSpVYg0/maxresdefault.jpg',
    },
    {
        id: 2,
        title: ' House 2',
        category: 'house',
        caption: 'Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum',
        url: 'http://www.idesignarch.com/wp-content/uploads/Laguna-Beach-Hilltop-House_1.jpg',
    },
    {
        id: 3,
        title: ' House ',
        category: 'house',
        caption: 'Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem IpsuLorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsu',
        url: 'https://justrichest.com/wp-content/uploads/house1-1021x485.jpg',
    },
    {
        id: 4,
        title: ' House ',
        category: 'house',
        caption: 'Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem IpsuLorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsu',
        url: 'http://gapsoncompanylimited.com/wp-content/uploads/2017/09/House.jpg',
    },
    {
        id: 5,
        title: ' House ',
        category: 'house',
        caption: 'Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem IpsuLorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsu',
        url: 'http://gapsoncompanylimited.com/wp-content/uploads/2017/09/House.jpg',
    },
    {
        id: 6,
        title: ' House ',
        category: 'house',
        caption: 'Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem IpsuLorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem IpsuLorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem IpsuLorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsu',
        url: 'http://3.bp.blogspot.com/-amI1-0z1Q24/TpbdDCRVPVI/AAAAAAAAI7Q/dFWp6C2ITV8/s1600/Dream-house-in-Florida.jpg',
    },
    {
        id: 7,
        title: ' House ',
        category: 'house',
        caption: 'http://www.californiahomedesign.com/sites/default/files/2012_02_17_chd_8932stives.jpg',
        url: 'http://www.californiahomedesign.com/sites/default/files/2012_02_17_chd_8932stives.jpg',
    },
    {
        id: 8,
        title: ' House ',
        category: 'house',
        caption: 'https://usercontent1.hubstatic.com/8820680_f520.jpg',
        url: 'https://usercontent1.hubstatic.com/8820680_f520.jpg',
    },
    {
        id: 9,
        title: ' House ',
        category: 'house',
        caption: 'Best 25+ Dream house images ideas on Pinterest | My dream house ...',
        url: 'https://i.pinimg.com/736x/2a/39/1e/2a391e025c0eb44fbb1a570c25b2c674--swimmingpools-for-the-home.jpg',
    },
    {
        id: 10,
        title: ' House ',
        category: 'house',
        caption: 'Unique Simple Dream House Front Design - 4 Home Ideas',
        url: 'http://7desainminimalis.com/wp-content/uploads/2014/06/Unique-Simple-Dream-House-Front-Design.jpg',
    },
    {
        id: 11,
        title: ' House ',
        category: 'house',
        caption: 'Dream House Designs - Home Decorating Ideas',
        url: 'http://2.bp.blogspot.com/-VKKifYzYByU/TXpvwHLYw8I/AAAAAAAAANc/gdDi2b_ESlI/s1600/Hello-Kitty-Themed-Dream-House-Design.jpg',
    },
    {
        id: 12,
        title: ' House ',
        category: 'house',
        caption: 'Dream House on the Beach Down Yonder – Adorable Home',
        url: 'https://adorable-home.com/wp-content/gallery/dream-house-on-the-beach-down-yonder/Dream-house-on-the-beach-down-yonder-5.jpg',
    },
    {
        id: 13,
        title: 'Renault Trezor concept',
        category: 'cars',
        caption: 'Renault Trezor concept car: PICTURES - Business Insider businessinsider.com1190 × 595Search by imageRenault\'s latest concept car, called Trezor, has two electric batteries and a whole lot of power.',
        url: 'http://static6.businessinsider.com/image/57ed62e4b0ef977f298b8d62-1190-625/renault-just-revealed-a-stunning-electric-supercar-concept--heres-everything-we-know-about-it.jpg',
    },
    {
        id: 14,
        title: 'The World\'s Most Beautiful Cars | TRED',
        category: 'cars',
        caption: 'The World\'s Most Beautiful Cars | TRED Tred1280 × 853Search by image lamborghini_aventador___xs__highway_by_alphaprimesaviour-d5miqbq Arch2o-Fubiz-McLaren-P1-9',
        url: 'https://d3bamps608hz2k.cloudfront.net/e46b8e5/wp-content/uploads/sites/2/2013/08/Arch2o-Fubiz-McLaren-P1-9.jpg',
    },
    {
        id: 15,
        title: 'New Beautiful Car',
        category: 'cars',
        caption: '5 New Beautiful Cars Wallpaper – Car Wallpa',
        url: 'http://carwallpaperhd.info/wp-content/uploads/2017/11/beautiful-cars-wallpaper-new-beautiful-car-wallpapers-for-car-lovers-new-wallpaper-design-of-beautiful-cars-wallpaper.jpg',
    },
    {
        id: 16,
        title: 'Deep Blue Sea',
        category: 'fish',
        caption: 'Deep Blue Sea is keeping too many treasure in it. That’s I always wish to be a scuba diver so I could explore mother nature beneath the corals and see colorful fish’s, creatures and plants by myself. Which looks not going to be true in this life. That’s why I have decided to collect and show the world amazing life beneath the deep blue to inspire you to get some fishes for your aquariums or atleast change your desktop wallpapers.',
        url: 'https://i0.wp.com/lava360.com/wp-content/uploads/2011/10/colorful_fishes109.jpg?resize=1024%2C640',
    },
    {
        id: 17,
        title: 'Mandarinfish',
        category: 'fish',
        caption: 'The mesmerizing feeling of warm sun rays leaning down into  tropical waters, and breaking back through the water’s vivid facade as it rebounds off the glistening scales of a rare fish provides an experience that stays in one’s memory for a lifetime. I thought I’d share some of the most beautiful species that I know in the waters. There are in the order i consider them the most vibrant and beautiful, since, beauty is, ofcourse, in the eye of the beholder.',
        url: 'http://www.petsfoto.com/wp-content/uploads/2010/04/Juvenile-Emporer-Angel-Fish1.jpg',
    },
    {
        id: 18,
        title: 'Moorish Idol',
        category: 'fish',
        caption: 'The moorish idol, Zanclus cornutus, is a small marine fish species, the sole representative of the the Family  Zanclidae  in order Perciform. A common inhabitant of tropical to subtropical reefs and lagoons, the moorish idol is notable for its wide distribution throughout the Indo-Pacific. A number of butterflyfishes  closely resemble the moorish idol.',
        url: 'http://www.petsfoto.com/wp-content/uploads/2010/04/Moorish-Idol1.jpg',
    },
    {
        id: 19,
        title: 'Rainbow Parrot Fish',
        category: 'fish',
        caption: 'Named Parrot fish because of their calcareous bird-like beaks. Parrot fish use these beaks to crush and eat the small invertebrates that live in coral. Much of the sand and sea floor of coral reefs are actually remains of meals from the parrot fish, they chew the coral, eat the invertebrates and spit out the leftover calcium. In most species, the initial phase is dull red, brown or grey, while the terminal phase is vividly green or blue with bright pink or yellow patches. The remarkably different terminal and initial phases were first described as separate species in several cases, but there are also some species where the phases are similar.',
        url: 'http://www.petsfoto.com/wp-content/uploads/2010/04/Rainbow-Parrot-Fish2.jpg',
    },
];
//# sourceMappingURL=images.js.map

/***/ }),

/***/ "../../../../../src/app/router.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export appRouter */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RouteModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__thumbnails_thumbnails_component__ = __webpack_require__("../../../../../src/app/thumbnails/thumbnails.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__image_details_image_details_component__ = __webpack_require__("../../../../../src/app/image-details/image-details.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var appRouter = [
    { path: '', redirectTo: 'thumbnails', pathMatch: 'full' },
    { path: 'thumbnails', component: __WEBPACK_IMPORTED_MODULE_3__thumbnails_thumbnails_component__["a" /* ThumbnailsComponent */] },
    { path: 'viewDetails/:id', component: __WEBPACK_IMPORTED_MODULE_4__image_details_image_details_component__["a" /* ImageDetailsComponent */] },
];
var RouteModule = (function () {
    function RouteModule() {
    }
    return RouteModule;
}());
RouteModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */].forRoot(appRouter)
        ],
        declarations: [],
        exports: [__WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */]]
    })
], RouteModule);

//# sourceMappingURL=router.module.js.map

/***/ }),

/***/ "../../../../../src/app/thumbnails/thumbnails.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@-webkit-keyframes fade{\n    from{\n        opacity:0;\n    }\n    to{\n        opacity:1;\n    }\n}\n\n@keyframes fade{\n    from{\n        opacity:0;\n    }\n    to{\n        opacity:1;\n    }\n}\n\n.thumbnails {\n  display: -ms-grid;\n  display: grid;\n  -ms-grid-columns: 1fr;\n      grid-template-columns: 1fr;\n  grid-gap: 2px;\n  transition:0.6s;\n}\n\nfigure {\n  position: relative;\n  overflow: hidden;\n  margin: 0 0 0 0;\n}\n\nfigure img {\n  width: 100%;\n  min-height: 100%;\n  transition: 0.3s;\n}\n\nfigure:hover img {\n  -webkit-transform: scale(1.3);\n          transform: scale(1.3);\n}\n\nfigcaption {\n  display: none;\n}\n\nfigure:hover figcaption {\n  -webkit-animation-name:fade;\n          animation-name:fade;\n  -webkit-animation-duration:0.3s;\n          animation-duration:0.3s;\n  display: block;\n  position: absolute;\n  top: 0;\n  width: 100%;\n  height: 100%;\n}\n\nfigcaption div {\n  display: table;\n  width: 100%;\n  height: 100%;\n  transition: 0.9s;\n  color: var(--image-hover-textColor);\n  background: var(--image-hover-color);\n}\n\nfigcaption div span {\n  display: table-cell;\n  vertical-align: middle;\n  text-align: center;\n}\n\nfigcaption div span i {\n  font-size: 40px;\n}\n\n@media screen and (min-width:768px){\n    .thumbnails {\n        display: -ms-grid;\n        display: grid;\n        -ms-grid-columns: 1fr 1fr 1fr;\n            grid-template-columns: 1fr 1fr 1fr;\n        -ms-grid-rows: 1fr;\n            grid-template-rows: 1fr;\n        grid-gap: 2px;\n      }\n}\n\n@media screen and (min-width:992px){\n    .thumbnails {\n        display: -ms-grid;\n        display: grid;\n        -ms-grid-columns: 1fr 1fr 1fr 1fr 1fr;\n            grid-template-columns: 1fr 1fr 1fr 1fr 1fr;\n        -ms-grid-rows: 1fr;\n            grid-template-rows: 1fr;\n        grid-gap: 2px;\n      }\n}\n\n@media screen and (min-width:1200){\n    .thumbnails {\n        display: -ms-grid;\n        display: grid;\n        -ms-grid-columns: 1fr 1fr 1fr 1fr 1fr 1fr;\n            grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;\n        grid-gap: 2px;\n      }\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/thumbnails/thumbnails.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"thumbnails\">\n    <figure *ngFor=\"let image of (imageList | imageFilter:imageService.filterCategory) ; let i = index\" [routerLink]=\"['/viewDetails',image.id]\">\n      <img [src]=\"image.url\">\n      <figcaption>\n        <div>\n          <span>\n            <i class=\"material-icons\">photo</i><br>\n            <b>{{ image.title }}</b><br>\n            {{ image.category }}\n          </span>\n        </div>\n      </figcaption>\n    </figure>\n</div>"

/***/ }),

/***/ "../../../../../src/app/thumbnails/thumbnails.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ThumbnailsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__image_service__ = __webpack_require__("../../../../../src/app/image.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ThumbnailsComponent = (function () {
    function ThumbnailsComponent(imageService) {
        this.imageService = imageService;
    }
    ThumbnailsComponent.prototype.ngOnInit = function () {
        this.filterBy = 'all';
        this.getImages();
    };
    ThumbnailsComponent.prototype.getImages = function () {
        var _this = this;
        // this.imageList = this.imageService.getImages();
        this.imageService.getImages().subscribe(function (response) {
            _this.imageList = response[0]['images'];
        });
    };
    return ThumbnailsComponent;
}());
ThumbnailsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-thumbnails',
        template: __webpack_require__("../../../../../src/app/thumbnails/thumbnails.component.html"),
        styles: [__webpack_require__("../../../../../src/app/thumbnails/thumbnails.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__image_service__["a" /* ImageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__image_service__["a" /* ImageService */]) === "function" && _a || Object])
], ThumbnailsComponent);

var _a;
//# sourceMappingURL=thumbnails.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false,
    firebase: {
        apiKey: "AIzaSyBYtoPaV5i3WElzdzjSOUTVElRGqM8_yt4",
        authDomain: "image-gallary-v1.firebaseapp.com",
        databaseURL: "https://image-gallary-v1.firebaseio.com",
        projectId: "image-gallary-v1",
        storageBucket: "image-gallary-v1.appspot.com",
        messagingSenderId: "966203073033"
    }
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__polyfills__ = __webpack_require__("../../../../../src/polyfills.ts");





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ "../../../../../src/polyfills.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_reflect__ = __webpack_require__("../../../../core-js/es6/reflect.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_core_js_es6_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es7_reflect__ = __webpack_require__("../../../../core-js/es7/reflect.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es7_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_core_js_es7_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_zone_js_dist_zone__ = __webpack_require__("../../../../zone.js/dist/zone.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_zone_js_dist_zone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_zone_js_dist_zone__);
/**
 * This file includes polyfills needed by Angular and is loaded before the app.
 * You can add your own extra polyfills to this file.
 *
 * This file is divided into 2 sections:
 *   1. Browser polyfills. These are applied before loading ZoneJS and are sorted by browsers.
 *   2. Application imports. Files imported after ZoneJS that should be loaded before your main
 *      file.
 *
 * The current setup is for so-called "evergreen" browsers; the last versions of browsers that
 * automatically update themselves. This includes Safari >= 10, Chrome >= 55 (including Opera),
 * Edge >= 13 on the desktop, and iOS 10 and Chrome on mobile.
 *
 * Learn more in https://angular.io/docs/ts/latest/guide/browser-support.html
 */
/***************************************************************************************************
 * BROWSER POLYFILLS
 */
/** IE9, IE10 and IE11 requires all of the following polyfills. **/
// import 'core-js/es6/symbol';
// import 'core-js/es6/object';
// import 'core-js/es6/function';
// import 'core-js/es6/parse-int';
// import 'core-js/es6/parse-float';
// import 'core-js/es6/number';
// import 'core-js/es6/math';
// import 'core-js/es6/string';
// import 'core-js/es6/date';
// import 'core-js/es6/array';
// import 'core-js/es6/regexp';
// import 'core-js/es6/map';
// import 'core-js/es6/weak-map';
// import 'core-js/es6/set';
/** IE10 and IE11 requires the following for NgClass support on SVG elements */
// import 'classlist.js';  // Run `npm install --save classlist.js`.
/** Evergreen browsers require these. **/


/**
 * Required to support Web Animations `@angular/platform-browser/animations`.
 * Needed for: All but Chrome, Firefox and Opera. http://caniuse.com/#feat=web-animation
 **/
// import 'web-animations-js';  // Run `npm install --save web-animations-js`.
/***************************************************************************************************
 * Zone JS is required by Angular itself.
 */
 // Included with Angular CLI.
/***************************************************************************************************
 * APPLICATION IMPORTS
 */
/**
 * Date, currency, decimal and percent pipes.
 * Needed for: All but Chrome, Firefox, Edge, IE11 and Safari 10
 */
// import 'intl';  // Run `npm install --save intl`.
/**
 * Need to import at least one locale-data with intl.
 */
// import 'intl/locale-data/jsonp/en';
//# sourceMappingURL=polyfills.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map