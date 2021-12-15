import { PedidoProducaoResolve } from './shared/pedido-client/pedido-producao-resolve.service';
import {Routes} from '@angular/router';

import {PedidoResolve} from './shared/pedido-client/pedido-resolve.service';
import {PedidoFormComponent} from './pedido-form/pedido-form.component';
import {PedidoListComponent} from './pedido-list/pedido-list.component';
import {PedidoListResolve} from './shared/pedido-client/pedido-list-resolve.service';
import {SaborListResolve} from "../sabor/shared/sabor-client/sabor-list.resolve";
import {TamanhoListResolve} from "../tamanho/shared/tamanho-client/tamanho-list-resolve.service";
import {TamanhoListAtivosResolve} from "../tamanho/shared/tamanho-client/tamanho-list-ativos-resolve.service";
import {SaborListAtivosResolve} from "../sabor/shared/sabor-client/sabor-list-ativos.resolve";
import { PedidoProducaoComponent } from './pedido-producao/pedido-producao.component';

/**
 * Configurações de rota de Usuário.
 *
 * @author Guiliano Rangel (UEG)
 */
export const PedidoRoutes: Routes = [
  {
    path: 'incluir',
    component: PedidoFormComponent,
    data: {
      acao: 'incluir',
    },
    resolve: {
      sabores: SaborListAtivosResolve,
      tamanho: TamanhoListAtivosResolve
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
      pedido: PedidoListResolve,
    }
  },
  {
    path: 'producao',
    component: PedidoProducaoComponent,
    data: {
      acao: 'listarProducao'
    },
    resolve: {
      saborUm: SaborListResolve,
      saborDois: SaborListResolve,
      saborTres: SaborListResolve,
      saborQuatro: SaborListResolve,
      saborCinco: SaborListResolve,
      tamanho: TamanhoListResolve,
      sabores: SaborListResolve,
      pedido: PedidoProducaoResolve
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
