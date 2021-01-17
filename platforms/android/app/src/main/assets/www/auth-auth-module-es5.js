(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["auth-auth-module"], {
    /***/
    "6epW":
    /*!*********************************************!*\
      !*** ./src/app/auth/auth-routing.module.ts ***!
      \*********************************************/

    /*! exports provided: AuthPageRoutingModule */

    /***/
    function epW(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthPageRoutingModule", function () {
        return AuthPageRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _auth_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./auth.page */
      "kV0F");

      var routes = [{
        path: '',
        component: _auth_page__WEBPACK_IMPORTED_MODULE_3__["AuthPage"]
      }];

      var AuthPageRoutingModule = function AuthPageRoutingModule() {
        _classCallCheck(this, AuthPageRoutingModule);
      };

      AuthPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], AuthPageRoutingModule);
      /***/
    },

    /***/
    "Buvn":
    /*!***************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/auth/auth.page.html ***!
      \***************************************************************************/

    /*! exports provided: default */

    /***/
    function Buvn(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Deskmate'e Hoşgeldiniz</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <form  #form=\"ngForm\" (ngSubmit)=\"register(form)\">\n    <ion-grid>\n      <ion-row justify-content-center>\n        <ion-col align-self-center size-md=\"6\" size-lg=\"5\" size-xs=\"12\">\n         <center><img src=\"../../assets/logo.png\"> </center>\n         <div text-center>\n          <h3 > {{context_title}}</h3>\n        </div>\n         <div class=\"source\" *ngIf=\"context == 'login'\" > \n          <div padding>\n            <ion-item>\n              <ion-input  [(ngModel)]=\"loginForm.mail\"  name=\"name\" type=\"text\" placeholder=\"E-Posta\" ngModel required></ion-input>\n            </ion-item>\n            <ion-item>\n              <ion-input [(ngModel)]=\"loginForm.pass\" name=\"password\" type=\"password\" placeholder=\"Parola\" ngModel required></ion-input>\n            </ion-item>\n\n          </div>\n          <br>\n          <div padding>\n            <center> \n            <ion-button  size=\"medium\" type=\"submit\" (click)=\"login()\" [disabled]=\"form.invalid\" >Giriş Yap</ion-button>\n            <ion-button  size=\"medium\" type=\"submit\" (click)=\"switchContext()\">Hesap Oluştur</ion-button>\n            </center>\n          </div>\n        </div>\n\n        <div class=\"source\" *ngIf=\"context == 'signup'\" > \n          <div padding>\n            <ion-item>\n              <ion-input  [(ngModel)]=\"signupForm.name\" name=\"name\" type=\"text\" placeholder=\"İsim Soyisim\" ngModel required></ion-input>\n            </ion-item>\n            <ion-item>\n              <ion-input [(ngModel)]=\"signupForm.mail\" name=\"email\" type=\"email\" placeholder=\"E-posta\" ngModel required></ion-input>\n            </ion-item>\n            <ion-item>\n              <ion-input [(ngModel)]=\"signupForm.pass\" name=\"password\" type=\"password\" placeholder=\"Parola\" ngModel required></ion-input>\n            </ion-item>\n            <ion-item>\n              <ion-input [(ngModel)]=\"signupForm.newpass\" name=\"confirm\" type=\"password\" placeholder=\"Tekrar parola\" ngModel required></ion-input>\n            </ion-item>\n          </div>\n          <div padding>\n            <br>\n            <center> \n            <ion-button  size=\"medium\" type=\"submit\" (click)=\"signup()\" [disabled]=\"form.invalid\">Hesap Oluştur</ion-button>\n            <ion-button  size=\"medium\" type=\"submit\" (click)=\"switchContext()\">Girişe Dön</ion-button>\n            </center>\n          </div>\n        </div>\n\n\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </form>\n</ion-content>\n";
      /***/
    },

    /***/
    "Yj9t":
    /*!*************************************!*\
      !*** ./src/app/auth/auth.module.ts ***!
      \*************************************/

    /*! exports provided: AuthPageModule */

    /***/
    function Yj9t(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthPageModule", function () {
        return AuthPageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _auth_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./auth-routing.module */
      "6epW");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _auth_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./auth.page */
      "kV0F");

      var AuthPageModule = function AuthPageModule() {
        _classCallCheck(this, AuthPageModule);
      };

      AuthPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"], _auth_routing_module__WEBPACK_IMPORTED_MODULE_5__["AuthPageRoutingModule"]],
        declarations: [_auth_page__WEBPACK_IMPORTED_MODULE_7__["AuthPage"]]
      })], AuthPageModule);
      /***/
    },

    /***/
    "jMPm":
    /*!*************************************!*\
      !*** ./src/app/auth/auth.page.scss ***!
      \*************************************/

    /*! exports provided: default */

    /***/
    function jMPm(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-item {\n  --background: #8438ff;\n  --color: #fff;\n}\n\nion-button {\n  --background: #530fc0;\n}\n\nion-content {\n  --ion-background-color:#fff;\n}\n\nion-col {\n  --ion-background-color:#8438ff;\n}\n\n.source {\n  --ion-background-color:#8438ff;\n  background-color: #8438ff;\n  height: 100%;\n  width: 100%;\n}\n\nh3 {\n  color: #8438ff;\n}\n\nion-title {\n  --color: #530fc0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2F1dGgucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kscUJBQUE7RUFDQSxhQUFBO0FBQ0o7O0FBRUE7RUFDSSxxQkFBQTtBQUNKOztBQUVBO0VBRUksMkJBQUE7QUFBSjs7QUFHQTtFQUVJLDhCQUFBO0FBREo7O0FBSUE7RUFDSSw4QkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUFESjs7QUFLQTtFQUNJLGNBQUE7QUFGSjs7QUFLQTtFQUNJLGdCQUFBO0FBRkoiLCJmaWxlIjoiYXV0aC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taXRlbXtcbiAgICAtLWJhY2tncm91bmQ6ICM4NDM4ZmY7XG4gICAgLS1jb2xvcjogI2ZmZjtcbn1cblxuaW9uLWJ1dHRvbntcbiAgICAtLWJhY2tncm91bmQ6ICM1MzBmYzA7XG59XG5cbmlvbi1jb250ZW50e1xuXG4gICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjojZmZmO1xufVxuXG5pb24tY29se1xuXG4gICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjojODQzOGZmO1xufVxuXG4uc291cmNle1xuICAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6Izg0MzhmZjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjODQzOGZmIDtcbiAgICBoZWlnaHQ6MTAwJTtcbiAgICB3aWR0aDoxMDAlO1xufVxuXG5cbmgze1xuICAgIGNvbG9yOiAjODQzOGZmO1xufVxuXG5pb24tdGl0bGV7XG4gICAgLS1jb2xvcjogIzUzMGZjMDtcbn0iXX0= */";
      /***/
    },

    /***/
    "kV0F":
    /*!***********************************!*\
      !*** ./src/app/auth/auth.page.ts ***!
      \***********************************/

    /*! exports provided: AuthPage */

    /***/
    function kV0F(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthPage", function () {
        return AuthPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_auth_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./auth.page.html */
      "Buvn");
      /* harmony import */


      var _auth_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./auth.page.scss */
      "jMPm");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _ionic_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/storage */
      "e8h1");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");

      var AuthPage = /*#__PURE__*/function () {
        function AuthPage(toastController, route, router, storage, http) {
          _classCallCheck(this, AuthPage);

          this.toastController = toastController;
          this.route = route;
          this.router = router;
          this.storage = storage;
          this.http = http;
          this.context = "login";
          this.context_title = "Giriş Yapın";
          this.signupForm = []; //  name, mail, pass, newpass

          this.loginForm = []; //  mail, pass

          this.checkLogin();
        }

        _createClass(AuthPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "switchContext",
          value: function switchContext() {
            if (this.context == "login") {
              this.context = "signup";
              this.context_title = "Hesap Oluşturun";
            } else {
              this.context = "login";
              this.context_title = "Giriş Yapın";
            }
          }
        }, {
          key: "login",
          value: function login() {
            var _this = this;

            var query = {
              key: 'login',
              email: this.loginForm['mail'],
              pass: this.loginForm['pass']
            };
            this.http.post('http://deskmate.aksoylu.space/handle.php', {
              data: query
            }).subscribe(function (data) {
              var response = data.response;

              if (response == "EMPTY_DATA") {
                _this.presentToast("Lütfen gerekli bilgileri eksiksiz doldurun");
              } else if (response == "INVALID_AUTH") {
                _this.presentToast("Kullanıcı adınız veya parolanız hatalı");
              } else {
                if (response.length > 30) {
                  _this.setLogin(response);
                } else {
                  _this.presentToast("Bir problem var. Lütfen daha sonra tekrar deneyin");
                }
              }
            });
          }
        }, {
          key: "signup",
          value: function signup() {
            var _this2 = this;

            var query = {
              key: 'signup',
              name: this.signupForm['name'],
              email: this.signupForm['mail'],
              pass: this.signupForm['pass'],
              rpass: this.signupForm['newpass']
            };
            this.http.post('http://deskmate.aksoylu.space/handle.php', {
              data: query
            }).subscribe(function (data) {
              var response = data.response;

              if (response == "EMPTY_DATA") {
                _this2.presentToast("Lütfen gerekli bilgileri eksiksiz doldurun");
              } else if (response == "INVALID_MAIL") {
                _this2.presentToast("E-Posta adresi geçersiz. Lütfen doğru girdiğinizden emin olun");
              } else if (response == "USED_MAIL") {
                _this2.presentToast("Bu E-Posta adresi kullanımdadır. Lütfen başka E-Posta ile deneyin");
              } else if (response == "PASS_INVALID") {
                _this2.presentToast("Parolalar uyuşmuyor. Lütfen kontrol edin");
              } else if (response == "ERROR") {
                _this2.presentToast("Sunucu hatası. Daha sonra tekrar deneyin");
              } else if (response == "OK") {
                _this2.presentToast("Hesabınız başarıyla oluşturuldu");

                _this2.switchContext();
              }
            });
          }
          /* Todo: Implement Reset Password later.  */

        }, {
          key: "renderRefreshPass",
          value: function renderRefreshPass() {}
        }, {
          key: "setLogin",
          value: function setLogin(val) {
            this.storage.set("userhash", val);
            this.router.navigate(['survey']);
          }
        }, {
          key: "checkLogin",
          value: function checkLogin() {
            var _this3 = this;

            this.storage.get("userhash").then(function (val) {
              if (val.length > 30) {
                _this3.router.navigate(['tabs']);
              }
            });
            return false;
          }
        }, {
          key: "presentToast",
          value: function presentToast(text) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var toast;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.toastController.create({
                        message: text,
                        duration: 2000
                      });

                    case 2:
                      toast = _context.sent;
                      toast.present();

                    case 4:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }]);

        return AuthPage;
      }();

      AuthPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ToastController"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"]
        }];
      };

      AuthPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-auth',
        template: _raw_loader_auth_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_auth_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], AuthPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=auth-auth-module-es5.js.map