import { Routes } from '@angular/router';

import { TamanhoResolve } from './shared/tamanho-client/tamanho-resolve.service';
import { TamanhoFormComponent } from './tamanho-form/tamanho-form.component';
import { TamanhoListComponent } from './tamanho-list/tamanho-list.component';
import { TamanhoListResolve} from './shared/tamanho-client/tamanho-list-resolve.service';

/**
 * Configurações de rota de Tamanho.
 *
 * @author Gabriel N Delfino; Maria E F Oliveira; Karen D Antunes
 */
export const TamanhoRoutes: Routes = [
  {
    path: 'incluir',
    component: TamanhoFormComponent,
    data: {
      acao: 'incluir'
    },
  },
  {
    path: 'listar',
    component: TamanhoListComponent,
    resolve: {
      tamanhos: TamanhoListResolve,
    }
  },
  {
    path: ':id/alterar',
    component: TamanhoFormComponent,
    data: {
      acao: 'alterar',
    },
    resolve: {
      tamanho: TamanhoResolve,
    }
  },
  {
    path: '',
    redirectTo: 'listar',
    pathMatch: 'full'
  }
];
