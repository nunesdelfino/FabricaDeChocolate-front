/* tslint:disable:no-redundant-jsdoc */
import {ActivatedRoute} from '@angular/router';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {Component, OnInit, ViewChild} from '@angular/core';

import {MessageService} from 'src/app/shared/message/message.service';
import {SecurityService} from 'src/app/shared/security/security.service';
import {AbstractComponent} from '../../../shared/component/Abstract.component';
import {TamanhoClientService} from '../shared/tamanho-client/tamanho-client.service';
import {FiltroTamanhoDTO} from "../../../shared/dto/filtro-tamanho.dto";

/**
 * Componente de listagem de Usuário.
 *
 * @author Guiliano Rangel (UEG)
 */
@Component({
  selector: 'app-sabor-list',
  templateUrl: './tamanho-list.component.html',
  styleUrls: ['./tamanho-list-component.scss']
})
export class TamanhoListComponent extends AbstractComponent implements OnInit {

  public filtroDTO: FiltroTamanhoDTO;

  public dataSource: MatTableDataSource<any>;

  public displayedColumns = [ 'nome', 'acoes'];

  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;

  /**
   * Construtor da classe.
   *
   * @param route
   * @param messageService
   * @param securityService
   * @param tamanhoClientService
   */
  constructor(
    route: ActivatedRoute,
    private messageService: MessageService,
    public securityService: SecurityService,
    private tamanhoClientService: TamanhoClientService
  ) {
    super();
    const sabores = route.snapshot.data.tamanhos;
    this.dataSource = new MatTableDataSource<any>(sabores);
  }

  /**
   * Inicializa o Component.
   */
  ngOnInit() {
    this.filtroDTO = FiltroTamanhoDTO.getInstace();
    this.dataSource.paginator = this.paginator;
  }

  /**
   * Pesquisa o Tipo Amigo conforme o filtro de pesquisa informado.
   *
   * @param filtroTamanhoDTO
   */
  public pesquisar(filtroTamanhoDTO: FiltroTamanhoDTO): void {
    this.tamanhoClientService.getByFiltro(filtroTamanhoDTO).subscribe(data => {
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
    this.filtroDTO = FiltroTamanhoDTO.getInstace();
    this.dataSource.data = [];
  }

  /**
   * Altera o status do Sabor informado.
   *
   * @param tamanho
   */
  public alterarStatusTamanho(tamanho: any): void {
    console.log(tamanho.tamanho);
    if (tamanho.tamanho) {
      this.ativarTamanho(tamanho);
    } else {
      this.desativarTamanho(tamanho);
    }
  }


  /**
   * Ativar tamanho informado.
   *
   * @param tamanho
   */
  private ativarTamanho(tamanho: any): void {
    this.messageService.addConfirmYesNo('MSG055', () => {
      this.tamanhoClientService.ativarTamanho(tamanho.id).subscribe(() => {
        this.pesquisar(this.filtroDTO);
        this.messageService.addMsgSuccess('MSG007');
      }, error => {
        tamanho.ativo = false;
        this.messageService.addMsgDanger(error);
      });
    }, () => {
      tamanho.ativo = false;
    });
  }

  /**
   * Deixar de ser Amigo do cadastro informado.
   *
   * @param sabor
   */
  private desativarTamanho(tamanho: any): void {
    this.messageService.addConfirmYesNo('MSG054', () => {
      this.tamanhoClientService.desativarTamanho(tamanho.id).subscribe(() => {
        this.pesquisar(this.filtroDTO);
        this.messageService.addMsgSuccess('MSG007');
      }, error => {
        tamanho.ativo = true;
        this.messageService.addMsgDanger(error);
      });
    }, () => {
      tamanho.ativo = true;
    });
  }

}
