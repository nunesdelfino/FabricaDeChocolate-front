import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TamanhoResolve } from './relatorios-resolve.service';
import { RelatoriosClientService } from './relatorios-client.service';
import {TamanhoListResolve} from './relatorios-list-resolve.service';


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
    TamanhoResolve,
    TamanhoListResolve
  ]
})
export class RelatoriosClientModule { }
