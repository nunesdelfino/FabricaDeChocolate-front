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
    }
  }

  public manipulaData(s: string){

    let d = s.split('-');
    return d[0] + '-' + this.diaMes(d[2], d[1]);

  }

  public doisDigitos(s: string) {
    if(parseInt(s) < 10){
      return "0" + s;
    }
    return s;
  }

  public diaMes(dia: string, mes: string){
    let diaNum = parseInt(dia);
    let mesNum = parseInt(mes);
    if( diaNum == 31){
      diaNum = 1;
      mesNum = mesNum + 1;
    } else {
      diaNum = diaNum + 1;
    }
    return this.doisDigitos(mesNum.toString()) + "-" + this.doisDigitos(diaNum.toString());
  }

  public preparaData(s: string){
    let d = s.split('-');

    return d[0] + '-' + this.diaMesSave(d[2], d[1]);

  }

  public diaMesSave(dia: string, mes: string){
    let diaNum = parseInt(dia);
    let mesNum = parseInt(mes);
    if( diaNum == 1){
      mesNum = mesNum - 1;
      if(mesNum == 2){
        diaNum = 28;
      } else {
        if (mesNum == 4 || mesNum == 6 || mesNum == 9 || mesNum == 11) {
          diaNum = 30;
        } else {
          diaNum = 31;
        }
      }
    } else {
      diaNum = diaNum - 1;
    }
    return this.doisDigitos(mesNum.toString()) + "-" + this.doisDigitos(diaNum.toString());
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

    // console.log(typeof custos.data + custos.data);
    // custos.data = this.preparaData(custos.data.toString());
    // console.log(typeof custos.data + custos.data);
    if(!this.acaoSistema.isAcaoAlterar()){
      custos.data.setHours(12);
    }

    if((typeof custos.valor) == 'string'){
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
