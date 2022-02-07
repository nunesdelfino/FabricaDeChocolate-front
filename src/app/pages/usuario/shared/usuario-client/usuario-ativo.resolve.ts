/* tslint:disable:no-redundant-jsdoc */
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, Router } from '@angular/router';

import { MessageService } from 'src/app/shared/message/message.service';
import { UsuarioClientService } from './usuario-client.service';
import {FiltroUsuarioDTO} from "../../../../shared/dto/filtro-usuario.dto";

/**
 * Classe resolve responsável pela busca das informações de Usuário conforme o id.
 *
 * @author Guiliano Rangel (UEG)
 */
@Injectable()
export class UsuarioAtivoResolve implements Resolve<any> {

  /**
   * Construtor da classe.
   *
   * @param router
   * @param usuarioClientService
   * @param messageService
   */
  constructor(
    private router: Router,
    private usuarioClientService: UsuarioClientService,
    private messageService: MessageService
  ) { }

  /**
   * Realiza a consulta por id de Usuário.
   *
   * @param route
   */
  resolve(route: ActivatedRouteSnapshot): Observable<any> {

    return new Observable(observer => {
      const filtro: FiltroUsuarioDTO = new FiltroUsuarioDTO();
      filtro.status = "A"
      this.usuarioClientService.getByFiltro(filtro).subscribe(
        data => {
          observer.next(data);
          observer.complete();
        },
        error => {
          observer.error(error);
          this.router.navigate(['']);
          this.messageService.addMsgDanger(error);
        }
      );
    });
  }
}
