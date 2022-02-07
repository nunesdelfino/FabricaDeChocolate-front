import { Routes } from '@angular/router';

import { SecurityGuard } from '../../shared/security/security.guard';
import { UsuarioResolve } from './shared/usuario-client/usuario.resolve';
import { UsuarioAtivoResolve } from './shared/usuario-client/usuario-ativo.resolve';
import { UsuarioFormComponent } from './usuario-form/usuario-form.component';
import { UsuarioListComponent } from './usuario-list/usuario-list.component';

/**
 * Configurações de rota de Usuário.
 *
 * @author Guiliano Rangel (UEG)
 */
export const UsuarioRoutes: Routes = [
  {
    path: 'incluir',
    component: UsuarioFormComponent,
    canActivate: [
      SecurityGuard
    ],
    data: {
      acao: 'incluir',
    },
    resolve: {
      // sistemas: SistemaAtivoResolve
    }
  },
  {
    path: 'listar',
    component: UsuarioListComponent,
    resolve: {
      // usuario: UsuarioAtivoResolve,
    }
  },
  {
    path: ':id/alterar',
    component: UsuarioFormComponent,
    canActivate: [
      SecurityGuard
    ],
    data: {
      acao: 'alterar',
    },
    resolve: {
      usuario: UsuarioResolve,
      // sistemas: SistemaAtivoResolve
    }
  },
  {
    path: ':id/visualizar',
    component: UsuarioFormComponent,
    canActivate: [
      SecurityGuard
    ],
    data: {
      acao: 'visualizar',
    },
    resolve: {
      usuario: UsuarioResolve
    }
  },
  {
    path: '',
    redirectTo: 'listar',
    pathMatch: 'full'
  }
];
