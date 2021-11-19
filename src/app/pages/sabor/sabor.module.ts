import {NgModule} from '@angular/core';
import {NgxMaskModule} from 'ngx-mask';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {MaterialModule} from '../../layouts/material.module';


import {OrderModule} from 'ngx-order-pipe';
import {SaborRoutes} from './sabor.routing';
import {MessageModule} from '../../shared/message/message.module';
import {ValidationModule} from '../../shared/validation/validation.module';
import {SaborFormComponent} from './sabor-form/sabor-form.component';
import {SaborListComponent} from './sabor-list/sabor-list.component';
import {SaborClientModule} from './shared/sabor-client/sabor-client.module';

@NgModule({
  declarations: [
    SaborFormComponent,
    SaborListComponent
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
    SaborClientModule,
    NgxMaskModule.forRoot({}),
    RouterModule.forChild(SaborRoutes)
  ]
})
export class SaborModule { }
