/* tslint:disable:no-redundant-jsdoc */
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, Router} from '@angular/router';

import {MessageService} from 'src/app/shared/message/message.service';
import {CustosClientService} from './custos-client.service';
import {FiltroCustosDTO} from "../../../../shared/dto/filtro-custos.dto";
// import {FiltroCustosDTO} from "../../../../shared/dto/filtro-custos.dto";

/**
 * Classe resolve responsável pela busca das informações de Usuário conforme o id.
 *
 * @author Gabriel Nunes Delfino
 */
@Injectable()
export class CustosListResolve implements Resolve<any> {

  /**
   * Construtor da classe.
   *
   * @param router
   * @param custosClientService
   * @param messageService
   */
  constructor(
    private router: Router,
    private custosClientService: CustosClientService,
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
      const filtro: FiltroCustosDTO = new FiltroCustosDTO();
      filtro.item = '%%%%';
      this.custosClientService.getByFiltro(filtro).subscribe(
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
