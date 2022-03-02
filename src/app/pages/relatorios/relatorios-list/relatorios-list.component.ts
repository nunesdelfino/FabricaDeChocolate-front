import { StatusSimNao } from 'src/app/shared/app.constantes';
/* tslint:disable:no-redundant-jsdoc */
import {ActivatedRoute} from '@angular/router';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {Component, OnInit, ViewChild} from '@angular/core';

import {MessageService} from 'src/app/shared/message/message.service';
import {SecurityService} from 'src/app/shared/security/security.service';
import {AbstractComponent} from '../../../shared/component/Abstract.component';
import {RelatoriosClientService} from '../shared/relatorios-client/relatorios-client.service';
import {FiltroRelatorioClienteDto} from '../../../shared/dto/filtro-relatorio-cliente.dto';
import {DatePipe} from '@angular/common';


@Component({
  selector: 'app-tamanho-list',
  templateUrl: './relatorios-list.component.html',
  styleUrls: ['./relatorios-list-component.scss']
})
export class RelatoriosListComponent extends AbstractComponent implements OnInit {

  public filtroDTO: FiltroRelatorioClienteDto;

  public dataSource: MatTableDataSource<any>;

  public displayedColumns = [ 'id', 'nome', 'numero', 'tipo', 'tamanho', 'preco', 'data'];

  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;

  constructor(
    route: ActivatedRoute,
    private messageService: MessageService,
    public securityService: SecurityService,
    private relatorioClienteService: RelatoriosClientService,
    public datePipe: DatePipe
  ) {
    super();
    const pedidos = route.snapshot.data.pedidos;
    this.dataSource = new MatTableDataSource<any>(pedidos);
  }

  /**
   * Inicializa o Component.
   */
  ngOnInit() {
    this.filtroDTO = FiltroRelatorioClienteDto.getInstace();
    this.dataSource.paginator = this.paginator;
  }


  public pesquisar(filtroRelatorioClienteDto: FiltroRelatorioClienteDto): void {
    filtroRelatorioClienteDto.dataInicio = this.data(filtroRelatorioClienteDto.dataInicio);
    filtroRelatorioClienteDto.dataFinal = this.data(filtroRelatorioClienteDto.dataFinal);
    this.relatorioClienteService.pesquisar(filtroRelatorioClienteDto).subscribe(data => {
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
    this.filtroDTO = FiltroRelatorioClienteDto.getInstace();
    this.dataSource.data = [];
  }

  public mes(mes): number {
    return mes + 1;
  }

  public data(data): string {
    let d = new Date(data);
    // tslint:disable-next-line:radix
    return(d.getFullYear() + '/' + 0 + this.mes(d.getMonth()) + '/' + 0 + d.getDate());
  }

}
