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

  public mes(mes): string {
    mes = mes + 1;
    if (mes > 9) {
      return mes.toString();
    } else {
      return 0 + mes.toString();
    }
  }

  public dia(dia): string {
    if (dia > 9) {
      return dia.toString();
    } else {
      return 0 + dia.toString();
    }
  }

  public data(data): string {
    const d = new Date(data);
    // tslint:disable-next-line:radix
    return(d.getFullYear() + '-' + this.mes(d.getMonth()) + '-' + this.dia(d.getDate()));
  }

}
