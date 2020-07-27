import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'listar-medicos',
    loadChildren: () => import('./shared/pages/listar-medicos/listar-medicos.module').then( m => m.ListarMedicosPageModule)
  },
  {
    path: 'crear-medico',
    loadChildren: () => import('./shared/pages/crear-medico/crear-medico.module').then( m => m.CrearMedicoPageModule)
  },
  {
    path: 'medico',
    loadChildren: () => import('./shared/pages/medico/medico.module').then( m => m.MedicoPageModule)
  },  {
    path: 'editar-medico',
    loadChildren: () => import('./shared/pages/editar-medico/editar-medico.module').then( m => m.EditarMedicoPageModule)
  }

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
