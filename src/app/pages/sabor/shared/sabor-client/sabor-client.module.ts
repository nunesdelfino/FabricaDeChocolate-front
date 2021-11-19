import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SaborResolve } from './sabor.resolve';
import { SaborClientService } from './sabor-client.service';
import {SaborListResolve} from './sabor-list.resolve';


/**
 * Modulo de integração do projeto frontend com os serviços backend.
 */
@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    SaborClientService,
    SaborResolve,
    SaborListResolve
  ]
})
export class SaborClientModule { }
