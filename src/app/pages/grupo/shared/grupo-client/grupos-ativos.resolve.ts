/* tslint:disable:no-redundant-jsdoc */
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, Router } from '@angular/router';

import { GrupoClientService } from './grupo-client.service';
import { MessageService } from 'src/app/shared/message/message.service';
import {FiltroGrupoDTO} from '../../../../shared/dto/filtro-grupo.dto';

/**
 * Classe resolve responsável por recuperar as grupos ativas na API.
 *
 * @author Gabriel Nunes Delfino
 */
@Injectable()
export class GruposAtivosResolve implements Resolve<any> {

  /**
   * Construtor da classe.
   *
   * @param router
   * @param grupoClientService
   * @param messageService
   */
  constructor(
    private router: Router,
    private grupoClientService: GrupoClientService,
    private messageService: MessageService
  ) { }

  /**
   * Realiza a consulta de grupos por filtro.
   *
   * @param route
   */
  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    return new Observable(observer => {
      this.grupoClientService.getByFiltro(FiltroGrupoDTO.getInstace()).subscribe(
        data => {
          observer.next(data);
          observer.complete();
        },
        error => {
          if (error.status === 404) {
            observer.next();
            observer.complete();
          } else {
            observer.error(error);
            this.router.navigate(['/administracao']);
            this.messageService.addMsgDanger(error);
          }
        }
      );
    });
  }
}
