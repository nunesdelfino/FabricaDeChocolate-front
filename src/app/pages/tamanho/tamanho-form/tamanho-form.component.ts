/* tslint:disable:no-redundant-jsdoc */
import {NgForm} from '@angular/forms';
import {Component, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import {MessageService} from '../../../shared/message/message.service';
import {AcaoSistema} from '../../../shared/component/acao-sistema.acao';
import {SecurityService} from '../../../shared/security/security.service';
import {TamanhoClientService} from '../shared/tamanho-client/tamanho-client.service';

/**
 * Componente de formulário de Usuário.
 *
 * @author Guiliano Rangel (UEG)
 */
@Component({
  selector: 'app-usuario-form',
  templateUrl: './tamanho-form.component.html',
  styleUrls: ['./tamanho-form.component.scss']
})
export class TamanhoFormComponent {

  public acaoSistema: AcaoSistema;

  public tamanho: any;
  public submitted: boolean;

  private dialogRef: MatDialogRef<any>;

  @ViewChild('formTamanho', { static: true }) formTamanho: NgForm;

  /**
   * Construtor da classe.
   *
   * @param route
   * @param router
   * @param dialog
   * @param messageService
   * @param securityService
   * @param tamanhoClientService
   */
  constructor(
    route: ActivatedRoute,
    private router: Router,
    private dialog: MatDialog,
    private messageService: MessageService,
    public securityService: SecurityService,
    private tamanhoClientService: TamanhoClientService
  ) {
    this.acaoSistema = new AcaoSistema(route);

    if (this.acaoSistema.isAcaoIncluir()) {
      this.tamanho = {};
    }

    if (this.acaoSistema.isAcaoAlterar() || this.acaoSistema.isAcaoVisualizar()) {
      this.tamanho = route.snapshot.data.tamanho;
    }
  }

  /**
   * Salva a instância de Tamanho.
   *
   * @param tamanho
   * @param form
   * @param event
   */
  public salvar(tamanho: any, form: NgForm, event: any) {
    form.onSubmit(event);
    this.submitted = true;

    if (form.valid) {
      this.tamanhoClientService.salvar(tamanho).subscribe(() => {
        this.router.navigate(['/administracao/tamanho']);
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
      this.router.navigateByUrl('/administracao/tamanho');
      confirmed = true;
    }

    if ( !confirmed ) {
      this.messageService.addConfirmYesNo('MSG010', () => {
        this.router.navigateByUrl('/administracao/tamanho');
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
