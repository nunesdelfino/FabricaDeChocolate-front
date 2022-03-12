import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {CustosResolve} from './custos-resolve.service';
import {CustosClientService} from './custos-client.service';
import {CustosListResolve} from './custos-list-resolve.service';


/**
 * Modulo de integração do projeto frontend com os serviços backend.
 */
@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    CustosClientService,
    CustosResolve,
    CustosListResolve,
  ]
})
export class CustosClientModule { }
