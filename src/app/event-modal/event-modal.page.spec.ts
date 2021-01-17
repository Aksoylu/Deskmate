import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EventModalPage } from './event-modal.page';

describe('EventModalPage', () => {
  let component: EventModalPage;
  let fixture: ComponentFixture<EventModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EventModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
