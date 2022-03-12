import { NgModule } from '@angular/core';
import { NgxMaskModule } from 'ngx-mask';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../../layouts/material.module';


import { OrderModule } from 'ngx-order-pipe';
import { PedidoRoutes } from './custos.routing';
import { MessageModule } from '../../shared/message/message.module';
import { ValidationModule } from '../../shared/validation/validation.module';
import { CustosFormComponent } from './custos-form/custos-form.component';
import { CustosListComponent } from './custos-list/custos-list.component';
import { CustosClientModule } from './shared/custos-client/custos-client.module';

@NgModule({
  declarations: [
    CustosFormComponent,
    CustosListComponent,
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
    CustosClientModule,
    NgxMaskModule.forRoot({}),
    RouterModule.forChild(PedidoRoutes)
  ]
})
export class CustosModule { }
