/* tslint:disable:no-redundant-jsdoc */
import {NgForm} from '@angular/forms';
import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {MatTableDataSource} from '@angular/material/table';
import {MatDialog} from '@angular/material/dialog';
import {MessageService} from '../../../shared/message/message.service';
import {AcaoSistema} from '../../../shared/component/acao-sistema.acao';
import {SecurityService} from '../../../shared/security/security.service';
import {CustosClientService} from '../shared/custos-client/custos-client.service';
import {AbstractComponent} from '../../../shared/component/Abstract.component';
import {StatusPedido} from "../../../shared/app.constantes";
import { Location } from '@angular/common';

/**
 * Componente de formulário de Amigo.
 *
 * @author Gabriel Nunes Delfino
 */
@Component({
  selector: 'custos-form',
  templateUrl: './custos-form.component.html',
  styleUrls: ['./custos-form.component.scss']
})
export class CustosFormComponent extends AbstractComponent  implements OnInit {

  public acaoSistema: AcaoSistema;

  public custos: any;
  public submittedPedido: boolean;

  public dataSourceGrupos: MatTableDataSource<any>;

  public displayedColumns: any;

  @ViewChild('formCustos', { static: true }) formCustos: NgForm;

  /**
   * Construtor da classe.
   *
   * @param route
   * @param router
   * @param dialog
   * @param messageService
   * @param securityService
   * @param custosClientService
   */
  constructor(
    route: ActivatedRoute,
    private router: Router,
    private location: Location,
    private dialog: MatDialog,
    private messageService: MessageService,
    public securityService: SecurityService,
    private custosClientService: CustosClientService
  ) {
    super();
    this.acaoSistema = new AcaoSistema(route);
    this.dataSourceGrupos = new MatTableDataSource<any>();

    if (this.acaoSistema.isAcaoIncluir()) {

      this.custos = {};
    }

    if (this.acaoSistema.isAcaoAlterar() || this.acaoSistema.isAcaoVisualizar()) {
      this.custos = route.snapshot.data.custos;
      this.custos.data = this.manipulaData(this.custos.data);
    }
  }

  public manipulaData(s: string){
    let d = s.split('-');
    d[2] = this.soma(d[2]);
    return d[0] + '-' + d[1] + '-' + d[2];
  }

  public soma(s: string){
    let n = parseInt(s);
    n = n + 1;
    return n.toString();
  }

  /**
   * Salva a instância de Custos.
   *
   * @param custos
   * @param form
   * @param event
   */
  public salvar(custos: any, form: NgForm, event: any) {
    form.onSubmit(event);
    this.submittedPedido = true;

    if(custos.valor < 0){
      custos.valor = custos.valor.replace(',','.');
    }

    if (form.valid) {
      this.custosClientService.salvar(custos).subscribe(() => {
          this.router.navigate(['/administracao/custos']);
          this.messageService.addMsgSuccess('MSG007');
        }, error => {
          this.messageService.addMsgDanger(error);
        });
    }
  }


  /**
   * Confirma o cancelamento e volta para a tela de Pesquisa.
   */
  public cancelar(): void {
    let confirmed = false;

    if (this.acaoSistema.isAcaoVisualizar()) {
      this.location.back();
      //this.router.navigateByUrl('/administracao/pedido');
      confirmed = true;
    }

    if ( !confirmed ) {
      this.messageService.addConfirmYesNo('MSG010', () => {
        this.router.navigateByUrl('/administracao/custos');
      });
    }
  }

  ngOnInit(): void {
  }
}
