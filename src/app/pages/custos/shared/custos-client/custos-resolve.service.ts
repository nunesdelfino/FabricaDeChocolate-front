/* tslint:disable:no-redundant-jsdoc */
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, Router } from '@angular/router';

import { MessageService } from 'src/app/shared/message/message.service';
import { CustosClientService } from './custos-client.service';

/**
 * Classe resolve responsável pela busca das informações de Amigo conforme o id.
 *
 * @author Maria E F Oliveira
 */
@Injectable()
export class CustosResolve implements Resolve<any> {

  /**
   * Construtor da classe.
   *
   * @param router
   * @param pedidoClientService
   * @param messageService
   */
  constructor(
    private router: Router,
    private pedidoClientService: CustosClientService,
    private messageService: MessageService
  ) { }

  /**
   * Realiza a consulta por id de Pedido.
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
          this.router.navigate(['/administracao']);
          this.messageService.addMsgDanger(error);
        }
      );
    });
  }
}
