import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListarMedicosPageRoutingModule } from './listar-medicos-routing.module';

import { ListarMedicosPage } from './listar-medicos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListarMedicosPageRoutingModule
  ],
  declarations: [ListarMedicosPage]
})
export class ListarMedicosPageModule {}
