(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab1-tab1-module"], {
    /***/
    "8MT7":
    /*!***************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab1/tab1.page.html ***!
      \***************************************************************************/

    /*! exports provided: default */

    /***/
    function MT7(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header [translucent]=\"true\">\n\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n  <ion-header collapse=\"condense\">\n    <ion-toolbar>\n      <ion-title size=\"medium\" style=\"text-align: left; padding-left: 5%;\">Günlük Görevleriniz\n      </ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content padding>\n    <ion-item>\n        <ion-input type=\"text\" placeholder=\"Görev ekleyin...\"\n        [(ngModel)]=\"taskName\"></ion-input>\n\n        <div class=\"item-note\" item-end>\n        <ion-button color=\"tertiary\" (click)=\"addTask()\">\n          <ion-icon name=\"add\"></ion-icon>\n        </ion-button>\n      </div>\n    </ion-item>\n    <div padding>\n      <ion-list>\n        <ion-item *ngFor=\"let todo of taskList.slice().reverse(); let i = index\" >\n          <div *ngIf=\"todo.isFinished == false\"> {{todo.taskName}}</div>\n          <div *ngIf=\"todo.isFinished == true\" class=\"task_finished\"> {{todo.taskName}}</div>\n        <div class=\"item-note\" slot=\"end\">\n        <ion-button color=\"success\" clear (click)=\"runTask(i)\">\n            <ion-icon name=\"caret-forward-outline\"></ion-icon>\n        </ion-button>\n        <ion-button color=\"danger\" clear (click)=\"deleteTask(i)\">\n        <ion-icon name=\"trash\"></ion-icon>\n        </ion-button>\n        </div>\n        </ion-item>\n\n\n      </ion-list>\n    </div>\n    </ion-content>\n\n\n\n  <div id=\"background-mark\">\n    <div class=\"brand\" >Deskmate</div> <p>{{motivation}}</p>\n  </div>\n\n\n  \n</ion-content>\n";
      /***/
    },

    /***/
    "Mzl2":
    /*!***********************************!*\
      !*** ./src/app/tab1/tab1.page.ts ***!
      \***********************************/

    /*! exports provided: Tab1Page */

    /***/
    function Mzl2(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Tab1Page", function () {
        return Tab1Page;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_tab1_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./tab1.page.html */
      "8MT7");
      /* harmony import */


      var _tab1_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./tab1.page.scss */
      "rWyk");
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


      var moment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! moment */
      "wd/R");
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_6__);
      /* harmony import */


      var _provider_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../provider.service */
      "74+B");

      var Tab1Page = /*#__PURE__*/function () {
        function Tab1Page(router, storage, provider) {
          var _this = this;

          _classCallCheck(this, Tab1Page);

          this.router = router;
          this.storage = storage;
          this.provider = provider;
          this.taskName = ""; // Entered Text

          this.motivation = "";
          this.taskList = []; // Array to store tasks

          this.today = "";
          this.motivationList = ["Bırakma. Şimdi acı çek ve hayatının geri kalanını bir şampiyon olarak yaşa.", "Ne istediğime karar verdim ve başarana kadar asla pes etmeyeceğim.", "İlk önce izlerler. Başarınca nefret ederler. Sonra da taklit ederler.", "Yürürsen yakındır bakarsan uzak.", "Bazıları başarıyı sadece hayal ederken, bazıları ise her sabah erkenden kalkar ve hayallerini gerçekleştirir.", "Şimdi çalış, sonra ağlarsın.", "Bu hayatta her şey zor olsa da hiçbir zaman imkansız değildir.", "Yalnızca bugün yaptıkların, bütün yarınlarını değiştirebilir.", "Bundan bir yıl sonra bugün başlamış olmayı dileyeceksin.", "Başarı her gün tekrarlanan küçük çabaların toplamıdır.", "Senin almaya cesaret edemediğin riskleri alanlar, senin yaşamak istediğin hayatı yaşarlar. - Sokrates", "Yüzüstü yere serilseniz bile, hala ileriye doğru hareket ediyorsunuzdur.", "Durmadığın sürece ne kadar yavaş gittiğin önemli değil.", "Hayatımın erken dönemlerinde öğrendim ki eğer bir şeyi istiyorsan, biraz gürültü yapsan iyi olur.", "Başarıdaki kararlılığım yeterince güçlü ise başarısızlık asla beni yakalayamaz!", "Arkamda bıraktığım köprüleri yıkarım ki, başarmaktan başka çarem kalmasın.", "Yapamayacağını düşündüğün şeyi yap ve başarısız olursan tekrar dene. Takla atmayan adam ipte hiçbir zaman yürümeyenlerdir…", "Daha iyisini yapmanın bir yolu var ise bulun ve kimseye kulak asmayın!", "İnsanların en büyük zayıflığı pes etmektir. Başarılı olmanın en kesin kuralı ise her zaman bir kez daha denemektir.", "Bir gün kalkacaksınız ve hep hayal ettiğiniz şeyleri yapmaya vakit kalmamış olacak. Şimdi tam zamanı. Harekete geçin.", "Hayatımı sadece sen değiştirebilirim. Kimse senin için bunu yapmaz! (Deskmate sana yardımcı olur)", "Hayatın %10’u sana olanların, %90’ı ise buna nasıl cevap verdiğinden ibarettir.", "Hiçbir engel yürekteki kadar büyük değildir.", "İyi yapılmış bir iş, iyi söylenmiş bir işten daha iyidir", "Dünden ders çıkar, bugünü yaşa, yarın için umut et!", "Zor iş olmadan, yabani otlardan başka bir şey büyümez!"];
          this.isPageLoaded = true;
          this.motivation = this.getRandomMotivation();
          this.today = moment__WEBPACK_IMPORTED_MODULE_6__(new Date()).format('DD.MM.YYYY');
          this.storage.get(this.today).then(function (val) {
            _this.renderTasks(val);

            _this.reorderTask();
          });

          this.provider.tasks_refresh = function () {
            console.log("gorevler");
            _this.isPageLoaded = true;
            _this.motivation = _this.getRandomMotivation();
            _this.today = moment__WEBPACK_IMPORTED_MODULE_6__(new Date()).format('DD.MM.YYYY');

            _this.storage.get(_this.today).then(function (val) {
              _this.renderTasks(val);

              _this.reorderTask();
            });
          };
        }

        _createClass(Tab1Page, [{
          key: "renderTasks",
          value: function renderTasks(val) {
            this.taskList = [];
            var taskjson = {};
            var len = 0;

            if (this.isValidJson(val)) {
              taskjson = JSON.parse(val);
              len = this.countJson(taskjson);
            } else {
              this.storage.set(this.today, '');
              taskjson = {};
              len = 0;
            }

            for (var i = 0; i < len; i++) {
              this.taskList.push(taskjson[i]);
            }
          }
        }, {
          key: "addTask",
          value: function addTask() {
            if (this.taskName.length > 0) {
              var task = {};
              task['taskName'] = this.taskName;
              task['duration'] = '';
              task['isFinished'] = false;
              this.taskList.push(task);
              this.storage_commit();
              this.taskName = '';
              this.reorderTask();
            }
          }
        }, {
          key: "deleteTask",
          value: function deleteTask(index) {
            this.taskList.splice(this.taskList.length - index - 1, 1);
            this.reorderTask();
            this.storage_commit();
          }
        }, {
          key: "reorderTask",
          value: function reorderTask() {
            this.taskList.sort(function (a, b) {
              return b['isFinished'] - a['isFinished'];
            });
          }
        }, {
          key: "storage_commit",
          value: function storage_commit() {
            //reorder tasklist
            this.reorderTask(); //save new tasklist

            this.storage.set(this.today, JSON.stringify(this.taskList));
          }
        }, {
          key: "countJson",
          value: function countJson(json) {
            return Object.keys(json).length;
          }
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
          key: "runTask",
          value: function runTask(index) {
            index = this.taskList.length - index - 1;
            var data = {
              day: this.today,
              taskname: this.taskList[index]["taskName"],
              taskID: index,
              duration: this.taskList[index]["duration"],
              isFinished: this.taskList[index]["isFinished"]
            };
            var navigationExtras = {
              queryParams: {
                special: JSON.stringify(data)
              }
            };
            this.router.navigate(['scheduler'], navigationExtras);
          }
        }, {
          key: "getRandomMotivation",
          value: function getRandomMotivation() {
            var rand = Math.floor(Math.random() * this.motivationList.length + 0);
            return this.motivationList[rand];
          }
        }]);

        return Tab1Page;
      }();

      Tab1Page.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"]
        }, {
          type: _provider_service__WEBPACK_IMPORTED_MODULE_7__["ProviderService"]
        }];
      };

      Tab1Page = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-tab1',
        template: _raw_loader_tab1_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_tab1_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], Tab1Page); //ionic generate page scheduler

      /***/
    },

    /***/
    "XOzS":
    /*!*********************************************!*\
      !*** ./src/app/tab1/tab1-routing.module.ts ***!
      \*********************************************/

    /*! exports provided: Tab1PageRoutingModule */

    /***/
    function XOzS(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Tab1PageRoutingModule", function () {
        return Tab1PageRoutingModule;
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


      var _tab1_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./tab1.page */
      "Mzl2");

      var routes = [{
        path: '',
        component: _tab1_page__WEBPACK_IMPORTED_MODULE_3__["Tab1Page"]
      }];

      var Tab1PageRoutingModule = function Tab1PageRoutingModule() {
        _classCallCheck(this, Tab1PageRoutingModule);
      };

      Tab1PageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], Tab1PageRoutingModule);
      /***/
    },

    /***/
    "rWyk":
    /*!*************************************!*\
      !*** ./src/app/tab1/tab1.page.scss ***!
      \*************************************/

    /*! exports provided: default */

    /***/
    function rWyk(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "#background-mark {\n  text-align: center;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n#background-mark strong {\n  font-size: 20px;\n  line-height: 26px;\n  z-index: -10;\n}\n\n#background-mark p {\n  font-size: 16px;\n  line-height: 22px;\n  color: #8c8c8c;\n  margin: 0;\n}\n\n#background-mark .brand {\n  font-size: 16px;\n  line-height: 22px;\n  color: #9561ad;\n  margin: 0;\n}\n\n#background-mark a {\n  text-decoration: none;\n}\n\n.task_finished {\n  color: #8a8a8a;\n  text-decoration: line-through;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3RhYjEucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksa0JBQUE7RUFFQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsUUFBQTtFQUNBLDJCQUFBO0FBRko7O0FBS0U7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0FBRko7O0FBS0U7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFFQSxjQUFBO0VBRUEsU0FBQTtBQUpKOztBQU9FO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBRUEsY0FBQTtFQUVBLFNBQUE7QUFOSjs7QUFVRTtFQUNFLHFCQUFBO0FBUEo7O0FBVUU7RUFFRSxjQUFBO0VBQ0EsNkJBQUE7QUFSSiIsImZpbGUiOiJ0YWIxLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuXG4jYmFja2dyb3VuZC1tYXJrIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIHRvcDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgfVxuICBcbiAgI2JhY2tncm91bmQtbWFyayAgc3Ryb25nIHtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgbGluZS1oZWlnaHQ6IDI2cHg7XG4gICAgei1pbmRleCA6LTEwO1xuICB9XG4gIFxuICAjYmFja2dyb3VuZC1tYXJrICBwIHtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgbGluZS1oZWlnaHQ6IDIycHg7XG4gIFxuICAgIGNvbG9yOiAjOGM4YzhjO1xuICBcbiAgICBtYXJnaW46IDA7XG4gIH1cblxuICAjYmFja2dyb3VuZC1tYXJrICAuYnJhbmQge1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBsaW5lLWhlaWdodDogMjJweDtcbiAgXG4gICAgY29sb3I6ICM5NTYxYWQ7XG4gIFxuICAgIG1hcmdpbjogMDtcbiAgfVxuICBcbiAgXG4gICNiYWNrZ3JvdW5kLW1hcmsgIGEge1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgfVxuXG4gIC50YXNrX2ZpbmlzaGVke1xuICAgIFxuICAgIGNvbG9yOiM4YThhOGE7XG4gICAgdGV4dC1kZWNvcmF0aW9uOmxpbmUtdGhyb3VnaDtcbiAgfSJdfQ== */";
      /***/
    },

    /***/
    "tmrb":
    /*!*************************************!*\
      !*** ./src/app/tab1/tab1.module.ts ***!
      \*************************************/

    /*! exports provided: Tab1PageModule */

    /***/
    function tmrb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Tab1PageModule", function () {
        return Tab1PageModule;
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


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _tab1_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./tab1.page */
      "Mzl2");
      /* harmony import */


      var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../explore-container/explore-container.module */
      "qtYk");
      /* harmony import */


      var _tab1_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./tab1-routing.module */
      "XOzS");

      var Tab1PageModule = function Tab1PageModule() {
        _classCallCheck(this, Tab1PageModule);
      };

      Tab1PageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_6__["ExploreContainerComponentModule"], _tab1_routing_module__WEBPACK_IMPORTED_MODULE_7__["Tab1PageRoutingModule"]],
        declarations: [_tab1_page__WEBPACK_IMPORTED_MODULE_5__["Tab1Page"]]
      })], Tab1PageModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=tab1-tab1-module-es5.js.map