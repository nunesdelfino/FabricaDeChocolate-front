// /* tslint:disable:no-redundant-jsdoc */
// import { Observable } from 'rxjs';
// import { Injectable } from '@angular/core';
// import { Resolve, ActivatedRouteSnapshot, Router } from '@angular/router';
//
// import { MessageService } from 'src/app/shared/message/message.service';
// import { RelatoriosClientService } from './relatorios-client.service';
//
// /**
//  * Classe resolve responsável pela busca das informações de Usuário conforme o id.
//  *
//  * @author Maria E F Oliveira
//  */
// @Injectable()
// export class relatoriosResolve implements Resolve<any> {
//
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
//       this.tamanhoClientService.getById(id).subscribe(
//         data => {
//           observer.next(data);
//           observer.complete();
//         },
//         error => {
//           observer.error(error);
//           this.router.navigate(['/administracao']);
//           this.messageService.addMsgDanger(error);
//         }
//       );
//     });
//   }
// }
