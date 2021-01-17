import { Component, OnInit } from '@angular/core';

import { NavController, NavParams } from '@ionic/angular';

import * as moment from 'moment';

@Component({
  selector: 'app-event-modal',
  templateUrl: './event-modal.page.html',
  styleUrls: ['./event-modal.page.scss'],
})
export class EventModalPage implements OnInit {

  event =  {
      startTime : new Date().toISOString(),
      endTime : new Date().toISOString(),
      name : "",
  }
  constructor(public navCtrl: NavController, public navParams: NavParams) {

    let selectedDay = moment(this.navParams.get('selectedDay')).format();
    this.event.startTime = selectedDay;
    this.event.endTime = selectedDay

   }

  ngOnInit() {
  }

  save(){

  }

  

}
