(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["survey-survey-module"],{

/***/ "0Mao":
/*!***************************************!*\
  !*** ./src/app/survey/survey.page.ts ***!
  \***************************************/
/*! exports provided: SurveyPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SurveyPage", function() { return SurveyPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_survey_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./survey.page.html */ "Ki//");
/* harmony import */ var _survey_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./survey.page.scss */ "3dlz");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/storage */ "e8h1");








let SurveyPage = class SurveyPage {
    constructor(toastController, http, route, router, storage) {
        this.toastController = toastController;
        this.http = http;
        this.route = route;
        this.router = router;
        this.storage = storage;
        this.surveyId = 0;
        this.answerList = [];
        this.surveylist = [
            {
                "ques": "Yaş aralığınız nedir ? ",
                "A": "12-20",
                "B": "20-25",
                "C": "25-30",
                "D": "30-50",
                "E": "50+"
            },
            {
                "ques": "Aşağıdakilerden hangisine kendinizi daha 'ait' hissedersiniz ?",
                "A": "Deniz kenarı, sıcak bir sahil kasabası",
                "B": "Kalabalık, kasfetli, puslu bir metropol",
                "C": "Bozkır veya dağlık, iliklere kadar işleyen bir soğuk",
                "D": "Sapsarı buğday tarlaları ile dolu bir kırsal kesim",
                "E": "Küçük ve ortalama bir şehir"
            },
            {
                "ques": "Ne kadar duygusalsınız ?",
                "A": "Çok fazla",
                "B": "Ortalamadan fazla",
                "C": "Normal",
                "D": "Az duygusal",
                "E": "Kendimi kandırmaya meyilliyim"
            },
            {
                "ques": "Hangi renk size daha çok hitap ediyor ?",
                "A": "Gökyüzü Mavisi",
                "B": "Gece Siyahı",
                "C": "Kar Beyaz",
                "D": "Orman Yeşili",
                "E": "Bayrak Kırmızısı"
            },
            {
                "ques": "Kişisel bakımınıza ne kadar dikkat edersiniz ? ",
                "A": "Çok özenirim",
                "B": "Standart",
                "C": "Pek özenmem",
                "D": "Umursamam",
                "E": ""
            },
            {
                "ques": "Ne sıklıkla yalan söylersiniz ?",
                "A": "Yalan söylemek alışkanlığımdır",
                "B": "Genellikle söylerim",
                "C": "Zorunda kalmadıkça söylemem",
                "D": "Nadiren söylerim",
                "E": "Asla söylemem"
            },
            {
                "ques": "Ne sıklıkla bahane üretirsiniz ?",
                "A": "Her işi batırırım ve bahanem hazırdır",
                "B": "Sık bahane üretirim ancak vicdan azabı da çekerim",
                "C": "Biraz fazla üşengecimdir.",
                "D": "Pek bahane üretmem",
                "E": "Bahane üretmem, üretirsem de kendimi inandırmam"
            },
            {
                "ques": "Kendiniz ile barışık mısınız ?",
                "A": "Evet",
                "B": "Bazen",
                "C": "Hayır",
                "D": "",
                "E": ""
            },
            {
                "ques": "Arkadaşlarınız sizi nasıl tanımlar ?",
                "A": "Disiplinli, çok çalışkan",
                "B": "Genellikle çalışkan",
                "C": "Normal",
                "D": "Kaytarmaya meyilli ama bazen çalışabilir",
                "E": "Tembel"
            },
            {
                "ques": "Hayatta bir şeyleri elde etmek için kadar hırslısınız ?",
                "A": "Aşırı Çok",
                "B": "Çok",
                "C": "Orta",
                "D": "Az",
                "E": "Hiç."
            },
            {
                "ques": "Kibirli biri misiniz ?",
                "A": "Evet, ama kendime itiraf etmekte zorlanırım",
                "B": "Özgüvenliyim, kibirli değil",
                "C": "Değilim",
                "D": "",
                "E": ""
            },
            {
                "ques": "Sizce potansiyelinizin ne kadarını kullanıyorsunuz ?",
                "A": "%90 +",
                "B": "%75-%90",
                "C": "%50-%75",
                "D": "%25-%50",
                "E": "%0-%25"
            },
            {
                "ques": "Hangi meslek grubuna daha yakın hissediyorsunuz ?",
                "A": "Asker/Polis",
                "B": "Hukuk Personeli",
                "C": "Sağlık Personeli",
                "D": "Mühendislik",
                "E": "Sosyal Meslekler"
            },
            {
                "ques": "Ne kadar meraklısınız ? algılarınız açık mı ? Çevrenizde olan bitenden haberdar mısınız ?",
                "A": "Evet",
                "B": "Bazen",
                "C": "Nadiren",
                "D": "Dünyadan kopuğum",
                "E": ""
            },
            {
                "ques": "Ne kadar streslisiniz ?",
                "A": "Çok fazla",
                "B": "Fazla",
                "C": "Orta",
                "D": "Az",
                "E": "Çok rahatım"
            },
            {
                "ques": "İşinizi stres edinmeniz ne sıklıkla olur ?",
                "A": "Çok fazla",
                "B": "Fazla",
                "C": "Orta",
                "D": "Az",
                "E": "Çok nadiren"
            },
            {
                "ques": "Sosyal medyada ne sıklıkla vakit geçirirsiniz ?",
                "A": "Çok fazla. Tumblr bile kullanırım.",
                "B": "Fazla",
                "C": "Orta",
                "D": "Az",
                "E": "Sosyal medya kullanmıyorum"
            },
            {
                "ques": "Sosyal medya uygulamalarından kullanım sürelerine bakın. Bir önceki cevabınız ile çelişiyor musunuz ?",
                "A": "Evet",
                "B": "Biraz",
                "C": "Çok değil",
                "D": "Hayır",
                "E": ""
            },
            {
                "ques": "Ne kadar sabırlısınız ? ",
                "A": "Çok",
                "B": "Fazla",
                "C": "Orta",
                "D": "Az",
                "E": "Sabırsızım"
            },
            {
                "ques": "Çevreniz sizi ne kadar ince düşünceli olarak görür ? ",
                "A": "Çok fazla",
                "B": "çok",
                "C": "Orta",
                "D": "Az",
                "E": "Çok az"
            },
            {
                "ques": "Ne tarz müzikler dinlersiniz ?",
                "A": "Sert, hiddetli (Rap vs.)",
                "B": "Pop, eğlencelik",
                "C": "Klasik, sakin",
                "D": "Yabancı kültürlü müzikler",
                "E": "Türküler - ulusal müzikler"
            },
        ];
        this.checkLogin();
        this.currentSurvey = this.surveylist[this.surveyId];
        //init surveys
        setTimeout(() => {
            this.renderSurvey();
            this.getDBFromServer();
        }, 500);
    }
    /* In Survey*/
    getAnswer(ans) {
        const element_header = document.querySelector("#" + ans);
        const element_footer = document.querySelector("#" + ans + "_");
        element_header.style.backgroundColor = "#37bf62";
        element_header.style.color = "white";
        element_footer.style.backgroundColor = "#37bf62";
        element_footer.style.color = "white";
        this.answerList[this.surveyId] = ans;
        this.nextSurvey();
    }
    nextSurvey() {
        if (this.surveyId > 19) {
            this.analyzeEager();
        }
        else {
            this.surveyId++;
            setTimeout(() => {
                this.renderSurvey();
            }, 500);
        }
    }
    renderSurvey() {
        this.currentSurvey = this.surveylist[this.surveyId];
        const option_a = document.querySelector('#A');
        const option_a_ = document.querySelector('#A_');
        const option_b = document.querySelector('#B');
        const option_b_ = document.querySelector('#B_');
        const option_c = document.querySelector('#C');
        const option_c_ = document.querySelector('#C_');
        const option_d = document.querySelector('#D');
        const option_d_ = document.querySelector('#D_');
        const option_e = document.querySelector('#E');
        const option_e_ = document.querySelector('#E_');
        option_a.style.backgroundColor = "white";
        option_b.style.backgroundColor = "white";
        option_c.style.backgroundColor = "white";
        option_d.style.backgroundColor = "white";
        option_e.style.backgroundColor = "white";
        option_a_.style.color = "black";
        option_b_.style.color = "black";
        option_c_.style.color = "black";
        option_d_.style.color = "black";
        option_e_.style.color = "black";
        option_a_.style.backgroundColor = "white";
        option_b_.style.backgroundColor = "white";
        option_c_.style.backgroundColor = "white";
        option_d_.style.backgroundColor = "white";
        option_e_.style.backgroundColor = "white";
        if (this.currentSurvey.A === '') {
            option_a.style.visibility = 'hidden';
        }
        else {
            option_a.style.visibility = 'visible';
        }
        if (this.currentSurvey.B === '') {
            option_b.style.visibility = 'hidden';
        }
        else {
            option_b.style.visibility = 'visible';
        }
        if (this.currentSurvey.C === '') {
            option_c.style.visibility = 'hidden';
        }
        else {
            option_c.style.visibility = 'visible';
        }
        if (this.currentSurvey.D === '') {
            option_d.style.visibility = 'hidden';
        }
        else {
            option_d.style.visibility = 'visible';
        }
        if (this.currentSurvey.E === '') {
            option_e.style.visibility = 'hidden';
        }
        else {
            option_e.style.visibility = 'visible';
        }
    }
    surveyService() {
    }
    /* Todo : Get Json datas from server*/
    getDBFromServer() {
    }
    analyzeEager() {
        let jstr = JSON.stringify(this.answerList);
        console.log(jstr);
        let query = { key: 'analyzeEager', surveyResults: jstr, hash: this.hash_ };
        this.http.post('http://deskmate.aksoylu.space/handle.php', { data: query }).subscribe(data => {
            console.log(data);
            let response = data.response;
            if (response == "INVALID_HASH") {
                this.router.navigate(['auth']);
                this.presentToast("Bir problem var. Lütfen daha sonra tekrar deneyin");
            }
            else {
                this.storage.set("eager", response);
            }
        });
        this.router.navigate(['tabs']);
    }
    checkLogin() {
        this.storage.get("userhash").then((val) => {
            if (val.length < 30) {
                this.router.navigate(['auth']);
            }
            else {
                this.hash_ = val;
            }
        });
        return false;
    }
    presentToast(text) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: text,
                duration: 2000
            });
            toast.present();
        });
    }
};
SurveyPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ToastController"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_7__["Storage"] }
];
SurveyPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-survey',
        template: _raw_loader_survey_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_survey_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], SurveyPage);



/***/ }),

/***/ "3dlz":
/*!*****************************************!*\
  !*** ./src/app/survey/survey.page.scss ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".infotext {\n  padding-left: 5%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3N1cnZleS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSSxnQkFBQTtBQUFKIiwiZmlsZSI6InN1cnZleS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW5mb3RleHR7XG5cbiAgICBwYWRkaW5nLWxlZnQ6IDUlO1xufSJdfQ== */");

/***/ }),

/***/ "Ki//":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/survey/survey.page.html ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>Değerlendirme {{surveyId + 1}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n\n<ion-list>\n    \n\n\n  <ion-card>\n\n    <p class=\"infotext\">Uygulamaya ilk girdiğinizde sizi daha yakından tanıyabilmek için 20 sorudan oluşan bir anket uygularız. <br> Test boyunca kendinize dürüst olun. Bu veri size yardım etmek isteyen bir yapay zeka tarafından kullanılacaktır. </p>\n\n    <ion-card-header color=\"danger\">\n      <ion-card-title  ><ion-icon name=\"help-circle-outline\" ></ion-icon>  </ion-card-title>\n      <h3> {{currentSurvey.ques}} </h3>\n    </ion-card-header>\n  \n  </ion-card>\n\n\n  <ion-card id=\"A\"  (click)=\"getAnswer('A')\"  >\n    <ion-card-header>\n      <ion-card-title   >A.</ion-card-title>\n    </ion-card-header>\n  \n    <ion-card-content id=\"A_\">\n      {{currentSurvey.A}}\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card id=\"B\"  (click)=\"getAnswer('B')\" >\n    <ion-card-header>\n      <ion-card-title>B.</ion-card-title>\n    </ion-card-header>\n  \n    <ion-card-content id=\"B_\">\n      {{currentSurvey.B}}\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card id=\"C\"  (click)=\"getAnswer('C')\" >\n    <ion-card-header>\n      <ion-card-title>C.</ion-card-title>\n    </ion-card-header>\n  \n    <ion-card-content id=\"C_\">\n      {{currentSurvey.C}}\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card  id=\"D\"  (click)=\"getAnswer('D')\" >\n    <ion-card-header>\n      <ion-card-title>D.</ion-card-title>\n    </ion-card-header>\n  \n    <ion-card-content id=\"D_\">\n      {{currentSurvey.D}}\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card id=\"E\"  (click)=\"getAnswer('E')\" >\n    <ion-card-header>\n      <ion-card-title>E.</ion-card-title>\n    </ion-card-header>\n    <ion-card-content id=\"E_\">\n      {{currentSurvey.E}}\n    </ion-card-content>\n  </ion-card>\n\n</ion-list>\n\n</ion-content>\n");

/***/ }),

/***/ "UQSm":
/*!*****************************************!*\
  !*** ./src/app/survey/survey.module.ts ***!
  \*****************************************/
/*! exports provided: SurveyPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SurveyPageModule", function() { return SurveyPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _survey_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./survey-routing.module */ "lXyq");
/* harmony import */ var _survey_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./survey.page */ "0Mao");








let SurveyPageModule = class SurveyPageModule {
};
SurveyPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
            _survey_routing_module__WEBPACK_IMPORTED_MODULE_6__["SurveyPageRoutingModule"]
        ],
        declarations: [_survey_page__WEBPACK_IMPORTED_MODULE_7__["SurveyPage"]]
    })
], SurveyPageModule);



/***/ }),

/***/ "lXyq":
/*!*************************************************!*\
  !*** ./src/app/survey/survey-routing.module.ts ***!
  \*************************************************/
/*! exports provided: SurveyPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SurveyPageRoutingModule", function() { return SurveyPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _survey_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./survey.page */ "0Mao");




const routes = [
    {
        path: '',
        component: _survey_page__WEBPACK_IMPORTED_MODULE_3__["SurveyPage"]
    }
];
let SurveyPageRoutingModule = class SurveyPageRoutingModule {
};
SurveyPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SurveyPageRoutingModule);



/***/ })

}]);
//# sourceMappingURL=survey-survey-module-es2015.js.map