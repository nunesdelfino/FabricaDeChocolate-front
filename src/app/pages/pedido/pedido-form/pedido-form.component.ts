/* tslint:disable:no-redundant-jsdoc */
import {NgForm} from '@angular/forms';
import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {MatTableDataSource} from '@angular/material/table';
import {MatDialog} from '@angular/material/dialog';
import {MessageService} from '../../../shared/message/message.service';
import {AcaoSistema} from '../../../shared/component/acao-sistema.acao';
import {SecurityService} from '../../../shared/security/security.service';
import {PedidoClientService} from '../shared/pedido-client/pedido-client.service';
import {AbstractComponent} from '../../../shared/component/Abstract.component';
import {StatusPedido} from "../../../shared/app.constantes";

/**
 * Componente de formulário de Amigo.
 *
 * @author Guiliano Rangel (UEG)
 */
@Component({
  selector: 'app-amigo-form',
  templateUrl: './pedido-form.component.html',
  styleUrls: ['./pedido-form.component.scss']
})
export class PedidoFormComponent extends AbstractComponent  implements OnInit {

  public acaoSistema: AcaoSistema;

  public pedido: any;
  public tamanho: any[];
  public sabores: any[];
  public statusPedido: any[];
  public submittedPedido: boolean;

  public dataSourceGrupos: MatTableDataSource<any>;

  public displayedColumns: any;

  @ViewChild('formPedido', { static: true }) formPedido: NgForm;

  /**
   * Construtor da classe.
   *
   * @param route
   * @param router
   * @param dialog
   * @param messageService
   * @param securityService
   * @param pedidoClientService
   */
  constructor(
    route: ActivatedRoute,
    private router: Router,
    private dialog: MatDialog,
    private messageService: MessageService,
    public securityService: SecurityService,
    private pedidoClientService: PedidoClientService
  ) {
    super();
    this.acaoSistema = new AcaoSistema(route);
    this.dataSourceGrupos = new MatTableDataSource<any>();

    this.tamanho = route.snapshot.data.tamanho;
    this.sabores = route.snapshot.data.sabores;


    if (this.acaoSistema.isAcaoIncluir()) {

      this.pedido = {};
    }

    if (this.acaoSistema.isAcaoAlterar() || this.acaoSistema.isAcaoVisualizar()) {
      this.pedido = route.snapshot.data.pedido;
    }
  }


  /**
   * Salva a instância de Amigo.
   *
   * @param pedido
   * @param form
   * @param event
   */
  public salvar(pedido: any, form: NgForm, event: any) {
    form.onSubmit(event);
    this.submittedPedido = true;

    if (form.valid) {
      this.pedidoClientService.salvar(pedido).subscribe(() => {
          this.router.navigate(['/administracao/pedido']);
          this.messageService.addMsgSuccess('MSG007');
        }, error => {
          this.messageService.addMsgDanger(error);
        });
    }
  }

  /**
   * Altera o status do Pedido informado.
   *
   * @param pedido
   */
  public alterarStatusPedido(pedido: any): void {
    if (pedido.ativo) {
      this.ativarPedido(pedido);
    } else {
      this.desativarPedido(pedido);
    }
  }

  /**
   * Torna o cadastro um Amigo.
   *
   * @param pedido
   */
  private ativarPedido(pedido: any): void {
    this.messageService.addConfirmYesNo('MSG046', () => {
      this.pedidoClientService.ativarPedido(pedido.id).subscribe(() => {
        this.messageService.addMsgSuccess('MSG007');
      }, error => {
        pedido.ativo = false;
        this.messageService.addMsgDanger(error);
      });
    }, () => {
      pedido.ativo = false;
    });
  }

  /**
   * deixar de ser amigo do cadastro
   *
   * @param pedido
   */
  private desativarPedido(pedido: any): void {
    this.messageService.addConfirmYesNo('MSG047', () => {
      this.pedidoClientService.desativarPedido(pedido.id).subscribe(() => {
        this.messageService.addMsgSuccess('MSG007');
      }, error => {
        pedido.ativo = true;
        this.messageService.addMsgDanger(error);
      });
    }, () => {
      pedido.ativo = true;
    });
  }

  /**
   * Confirma o cancelamento e volta para a tela de Pesquisa.
   */
  public cancelar(): void {
    let confirmed = false;

    if (this.acaoSistema.isAcaoVisualizar()) {
      this.router.navigateByUrl('/administracao/pedido');
      confirmed = true;
    }

    if ( !confirmed ) {
      this.messageService.addConfirmYesNo('MSG010', () => {
        this.router.navigateByUrl('/administracao/pedido');
      });
    }
  }

  ngOnInit(): void {
  }

  public statusPedidoPagoCancelado(p): boolean{
    if(p.status==StatusPedido.ACEITOPG || p.status=="cancelado"){
      return true;
    } else {
      return false;
    }
  }

  public pendenteId(): string {
    return StatusPedido.ACEITOPG.id
  }



  public pendenteDescricao(): string {
    return StatusPedido.ACEITOPG.descricao
  }

}
