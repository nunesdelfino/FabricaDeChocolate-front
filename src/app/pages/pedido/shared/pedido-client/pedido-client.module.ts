import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {PedidoResolve} from './pedido-resolve.service';
import {PedidoClientService} from './pedido-client.service';
import {PedidoListResolve} from './pedido-list-resolve.service';
import {TamanhoListResolve} from "../../../tamanho/shared/tamanho-client/tamanho-list-resolve.service";
import {SaborListResolve} from "../../../sabor/shared/sabor-client/sabor-list.resolve";


/**
 * Modulo de integração do projeto frontend com os serviços backend.
 */
@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    PedidoClientService,
    PedidoResolve,
    TamanhoListResolve,
    SaborListResolve,
    PedidoListResolve
  ]
})
export class PedidoClientModule { }
