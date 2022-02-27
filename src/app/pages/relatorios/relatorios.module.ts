import {NgModule} from '@angular/core';
import {NgxMaskModule} from 'ngx-mask';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {MaterialModule} from '../../layouts/material.module';


import {OrderModule} from 'ngx-order-pipe';
import {RelatoriosRoutes} from './relatorios.routing';
import {MessageModule} from '../../shared/message/message.module';
import {ValidationModule} from '../../shared/validation/validation.module';
import {RelatoriosListComponent} from './relatorios-list/relatorios-list.component';
import {RelatoriosClientModule} from './shared/relatorios-client/relatorios-client.module';

@NgModule({
  declarations: [
    RelatoriosListComponent
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
    RelatoriosClientModule,
    NgxMaskModule.forRoot({}),
    RouterModule.forChild(RelatoriosRoutes)
  ]
})
export class RelatoriosModule { }
