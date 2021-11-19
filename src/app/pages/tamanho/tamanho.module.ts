import {NgModule} from '@angular/core';
import {NgxMaskModule} from 'ngx-mask';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {MaterialModule} from '../../layouts/material.module';


import {OrderModule} from 'ngx-order-pipe';
import {TamanhoRoutes} from './tamanho.routing';
import {MessageModule} from '../../shared/message/message.module';
import {ValidationModule} from '../../shared/validation/validation.module';
import {TamanhoFormComponent} from './tamanho-form/tamanho-form.component';
import {TamanhoListComponent} from './tamanho-list/tamanho-list.component';
import {TamanhoClientModule} from './shared/tamanho-client/tamanho-client.module';

@NgModule({
  declarations: [
    TamanhoFormComponent,
    TamanhoListComponent
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
    TamanhoClientModule,
    NgxMaskModule.forRoot({}),
    RouterModule.forChild(TamanhoRoutes)
  ]
})
export class TamanhoModule { }
