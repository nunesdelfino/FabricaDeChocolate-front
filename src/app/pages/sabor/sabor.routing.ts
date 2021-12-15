import { Routes } from '@angular/router';

import { SaborResolve } from './shared/sabor-client/sabor.resolve';
import { SaborFormComponent } from './sabor-form/sabor-form.component';
import { SaborListComponent } from './sabor-list/sabor-list.component';
import { SaborListResolve} from './shared/sabor-client/sabor-list.resolve';

/**
 * Configurações de rota de Usuário.
 *
 * @author Karen Dantas
 */
export const SaborRoutes: Routes = [
  {
    path: 'incluir',
    component: SaborFormComponent,
    data: {
      acao: 'incluir'
    },
  },
  {
    path: 'listar',
    component: SaborListComponent,
    resolve: {
      sabores: SaborListResolve,
    }
  },
  {
    path: ':id/alterar',
    component: SaborFormComponent,
    data: {
      acao: 'alterar',
    },
    resolve: {
      sabores: SaborResolve,
    }
  },
  {
    path: '',
    redirectTo: 'listar',
    pathMatch: 'full'
  }
];
