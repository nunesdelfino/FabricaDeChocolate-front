// /* tslint:disable:no-redundant-jsdoc */
// import { Observable } from 'rxjs';
// import { Injectable } from '@angular/core';
// import { Resolve, ActivatedRouteSnapshot, Router } from '@angular/router';
//
// import { MessageService } from 'src/app/shared/message/message.service';
// import { RelatoriosClientService } from './relatorios-client.service';
// import {FiltroRelatorioClienteDto} from "../../../../shared/dto/filtro-relatorio-cliente.dto";
//
// /**
//  * Classe resolve responsável pela busca das informações de Usuário conforme o id.
//  *
//  * @author Maria E F Oliveira
//  */
// @Injectable()
// export class RelatorioListAtivosResolve implements Resolve<any> {
//
//   /**
//    * Construtor da classe.
//    *
//    * @param router
//    * @param tamanhoClientService
//    * @param messageService
//    */
//   constructor(
//     private router: Router,
//     private tamanhoClientService: RelatoriosClientService,
//     private messageService: MessageService
//   ) { }
//
//   /**
//    * Realiza a consulta por id de Usuário.
//    *
//    * @param route
//    */
//   resolve(route: ActivatedRouteSnapshot): Observable<any> {
//     const id = route.params.id;
//
//     return new Observable(observer => {
//       const filtro: FiltroRelatorioClienteDto = new FiltroRelatorioClienteDto();
//       filtro.dataFinal = '2020/01/01';
//       this.tamanhoClientService.getByFiltro(filtro).subscribe(
//         data => {
//           observer.next(data);
//           observer.complete();
//         },
//         error => {
//           if (error.ativo === 404) {
//             observer.next();
//             observer.complete();
//           } else {
//             observer.error(error);
//             this.router.navigate(['/administracao']);
//             this.messageService.addMsgDanger(error);
//           }
//         }
//       );
//     });
//   }
// }
