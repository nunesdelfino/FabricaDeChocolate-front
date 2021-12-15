import { NgModule } from '@angular/core';
import { NgxMaskModule } from 'ngx-mask';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../../layouts/material.module';


import { OrderModule } from 'ngx-order-pipe';
import { PedidoRoutes } from './pedido.routing';
import { MessageModule } from '../../shared/message/message.module';
import { ValidationModule } from '../../shared/validation/validation.module';
import { PedidoFormComponent } from './pedido-form/pedido-form.component';
import { PedidoListComponent } from './pedido-list/pedido-list.component';
import { PedidoClientModule } from './shared/pedido-client/pedido-client.module';
import { PedidoProducaoComponent } from './pedido-producao/pedido-producao.component';

@NgModule({
  declarations: [
    PedidoFormComponent,
    PedidoListComponent,
    PedidoProducaoComponent
  ],
  entryComponents: [
  ],
  imports: [
    FormsModule,
    OrderModule,
    CommonModule,
    MessageModule,
    MaterialModule,
    ValidationModule,
    PedidoClientModule,
    NgxMaskModule.forRoot({}),
    RouterModule.forChild(PedidoRoutes)
  ]
})
export class PedidoModule { }
