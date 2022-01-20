/* tslint:disable:no-redundant-jsdoc */
import {ActivatedRoute} from '@angular/router';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {Component, OnInit, ViewChild} from '@angular/core';

import {MessageService} from 'src/app/shared/message/message.service';
import {SecurityService} from 'src/app/shared/security/security.service';
import {AbstractComponent} from '../../../shared/component/Abstract.component';
import {SaborClientService} from '../shared/sabor-client/sabor-client.service';
import {FiltroSaborDTO} from "../../../shared/dto/filtro-sabor.dto";

/**
 * Componente de listagem de Usuário.
 *
 * @author Guiliano Rangel (UEG)
 */
@Component({
  selector: 'app-sabor-list',
  templateUrl: './sabor-list.component.html',
  styleUrls: ['./sabor-list-component.scss']
})
export class SaborListComponent extends AbstractComponent implements OnInit {

  public filtroDTO: FiltroSaborDTO;

  public dataSource: MatTableDataSource<any>;

  public displayedColumns = [ 'nome','ativo', 'acoes'];

  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;

  /**
   * Construtor da classe.
   *
   * @param route
   * @param messageService
   * @param securityService
   * @param saborClientService
   */
  constructor(
    route: ActivatedRoute,
    private messageService: MessageService,
    public securityService: SecurityService,
    private saborClientService: SaborClientService
  ) {
    super();
    const sabores = route.snapshot.data.sabores;
    this.dataSource = new MatTableDataSource<any>(sabores);
  }

  /**
   * Inicializa o Component.
   */
  ngOnInit() {
    this.filtroDTO = FiltroSaborDTO.getInstace();
    this.dataSource.paginator = this.paginator;
  }

  /**
   * Pesquisa o Tipo Amigo conforme o filtro de pesquisa informado.
   *
   * @param filtroSaborDTO
   */
  public pesquisar(filtroSaborDTO: FiltroSaborDTO): void {
    this.saborClientService.getByFiltro(filtroSaborDTO).subscribe(data => {
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
    this.filtroDTO = FiltroSaborDTO.getInstace();
    this.dataSource.data = [];
  }

  /**
   * Altera o status do Sabor informado.
   *
   * @param sabor
   */
  public alterarStatusSabor(sabor: any): void {
    console.log(sabor);
    if (sabor.ativo) {   //verificação como está entrando
      this.ativarSabor(sabor);
    } else {
      this.desativarSabor(sabor);
    }
  }



  /**
   * Ativar sabor informado.
   *
   * @param sabor
   */
  private ativarSabor(sabor: any): void {
    this.messageService.addConfirmYesNo('MSG053', () => {
      console.log('ativar:', sabor);
      this.saborClientService.ativarSabor(sabor.id).subscribe(() => {
        this.messageService.addMsgSuccess('MSG007');
      }, error => {
        sabor.ativo = false;
        this.messageService.addMsgDanger(error);
      });
    }, () => {
      sabor.ativo = false;
    });
  }

  /**
   * Deixar de ser Amigo do cadastro informado.
   *
   * @param sabor
   */
  private desativarSabor(sabor: any): void {
    this.messageService.addConfirmYesNo('MSG052', () => {
      console.log('desativar:', sabor);
      this.saborClientService.desativarSabor(sabor.id).subscribe(() => {
        this.messageService.addMsgSuccess('MSG007');
      }, error => {
        console.log(sabor);
        sabor.ativo = true;
        this.messageService.addMsgDanger(error);
      });
    }, () => {
      sabor.ativo = true;
    });
  }

}
