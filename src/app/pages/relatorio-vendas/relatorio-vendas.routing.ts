import { Routes } from '@angular/router';

import { RelatoriosListComponent } from './relatorio-vendas-list/relatorios-list.component';
import { RelatorioClienteListResolve } from './shared/relatorio-vendas-client/relatorios-list-resolve.service';

/**
 * Configurações de rota de Tamanho.
 *
 * @author Gabriel Nunes Delfino
 */
export const RelatoriosRoutes: Routes = [
  {
    path: 'listar',
    component: RelatoriosListComponent,
    resolve: {
      pedidos: RelatorioClienteListResolve,
    }
  },
  {
    path: '',
    redirectTo: 'listar',
    pathMatch: 'full'
  }
];
