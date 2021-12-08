/* tslint:disable:no-redundant-jsdoc */
import {ActivatedRoute} from '@angular/router';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {Component, OnInit, ViewChild} from '@angular/core';

import {MessageService} from 'src/app/shared/message/message.service';
import {SecurityService} from 'src/app/shared/security/security.service';
import {AbstractComponent} from '../../../shared/component/Abstract.component';
import {PedidoClientService} from '../shared/pedido-client/pedido-client.service';
import {formatDate} from '@angular/common';
import {FiltroPedidoDTO} from "../../../shared/dto/filtro-pedido.dto";

/**
 * Componente de listagem de Usuário.
 *
 * @author Guiliano Rangel (UEG)
 */
@Component({
  selector: 'app-usuario-list',
  templateUrl: './pedido-list.component.html',
  styleUrls: ['./pedido-list-component.scss']
})
export class PedidoListComponent extends AbstractComponent implements OnInit {

  public filtroDTO: FiltroPedidoDTO;

  public dataSource: MatTableDataSource<any>;

  public sabores: any[];

  public tamanhos: any[];

  public dataEntrega: Date = null;

  public displayedColumns = ['nome', 'tipoOvo', 'tamanho', 'dataEntrega', 'observacao', 'status', 'acoes'];

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
    this.tamanhos = route.snapshot.data.tamanho;
    this.sabores = route.snapshot.data.sabores;
    this.dataSource = new MatTableDataSource<any>(pedidos);

  }

  /**
   * Inicializa o Component.
   */
  ngOnInit() {
    this.filtroDTO = FiltroPedidoDTO.getInstace();
    this.dataSource.paginator = this.paginator;
  }

  /**
   * Pesquisa o Pedido conforme o filtro de pesquisa informado.
   *
   * @param FiltroPedidoDTO
   */
  public pesquisar(filtroPedidoDTO: FiltroPedidoDTO): void {
    if (this.dataEntrega != null) {
      this.filtroDTO.dataEntrega = formatDate(this.dataEntrega, 'yyyy/MM/dd', 'pt-br');
    }
    this.pedidoClientService.getByFiltro(filtroPedidoDTO).subscribe(data => {
      this.dataSource.paginator = this.paginator;
      this.dataSource.data = data;
    }, data => {
      this.messageService.addMsgDanger(data);
      this.dataSource.data = [];
    });
  }

  /**
   * Limpa o filtro de pesquisa informado.
   */
  public limpar(): void {
    this.filtroDTO = FiltroPedidoDTO.getInstace();
    this.dataSource.data = [];
  }

  /**
   * Tornar Ativar o pedido informado.
   *
   * @param pedido
   */
  private ativaPedido(pedido: any): void {
    this.messageService.addConfirmYesNo('MSG051', () => {
      this.pedidoClientService.ativarPedido(pedido.id).subscribe(() => {
        this.filtroDTO.nome = "%%%%";
        this.pesquisar(this.filtroDTO);
        this.messageService.addMsgSuccess('MSG007');
      }, error => {
        pedido.ativo = "NAO";
        this.messageService.addMsgDanger(error);
      });
    }, () => {
      pedido.ativo = "NAO";
    });
  }

  /**
   * Desativar Pedido do cadastro informado.
   *
   * @param pedido
   */
  private desativarPedido(pedido: any): void {
    this.messageService.addConfirmYesNo('MSG050', () => {
      this.pedidoClientService.desativarPedido(pedido.id).subscribe(() => {
        this.filtroDTO.nome = "%%%%";
        this.pesquisar(this.filtroDTO);
        this.messageService.addMsgSuccess('MSG007');
      }, error => {
        pedido.ativo = "SIM";
        this.messageService.addMsgDanger(error);
      });
    }, () => {
      pedido.ativo = "SIM";
    });
  }

  /**
   * remover o Pedido informado.
   *
   * @param pedido
   */
  private remover(pedido: any): void {
    this.messageService.addConfirmYesNo('MSG045', () => {
      this.pedidoClientService.remover(pedido).subscribe(() => {
        this.filtroDTO.nome = this.filtroDTO.nome ? this.filtroDTO.nome : '%';
        this.pesquisar(this.filtroDTO);
        this.messageService.addMsgSuccess('MSG007');
      }, error => {
        pedido.ativo = false;
        this.messageService.addMsgDanger(error);
      });
    }, () => {
      pedido.ativo = false;
    });
  }
}
