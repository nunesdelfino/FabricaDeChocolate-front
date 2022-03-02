/* tslint:disable:no-redundant-jsdoc */
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, Router } from '@angular/router';

import { MessageService } from 'src/app/shared/message/message.service';
import { RelatoriosClientService } from './relatorios-client.service';
import {FiltroTamanhoDTO} from "../../../../shared/dto/filtro-tamanho.dto";
import {FiltroRelatorioClienteDto} from "../../../../shared/dto/filtro-relatorio-cliente.dto";

/**
 * Classe resolve responsável pela busca das informações de Usuário conforme o id.
 *
 * @author Maria E F Oliveira
 */
@Injectable()
export class RelatorioClienteListResolve implements Resolve<any> {

  constructor(
    private router: Router,
    private relatoriosClientService: RelatoriosClientService,
    private messageService: MessageService
  ) { }

  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    return new Observable(observer => {
      const filtro: FiltroRelatorioClienteDto = new FiltroTamanhoDTO();
      // filtro.dataInicio = '2020/01/01';
      // filtro.dataFinal = '2023/01/01';
      this.relatoriosClientService.getByFiltro(filtro).subscribe(
        data => {
          observer.next(data);
          observer.complete();
        },
        error => {
          if (error.ativo === 404) {
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
