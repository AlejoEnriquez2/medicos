import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CrearMedicoPage } from './crear-medico.page';

describe('CrearMedicoPage', () => {
  let component: CrearMedicoPage;
  let fixture: ComponentFixture<CrearMedicoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearMedicoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CrearMedicoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
