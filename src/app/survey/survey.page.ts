import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { ToastController } from '@ionic/angular';

import { Storage } from '@ionic/storage';


@Component({
  selector: 'app-survey',
  templateUrl: './survey.page.html',
  styleUrls: ['./survey.page.scss'],
})
export class SurveyPage {

  surveyId = 0 ;
  today;
  currentSurvey;
  hash_;

  answerList = [];

  surveylist = [
    {
      "ques":"Yaş aralığınız nedir ? ",
      "A": "12-20",
      "B": "20-25",
      "C": "25-30",
      "D": "30-50",
      "E": "50+"
    },
    {
      "ques":"Aşağıdakilerden hangisine kendinizi daha 'ait' hissedersiniz ?",
      "A": "Deniz kenarı, sıcak bir sahil kasabası",
      "B": "Kalabalık, kasfetli, puslu bir metropol",
      "C": "Bozkır veya dağlık, iliklere kadar işleyen bir soğuk",
      "D": "Sapsarı buğday tarlaları ile dolu bir kırsal kesim",
      "E": "Küçük ve ortalama bir şehir"
    },
    {
      "ques":"Ne kadar duygusalsınız ?",
      "A": "Çok fazla",
      "B": "Ortalamadan fazla",
      "C": "Normal",
      "D": "Az duygusal",
      "E": "Kendimi kandırmaya meyilliyim"
    },
    { 
      "ques":"Hangi renk size daha çok hitap ediyor ?",
      "A": "Gökyüzü Mavisi",
      "B": "Gece Siyahı",
      "C": "Kar Beyaz",
      "D": "Orman Yeşili",
      "E": "Bayrak Kırmızısı"
    },
    { 
      "ques":"Kişisel bakımınıza ne kadar dikkat edersiniz ? ",
      "A": "Çok özenirim",
      "B": "Standart",
      "C": "Pek özenmem",
      "D": "Umursamam",
      "E": ""
    },
    { 
      "ques":"Ne sıklıkla yalan söylersiniz ?",
      "A": "Yalan söylemek alışkanlığımdır",
      "B": "Genellikle söylerim",
      "C": "Zorunda kalmadıkça söylemem",
      "D": "Nadiren söylerim",
      "E": "Asla söylemem"
    },
    { 
      "ques":"Ne sıklıkla bahane üretirsiniz ?",
      "A": "Her işi batırırım ve bahanem hazırdır",
      "B": "Sık bahane üretirim ancak vicdan azabı da çekerim",
      "C": "Biraz fazla üşengecimdir.",
      "D": "Pek bahane üretmem",
      "E": "Bahane üretmem, üretirsem de kendimi inandırmam"
    },
    { 
      "ques":"Kendiniz ile barışık mısınız ?",
      "A": "Evet",
      "B": "Bazen",
      "C": "Hayır",
      "D": "",
      "E": ""
    },
    { 
      "ques":"Arkadaşlarınız sizi nasıl tanımlar ?",
      "A": "Disiplinli, çok çalışkan",
      "B": "Genellikle çalışkan",
      "C": "Normal",
      "D": "Kaytarmaya meyilli ama bazen çalışabilir",
      "E": "Tembel"
    },
    { 
      "ques":"Hayatta bir şeyleri elde etmek için kadar hırslısınız ?",
      "A": "Aşırı Çok",
      "B": "Çok",
      "C": "Orta",
      "D": "Az",
      "E": "Hiç."
    },
    {
      "ques":"Kibirli biri misiniz ?",
      "A": "Evet, ama kendime itiraf etmekte zorlanırım",
      "B": "Özgüvenliyim, kibirli değil",
      "C": "Değilim",
      "D": "",
      "E": ""
    },
    { 
      "ques":"Sizce potansiyelinizin ne kadarını kullanıyorsunuz ?",
      "A": "%90 +",
      "B": "%75-%90",
      "C": "%50-%75",
      "D": "%25-%50",
      "E": "%0-%25"
    },
    { 
      "ques":"Hangi meslek grubuna daha yakın hissediyorsunuz ?",
      "A": "Asker/Polis",
      "B": "Hukuk Personeli",
      "C": "Sağlık Personeli",
      "D": "Mühendislik",
      "E": "Sosyal Meslekler"
    },
    { 
      "ques":"Ne kadar meraklısınız ? algılarınız açık mı ? Çevrenizde olan bitenden haberdar mısınız ?",
      "A": "Evet",
      "B": "Bazen",
      "C": "Nadiren",
      "D": "Dünyadan kopuğum",
      "E": ""
    },
    { 
      "ques":"Ne kadar streslisiniz ?",
      "A": "Çok fazla",
      "B": "Fazla",
      "C": "Orta",
      "D": "Az",
      "E": "Çok rahatım"
    },
    {
      "ques":"İşinizi stres edinmeniz ne sıklıkla olur ?",
      "A": "Çok fazla",
      "B": "Fazla",
      "C": "Orta",
      "D": "Az",
      "E": "Çok nadiren"
    },
    { 
      "ques":"Sosyal medyada ne sıklıkla vakit geçirirsiniz ?",
      "A": "Çok fazla. Tumblr bile kullanırım.",
      "B": "Fazla",
      "C": "Orta",
      "D": "Az",
      "E": "Sosyal medya kullanmıyorum"
    },
    { 
      "ques":"Sosyal medya uygulamalarından kullanım sürelerine bakın. Bir önceki cevabınız ile çelişiyor musunuz ?",
      "A": "Evet",
      "B": "Biraz",
      "C": "Çok değil",
      "D": "Hayır",
      "E": ""
    },
    { 
      "ques":"Ne kadar sabırlısınız ? ",
      "A": "Çok",
      "B": "Fazla",
      "C": "Orta",
      "D": "Az",
      "E": "Sabırsızım"
    },
    { 
      "ques":"Çevreniz sizi ne kadar ince düşünceli olarak görür ? ",
      "A": "Çok fazla",
      "B": "çok",
      "C": "Orta",
      "D": "Az",
      "E": "Çok az"
    },
    { //
      "ques":"Ne tarz müzikler dinlersiniz ?",
      "A": "Sert, hiddetli (Rap vs.)",
      "B": "Pop, eğlencelik",
      "C": "Klasik, sakin",
      "D": "Yabancı kültürlü müzikler",
      "E": "Türküler - ulusal müzikler"
    },


];

  
constructor(public toastController: ToastController, private http: HttpClient, private route: ActivatedRoute, private router: Router,private storage: Storage) { 

  this.checkLogin();
  this.currentSurvey = this.surveylist[this.surveyId];


  //init surveys
  setTimeout(()=>{
      this.renderSurvey();
      this.getDBFromServer();
  }, 500);





}


/* In Survey*/
getAnswer(ans)
{

  const element_header = document.querySelector<HTMLElement>("#"+ans);
  const element_footer = document.querySelector<HTMLElement>("#"+ans+"_");
  element_header.style.backgroundColor = "#37bf62";
  element_header.style.color = "white";
  element_footer.style.backgroundColor = "#37bf62";
  element_footer.style.color = "white";
  this.answerList[this.surveyId] = ans;
  this.nextSurvey();






}



nextSurvey()
{
if(this.surveyId > 19)
{
  this.analyzeEager();
}
else
{
  this.surveyId++;
  setTimeout(()=>{
    this.renderSurvey();
  }, 500);
}

}
renderSurvey()
{


this.currentSurvey = this.surveylist[this.surveyId];

const option_a = document.querySelector<HTMLElement>('#A');
const option_a_ = document.querySelector<HTMLElement>('#A_');
const option_b = document.querySelector<HTMLElement>('#B');
const option_b_ = document.querySelector<HTMLElement>('#B_');
const option_c = document.querySelector<HTMLElement>('#C');
const option_c_ = document.querySelector<HTMLElement>('#C_');
const option_d = document.querySelector<HTMLElement>('#D');
const option_d_ = document.querySelector<HTMLElement>('#D_');
const option_e = document.querySelector<HTMLElement>('#E');
const option_e_ = document.querySelector<HTMLElement>('#E_');


option_a.style.backgroundColor ="white";
option_b.style.backgroundColor ="white";
option_c.style.backgroundColor ="white";
option_d.style.backgroundColor ="white";
option_e.style.backgroundColor ="white";


option_a_.style.color ="black";
option_b_.style.color ="black";
option_c_.style.color ="black";
option_d_.style.color ="black";
option_e_.style.color ="black";


option_a_.style.backgroundColor ="white";
option_b_.style.backgroundColor ="white";
option_c_.style.backgroundColor ="white";
option_d_.style.backgroundColor ="white";
option_e_.style.backgroundColor ="white";



if(this.currentSurvey.A === '')
{

  option_a.style.visibility = 'hidden';
}
else
{
  option_a.style.visibility = 'visible';
}

if(this.currentSurvey.B === '')
{

  option_b.style.visibility = 'hidden';
}
else
{
  option_b.style.visibility = 'visible';
}

if(this.currentSurvey.C === '')
{

  option_c.style.visibility = 'hidden';
}
else
{
  option_c.style.visibility = 'visible';
}

if(this.currentSurvey.D === '')
{

  option_d.style.visibility = 'hidden';
}
else
{
  option_d.style.visibility = 'visible';
}

if(this.currentSurvey.E === '')
{

  option_e.style.visibility = 'hidden';
}
else
{
  option_e.style.visibility = 'visible';
}
}

surveyService()
{

}


/* Todo : Get Json datas from server*/
getDBFromServer()
{

}



analyzeEager()
{
let jstr = JSON.stringify(this.answerList);

console.log(jstr);

let query = {key: 'analyzeEager', surveyResults: jstr, hash : this.hash_ } ;

this.http.post<any>('http://deskmate.aksoylu.space/handle.php', { data :query }).subscribe(data => {
  console.log(data);
  let response = data.response;
  if(response == "INVALID_HASH")
  {
    this.router.navigate(['auth']);
    this.presentToast("Bir problem var. Lütfen daha sonra tekrar deneyin");
  }
  else
  {
      this.storage.set("eager", response);

  }

});


this.router.navigate(['tabs']);
}


checkLogin()
{
  this.storage.get("userhash").then((val) => {

    if(val.length < 30)
    {

      this.router.navigate(['auth']);

    }
    else
    {
      this.hash_ = val;

    }


   });
  return false;
}


async presentToast(text) {
  const toast = await this.toastController.create({
    message: text,
    duration: 2000
  });
  toast.present();
}


}
