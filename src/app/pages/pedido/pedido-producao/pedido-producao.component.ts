/* tslint:disable:no-redundant-jsdoc */
import { StatusProducao } from './../../../shared/app.constantes';
import {ActivatedRoute} from '@angular/router';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {Component, OnInit, ViewChild} from '@angular/core';

import { AbstractComponent } from 'src/app/shared/component/Abstract.component';
import { PedidoClientService } from '../shared/pedido-client/pedido-client.service';
import { SecurityService } from 'src/app/shared/security/security.service';
import { MessageService } from 'src/app/shared/message/message.service';

import {FiltroPedidoDTO} from "../../../shared/dto/filtro-pedido.dto";

@Component({
  selector: 'app-pedido-producao',
  templateUrl: './pedido-producao.component.html',
  styleUrls: ['./pedido-producao-component.scss']
})
export class PedidoProducaoComponent extends AbstractComponent implements OnInit {
  public filtroDTO: FiltroPedidoDTO;
  public dataSource: MatTableDataSource<any>;
  public dataEntrega: Date = null;
  public displayedColumns = ['nome', 'telefone', 'dataEntrega', 'status', 'acoes'];

  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;

   /**
   * Construtor da classe.
   *
   * @param route
   * @param messageService
   * @param securityService
   * @param pedidoClientService
   */
    constructor(
      route: ActivatedRoute,
      private messageService: MessageService,
      public securityService: SecurityService,
      private pedidoClientService: PedidoClientService
    ) {
      super();
      const pedidos = route.snapshot.data.pedido;
      this.dataSource = new MatTableDataSource<any>(pedidos);
    }

  /**
   * Inicializa o Component.
   */
   ngOnInit() {
    this.filtroDTO = FiltroPedidoDTO.getInstace();
    this.dataSource.paginator = this.paginator;
  }

   /* Retorna a descricao (String)
   *
   * @param p traz a informacao do pedido
   * @returns
   */
public statusProducao(p): boolean{

    if(p==StatusProducao.EM_PRODUCAO.id){
      return true
    }
    if(p==StatusProducao.NAO_PRODUCAO.id){
      return false
    }
    return p;
  }

  /**
   * Altera o status do Pedido informado.
   *
   * @param pedido
   */
   public alterarStatusPedido(pedido: any): void {

    if (!pedido.statusProducao) {
      this.emProducao(pedido);
    } else {
      this.naoProducao(pedido);
    }
  }

    /**
 * deixar de ser amigo do cadastro
 *
 * @param pedido
 */
private naoProducao(pedido: any): void {
  this.messageService.addConfirmYesNo('MSG056', () => {
    this.pedidoClientService.naoProducao(pedido.id).subscribe(() => {
      this.messageService.addMsgSuccess('MSG007');
    }, error => {
      pedido.statusProducao = true;
      this.messageService.addMsgDanger(error);
    });
  }, () => {
    pedido.statusProducao = true;
  });
}

  /**
 * Tornar o pedido em produção.
 *
 * @param pedido
 */
   private emProducao(pedido: any): void {
    this.messageService.addConfirmYesNo('MSG057', () => {
      this.pedidoClientService.emProducao(pedido.id).subscribe(() => {
        this.messageService.addMsgSuccess('MSG007');
      }, error => {
        pedido.statusProducao = false;
        this.messageService.addMsgDanger(error);
      });
    }, () => {
      pedido.statusProducao = false;
    });
  }
}
