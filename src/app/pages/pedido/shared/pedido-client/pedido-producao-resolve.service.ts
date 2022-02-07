/* tslint:disable:no-redundant-jsdoc */
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, Router} from '@angular/router';

import {MessageService} from 'src/app/shared/message/message.service';
import {PedidoClientService} from './pedido-client.service';

/**
 * Classe resolve responsável pela busca das informações de Usuário conforme o id.
 *
 * @author Maria E F Oliveira
 */
@Injectable()
export class PedidoProducaoResolve implements Resolve<any> {

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
   * Realiza a consulta por id de Usuário.
   *
   * @param route
   */
  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    const id = route.params.id;

    return new Observable(observer => {
      this.pedidoClientService.getPedidosProducao().subscribe(
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
