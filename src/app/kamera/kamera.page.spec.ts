import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { KameraPage } from './kamera.page';

describe('KameraPage', () => {
  let component: KameraPage;
  let fixture: ComponentFixture<KameraPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KameraPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(KameraPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
