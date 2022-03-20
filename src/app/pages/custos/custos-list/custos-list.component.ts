/* tslint:disable:no-redundant-jsdoc */
import {ActivatedRoute} from '@angular/router';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {Component, OnInit, ViewChild} from '@angular/core';

import {MessageService} from 'src/app/shared/message/message.service';
import {SecurityService} from 'src/app/shared/security/security.service';
import {AbstractComponent} from '../../../shared/component/Abstract.component';
import {CustosClientService} from '../shared/custos-client/custos-client.service';
import {formatDate} from '@angular/common';
import {FiltroCustosDTO} from "../../../shared/dto/filtro-custos.dto";

/**
 * Componente de listagem de Usuário.
 *
 * @author Gabriel Nunes Delfino
 */
@Component({
  selector: 'custos-list',
  templateUrl: './custos-list.component.html',
  styleUrls: ['./custos-list-component.scss']
})
export class CustosListComponent extends AbstractComponent implements OnInit {

  public filtroDTO: FiltroCustosDTO;

  public dataSource: MatTableDataSource<any>;

  public data: Date = null;

  public displayedColumns = ['item', 'nomeEstabelecimento', 'data', 'preco', 'acoes'];

  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;

  /**
   * Construtor da classe.
   *
   * @param route
   * @param messageService
   * @param securityService
   * @param custosClientService
   */
  constructor(
    route: ActivatedRoute,
    private messageService: MessageService,
    public securityService: SecurityService,
    private custosClientService: CustosClientService
  ) {
    super();
    const custos = route.snapshot.data.custos;
    this.dataSource = new MatTableDataSource<any>(custos);
  }

  /**
   * Inicializa o Component.
   */
  ngOnInit() {
    this.filtroDTO = FiltroCustosDTO.getInstace();
    this.data = null;
    this.dataSource.paginator = this.paginator;
  }

  /**
   * Pesquisa o Pedido conforme o filtro de pesquisa informado.
   *
   * @param FiltroPedidoDTO
   */
  public pesquisar(filtroCustosDTO: FiltroCustosDTO): void {
    if (this.data != null) {
      this.filtroDTO.data = formatDate(this.data, 'yyyy-MM-dd', 'pt-br');
    }
    this.custosClientService.getByFiltro(filtroCustosDTO).subscribe(data => {
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
    this.filtroDTO = FiltroCustosDTO.getInstace();
    this.dataSource.data = [];
  }

  /**
   * remover o Pedido informado.
   *
   * @param custo
   */
  private remover(custo: any): void {
    this.messageService.addConfirmYesNo('MSG045', () => {
      this.custosClientService.remover(custo).subscribe(() => {
        this.filtroDTO.item = this.filtroDTO.item ? this.filtroDTO.item : '%';
        this.pesquisar(this.filtroDTO);
        this.messageService.addMsgSuccess('MSG007');
      }, error => {
        custo.ativo = false;
        this.messageService.addMsgDanger(error);
      });
    }, () => {
      custo.ativo = false;
    });
  }
}
