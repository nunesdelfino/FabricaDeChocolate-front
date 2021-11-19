import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TamanhoResolve } from './tamanho-resolve.service';
import { TamanhoClientService } from './tamanho-client.service';
import {TamanhoListResolve} from './tamanho-list-resolve.service';


/**
 * Modulo de integração do projeto frontend com os serviços backend.
 */
@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    TamanhoClientService,
    TamanhoResolve,
    TamanhoListResolve
  ]
})
export class TamanhoClientModule { }
