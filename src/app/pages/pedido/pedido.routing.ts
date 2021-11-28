import {Routes} from '@angular/router';

import {PedidoResolve} from './shared/pedido-client/pedido-resolve.service';
import {PedidoFormComponent} from './pedido-form/pedido-form.component';
import {PedidoListComponent} from './pedido-list/pedido-list.component';
import {PedidoListResolve} from './shared/pedido-client/pedido-list-resolve.service';
import {SaborListResolve} from "../sabor/shared/sabor-client/sabor-list.resolve";
import {TamanhoListResolve} from "../tamanho/shared/tamanho-client/tamanho-list-resolve.service";

/**
 * Configurações de rota de Usuário.
 *
 * @author Gabriel N Delfino; Maria E F Oliveira; Karen D Antunes
 */
export const PedidoRoutes: Routes = [
  {
    path: 'incluir',
    component: PedidoFormComponent,
    data: {
      acao: 'incluir',
    },
    resolve: {
      // saborUm: SaborListResolve,
      // saborDois: SaborListResolve,
      // saborTres: SaborListResolve,
      // saborQuatro: SaborListResolve,
      // saborCinco: SaborListResolve,
      sabores: SaborListResolve,
      tamanho: TamanhoListResolve
    }
  },
  {
    path: 'listar',
    component: PedidoListComponent,
    resolve: {
      saborUm: SaborListResolve,
      saborDois: SaborListResolve,
      saborTres: SaborListResolve,
      saborQuatro: SaborListResolve,
      saborCinco: SaborListResolve,
      tamanho: TamanhoListResolve,
      sabores: SaborListResolve,
      pedido: PedidoListResolve
    }
  },
  {
    path: ':id/alterar',
    component: PedidoFormComponent,
    data: {
      acao: 'alterar'
    },
    resolve: {
      pedido: PedidoResolve,
      sabores: SaborListResolve,
      saborUm: SaborListResolve,
      saborDois: SaborListResolve,
      saborTres: SaborListResolve,
      saborQuatro: SaborListResolve,
      saborCinco: SaborListResolve,
      tamanho: TamanhoListResolve
    }
  },
  {
    path: ':id/visualizar',
    component: PedidoFormComponent,
    data: {
      acao: 'visualizar'
    },
    resolve: {
      pedido: PedidoResolve,
      sabores: SaborListResolve,
      saborUm: SaborListResolve,
      saborDois: SaborListResolve,
      saborTres: SaborListResolve,
      saborQuatro: SaborListResolve,
      saborCinco: SaborListResolve,
      tamanho: TamanhoListResolve
    }
  },
  {
    path: '',
    redirectTo: 'listar',
    pathMatch: 'full'
  }
];
