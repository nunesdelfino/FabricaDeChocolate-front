import {Routes} from '@angular/router';

import {CustosResolve} from './shared/custos-client/custos-resolve.service';
import {CustosFormComponent} from './custos-form/custos-form.component';
import {CustosListComponent} from './custos-list/custos-list.component';
import {CustosListResolve} from './shared/custos-client/custos-list-resolve.service';

/**
 * Configurações de rota de Usuário.
 *
 * @author Gabriel Nunes Delfino
 */
export const PedidoRoutes: Routes = [
  {
    path: 'incluir',
    component: CustosFormComponent,
    data: {
      acao: 'incluir',
    }
  },
  {
    path: 'listar',
    component: CustosListComponent,
    resolve: {
      custos: CustosListResolve,
    }
  },
  {
    path: ':id/alterar',
    component: CustosFormComponent,
    data: {
      acao: 'alterar'
    },
    resolve: {
      custos: CustosResolve,
    }
  },
  {
    path: ':id/visualizar',
    component: CustosFormComponent,
    data: {
      acao: 'visualizar'
    },
    resolve: {
      custos: CustosResolve,
    }
  },
  {
    path: '',
    redirectTo: 'listar',
    pathMatch: 'full'
  }
];
