/* tslint:disable:no-redundant-jsdoc */
import {NgForm} from '@angular/forms';
import {Component, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import {MessageService} from '../../../shared/message/message.service';
import {AcaoSistema} from '../../../shared/component/acao-sistema.acao';
import {SecurityService} from '../../../shared/security/security.service';
import {SaborClientService} from '../shared/sabor-client/sabor-client.service';

/**
 * Componente de formulário de Usuário.
 *
 * @author Guiliano Rangel (UEG)
 */
@Component({
  selector: 'app-usuario-form',
  templateUrl: './sabor-form.component.html',
  styleUrls: ['./sabor-form.component.scss']
})
export class SaborFormComponent {

  public acaoSistema: AcaoSistema;

  public sabor: any;
  public submitted: boolean;

  private dialogRef: MatDialogRef<any>;

  @ViewChild('formSabor', { static: true }) formSabor: NgForm;

  /**
   * Construtor da classe.
   *
   * @param route
   * @param router
   * @param dialog
   * @param messageService
   * @param securityService
   * @param saborClientService
   */
  constructor(
    route: ActivatedRoute,
    private router: Router,
    private dialog: MatDialog,
    private messageService: MessageService,
    public securityService: SecurityService,
    private saborClientService: SaborClientService
  ) {
    this.acaoSistema = new AcaoSistema(route);

    if (this.acaoSistema.isAcaoIncluir()) {
      this.sabor = {};
    }

    if (this.acaoSistema.isAcaoAlterar() || this.acaoSistema.isAcaoVisualizar()) {
      this.sabor = route.snapshot.data.sabores;
    }
  }

  /**
   * Salva a instância de Sabor.
   *
   * @param sabor
   * @param form
   * @param event
   */
  public salvar(sabor: any, form: NgForm, event: any) {
    form.onSubmit(event);
    this.submitted = true;

    if (form.valid) {
      this.saborClientService.salvar(sabor).subscribe(() => {
        this.router.navigate(['/administracao/sabor']);
        this.messageService.addMsgSuccess('MSG007');
      }, error => {
        this.messageService.addMsgDanger(error);
      });
    } else {
      this.messageService.addMsgSuccess('MSG001');
    }
  }

  /**
   * Confirma o cancelamento e volta para a tela de Pesquisa.
   */
  public cancelar(): void {
    let confirmed = false;

    if (this.acaoSistema.isAcaoVisualizar()) {
      this.router.navigateByUrl('/administracao/sabor');
      confirmed = true;
    }

    if ( !confirmed ) {
      this.messageService.addConfirmYesNo('MSG010', () => {
        this.router.navigateByUrl('/administracao/sabor');
      });
    }
  }

  /**
   * Fecar o Modal de Vinculação de Usuário do AD.
   */
  public closeDialogs(): void {
    this.dialogRef.close();
  }
}
