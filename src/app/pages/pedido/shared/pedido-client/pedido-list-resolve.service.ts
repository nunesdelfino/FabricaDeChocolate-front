/* tslint:disable:no-redundant-jsdoc */
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, Router} from '@angular/router';

import {MessageService} from 'src/app/shared/message/message.service';
import {PedidoClientService} from './pedido-client.service';
import {FiltroPedidoDTO} from '../../../../shared/dto/filtro-pedido.dto';

/**
 * Classe resolve responsável pela busca das informações de Usuário conforme o id.
 *
 *@author Gabriel N Delfino; Maria E F Oliveira; Karen D Antunes
 */
@Injectable()
export class PedidoListResolve implements Resolve<any> {

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
      const filtro: FiltroPedidoDTO = new FiltroPedidoDTO();
      filtro.nome = '%%%%';
      this.pedidoClientService.getByFiltro(filtro).subscribe(
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
            this.router.navigate(['']);
            this.messageService.addMsgDanger(error);
          }
        }
      );
    });
  }
}
