/* tslint:disable:no-redundant-jsdoc */
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, Router } from '@angular/router';

import { MessageService } from 'src/app/shared/message/message.service';
import { PedidoClientService } from './pedido-client.service';

/**
 * Classe resolve responsável pela busca das informações de Amigo conforme o id.
 *
 * @author Gabriel N Delfino; Maria E F Oliveira; Karen D Antunes
 */
@Injectable()
export class PedidoResolve implements Resolve<any> {

  /**
   * Construtor da classe.
   *
   * @param router
   * @param pedidoClientService
   * @param messageService
   */
  constructor(
    private router: Router,
    private pedidoClientService: PedidoClientService,
    private messageService: MessageService
  ) { }

  /**
   * Realiza a consulta por id de Amigo.
   *
   * @param route
   */
  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    const id = route.params.id;

    return new Observable(observer => {
      this.pedidoClientService.getById(id).subscribe(
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
