import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListarMedicosPage } from './listar-medicos.page';

describe('ListarMedicosPage', () => {
  let component: ListarMedicosPage;
  let fixture: ComponentFixture<ListarMedicosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarMedicosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ListarMedicosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
