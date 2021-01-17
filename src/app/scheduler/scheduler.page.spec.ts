import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SchedulerPage } from './scheduler.page';

describe('SchedulerPage', () => {
  let component: SchedulerPage;
  let fixture: ComponentFixture<SchedulerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchedulerPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SchedulerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
