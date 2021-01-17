(function () {
  function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["scheduler-scheduler-module"], {
    /***/
    "BISf":
    /*!***********************************************!*\
      !*** ./src/app/scheduler/scheduler.page.scss ***!
      \***********************************************/

    /*! exports provided: default */

    /***/
    function BISf(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".header {\n  font-weight: bold;\n  color: #df9aff;\n}\n\n.work {\n  color: #578c4d;\n  font-weight: bold;\n  -webkit-text-decoration: solid;\n          text-decoration: solid;\n}\n\n.sleep {\n  color: #de67e2;\n  font-weight: bold;\n  -webkit-text-decoration: solid;\n          text-decoration: solid;\n}\n\n.active {\n  border-style: solid;\n  color: #df9aff;\n  border-color: #9561ad;\n}\n\n.specialbutton {\n  background-color: \"red\";\n  border-radius: 100%;\n  color: \"white\";\n  width: 32;\n}\n\n.fab {\n  background-color: #78C000;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NjaGVkdWxlci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxpQkFBQTtFQUNBLGNBQUE7QUFBSjs7QUFHQTtFQUVJLGNBQUE7RUFDQSxpQkFBQTtFQUNBLDhCQUFBO1VBQUEsc0JBQUE7QUFESjs7QUFJQTtFQUNJLGNBQUE7RUFDQSxpQkFBQTtFQUNBLDhCQUFBO1VBQUEsc0JBQUE7QUFESjs7QUFJQTtFQUNJLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLHFCQUFBO0FBREo7O0FBTUE7RUFFUSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLFNBQUE7QUFKUjs7QUFRQTtFQUVJLHlCQUFBO0FBTkoiLCJmaWxlIjoic2NoZWR1bGVyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLmhlYWRlcntcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBjb2xvcjojZGY5YWZmO1xuXG59XG4ud29ya3tcblxuICAgIGNvbG9yOiM1NzhjNGQ7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBzb2xpZDtcbn1cblxuLnNsZWVwe1xuICAgIGNvbG9yOiNkZTY3ZTI7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBzb2xpZDtcbn1cblxuLmFjdGl2ZXtcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICAgIGNvbG9yOiNkZjlhZmY7XG4gICAgYm9yZGVyLWNvbG9yOiM5NTYxYWQ7XG5cblxufVxuXG4uc3BlY2lhbGJ1dHRvbntcblxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBcInJlZFwiO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICAgICAgICBjb2xvcjogXCJ3aGl0ZVwiO1xuICAgICAgICB3aWR0aDogMzI7XG4gICBcbn1cblxuLmZhYntcblxuICAgIGJhY2tncm91bmQtY29sb3I6ICM3OEMwMDA7XG59Il19 */";
      /***/
    },

    /***/
    "GqeI":
    /*!*********************************************!*\
      !*** ./src/app/scheduler/scheduler.page.ts ***!
      \*********************************************/

    /*! exports provided: SchedulerPage */

    /***/
    function GqeI(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SchedulerPage", function () {
        return SchedulerPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_scheduler_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./scheduler.page.html */
      "zce8");
      /* harmony import */


      var _scheduler_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./scheduler.page.scss */
      "BISf");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! moment */
      "wd/R");
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_6__);
      /* harmony import */


      var _ionic_storage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic/storage */
      "e8h1");
      /* harmony import */


      var _provider_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../provider.service */
      "74+B");

      var SchedulerPage = /*#__PURE__*/function () {
        function SchedulerPage(provider, storage, route, router, alertCtrl) {
          var _this = this;

          _classCallCheck(this, SchedulerPage);

          this.provider = provider;
          this.storage = storage;
          this.route = route;
          this.router = router;
          this.alertCtrl = alertCtrl;
          this.taskname = "";
          this.isFinished = "";
          this.state = "";
          this.timeLeft = 60;
          this.examplePlan = '';
          this.planIndex = 0;
          this.fabIcon = "pause";
          this.route.queryParams.subscribe(function (params) {
            _this.data = JSON.parse(params.special);
            _this.task_id = _this.data["taskID"];
            _this.taskname = _this.data["taskname"];
            _this.duration = _this.data["duration"];
            _this.isFinished = _this.data["isFinished"];
          });
          this.showStateDialog("Nasıl Hissediyorsunuz ?", "Şu anda bulunduğunuz şartlar verimliliğiniz için ne kadar ideal ?");
        }

        _createClass(SchedulerPage, [{
          key: "showStateDialog",
          value: function showStateDialog(_header, _subheader) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this2 = this;

              var alert, result;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.alertCtrl.create({
                        header: _header,
                        subHeader: _subheader,
                        inputs: [{
                          type: 'radio',
                          label: 'Kötü',
                          value: 'negative',
                          checked: true
                        }, {
                          type: 'radio',
                          label: 'Orta',
                          value: 'standart',
                          checked: false
                        }, {
                          type: 'radio',
                          label: 'İyi',
                          value: 'good',
                          checked: false
                        }],
                        buttons: [{
                          text: 'Tamam',
                          handler: function handler(data) {
                            _this2.state = data;

                            _this2.showDialog("Zamanınızı Planlayın", "Ne kadar çalışacağınızı seçin.");
                          }
                        }]
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

                    case 8:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "showDialog",
          value: function showDialog(_header, _subheader) {
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
                        subHeader: _subheader,
                        inputs: [{
                          type: 'radio',
                          label: '30 Dakika',
                          value: '30',
                          checked: true
                        }, {
                          type: 'radio',
                          label: '45 Dakika',
                          value: '45',
                          checked: false
                        }, {
                          type: 'radio',
                          label: '50 Dakika',
                          value: '50',
                          checked: false
                        }, {
                          type: 'radio',
                          label: '60 Dakika',
                          value: '60',
                          checked: false
                        }, {
                          type: 'radio',
                          label: '1 Saat 15 Dakika',
                          value: '75',
                          checked: false
                        }, {
                          type: 'radio',
                          label: '1 Saat 30 Dakika',
                          value: '90',
                          checked: false
                        }, {
                          type: 'radio',
                          label: '1 Saat 45 Dakika',
                          value: '105',
                          checked: false
                        }],
                        buttons: [{
                          text: 'Geri Dön',
                          role: 'cancel',
                          cssClass: 'secondary',
                          handler: function handler() {
                            console.log('Confirm Cancel');
                          }
                        }, {
                          text: 'Başlat',
                          handler: function handler(alertData) {
                            _this3.duration = alertData;
                            _this3.examplePlan = _this3.parsePlan(alertData);

                            _this3.renderPlan();

                            _this3.startPlan();
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
          key: "showFinishDialog",
          value: function showFinishDialog() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var _this4 = this;

              var alert, result;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      _context3.next = 2;
                      return this.alertCtrl.create({
                        header: "Görev Tamamlandı",
                        subHeader: "Tebrikler,görevinizi başarıyla tamamladınız. ",
                        buttons: [{
                          text: 'Tamam',
                          handler: function handler() {
                            _this4.router.navigate(['tabs']);
                          }
                        }]
                      });

                    case 2:
                      alert = _context3.sent;
                      _context3.next = 5;
                      return alert.present();

                    case 5:
                      _context3.next = 7;
                      return alert.onDidDismiss();

                    case 7:
                      result = _context3.sent;

                    case 8:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {//    console.log(this.examplePlan);
          }
          /* Deskmate yayinlanan surumde webservice ile sunucudan bulanik mantik ile calisan bir model gelistirilecek */

        }, {
          key: "parsePlan",
          value: function parsePlan(sec) {
            var timesplit = sec / 30;
            var kalan = sec % 30;
            var newPlan = {};
            var i = 0;

            while (i <= timesplit * 2 - 1) {
              var child_work = {
                event: "work",
                duration: 30 * 60
              };
              newPlan["part" + i] = child_work;
              i++;
              var child_sleep = {
                event: "sleep",
                duration: 5 * 60
              };
              newPlan["part" + i] = child_sleep;
              i++;
            }

            if (kalan != 0) {
              var child_last = {
                event: "sleep",
                duration: kalan
              };
              newPlan["part" + (i + 1)] = child_last;
            }

            return JSON.stringify(newPlan);
          }
        }, {
          key: "renderPlan",
          value: function renderPlan() {
            var plan = JSON.parse(this.examplePlan);
          }
        }, {
          key: "startPlan",
          value: function startPlan() {
            this.plan = JSON.parse(this.examplePlan);
            this.timeLeft = this.duration;
            var planCount = Object.keys(this.plan).length;

            for (var i = 0; i < planCount; i++) {
              if (this.planIndex == i) {
                this.duration = this.plan["part" + this.planIndex]["duration"];
                this._event = this.plan["part" + this.planIndex]["event"];

                if (this._event == "work") {
                  this.event = "Şimdi Çalış";
                } else {
                  this.event = "Şimdi Dinlen";
                }

                this.startTimer();
              }
            }

            this.timeLeft = this.duration;
          }
        }, {
          key: "nextPart",
          value: function nextPart() {
            this.planIndex++;
            var planCount = Object.keys(this.plan).length; /// console.log(JSON.stringify(newPlan));

            for (var i = 0; i < planCount + 1; i++) {
              if (this.planIndex == i) {
                this.duration = this.plan["part" + this.planIndex]["duration"];
                this._event = this.plan["part" + this.planIndex]["event"];
                this.timeLeft = this.duration;

                if (this._event == "work") {
                  this.event = 'Şimdi Çalış';
                } else {
                  this.event = 'Şimdi Dinlen';
                }

                this.startTimer();
              }
            }
          }
        }, {
          key: "startTimer",
          value: function startTimer() {
            var _this5 = this;

            this.timer_enabled = true;
            this.interval = setInterval(function () {
              if (_this5.timeLeft > 0) {
                _this5.timeLeft--;
              } else {
                _this5.pauseTimer();
              }

              _this5.minuteLeft = Math.floor(_this5.timeLeft / 60);
              _this5.secondLeft = _this5.timeLeft - _this5.minuteLeft * 60;
              _this5.timePercent = Math.floor(_this5.timeLeft / _this5.duration * 100);
            }, 1000);
          }
        }, {
          key: "pauseTimer",
          value: function pauseTimer() {
            clearInterval(this.interval);
            this.minuteLeft = 0;
            this.secondLeft = 0;
            this.timeLeft = 0;
            var planCount = Object.keys(this.plan).length;

            if (this.planIndex == planCount - 1) {
              this.finishTask();
            } else {
              this.breakOut();
              this.nextPart();
            }
          }
        }, {
          key: "timerEnable",
          value: function timerEnable() {
            if (this.timer_enabled) {
              this.timer_enabled = false;
              clearInterval(this.interval);
              this.fabIcon = "play";
            } else {
              this.timer_enabled = true;
              this.startTimer();
              this.fabIcon = "pause";
            }
          }
          /* Play Sound */

        }, {
          key: "breakOut",
          value: function breakOut() {
            //this.nativeAudio.play('triangle').then();
            var audio_triangle = new Audio("../../assets/triangle.mp3");
            audio_triangle.play();
          }
        }, {
          key: "finishTask",
          value: function finishTask() {
            var _this6 = this;

            //play finish sound and create alert dialog
            var audio_triangle = new Audio("../../assets/success.mp3");
            audio_triangle.play();
            this._event = "sleep";
            this.event = "Görev Tamamlandı !";
            var today = moment__WEBPACK_IMPORTED_MODULE_6__(new Date()).format('DD.MM.YYYY');
            this.storage.get(today).then(function (val) {
              if (_this6.isValidJson(val)) {
                var taskjson = JSON.parse(val);
                var len = Object.keys(taskjson).length;
                taskjson[_this6.task_id]["isFinished"] = true;
                var taskjson_ = JSON.stringify(taskjson);

                _this6.storage.set(today, taskjson_);
              }
            });
          }
          /* Helpers  */

        }, {
          key: "isValidJson",
          value: function isValidJson(str) {
            try {
              if (JSON.parse(str) != null) {
                return true;
              } else {
                return false;
              }
            } catch (e) {
              return false;
            }

            return true;
          }
        }, {
          key: "back",
          value: function back() {
            this.provider.tasks_refresh();
          }
        }, {
          key: "exit",
          value: function exit() {
            this.provider.tasks_refresh();
            this.router.navigate(['tabs']);
          }
        }]);

        return SchedulerPage;
      }();

      SchedulerPage.ctorParameters = function () {
        return [{
          type: _provider_service__WEBPACK_IMPORTED_MODULE_8__["ProviderService"]
        }, {
          type: _ionic_storage__WEBPACK_IMPORTED_MODULE_7__["Storage"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"]
        }];
      };

      SchedulerPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-scheduler',
        template: _raw_loader_scheduler_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_scheduler_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], SchedulerPage);
      /***/
    },

    /***/
    "K1R0":
    /*!*************************************************************************************!*\
      !*** ./node_modules/ng-circle-progress/__ivy_ngcc__/fesm2015/ng-circle-progress.js ***!
      \*************************************************************************************/

    /*! exports provided: CircleProgressComponent, CircleProgressOptions, NgCircleProgressModule */

    /***/
    function K1R0(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CircleProgressComponent", function () {
        return CircleProgressComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CircleProgressOptions", function () {
        return CircleProgressOptions;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NgCircleProgressModule", function () {
        return NgCircleProgressModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      "qCKp");

      function CircleProgressComponent__svg_svg_0__svg_linearGradient_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "linearGradient");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "stop", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "stop", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("id", ctx_r1.svg.outerLinearGradient.id);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("stop-color", ctx_r1.svg.outerLinearGradient.colorStop1)("stop-opacity", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("stop-color", ctx_r1.svg.outerLinearGradient.colorStop2)("stop-opacity", 1);
        }
      }

      function CircleProgressComponent__svg_svg_0__svg_radialGradient_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "radialGradient");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "stop", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "stop", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("id", ctx_r2.svg.radialGradient.id);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("stop-color", ctx_r2.svg.radialGradient.colorStop1)("stop-opacity", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("stop-color", ctx_r2.svg.radialGradient.colorStop2)("stop-opacity", 1);
        }
      }

      function CircleProgressComponent__svg_svg_0__svg_ng_container_4__svg_circle_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "circle");
        }

        if (rf & 2) {
          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("cx", ctx_r8.svg.backgroundCircle.cx)("cy", ctx_r8.svg.backgroundCircle.cy)("r", ctx_r8.svg.backgroundCircle.r)("fill", ctx_r8.svg.backgroundCircle.fill)("fill-opacity", ctx_r8.svg.backgroundCircle.fillOpacity)("stroke", ctx_r8.svg.backgroundCircle.stroke)("stroke-width", ctx_r8.svg.backgroundCircle.strokeWidth);
        }
      }

      function CircleProgressComponent__svg_svg_0__svg_ng_container_4__svg_circle_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "circle");
        }

        if (rf & 2) {
          var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattributeInterpolate1"]("fill", "url(#", ctx_r9.svg.radialGradient.id, ")");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("cx", ctx_r9.svg.backgroundCircle.cx)("cy", ctx_r9.svg.backgroundCircle.cy)("r", ctx_r9.svg.backgroundCircle.r)("fill-opacity", ctx_r9.svg.backgroundCircle.fillOpacity)("stroke", ctx_r9.svg.backgroundCircle.stroke)("stroke-width", ctx_r9.svg.backgroundCircle.strokeWidth);
        }
      }

      function CircleProgressComponent__svg_svg_0__svg_ng_container_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CircleProgressComponent__svg_svg_0__svg_ng_container_4__svg_circle_1_Template, 1, 7, "circle", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CircleProgressComponent__svg_svg_0__svg_ng_container_4__svg_circle_2_Template, 1, 7, "circle", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r3.options.backgroundGradient);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.options.backgroundGradient);
        }
      }

      function CircleProgressComponent__svg_svg_0__svg_circle_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "circle");
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("cx", ctx_r4.svg.circle.cx)("cy", ctx_r4.svg.circle.cy)("r", ctx_r4.svg.circle.r)("fill", ctx_r4.svg.circle.fill)("stroke", ctx_r4.svg.circle.stroke)("stroke-width", ctx_r4.svg.circle.strokeWidth);
        }
      }

      function CircleProgressComponent__svg_svg_0__svg_ng_container_6__svg_path_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "path");
        }

        if (rf & 2) {
          var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("d", ctx_r10.svg.path.d)("stroke", ctx_r10.svg.path.stroke)("stroke-width", ctx_r10.svg.path.strokeWidth)("stroke-linecap", ctx_r10.svg.path.strokeLinecap)("fill", ctx_r10.svg.path.fill);
        }
      }

      function CircleProgressComponent__svg_svg_0__svg_ng_container_6__svg_path_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "path");
        }

        if (rf & 2) {
          var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattributeInterpolate1"]("stroke", "url(#", ctx_r11.svg.outerLinearGradient.id, ")");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("d", ctx_r11.svg.path.d)("stroke-width", ctx_r11.svg.path.strokeWidth)("stroke-linecap", ctx_r11.svg.path.strokeLinecap)("fill", ctx_r11.svg.path.fill);
        }
      }

      function CircleProgressComponent__svg_svg_0__svg_ng_container_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CircleProgressComponent__svg_svg_0__svg_ng_container_6__svg_path_1_Template, 1, 5, "path", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CircleProgressComponent__svg_svg_0__svg_ng_container_6__svg_path_2_Template, 1, 5, "path", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r5.options.outerStrokeGradient);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.options.outerStrokeGradient);
        }
      }

      function CircleProgressComponent__svg_svg_0__svg_text_7__svg_ng_container_1__svg_tspan_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tspan");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var tspan_r16 = ctx.$implicit;

          var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("x", ctx_r15.svg.title.x)("y", ctx_r15.svg.title.y)("dy", tspan_r16.dy)("font-size", ctx_r15.svg.title.fontSize)("font-weight", ctx_r15.svg.title.fontWeight)("fill", ctx_r15.svg.title.color);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](tspan_r16.span);
        }
      }

      function CircleProgressComponent__svg_svg_0__svg_text_7__svg_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CircleProgressComponent__svg_svg_0__svg_text_7__svg_ng_container_1__svg_tspan_1_Template, 2, 7, "tspan", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r12.svg.title.tspans);
        }
      }

      function CircleProgressComponent__svg_svg_0__svg_text_7__svg_tspan_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tspan");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("font-size", ctx_r13.svg.units.fontSize)("font-weight", ctx_r13.svg.units.fontWeight)("fill", ctx_r13.svg.units.color);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r13.svg.units.text);
        }
      }

      function CircleProgressComponent__svg_svg_0__svg_text_7__svg_ng_container_3__svg_tspan_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tspan");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var tspan_r18 = ctx.$implicit;

          var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("x", ctx_r17.svg.subtitle.x)("y", ctx_r17.svg.subtitle.y)("dy", tspan_r18.dy)("font-size", ctx_r17.svg.subtitle.fontSize)("font-weight", ctx_r17.svg.subtitle.fontWeight)("fill", ctx_r17.svg.subtitle.color);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](tspan_r18.span);
        }
      }

      function CircleProgressComponent__svg_svg_0__svg_text_7__svg_ng_container_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CircleProgressComponent__svg_svg_0__svg_text_7__svg_ng_container_3__svg_tspan_1_Template, 2, 7, "tspan", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r14.svg.subtitle.tspans);
        }
      }

      function CircleProgressComponent__svg_svg_0__svg_text_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "text", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CircleProgressComponent__svg_svg_0__svg_text_7__svg_ng_container_1_Template, 2, 1, "ng-container", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CircleProgressComponent__svg_svg_0__svg_text_7__svg_tspan_2_Template, 2, 4, "tspan", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CircleProgressComponent__svg_svg_0__svg_text_7__svg_ng_container_3_Template, 2, 1, "ng-container", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("x", ctx_r6.svg.circle.cx)("y", ctx_r6.svg.circle.cy)("text-anchor", ctx_r6.svg.title.textAnchor);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.options.showTitle);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.options.showUnits);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.options.showSubtitle);
        }
      }

      function CircleProgressComponent__svg_svg_0__svg_image_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "image", 9);
        }

        if (rf & 2) {
          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("height", ctx_r7.svg.image.height)("width", ctx_r7.svg.image.width)("href", ctx_r7.svg.image.src, null, "xlink")("x", ctx_r7.svg.image.x)("y", ctx_r7.svg.image.y);
        }
      }

      function CircleProgressComponent__svg_svg_0_Template(rf, ctx) {
        if (rf & 1) {
          var _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CircleProgressComponent__svg_svg_0_Template__svg_svg_click_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20);

            var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r19.emitClickEvent($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "defs");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CircleProgressComponent__svg_svg_0__svg_linearGradient_2_Template, 3, 5, "linearGradient", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CircleProgressComponent__svg_svg_0__svg_radialGradient_3_Template, 3, 5, "radialGradient", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, CircleProgressComponent__svg_svg_0__svg_ng_container_4_Template, 3, 2, "ng-container", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, CircleProgressComponent__svg_svg_0__svg_circle_5_Template, 1, 6, "circle", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, CircleProgressComponent__svg_svg_0__svg_ng_container_6_Template, 3, 2, "ng-container", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, CircleProgressComponent__svg_svg_0__svg_text_7_Template, 4, 6, "text", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, CircleProgressComponent__svg_svg_0__svg_image_8_Template, 1, 5, "image", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("viewBox", ctx_r0.svg.viewBox)("height", ctx_r0.svg.height)("width", ctx_r0.svg.width)("class", ctx_r0.options["class"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.options.outerStrokeGradient);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.options.backgroundGradient);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.options.showBackground);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.options.showInnerStroke);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.options.percent - 0 !== 0 || ctx_r0.options.showZeroOuterStroke);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.options.showImage && (ctx_r0.options.showTitle || ctx_r0.options.showUnits || ctx_r0.options.showSubtitle));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.options.showImage);
        }
      }

      var CircleProgressOptions = function CircleProgressOptions() {
        _classCallCheck(this, CircleProgressOptions);

        this["class"] = '';
        this.backgroundGradient = false;
        this.backgroundColor = 'transparent';
        this.backgroundGradientStopColor = 'transparent';
        this.backgroundOpacity = 1;
        this.backgroundStroke = 'transparent';
        this.backgroundStrokeWidth = 0;
        this.backgroundPadding = 5;
        this.percent = 0;
        this.radius = 90;
        this.space = 4;
        this.toFixed = 0;
        this.maxPercent = 1000;
        this.renderOnClick = true;
        this.units = '%';
        this.unitsFontSize = '10';
        this.unitsFontWeight = 'normal';
        this.unitsColor = '#444444';
        this.outerStrokeGradient = false;
        this.outerStrokeWidth = 8;
        this.outerStrokeColor = '#78C000';
        this.outerStrokeGradientStopColor = 'transparent';
        this.outerStrokeLinecap = 'round';
        this.innerStrokeColor = '#C7E596';
        this.innerStrokeWidth = 4;
        this.titleFormat = undefined;
        this.title = 'auto';
        this.titleColor = '#444444';
        this.titleFontSize = '20';
        this.titleFontWeight = 'normal';
        this.subtitleFormat = undefined;
        this.subtitle = 'progress';
        this.subtitleColor = '#A9A9A9';
        this.subtitleFontSize = '10';
        this.subtitleFontWeight = 'normal';
        this.imageSrc = undefined;
        this.imageHeight = undefined;
        this.imageWidth = undefined;
        this.animation = true;
        this.animateTitle = true;
        this.animateSubtitle = false;
        this.animationDuration = 500;
        this.showTitle = true;
        this.showSubtitle = true;
        this.showUnits = true;
        this.showImage = false;
        this.showBackground = true;
        this.showInnerStroke = true;
        this.clockwise = true;
        this.responsive = false;
        this.startFromZero = true;
        this.showZeroOuterStroke = true;
        this.lazy = false;
      };
      /** @dynamic Prevent compiling error when using type `Document` https://github.com/angular/angular/issues/20351 */


      var CircleProgressComponent = /*#__PURE__*/function () {
        function CircleProgressComponent(defaultOptions, elRef, document) {
          var _this7 = this;

          _classCallCheck(this, CircleProgressComponent);

          this.elRef = elRef;
          this.document = document;
          this.onClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](); // <svg> of component

          this.svgElement = null; // whether <svg> is in viewport

          this.isInViewport = false; // event for notifying viewport change caused by scrolling or resizing

          this.onViewportChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this._viewportChangedSubscriber = null;
          this.options = new CircleProgressOptions();
          this.defaultOptions = new CircleProgressOptions();
          this._lastPercent = 0;
          this._gradientUUID = null;

          this.render = function () {
            _this7.applyOptions();

            if (_this7.options.lazy) {
              // Draw svg if it doesn't exist
              _this7.svgElement === null && _this7.draw(_this7._lastPercent); // Draw it only when it's in the viewport

              if (_this7.isInViewport) {
                // Draw it at the latest position when I am in.
                if (_this7.options.animation && _this7.options.animationDuration > 0) {
                  _this7.animate(_this7._lastPercent, _this7.options.percent);
                } else {
                  _this7.draw(_this7.options.percent);
                }

                _this7._lastPercent = _this7.options.percent;
              }
            } else {
              if (_this7.options.animation && _this7.options.animationDuration > 0) {
                _this7.animate(_this7._lastPercent, _this7.options.percent);
              } else {
                _this7.draw(_this7.options.percent);
              }

              _this7._lastPercent = _this7.options.percent;
            }
          };

          this.polarToCartesian = function (centerX, centerY, radius, angleInDegrees) {
            var angleInRadius = angleInDegrees * Math.PI / 180;
            var x = centerX + Math.sin(angleInRadius) * radius;
            var y = centerY - Math.cos(angleInRadius) * radius;
            return {
              x: x,
              y: y
            };
          };

          this.draw = function (percent) {
            // make percent reasonable
            percent = percent === undefined ? _this7.options.percent : Math.abs(percent); // circle percent shouldn't be greater than 100%.

            var circlePercent = percent > 100 ? 100 : percent; // determine box size

            var boxSize = _this7.options.radius * 2 + _this7.options.outerStrokeWidth * 2;

            if (_this7.options.showBackground) {
              boxSize += _this7.options.backgroundStrokeWidth * 2 + _this7.max(0, _this7.options.backgroundPadding * 2);
            } // the centre of the circle


            var centre = {
              x: boxSize / 2,
              y: boxSize / 2
            }; // the start point of the arc

            var startPoint = {
              x: centre.x,
              y: centre.y - _this7.options.radius
            }; // get the end point of the arc

            var endPoint = _this7.polarToCartesian(centre.x, centre.y, _this7.options.radius, 360 * (_this7.options.clockwise ? circlePercent : 100 - circlePercent) / 100); // ####################
            // We'll get an end point with the same [x, y] as the start point when percent is 100%, so move x a little bit.


            if (circlePercent === 100) {
              endPoint.x = endPoint.x + (_this7.options.clockwise ? -0.01 : +0.01);
            } // largeArcFlag and sweepFlag


            var largeArcFlag, sweepFlag;

            if (circlePercent > 50) {
              var _ref = _this7.options.clockwise ? [1, 1] : [1, 0];

              var _ref2 = _slicedToArray(_ref, 2);

              largeArcFlag = _ref2[0];
              sweepFlag = _ref2[1];
            } else {
              var _ref3 = _this7.options.clockwise ? [0, 1] : [0, 0];

              var _ref4 = _slicedToArray(_ref3, 2);

              largeArcFlag = _ref4[0];
              sweepFlag = _ref4[1];
            } // percent may not equal the actual percent


            var titlePercent = _this7.options.animateTitle ? percent : _this7.options.percent;
            var titleTextPercent = titlePercent > _this7.options.maxPercent ? "".concat(_this7.options.maxPercent.toFixed(_this7.options.toFixed), "+") : titlePercent.toFixed(_this7.options.toFixed);
            var subtitlePercent = _this7.options.animateSubtitle ? percent : _this7.options.percent; // get title object

            var title = {
              x: centre.x,
              y: centre.y,
              textAnchor: 'middle',
              color: _this7.options.titleColor,
              fontSize: _this7.options.titleFontSize,
              fontWeight: _this7.options.titleFontWeight,
              texts: [],
              tspans: []
            }; // from v0.9.9, both title and titleFormat(...) may be an array of string.

            if (_this7.options.titleFormat !== undefined && _this7.options.titleFormat.constructor.name === 'Function') {
              var formatted = _this7.options.titleFormat(titlePercent);

              if (formatted instanceof Array) {
                title.texts = _toConsumableArray(formatted);
              } else {
                title.texts.push(formatted.toString());
              }
            } else {
              if (_this7.options.title === 'auto') {
                title.texts.push(titleTextPercent);
              } else {
                if (_this7.options.title instanceof Array) {
                  title.texts = _toConsumableArray(_this7.options.title);
                } else {
                  title.texts.push(_this7.options.title.toString());
                }
              }
            } // get subtitle object


            var subtitle = {
              x: centre.x,
              y: centre.y,
              textAnchor: 'middle',
              color: _this7.options.subtitleColor,
              fontSize: _this7.options.subtitleFontSize,
              fontWeight: _this7.options.subtitleFontWeight,
              texts: [],
              tspans: []
            }; // from v0.9.9, both subtitle and subtitleFormat(...) may be an array of string.

            if (_this7.options.subtitleFormat !== undefined && _this7.options.subtitleFormat.constructor.name === 'Function') {
              var _formatted = _this7.options.subtitleFormat(subtitlePercent);

              if (_formatted instanceof Array) {
                subtitle.texts = _toConsumableArray(_formatted);
              } else {
                subtitle.texts.push(_formatted.toString());
              }
            } else {
              if (_this7.options.subtitle instanceof Array) {
                subtitle.texts = _toConsumableArray(_this7.options.subtitle);
              } else {
                subtitle.texts.push(_this7.options.subtitle.toString());
              }
            } // get units object


            var units = {
              text: "".concat(_this7.options.units),
              fontSize: _this7.options.unitsFontSize,
              fontWeight: _this7.options.unitsFontWeight,
              color: _this7.options.unitsColor
            }; // get total count of text lines to be shown

            var rowCount = 0,
                rowNum = 1;
            _this7.options.showTitle && (rowCount += title.texts.length);
            _this7.options.showSubtitle && (rowCount += subtitle.texts.length); // calc dy for each tspan for title

            if (_this7.options.showTitle) {
              var _iterator = _createForOfIteratorHelper(title.texts),
                  _step;

              try {
                for (_iterator.s(); !(_step = _iterator.n()).done;) {
                  var span = _step.value;
                  title.tspans.push({
                    span: span,
                    dy: _this7.getRelativeY(rowNum, rowCount)
                  });
                  rowNum++;
                }
              } catch (err) {
                _iterator.e(err);
              } finally {
                _iterator.f();
              }
            } // calc dy for each tspan for subtitle


            if (_this7.options.showSubtitle) {
              var _iterator2 = _createForOfIteratorHelper(subtitle.texts),
                  _step2;

              try {
                for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                  var _span = _step2.value;
                  subtitle.tspans.push({
                    span: _span,
                    dy: _this7.getRelativeY(rowNum, rowCount)
                  });
                  rowNum++;
                }
              } catch (err) {
                _iterator2.e(err);
              } finally {
                _iterator2.f();
              }
            } // create ID for gradient element


            if (null === _this7._gradientUUID) {
              _this7._gradientUUID = _this7.uuid();
            } // Bring it all together


            _this7.svg = {
              viewBox: "0 0 ".concat(boxSize, " ").concat(boxSize),
              // Set both width and height to '100%' if it's responsive
              width: _this7.options.responsive ? '100%' : boxSize,
              height: _this7.options.responsive ? '100%' : boxSize,
              backgroundCircle: {
                cx: centre.x,
                cy: centre.y,
                r: _this7.options.radius + _this7.options.outerStrokeWidth / 2 + _this7.options.backgroundPadding,
                fill: _this7.options.backgroundColor,
                fillOpacity: _this7.options.backgroundOpacity,
                stroke: _this7.options.backgroundStroke,
                strokeWidth: _this7.options.backgroundStrokeWidth
              },
              path: {
                // A rx ry x-axis-rotation large-arc-flag sweep-flag x y (https://developer.mozilla.org/en/docs/Web/SVG/Tutorial/Paths#Arcs)
                d: "M ".concat(startPoint.x, " ").concat(startPoint.y, "\n        A ").concat(_this7.options.radius, " ").concat(_this7.options.radius, " 0 ").concat(largeArcFlag, " ").concat(sweepFlag, " ").concat(endPoint.x, " ").concat(endPoint.y),
                stroke: _this7.options.outerStrokeColor,
                strokeWidth: _this7.options.outerStrokeWidth,
                strokeLinecap: _this7.options.outerStrokeLinecap,
                fill: 'none'
              },
              circle: {
                cx: centre.x,
                cy: centre.y,
                r: _this7.options.radius - _this7.options.space - _this7.options.outerStrokeWidth / 2 - _this7.options.innerStrokeWidth / 2,
                fill: 'none',
                stroke: _this7.options.innerStrokeColor,
                strokeWidth: _this7.options.innerStrokeWidth
              },
              title: title,
              units: units,
              subtitle: subtitle,
              image: {
                x: centre.x - _this7.options.imageWidth / 2,
                y: centre.y - _this7.options.imageHeight / 2,
                src: _this7.options.imageSrc,
                width: _this7.options.imageWidth,
                height: _this7.options.imageHeight
              },
              outerLinearGradient: {
                id: 'outer-linear-' + _this7._gradientUUID,
                colorStop1: _this7.options.outerStrokeColor,
                colorStop2: _this7.options.outerStrokeGradientStopColor === 'transparent' ? '#FFF' : _this7.options.outerStrokeGradientStopColor
              },
              radialGradient: {
                id: 'radial-' + _this7._gradientUUID,
                colorStop1: _this7.options.backgroundColor,
                colorStop2: _this7.options.backgroundGradientStopColor === 'transparent' ? '#FFF' : _this7.options.backgroundGradientStopColor
              }
            };
          };

          this.getAnimationParameters = function (previousPercent, currentPercent) {
            var MIN_INTERVAL = 10;
            var times, step, interval;
            var fromPercent = _this7.options.startFromZero ? 0 : previousPercent < 0 ? 0 : previousPercent;
            var toPercent = currentPercent < 0 ? 0 : _this7.min(currentPercent, _this7.options.maxPercent);
            var delta = Math.abs(Math.round(toPercent - fromPercent));

            if (delta >= 100) {
              // we will finish animation in 100 times
              times = 100;

              if (!_this7.options.animateTitle && !_this7.options.animateSubtitle) {
                step = 1;
              } else {
                // show title or subtitle animation even if the arc is full, we also need to finish it in 100 times.
                step = Math.round(delta / times);
              }
            } else {
              // we will finish in as many times as the number of percent.
              times = delta;
              step = 1;
            } // Get the interval of timer


            interval = Math.round(_this7.options.animationDuration / times); // Readjust all values if the interval of timer is extremely small.

            if (interval < MIN_INTERVAL) {
              interval = MIN_INTERVAL;
              times = _this7.options.animationDuration / interval;

              if (!_this7.options.animateTitle && !_this7.options.animateSubtitle && delta > 100) {
                step = Math.round(100 / times);
              } else {
                step = Math.round(delta / times);
              }
            } // step must be greater than 0.


            if (step < 1) {
              step = 1;
            }

            return {
              times: times,
              step: step,
              interval: interval
            };
          };

          this.animate = function (previousPercent, currentPercent) {
            if (_this7._timerSubscription && !_this7._timerSubscription.closed) {
              _this7._timerSubscription.unsubscribe();
            }

            var fromPercent = _this7.options.startFromZero ? 0 : previousPercent;
            var toPercent = currentPercent;

            var _this7$getAnimationPa = _this7.getAnimationParameters(fromPercent, toPercent),
                step = _this7$getAnimationPa.step,
                interval = _this7$getAnimationPa.interval;

            var count = fromPercent;

            if (fromPercent < toPercent) {
              _this7._timerSubscription = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["timer"])(0, interval).subscribe(function () {
                count += step;

                if (count <= toPercent) {
                  if (!_this7.options.animateTitle && !_this7.options.animateSubtitle && count >= 100) {
                    _this7.draw(toPercent);

                    _this7._timerSubscription.unsubscribe();
                  } else {
                    _this7.draw(count);
                  }
                } else {
                  _this7.draw(toPercent);

                  _this7._timerSubscription.unsubscribe();
                }
              });
            } else {
              _this7._timerSubscription = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["timer"])(0, interval).subscribe(function () {
                count -= step;

                if (count >= toPercent) {
                  if (!_this7.options.animateTitle && !_this7.options.animateSubtitle && toPercent >= 100) {
                    _this7.draw(toPercent);

                    _this7._timerSubscription.unsubscribe();
                  } else {
                    _this7.draw(count);
                  }
                } else {
                  _this7.draw(toPercent);

                  _this7._timerSubscription.unsubscribe();
                }
              });
            }
          };

          this.emitClickEvent = function (event) {
            if (_this7.options.renderOnClick) {
              _this7.animate(0, _this7.options.percent);
            }

            _this7.onClick.emit(event);
          };

          this.applyOptions = function () {
            // the options of <circle-progress> may change already
            for (var _i2 = 0, _Object$keys = Object.keys(_this7.options); _i2 < _Object$keys.length; _i2++) {
              var name = _Object$keys[_i2];

              if (_this7.hasOwnProperty(name) && _this7[name] !== undefined) {
                _this7.options[name] = _this7[name];
              } else if (_this7.templateOptions && _this7.templateOptions[name] !== undefined) {
                _this7.options[name] = _this7.templateOptions[name];
              }
            } // make sure key options valid


            _this7.options.radius = Math.abs(+_this7.options.radius);
            _this7.options.space = +_this7.options.space;
            _this7.options.percent = +_this7.options.percent > 0 ? +_this7.options.percent : 0;
            _this7.options.maxPercent = Math.abs(+_this7.options.maxPercent);
            _this7.options.animationDuration = Math.abs(_this7.options.animationDuration);
            _this7.options.outerStrokeWidth = Math.abs(+_this7.options.outerStrokeWidth);
            _this7.options.innerStrokeWidth = Math.abs(+_this7.options.innerStrokeWidth);
            _this7.options.backgroundPadding = +_this7.options.backgroundPadding;
          };

          this.getRelativeY = function (rowNum, rowCount) {
            // why '-0.18em'? It's a magic number when property 'alignment-baseline' equals 'baseline'. :)
            var initialOffset = -0.18,
                offset = 1;
            return (initialOffset + offset * (rowNum - rowCount / 2)).toFixed(2) + 'em';
          };

          this.min = function (a, b) {
            return a < b ? a : b;
          };

          this.max = function (a, b) {
            return a > b ? a : b;
          };

          this.uuid = function () {
            // https://www.w3resource.com/javascript-exercises/javascript-math-exercise-23.php
            var dt = new Date().getTime();
            var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
              var r = (dt + Math.random() * 16) % 16 | 0;
              dt = Math.floor(dt / 16);
              return (c == 'x' ? r : r & 0x3 | 0x8).toString(16);
            });
            return uuid;
          };

          this.findSvgElement = function () {
            if (this.svgElement === null) {
              var tags = this.elRef.nativeElement.getElementsByTagName('svg');

              if (tags.length > 0) {
                this.svgElement = tags[0];
              }
            }
          };

          this.checkViewport = function () {
            _this7.findSvgElement();

            var previousValue = _this7.isInViewport;
            _this7.isInViewport = _this7.isElementInViewport(_this7.svgElement);

            if (previousValue !== _this7.isInViewport) {
              _this7.onViewportChanged.emit({
                oldValue: previousValue,
                newValue: _this7.isInViewport
              });
            }
          };

          this.onScroll = function (event) {
            _this7.checkViewport();
          };

          this.loadEventsForLazyMode = function () {
            if (_this7.options.lazy) {
              _this7.document.addEventListener('scroll', _this7.onScroll, true);

              _this7.window.addEventListener('resize', _this7.onScroll, true);

              if (_this7._viewportChangedSubscriber === null) {
                _this7._viewportChangedSubscriber = _this7.onViewportChanged.subscribe(function (_ref5) {
                  var oldValue = _ref5.oldValue,
                      newValue = _ref5.newValue;
                  newValue ? _this7.render() : null;
                });
              } // svgElement must be created in DOM before being checked.
              // Is there a better way to check the existence of svgElemnt?


              var _timer = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["timer"])(0, 50).subscribe(function () {
                _this7.svgElement === null ? _this7.checkViewport() : _timer.unsubscribe();
              });
            }
          };

          this.unloadEventsForLazyMode = function () {
            // Remove event listeners
            _this7.document.removeEventListener('scroll', _this7.onScroll, true);

            _this7.window.removeEventListener('resize', _this7.onScroll, true); // Unsubscribe onViewportChanged


            if (_this7._viewportChangedSubscriber !== null) {
              _this7._viewportChangedSubscriber.unsubscribe();

              _this7._viewportChangedSubscriber = null;
            }
          };

          this.document = document;
          this.window = this.document.defaultView;
          Object.assign(this.options, defaultOptions);
          Object.assign(this.defaultOptions, defaultOptions);
        }

        _createClass(CircleProgressComponent, [{
          key: "isDrawing",
          value: function isDrawing() {
            return this._timerSubscription && !this._timerSubscription.closed;
          }
        }, {
          key: "isElementInViewport",
          value: function isElementInViewport(el) {
            // Return false if el has not been created in page.
            if (el === null || el === undefined) return false; // Check if the element is out of view due to a container scrolling

            var rect = el.getBoundingClientRect(),
                parent = el.parentNode,
                parentRect;

            do {
              parentRect = parent.getBoundingClientRect();
              if (rect.top >= parentRect.bottom) return false;
              if (rect.bottom <= parentRect.top) return false;
              if (rect.left >= parentRect.right) return false;
              if (rect.right <= parentRect.left) return false;
              parent = parent.parentNode;
            } while (parent != this.document.body); // Check its within the document viewport


            if (rect.top >= (this.window.innerHeight || this.document.documentElement.clientHeight)) return false;
            if (rect.bottom <= 0) return false;
            if (rect.left >= (this.window.innerWidth || this.document.documentElement.clientWidth)) return false;
            if (rect.right <= 0) return false;
            return true;
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            this.loadEventsForLazyMode();
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.unloadEventsForLazyMode();
          }
        }, {
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            this.render();

            if ('lazy' in changes) {
              changes.lazy.currentValue ? this.loadEventsForLazyMode() : this.unloadEventsForLazyMode();
            }
          }
        }]);

        return CircleProgressComponent;
      }();

      CircleProgressComponent.ɵfac = function CircleProgressComponent_Factory(t) {
        return new (t || CircleProgressComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](CircleProgressOptions), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]));
      };

      CircleProgressComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: CircleProgressComponent,
        selectors: [["circle-progress"]],
        inputs: {
          name: "name",
          "class": "class",
          backgroundGradient: "backgroundGradient",
          backgroundColor: "backgroundColor",
          backgroundGradientStopColor: "backgroundGradientStopColor",
          backgroundOpacity: "backgroundOpacity",
          backgroundStroke: "backgroundStroke",
          backgroundStrokeWidth: "backgroundStrokeWidth",
          backgroundPadding: "backgroundPadding",
          radius: "radius",
          space: "space",
          percent: "percent",
          toFixed: "toFixed",
          maxPercent: "maxPercent",
          renderOnClick: "renderOnClick",
          units: "units",
          unitsFontSize: "unitsFontSize",
          unitsFontWeight: "unitsFontWeight",
          unitsColor: "unitsColor",
          outerStrokeGradient: "outerStrokeGradient",
          outerStrokeWidth: "outerStrokeWidth",
          outerStrokeColor: "outerStrokeColor",
          outerStrokeGradientStopColor: "outerStrokeGradientStopColor",
          outerStrokeLinecap: "outerStrokeLinecap",
          innerStrokeColor: "innerStrokeColor",
          innerStrokeWidth: "innerStrokeWidth",
          titleFormat: "titleFormat",
          title: "title",
          titleColor: "titleColor",
          titleFontSize: "titleFontSize",
          titleFontWeight: "titleFontWeight",
          subtitleFormat: "subtitleFormat",
          subtitle: "subtitle",
          subtitleColor: "subtitleColor",
          subtitleFontSize: "subtitleFontSize",
          subtitleFontWeight: "subtitleFontWeight",
          imageSrc: "imageSrc",
          imageHeight: "imageHeight",
          imageWidth: "imageWidth",
          animation: "animation",
          animateTitle: "animateTitle",
          animateSubtitle: "animateSubtitle",
          animationDuration: "animationDuration",
          showTitle: "showTitle",
          showSubtitle: "showSubtitle",
          showUnits: "showUnits",
          showImage: "showImage",
          showBackground: "showBackground",
          showInnerStroke: "showInnerStroke",
          clockwise: "clockwise",
          responsive: "responsive",
          startFromZero: "startFromZero",
          showZeroOuterStroke: "showZeroOuterStroke",
          lazy: "lazy",
          templateOptions: ["options", "templateOptions"]
        },
        outputs: {
          onClick: "onClick"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
        decls: 1,
        vars: 1,
        consts: [["xmlns", "http://www.w3.org/2000/svg", "preserveAspectRatio", "xMidYMid meet", 3, "click", 4, "ngIf"], ["xmlns", "http://www.w3.org/2000/svg", "preserveAspectRatio", "xMidYMid meet", 3, "click"], [4, "ngIf"], ["alignment-baseline", "baseline", 4, "ngIf"], ["preserveAspectRatio", "none", 4, "ngIf"], ["offset", "5%"], ["offset", "95%"], ["alignment-baseline", "baseline"], [4, "ngFor", "ngForOf"], ["preserveAspectRatio", "none"]],
        template: function CircleProgressComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, CircleProgressComponent__svg_svg_0_Template, 9, 11, "svg", 0);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.svg);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]],
        encapsulation: 2
      });

      CircleProgressComponent.ctorParameters = function () {
        return [{
          type: CircleProgressOptions
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]]
          }]
        }];
      };

      CircleProgressComponent.propDecorators = {
        onClick: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        name: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        "class": [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        backgroundGradient: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        backgroundColor: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        backgroundGradientStopColor: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        backgroundOpacity: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        backgroundStroke: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        backgroundStrokeWidth: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        backgroundPadding: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        radius: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        space: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        percent: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        toFixed: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        maxPercent: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        renderOnClick: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        units: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        unitsFontSize: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        unitsFontWeight: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        unitsColor: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        outerStrokeGradient: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        outerStrokeWidth: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        outerStrokeColor: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        outerStrokeGradientStopColor: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        outerStrokeLinecap: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        innerStrokeColor: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        innerStrokeWidth: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        titleFormat: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        title: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        titleColor: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        titleFontSize: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        titleFontWeight: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        subtitleFormat: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        subtitle: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        subtitleColor: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        subtitleFontSize: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        subtitleFontWeight: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        imageSrc: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        imageHeight: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        imageWidth: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        animation: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        animateTitle: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        animateSubtitle: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        animationDuration: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        showTitle: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        showSubtitle: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        showUnits: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        showImage: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        showBackground: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        showInnerStroke: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        clockwise: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        responsive: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        startFromZero: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        showZeroOuterStroke: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        lazy: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        templateOptions: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['options']
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CircleProgressComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'circle-progress',
            template: "\n        <svg xmlns=\"http://www.w3.org/2000/svg\" *ngIf=\"svg\"\n             [attr.viewBox]=\"svg.viewBox\" preserveAspectRatio=\"xMidYMid meet\"\n             [attr.height]=\"svg.height\" [attr.width]=\"svg.width\" (click)=\"emitClickEvent($event)\" [attr.class]=\"options.class\">\n            <defs>\n                <linearGradient *ngIf=\"options.outerStrokeGradient\" [attr.id]=\"svg.outerLinearGradient.id\">\n                    <stop offset=\"5%\" [attr.stop-color]=\"svg.outerLinearGradient.colorStop1\"  [attr.stop-opacity]=\"1\"/>\n                    <stop offset=\"95%\" [attr.stop-color]=\"svg.outerLinearGradient.colorStop2\" [attr.stop-opacity]=\"1\"/>\n                </linearGradient>\n                <radialGradient *ngIf=\"options.backgroundGradient\" [attr.id]=\"svg.radialGradient.id\">\n                    <stop offset=\"5%\" [attr.stop-color]=\"svg.radialGradient.colorStop1\" [attr.stop-opacity]=\"1\"/>\n                    <stop offset=\"95%\" [attr.stop-color]=\"svg.radialGradient.colorStop2\" [attr.stop-opacity]=\"1\"/>\n                </radialGradient>\n            </defs>\n            <ng-container *ngIf=\"options.showBackground\">\n                <circle *ngIf=\"!options.backgroundGradient\"\n                        [attr.cx]=\"svg.backgroundCircle.cx\"\n                        [attr.cy]=\"svg.backgroundCircle.cy\"\n                        [attr.r]=\"svg.backgroundCircle.r\"\n                        [attr.fill]=\"svg.backgroundCircle.fill\"\n                        [attr.fill-opacity]=\"svg.backgroundCircle.fillOpacity\"\n                        [attr.stroke]=\"svg.backgroundCircle.stroke\"\n                        [attr.stroke-width]=\"svg.backgroundCircle.strokeWidth\"/>\n                <circle *ngIf=\"options.backgroundGradient\"\n                        [attr.cx]=\"svg.backgroundCircle.cx\"\n                        [attr.cy]=\"svg.backgroundCircle.cy\"\n                        [attr.r]=\"svg.backgroundCircle.r\"\n                        attr.fill=\"url(#{{svg.radialGradient.id}})\"\n                        [attr.fill-opacity]=\"svg.backgroundCircle.fillOpacity\"\n                        [attr.stroke]=\"svg.backgroundCircle.stroke\"\n                        [attr.stroke-width]=\"svg.backgroundCircle.strokeWidth\"/>\n            </ng-container>            \n            <circle *ngIf=\"options.showInnerStroke\"\n                    [attr.cx]=\"svg.circle.cx\"\n                    [attr.cy]=\"svg.circle.cy\"\n                    [attr.r]=\"svg.circle.r\"\n                    [attr.fill]=\"svg.circle.fill\"\n                    [attr.stroke]=\"svg.circle.stroke\"\n                    [attr.stroke-width]=\"svg.circle.strokeWidth\"/>\n            <ng-container *ngIf=\"+options.percent!==0 || options.showZeroOuterStroke\">\n                <path *ngIf=\"!options.outerStrokeGradient\"\n                        [attr.d]=\"svg.path.d\"\n                        [attr.stroke]=\"svg.path.stroke\"\n                        [attr.stroke-width]=\"svg.path.strokeWidth\"\n                        [attr.stroke-linecap]=\"svg.path.strokeLinecap\"\n                        [attr.fill]=\"svg.path.fill\"/>\n                <path *ngIf=\"options.outerStrokeGradient\"\n                        [attr.d]=\"svg.path.d\"\n                        attr.stroke=\"url(#{{svg.outerLinearGradient.id}})\"\n                        [attr.stroke-width]=\"svg.path.strokeWidth\"\n                        [attr.stroke-linecap]=\"svg.path.strokeLinecap\"\n                        [attr.fill]=\"svg.path.fill\"/>\n            </ng-container>\n            <text *ngIf=\"!options.showImage && (options.showTitle || options.showUnits || options.showSubtitle)\"\n                  alignment-baseline=\"baseline\"\n                  [attr.x]=\"svg.circle.cx\"\n                  [attr.y]=\"svg.circle.cy\"\n                  [attr.text-anchor]=\"svg.title.textAnchor\">\n                <ng-container *ngIf=\"options.showTitle\">\n                    <tspan *ngFor=\"let tspan of svg.title.tspans\"\n                           [attr.x]=\"svg.title.x\"\n                           [attr.y]=\"svg.title.y\"\n                           [attr.dy]=\"tspan.dy\"\n                           [attr.font-size]=\"svg.title.fontSize\"\n                           [attr.font-weight]=\"svg.title.fontWeight\"\n                           [attr.fill]=\"svg.title.color\">{{tspan.span}}</tspan>\n                </ng-container>\n                <tspan *ngIf=\"options.showUnits\"\n                       [attr.font-size]=\"svg.units.fontSize\"\n                       [attr.font-weight]=\"svg.units.fontWeight\"\n                       [attr.fill]=\"svg.units.color\">{{svg.units.text}}</tspan>\n                <ng-container *ngIf=\"options.showSubtitle\">\n                    <tspan *ngFor=\"let tspan of svg.subtitle.tspans\"\n                           [attr.x]=\"svg.subtitle.x\"\n                           [attr.y]=\"svg.subtitle.y\"\n                           [attr.dy]=\"tspan.dy\"\n                           [attr.font-size]=\"svg.subtitle.fontSize\"\n                           [attr.font-weight]=\"svg.subtitle.fontWeight\"\n                           [attr.fill]=\"svg.subtitle.color\">{{tspan.span}}</tspan>\n                </ng-container>\n            </text>\n            <image *ngIf=\"options.showImage\" preserveAspectRatio=\"none\" \n                [attr.height]=\"svg.image.height\"\n                [attr.width]=\"svg.image.width\"\n                [attr.xlink:href]=\"svg.image.src\"\n                [attr.x]=\"svg.image.x\"\n                [attr.y]=\"svg.image.y\"\n            />\n        </svg>\n    "
          }]
        }], function () {
          return [{
            type: CircleProgressOptions
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]]
            }]
          }];
        }, {
          onClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          name: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          "class": [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          backgroundGradient: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          backgroundColor: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          backgroundGradientStopColor: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          backgroundOpacity: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          backgroundStroke: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          backgroundStrokeWidth: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          backgroundPadding: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          radius: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          space: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          percent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          toFixed: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          maxPercent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          renderOnClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          units: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          unitsFontSize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          unitsFontWeight: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          unitsColor: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          outerStrokeGradient: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          outerStrokeWidth: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          outerStrokeColor: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          outerStrokeGradientStopColor: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          outerStrokeLinecap: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          innerStrokeColor: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          innerStrokeWidth: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          titleFormat: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          title: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          titleColor: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          titleFontSize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          titleFontWeight: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          subtitleFormat: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          subtitle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          subtitleColor: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          subtitleFontSize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          subtitleFontWeight: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          imageSrc: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          imageHeight: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          imageWidth: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          animation: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          animateTitle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          animateSubtitle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          animationDuration: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          showTitle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          showSubtitle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          showUnits: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          showImage: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          showBackground: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          showInnerStroke: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          clockwise: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          responsive: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          startFromZero: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          showZeroOuterStroke: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          lazy: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          templateOptions: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['options']
          }]
        });
      })();

      var NgCircleProgressModule = /*#__PURE__*/function () {
        function NgCircleProgressModule() {
          _classCallCheck(this, NgCircleProgressModule);
        }

        _createClass(NgCircleProgressModule, null, [{
          key: "forRoot",
          value: function forRoot() {
            var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            return {
              ngModule: NgCircleProgressModule,
              providers: [{
                provide: CircleProgressOptions,
                useValue: options
              }]
            };
          }
        }]);

        return NgCircleProgressModule;
      }();

      NgCircleProgressModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: NgCircleProgressModule
      });
      NgCircleProgressModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function NgCircleProgressModule_Factory(t) {
          return new (t || NgCircleProgressModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](NgCircleProgressModule, {
          declarations: function declarations() {
            return [CircleProgressComponent];
          },
          imports: function imports() {
            return [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]];
          },
          exports: function exports() {
            return [CircleProgressComponent];
          }
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgCircleProgressModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [CircleProgressComponent],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
            exports: [CircleProgressComponent]
          }]
        }], null, null);
      })();
      /*
       * Public API Surface of ng-circle-progress
       */

      /**
       * Generated bundle index. Do not edit.
       */
      //# sourceMappingURL=ng-circle-progress.js.map

      /***/

    },

    /***/
    "lzfX":
    /*!***********************************************!*\
      !*** ./src/app/scheduler/scheduler.module.ts ***!
      \***********************************************/

    /*! exports provided: SchedulerPageModule */

    /***/
    function lzfX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SchedulerPageModule", function () {
        return SchedulerPageModule;
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


      var _scheduler_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./scheduler-routing.module */
      "mtip");
      /* harmony import */


      var _scheduler_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./scheduler.page */
      "GqeI");
      /* harmony import */


      var ng_circle_progress__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ng-circle-progress */
      "K1R0");

      var SchedulerPageModule = function SchedulerPageModule() {
        _classCallCheck(this, SchedulerPageModule);
      };

      SchedulerPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], ng_circle_progress__WEBPACK_IMPORTED_MODULE_7__["NgCircleProgressModule"].forRoot({
          // set defaults here
          radius: 100,
          outerStrokeWidth: 16,
          innerStrokeWidth: 8,
          outerStrokeColor: "#78C000",
          innerStrokeColor: "#C7E596",
          animationDuration: 300
        }), _scheduler_routing_module__WEBPACK_IMPORTED_MODULE_5__["SchedulerPageRoutingModule"]],
        declarations: [_scheduler_page__WEBPACK_IMPORTED_MODULE_6__["SchedulerPage"]]
      })], SchedulerPageModule);
      /***/
    },

    /***/
    "mtip":
    /*!*******************************************************!*\
      !*** ./src/app/scheduler/scheduler-routing.module.ts ***!
      \*******************************************************/

    /*! exports provided: SchedulerPageRoutingModule */

    /***/
    function mtip(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SchedulerPageRoutingModule", function () {
        return SchedulerPageRoutingModule;
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


      var _scheduler_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./scheduler.page */
      "GqeI");

      var routes = [{
        path: '',
        component: _scheduler_page__WEBPACK_IMPORTED_MODULE_3__["SchedulerPage"]
      }];

      var SchedulerPageRoutingModule = function SchedulerPageRoutingModule() {
        _classCallCheck(this, SchedulerPageRoutingModule);
      };

      SchedulerPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], SchedulerPageRoutingModule);
      /***/
    },

    /***/
    "zce8":
    /*!*************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/scheduler/scheduler.page.html ***!
      \*************************************************************************************/

    /*! exports provided: default */

    /***/
    function zce8(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button (click)=\"back()\" default-href=\"tabs\" text=\"Geri\" ></ion-back-button>\n    </ion-buttons>\n\n    <ion-title>{{taskname}}</ion-title>\n\n\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <center>\n    <p class='{{_event}}'> {{event}}</p>\n\n\n  <br>\n\n<div (click)=\"timerEnable()\"> \n  <circle-progress\n  [percent]=\" 100 -timePercent\"\n  [radius]=\"100\"\n  [outerStrokeWidth]=\"16\"\n  [innerStrokeWidth]=\"8\"\n  [outerStrokeColor]=\"'#78C000'\"\n  [innerStrokeColor]=\"'#C7E596'\"\n  [animation]=\"true\"\n  [animationDuration]=\"300\"\n  >\n  </circle-progress>\n</div>\n\n  <ion-fab-button style=\"--background:#78C000\" (click)=\"timerEnable()\">\n    <ion-icon [name]=\"fabIcon\"></ion-icon>\n  </ion-fab-button>\n\n\n<p> {{ minuteLeft }}  dakika {{ secondLeft }} saniye</p>\n\n<!-- \n<ion-grid>\n  <ion-row>\n    <ion-col>\n      <div class=\"relax\">\n        1 of 3\n      </div>\n      <br>\n      <div class=\"relax\">\n        1 of 3\n      </div>\n      <br>\n      <div class=\"relax\">\n        1 of 3\n      </div>\n    </ion-col>\n\n    <ion-col>\n      <div class=\"work \">\n        1 of 2\n      </div>\n    </ion-col>\n\n\n  </ion-row>\n\n</ion-grid>\n-->\n\n\n<br>\n\n<audio controls #audio style=\"visibility: hidden;\">\n  <source src=\"../../assets/triangle.mp3\" type=\"audio/mpeg\">\n</audio>\n\n\n\n\n<!--\n\n<ion-button class=\"specialbutton\" (click)=\"exit()\" shape=\"round\">Çıkış</ion-button>\n -->\n\n\n</center>\n\n</ion-content>\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=scheduler-scheduler-module-es5.js.map