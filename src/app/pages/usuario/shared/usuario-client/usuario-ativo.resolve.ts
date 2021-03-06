/* tslint:disable:no-redundant-jsdoc */
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, Router } from '@angular/router';

import { MessageService } from 'src/app/shared/message/message.service';
import { UsuarioClientService } from './usuario-client.service';
import {FiltroUsuarioDTO} from "../../../../shared/dto/filtro-usuario.dto";

@Injectable()
export class UsuarioAtivoResolve implements Resolve<any> {

  constructor(
    private router: Router,
    private usuarioClientService: UsuarioClientService,
    private messageService: MessageService
  ) { }

  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    const id = route.params.id;
    return new Observable(observer => {
      const filtro: FiltroUsuarioDTO = new FiltroUsuarioDTO();
      filtro.status = true;
      this.usuarioClientService.getByFiltro(filtro).subscribe(
        data => {
          observer.next(data);
          observer.complete();
        },
        error => {
          observer.error(error);
          this.router.navigate(['/administracao']);
          this.messageService.addMsgDanger(error);
        }
      );
    });
  }
}

