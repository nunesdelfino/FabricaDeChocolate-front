import { Routes } from '@angular/router';

import { TamanhoResolve } from './shared/relatorios-client/relatorios-resolve.service';
import { RelatoriosListComponent } from './relatorios-list/relatorios-list.component';
import { TamanhoListResolve} from './shared/relatorios-client/relatorios-list-resolve.service';

/**
 * Configurações de rota de Tamanho.
 *
 * @author Guiliano Rangel (UEG)
 */
export const RelatoriosRoutes: Routes = [
  {
    path: 'listar',
    component: RelatoriosListComponent,
    resolve: {
      tamanhos: TamanhoListResolve,
    }
  },
  {
    path: '',
    redirectTo: 'listar',
    pathMatch: 'full'
  }
];
