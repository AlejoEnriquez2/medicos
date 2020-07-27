import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListarMedicosPage } from './listar-medicos.page';

const routes: Routes = [
  {
    path: '',
    component: ListarMedicosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListarMedicosPageRoutingModule {}
