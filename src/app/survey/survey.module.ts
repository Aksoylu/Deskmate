import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { HttpClientModule } from '@angular/common/http';

import { SurveyPageRoutingModule } from './survey-routing.module';

import { SurveyPage } from './survey.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HttpClientModule,
    SurveyPageRoutingModule
  ],
  declarations: [SurveyPage]
})
export class SurveyPageModule {}
