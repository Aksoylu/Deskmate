(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["event-modal-event-modal-module"], {
    /***/
    "1Qc2":
    /*!***************************************************!*\
      !*** ./src/app/event-modal/event-modal.page.scss ***!
      \***************************************************/

    /*! exports provided: default */

    /***/
    function Qc2(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJldmVudC1tb2RhbC5wYWdlLnNjc3MifQ== */";
      /***/
    },

    /***/
    "KBUp":
    /*!*************************************************!*\
      !*** ./src/app/event-modal/event-modal.page.ts ***!
      \*************************************************/

    /*! exports provided: EventModalPage */

    /***/
    function KBUp(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EventModalPage", function () {
        return EventModalPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_event_modal_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./event-modal.page.html */
      "LaqV");
      /* harmony import */


      var _event_modal_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./event-modal.page.scss */
      "1Qc2");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! moment */
      "wd/R");
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_5__);

      var EventModalPage = /*#__PURE__*/function () {
        function EventModalPage(navCtrl, navParams) {
          _classCallCheck(this, EventModalPage);

          this.navCtrl = navCtrl;
          this.navParams = navParams;
          this.event = {
            startTime: new Date().toISOString(),
            endTime: new Date().toISOString(),
            name: ""
          };
          var selectedDay = moment__WEBPACK_IMPORTED_MODULE_5__(this.navParams.get('selectedDay')).format();
          this.event.startTime = selectedDay;
          this.event.endTime = selectedDay;
        }

        _createClass(EventModalPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "save",
          value: function save() {}
        }]);

        return EventModalPage;
      }();

      EventModalPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavParams"]
        }];
      };

      EventModalPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-event-modal',
        template: _raw_loader_event_modal_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_event_modal_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], EventModalPage);
      /***/
    },

    /***/
    "LaqV":
    /*!*****************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/event-modal/event-modal.page.html ***!
      \*****************************************************************************************/

    /*! exports provided: default */

    /***/
    function LaqV(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>eventModal</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n";
      /***/
    },

    /***/
    "MWgX":
    /*!***********************************************************!*\
      !*** ./src/app/event-modal/event-modal-routing.module.ts ***!
      \***********************************************************/

    /*! exports provided: EventModalPageRoutingModule */

    /***/
    function MWgX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EventModalPageRoutingModule", function () {
        return EventModalPageRoutingModule;
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


      var _event_modal_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./event-modal.page */
      "KBUp");

      var routes = [{
        path: '',
        component: _event_modal_page__WEBPACK_IMPORTED_MODULE_3__["EventModalPage"]
      }];

      var EventModalPageRoutingModule = function EventModalPageRoutingModule() {
        _classCallCheck(this, EventModalPageRoutingModule);
      };

      EventModalPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], EventModalPageRoutingModule);
      /***/
    },

    /***/
    "PsZg":
    /*!***************************************************!*\
      !*** ./src/app/event-modal/event-modal.module.ts ***!
      \***************************************************/

    /*! exports provided: EventModalPageModule */

    /***/
    function PsZg(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EventModalPageModule", function () {
        return EventModalPageModule;
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


      var _event_modal_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./event-modal-routing.module */
      "MWgX");
      /* harmony import */


      var _event_modal_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./event-modal.page */
      "KBUp");

      var EventModalPageModule = function EventModalPageModule() {
        _classCallCheck(this, EventModalPageModule);
      };

      EventModalPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _event_modal_routing_module__WEBPACK_IMPORTED_MODULE_5__["EventModalPageRoutingModule"]],
        declarations: [_event_modal_page__WEBPACK_IMPORTED_MODULE_6__["EventModalPage"]]
      })], EventModalPageModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=event-modal-event-modal-module-es5.js.map