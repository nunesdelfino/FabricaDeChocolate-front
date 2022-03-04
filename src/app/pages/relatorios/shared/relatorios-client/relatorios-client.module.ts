import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RelatoriosClientService } from './relatorios-client.service';
import { RelatorioClienteListResolve } from './relatorios-list-resolve.service';


/**
 * Modulo de integração do projeto frontend com os serviços backend.
 */
@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    RelatoriosClientService,
    RelatorioClienteListResolve
  ]
})
export class RelatoriosClientModule { }
