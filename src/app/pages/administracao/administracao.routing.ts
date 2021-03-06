import { Routes } from '@angular/router';
import {SecurityGuard} from '../../shared/security/security.guard';
import {AdministracaoComponent} from './administracao.component';
import {LayoutComponent} from '../../layouts/layout.component';

/**
 * Configuração de 'Rotas' do módulo 'Home'.
 *
 * @author Gabriel Nunes Delfino
 */
export const AdministracaoRoutes: Routes = [
  {
    path: 'administracao',
    component: LayoutComponent,
    canActivate: [
      SecurityGuard
    ],
    data: {
      // security: {
      //   roles: [
      //     'ROLE_GRUPO_INCLUIR',
      //     'ROLE_GRUPO_ALTERAR',
      //     'ROLE_GRUPO_PESQUISAR',
      //     'ROLE_GRUPO_VISUALIZAR',
      //     'ROLE_GRUPO_ATIVAR_INATIVAR',
      //     'ROLE_USUARIO_PESQUISAR',
      //     'ROLE_USUARIO_INCLUIR',
      //     'ROLE_USUARIO_VISUALIZAR',
      //     'ROLE_USUARIO_ATIVAR_INATIVAR',
      //     'ROLE_USUARIO_VINCULAR_GRUPO',
      //     'ROLE_AUDITORIA_PESQUISAR',
      //     'ROLE_PORTAL_AUDITORIA_EXPORTAR',
      //
      //     'ROLE_TIPOAMIGO_INCLUIR',
      //     'ROLE_TIPOAMIGO_ALTERAR',
      //     'ROLE_TIPOAMIGO_PESQUISAR',
      //     'ROLE_TIPOAMIGO_VISUALIZAR',
      //     'ROLE_TIPOAMIGO_REMOVER',
      //
      //     'ROLE_AMIGO_INCLUIR',
      //     'ROLE_AMIGO_ALTERAR',
      //     'ROLE_AMIGO_PESQUISAR',
      //     'ROLE_AMIGO_VISUALIZAR',
      //     'ROLE_AMIGO_REMOVER',
      //     'ROLE_AMIGO_STATUS',
      //   ]
      // }
    },
    children: [
      {
        path: '',
        component: AdministracaoComponent
      },
      {
        path: 'grupo',  loadChildren: () => import('../grupo/grupo.module').then(m => m.GrupoModule)
      },
      {
        path: 'usuario', loadChildren: () => import('./../usuario/usuario.module').then(m => m.UsuarioModule)
      },
      {
        path: 'sabor', loadChildren: () => import('../sabor/sabor.module').then(m => m.SaborModule)
      },
      {
        path: 'tamanho', loadChildren: () => import('../tamanho/tamanho.module').then(m => m.TamanhoModule)
      },
      {
        path: 'pedido', loadChildren: () => import('../pedido/pedido.module').then(m => m.PedidoModule)
      },
      {
        path: 'relatorios', loadChildren: () => import('../relatorios/relatorios.module').then(m => m.RelatoriosModule)
      },
      {
        path: 'vendas', loadChildren: () => import('../relatorio-vendas/relatorio-vendas.module').then(m => m.RelatorioVendasModule)
      },
      {
        path: 'custos', loadChildren: () => import('../custos/custos.module').then(m => m.CustosModule)
      }
    ]
  }
];
