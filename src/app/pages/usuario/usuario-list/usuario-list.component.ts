/* tslint:disable:no-redundant-jsdoc */
import { ActivatedRoute } from '@angular/router';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Component, OnInit, ViewChild } from '@angular/core';

import { MessageService } from 'src/app/shared/message/message.service';
import { FiltroUsuarioDTO } from '../../../shared/dto/filtro-usuario.dto';
import { SecurityService } from 'src/app/shared/security/security.service';
import { AbstractComponent } from '../../../shared/component/Abstract.component';
import { UsuarioClientService } from '../shared/usuario-client/usuario-client.service';

/**
 * Componente de listagem de Usuário.
 *
 * @author Guiliano Rangel (UEG)
 */
@Component({
  selector: 'app-usuario-list',
  templateUrl: './usuario-list.component.html',
  styleUrls: ['./usuario-list-component.scss']
})
export class UsuarioListComponent extends AbstractComponent implements OnInit {

  public filtroDTO: FiltroUsuarioDTO;

  public dataSource: MatTableDataSource<any>;

  public tiposCadastro: any[];

  public displayedColumns = ['login', 'nome', 'acoes'];

  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;

  /**
   * Construtor da classe.
   *
   * @param route
   * @param messageService
   * @param securityService
   * @param usuarioClientService
   */
  constructor(
    route: ActivatedRoute,
    private messageService: MessageService,
    public securityService: SecurityService,
    private usuarioClientService: UsuarioClientService
  ) {
    super();
    const usuarios = route.snapshot.data.usuarios;
    this.tiposCadastro = route.snapshot.data.tiposCadastro;
    this.dataSource = new MatTableDataSource<any>(usuarios);
  }

  /**
   * Inicializa o Component.
   */
  ngOnInit() {
    this.filtroDTO = FiltroUsuarioDTO.getInstace();
    this.dataSource.paginator = this.paginator;
  }

  /**
   * Pesquisa o Usuário conforme o filtro de pesquisa informado.
   *
   * @param filtroUsuarioDTO
   */
  public pesquisar(filtroUsuarioDTO: FiltroUsuarioDTO): void {
    this.usuarioClientService.getByFiltro(filtroUsuarioDTO).subscribe(data => {
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
    this.filtroDTO = FiltroUsuarioDTO.getInstace();
    this.dataSource.data = [];
  }

  /**
   * Altera o status do Usuário informado.
   *
   * @param usuario
   */
  public alterarStatusUsuario(usuario: any): void {
    if (!usuario.status) {
      this.inativar(usuario);
    } else {
      this.ativar(usuario);
    }
  }

  /**
   * Ativa o Usuário informado.
   *
   * @param usuario
   */
  private ativar(usuario: any): void {
    this.messageService.addConfirmYesNo('MSG034', () => {
      this.usuarioClientService.ativar(usuario.id).subscribe(() => {
        this.pesquisar(this.filtroDTO);
        this.messageService.addMsgSuccess('MSG007');
      }, error => {
        usuario.status = false;
        this.messageService.addMsgDanger(error);
      });
    }, () => {
      usuario.status = false;
    });
  }

  /**
   * Inativa o Usuário informado.
   *
   * @param usuario
   */
  private inativar(usuario: any): void {
    this.messageService.addConfirmYesNo('MSG033', () => {
      this.usuarioClientService.inativar(usuario.id).subscribe(() => {
        this.pesquisar(this.filtroDTO);
        this.messageService.addMsgSuccess('MSG007');
      }, error => {
        usuario.status = true;
        this.messageService.addMsgDanger(error);
      });
    }, () => {
      usuario.status = true;
    });
  }
}
