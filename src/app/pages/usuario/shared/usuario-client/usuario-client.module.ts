import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuarioResolve } from './usuario.resolve';
import { UsuarioClientService } from './usuario-client.service';
import {UsuarioAtivoResolve} from "./usuario-ativo.resolve";


/**
 * Modulo de integração do projeto frontend com os serviços backend.
 */
@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    UsuarioClientService,
    UsuarioAtivoResolve,
    UsuarioResolve
  ]
})
export class UsuarioClientModule { }
