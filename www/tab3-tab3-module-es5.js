(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab3-tab3-module"], {
    /***/
    "IqiF":
    /*!***********************************!*\
      !*** ./src/app/tab3/tab3.page.ts ***!
      \***********************************/

    /*! exports provided: Tab3Page */

    /***/
    function IqiF(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Tab3Page", function () {
        return Tab3Page;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_tab3_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./tab3.page.html */
      "h1hx");
      /* harmony import */


      var _tab3_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./tab3.page.scss */
      "nRCe");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _ionic_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic/storage */
      "e8h1");
      /* harmony import */


      var _provider_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../provider.service */
      "74+B");

      var Tab3Page = /*#__PURE__*/function () {
        function Tab3Page(router, alertCtrl, storage, provider) {
          var _this = this;

          _classCallCheck(this, Tab3Page);

          this.router = router;
          this.alertCtrl = alertCtrl;
          this.storage = storage;
          this.provider = provider;
          this.username = "";
          this.userrank = "";
          this.userjob = "Açık Kaynak Kullanım";
          this.isPremium = "";
          this.calendar = {
            mode: 'month',
            currentDate: new Date()
          }; //this.username = "Ümit Aksoylu";

          this.userjob = "Açık Kaynak Kullanım";
          this.isPremium = "";

          this.provider.refresh_calendar = function () {
            _this.updatePersonal();
          };

          this.updatePersonal();
        }

        _createClass(Tab3Page, [{
          key: "updatePersonal",
          value: function updatePersonal() {
            var _this2 = this;

            this.storage.get("name").then(function (name) {
              _this2.username = name;
            });
            this.storage.get("eager").then(function (eager) {
              _this2.userrank = eager;
            });
          }
        }, {
          key: "analyze",
          value: function analyze() {//TODO : ANALYZE
          }
        }, {
          key: "podcast",
          value: function podcast() {
            this.showAlert("Beta Sürüm", "", "Uygulama henüz beta sürümdedir. Podcast'ler ve blog içerikleri için lütfen uygulamanızı güncelleyin.");
          }
        }, {
          key: "advise",
          value: function advise() {
            this.showAlert("Beta Sürüm", "", "Uygulama henüz beta sürümdedir. Profesyonel yaşam koçları ve danışmanlardan destek hizmeti almak için lütfen uygulamanızı güncelleyin");
          }
        }, {
          key: "logout",
          value: function logout() {
            this.showDialog("Hesaptan Çıkış Yap", "Google hesabından çıkış yap", "Çıkış yapmak istediğinize emin misiniz ? Uygulama verileriniz buluta kaydedilecektir.");
          }
        }, {
          key: "showAlert",
          value: function showAlert(_header, _subheader_, _message) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var alert, result;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.alertCtrl.create({
                        header: _header,
                        subHeader: _subheader_,
                        message: _message,
                        buttons: ['Tamam']
                      });

                    case 2:
                      alert = _context.sent;
                      _context.next = 5;
                      return alert.present();

                    case 5:
                      _context.next = 7;
                      return alert.onDidDismiss();

                    case 7:
                      result = _context.sent;
                      console.log(result);

                    case 9:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "showDialog",
          value: function showDialog(_header, _subheader_, _message) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var _this3 = this;

              var alert, result;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.alertCtrl.create({
                        header: _header,
                        subHeader: _subheader_,
                        message: _message,
                        buttons: [{
                          text: 'Vazgeç'
                        }, {
                          text: 'Çıkış Yap',
                          handler: function handler() {
                            _this3.storage.set('userhash', '');

                            _this3.router.navigate(['auth']);
                          }
                        }]
                      });

                    case 2:
                      alert = _context2.sent;
                      _context2.next = 5;
                      return alert.present();

                    case 5:
                      _context2.next = 7;
                      return alert.onDidDismiss();

                    case 7:
                      result = _context2.sent;

                    case 8:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "verimAnalizi",
          value: function verimAnalizi() {
            this.router.navigate(['stats']);
          }
        }, {
          key: "anket",
          value: function anket() {
            this.router.navigate(['survey']);
          }
        }]);

        return Tab3Page;
      }();

      Tab3Page.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]
        }, {
          type: _ionic_storage__WEBPACK_IMPORTED_MODULE_6__["Storage"]
        }, {
          type: _provider_service__WEBPACK_IMPORTED_MODULE_7__["ProviderService"]
        }];
      };

      Tab3Page = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-tab3',
        template: _raw_loader_tab3_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_tab3_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], Tab3Page);
      /***/
    },

    /***/
    "OcaV":
    /*!*********************************************!*\
      !*** ./src/app/tab3/tab3-routing.module.ts ***!
      \*********************************************/

    /*! exports provided: Tab3PageRoutingModule */

    /***/
    function OcaV(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Tab3PageRoutingModule", function () {
        return Tab3PageRoutingModule;
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


      var _tab3_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./tab3.page */
      "IqiF");

      var routes = [{
        path: '',
        component: _tab3_page__WEBPACK_IMPORTED_MODULE_3__["Tab3Page"]
      }];

      var Tab3PageRoutingModule = function Tab3PageRoutingModule() {
        _classCallCheck(this, Tab3PageRoutingModule);
      };

      Tab3PageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], Tab3PageRoutingModule);
      /***/
    },

    /***/
    "h1hx":
    /*!***************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab3/tab3.page.html ***!
      \***************************************************************************/

    /*! exports provided: default */

    /***/
    function h1hx(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header translucent no-border>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button color=\"light\">\n        <ion-icon slot=\"start\" name=\"ios-arrow-back\"></ion-icon>\n        {{isPremium}}\n      </ion-button>\n    </ion-buttons>\n    <ion-title>&nbsp;</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button>\n        <ion-icon slot=\"icon-only\" src=\"../../assets/checkmark-filled.svg\"></ion-icon>\n       </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content fullscreen=\"true\" slot=\"fixed\" force-overscroll=\"true\" >\n    <div class=\"card\">\n      <div class=\"header\">\n        <div class=\"avatar\">\n          <img src=\"../../assets/profile.png\" width=\"160px\" height=\"160px\" alt=\"\">\n        </div>\n      </div>\n      <div class=\"card-body\">\n        <div class=\"user-meta ion-text-center\">\n          <h3 class=\"playername\">{{username}}</h3>\n          <h5 class=\"country\">{{userjob}}</h5>\n          <h6 class=\"ranking\">Yatkınlık:<ion-chip>\n              <ion-label>{{userrank}}</ion-label>\n            </ion-chip>\n          </h6>\n        </div>\n\n        <ion-button expand=\"full\" (click)=\"anket()\" style=\"--background\t: #edd23e; --background-activated\t:#ffe65c; font-weight: bold; \"><ion-icon name=\"star\"></ion-icon> &nbsp;Kişilik Testini Tekrar Çözün</ion-button>\n        <ion-button expand=\"full\" (click)=\"verimAnalizi()\" class=\"standartbutton\"><ion-icon name=\"stats-chart-outline\"></ion-icon>&nbsp; Verim Analizi</ion-button>\n        <ion-button expand=\"full\" class=\"standartbutton\" (click)=\"podcast()\"><ion-icon name=\"trophy-outline\"></ion-icon>&nbsp; Verimlilik İçin Size Özel İçerikler</ion-button>\n        <ion-button expand=\"full\" class=\"standartbutton\" (click)=\"advise()\"><ion-icon name=\"chatbox-ellipses-outline\"></ion-icon>&nbsp; Profesyonel Danışmanlara Sorun</ion-button>\n        <ion-button expand=\"full\" class=\"standartbutton\" (click)=\"logout()\"><ion-icon name=\"exit-outline\"></ion-icon>&nbsp; Hesaptan Çıkış Yap</ion-button>\n\n      </div>\n    </div>\n</ion-content>";
      /***/
    },

    /***/
    "k+ul":
    /*!*************************************!*\
      !*** ./src/app/tab3/tab3.module.ts ***!
      \*************************************/

    /*! exports provided: Tab3PageModule */

    /***/
    function kUl(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Tab3PageModule", function () {
        return Tab3PageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _tab3_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./tab3.page */
      "IqiF");
      /* harmony import */


      var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../explore-container/explore-container.module */
      "qtYk");
      /* harmony import */


      var _tab3_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./tab3-routing.module */
      "OcaV");
      /* harmony import */


      var ionic2_calendar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ionic2-calendar */
      "L+Ny");

      var Tab3PageModule = function Tab3PageModule() {
        _classCallCheck(this, Tab3PageModule);
      };

      Tab3PageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"], ionic2_calendar__WEBPACK_IMPORTED_MODULE_9__["NgCalendarModule"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_7__["ExploreContainerComponentModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{
          path: '',
          component: _tab3_page__WEBPACK_IMPORTED_MODULE_6__["Tab3Page"]
        }]), _tab3_routing_module__WEBPACK_IMPORTED_MODULE_8__["Tab3PageRoutingModule"]],
        declarations: [_tab3_page__WEBPACK_IMPORTED_MODULE_6__["Tab3Page"]]
      })], Tab3PageModule);
      /***/
    },

    /***/
    "nRCe":
    /*!*************************************!*\
      !*** ./src/app/tab3/tab3.page.scss ***!
      \*************************************/

    /*! exports provided: default */

    /***/
    function nRCe(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-content {\n  --background: url('background_full.jpg') no-repeat top center/cover fixed, #fff;\n  position: relative;\n  height: 100%;\n  width: 100%;\n}\nion-content ion-button {\n  margin-top: 1em;\n  margin-bottom: 1em;\n}\nion-toolbar {\n  --background: transparent;\n}\nion-chip {\n  --background: #9dc912;\n  --color: #fff;\n}\n.card {\n  margin: 0 auto;\n}\n.card .header {\n  height: 200px;\n}\n.card .header .avatar {\n  width: 160px;\n  height: 160px;\n  position: relative;\n  margin: 0 auto;\n}\n.card .header .avatar img {\n  display: block;\n  border-radius: 50%;\n  position: absolute;\n  bottom: calc(-1*(80px + 4px));\n  border: 8px solid #9Dc912;\n  background-color: #ffffff;\n}\n.card-body {\n  background-color: #ffffff;\n  padding: 30px;\n  height: calc(120vh - (200px + 56px));\n}\n.card-body .user-meta {\n  padding-top: 40px;\n}\n.card-body .user-meta .playername {\n  font-size: 24px;\n  font-weight: 600;\n  color: #303940;\n}\n.card-body .user-meta .country {\n  font-size: 90%;\n  color: #949ea6;\n  text-transform: uppercase;\n  margin: 0 auto;\n}\n.standartbutton {\n  --background:#b680cf;\n  --background-activated: #9561ad;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3RhYjMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksK0VBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FBQ0o7QUFDSTtFQUNJLGVBQUE7RUFDQSxrQkFBQTtBQUNSO0FBR0E7RUFDSSx5QkFBQTtBQUFKO0FBR0E7RUFDSSxxQkFBQTtFQUNBLGFBQUE7QUFBSjtBQUdBO0VBQ0ksY0FBQTtBQUFKO0FBRUk7RUFDSSxhQUFBO0FBQVI7QUFFUTtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FBQVo7QUFFWTtFQUNJLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsNkJBQUE7RUFDQSx5QkFBQTtFQUNBLHlCQUFBO0FBQWhCO0FBTUE7RUFDSSx5QkFBQTtFQUNBLGFBQUE7RUFDQSxvQ0FBQTtBQUhKO0FBS0k7RUFDSSxpQkFBQTtBQUhSO0FBS1E7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FBSFo7QUFNUTtFQUNJLGNBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0FBSlo7QUFRQTtFQUNJLG9CQUFBO0VBQ0EsK0JBQUE7QUFMSiIsImZpbGUiOiJ0YWIzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcbiAgICAtLWJhY2tncm91bmQ6IHVybCguLi8uLi9hc3NldHMvYmFja2dyb3VuZF9mdWxsLmpwZykgbm8tcmVwZWF0IHRvcCBjZW50ZXIvY292ZXIgZml4ZWQsICNmZmY7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcblxuICAgIGlvbi1idXR0b24ge1xuICAgICAgICBtYXJnaW4tdG9wOiAxZW07XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDFlbVxuICAgIH1cbn1cblxuaW9uLXRvb2xiYXIge1xuICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59XG5cbmlvbi1jaGlwIHtcbiAgICAtLWJhY2tncm91bmQ6ICM5ZGM5MTI7XG4gICAgLS1jb2xvcjogI2ZmZjtcbn1cblxuLmNhcmQge1xuICAgIG1hcmdpbjogMCBhdXRvO1xuXG4gICAgLmhlYWRlciB7XG4gICAgICAgIGhlaWdodDogMjAwcHg7IC8vIDIwdmg7XG5cbiAgICAgICAgLmF2YXRhciB7XG4gICAgICAgICAgICB3aWR0aDogMTYwcHg7IC8vNDB2d1xuICAgICAgICAgICAgaGVpZ2h0OiAxNjBweDtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xuXG4gICAgICAgICAgICBpbWcge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgYm90dG9tOiBjYWxjKC0xKig4MHB4ICsgNHB4KSk7IC8vIC00MnB4O1xuICAgICAgICAgICAgICAgIGJvcmRlcjogOHB4IHNvbGlkICM5RGM5MTI7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuLmNhcmQtYm9keSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgICBwYWRkaW5nOiAzMHB4O1xuICAgIGhlaWdodDogY2FsYygxMjB2aCAtICgyMDBweCArIDU2cHgpKTtcblxuICAgIC51c2VyLW1ldGEge1xuICAgICAgICBwYWRkaW5nLXRvcDogNDBweDtcblxuICAgICAgICAucGxheWVybmFtZSB7XG4gICAgICAgICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgY29sb3I6ICMzMDM5NDA7XG4gICAgICAgIH1cblxuICAgICAgICAuY291bnRyeSB7XG4gICAgICAgICAgICBmb250LXNpemU6IDkwJTtcbiAgICAgICAgICAgIGNvbG9yOiAjOTQ5ZWE2O1xuICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICB9XG4gICAgfVxufVxuLnN0YW5kYXJ0YnV0dG9ue1xuICAgIC0tYmFja2dyb3VuZDojYjY4MGNmO1xuICAgIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWRcdDogIzk1NjFhZDtcbiAgICBcblxufSJdfQ== */";
      /***/
    }
  }]);
})();
//# sourceMappingURL=tab3-tab3-module-es5.js.map