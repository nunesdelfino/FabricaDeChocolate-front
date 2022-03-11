
import {
  FX_FLEX_GT_XS,
  FX_FLEX_GT_SM,
  FX_FLEX_GT_MD,
  FX_FLEX_GT_LG,
  FX_FLEX_XL,
  PAGINATOR_PAGE_SIZE,
  StatusAtivoInativo,
  TipoUsuario,
  TipoTelefone,
  TipoRevisao,
  StatusSimNao,
  StatusPedido,
  TipoOvo,
  StatusAtivoInativoString, StatusEntregar
} from '../app.constantes';

/**
 * Classe abastrada para conter as principais constantes necessárias
 * aos componentes.
 */
export class AbstractComponent {
  public FX_FLEX_GT_XS = FX_FLEX_GT_XS;
  public FX_FLEX_GT_SM = FX_FLEX_GT_SM;
  public FX_FLEX_GT_MD = FX_FLEX_GT_MD;
  public FX_FLEX_GT_LG = FX_FLEX_GT_LG;
  public FX_FLEX_XL = FX_FLEX_XL;
  public PAGINATOR_PAGE_SIZE = PAGINATOR_PAGE_SIZE;

  public listStatusAtivosInativos: Array<StatusAtivoInativo>;
  public listStatusAtivosInativosString: Array<StatusAtivoInativoString>;
  public listStatusSimNao: Array<StatusSimNao>;
  public listStatusPedido: Array<StatusPedido>;
  public listStatusPedidoAceito: Array<StatusPedido>;
  public listStatusPedidoCancelado: Array<StatusPedido>;
  public listTipoOvo: Array<TipoOvo>;
  public listTiposUsuarios: Array<TipoUsuario>;
  public listTiposTelefones: Array<TipoTelefone>;
  public listTiposRevisoes: Array<TipoRevisao>;
  public listEntregar: Array<StatusEntregar>;

  constructor() {
    this.initListStatusAtivosInativos();
    this.initListStatusAtivosInativosString();
    this.initListTiposUsuarios();
    this.initListTiposTelefones();
    this.initListTiposRevisoes();
    this.initListStatusSimNao();
    this.initListStatusPedido();
    this.initListStatusPedidoAceito();
    this.initListStatusPedidoCancelado();
    this.initListTipoOvo();
    this.initListEntregar();
  }

  private initListEntregar(){
    this.listEntregar = [];
    this.listEntregar.push(StatusEntregar.SIM);
    this.listEntregar.push(StatusEntregar.NAO);
  }

  /**
   * Inicializa lista Status Pedido
   */
  private initListStatusPedido(){
    this.listStatusPedido = [];
    this.listStatusPedido.push(StatusPedido.ACEITOPG);
    this.listStatusPedido.push(StatusPedido.ACEITONPG);
    this.listStatusPedido.push(StatusPedido.ENTREGUE);
    this.listStatusPedido.push(StatusPedido.PENDENTE);
    this.listStatusPedido.push(StatusPedido.CANCELADO);
  }

  /**
   * Inicializa lista Status Pedido
   */
  private initListStatusPedidoAceito(){
    this.listStatusPedidoAceito = [];
    this.listStatusPedidoAceito.push(StatusPedido.ACEITOPG);
    this.listStatusPedidoAceito.push(StatusPedido.ENTREGUE);
    this.listStatusPedidoAceito.push(StatusPedido.CANCELADO);
  }

  /**
   * Inicializa lista Status Pedido
   */
  private initListStatusPedidoCancelado(){
    this.listStatusPedidoCancelado = [];
    this.listStatusPedidoCancelado.push(StatusPedido.ENTREGUE);
    this.listStatusPedidoCancelado.push(StatusPedido.CANCELADO);
  }

  /**
   * Inicializa lista Tipo Ovo
   */
  private initListTipoOvo(){
    this.listTipoOvo = [];
    this.listTipoOvo.push(TipoOvo.COLHER);
    this.listTipoOvo.push(TipoOvo.SIMPLES);
    this.listTipoOvo.push(TipoOvo.TRUFADO);
  }


  /**
   * Inicializa a Lista de Status.
   */
  private initListStatusAtivosInativosString() {
    this.listStatusAtivosInativosString = [];
    this.listStatusAtivosInativosString.push(StatusAtivoInativoString.S);
    this.listStatusAtivosInativosString.push(StatusAtivoInativoString.N);
  }


  /**
   * Inicializa a Lista de Status.
   */
  private initListStatusAtivosInativos() {
    this.listStatusAtivosInativos = [];
    this.listStatusAtivosInativos.push(StatusAtivoInativo.ATIVO);
    this.listStatusAtivosInativos.push(StatusAtivoInativo.INATIVO);
  }

  /**
   * Inicializa a Lista de Status.
   */
  private initListStatusSimNao() {
    this.listStatusSimNao = [];
    this.listStatusSimNao.push(StatusSimNao.SIM);
    this.listStatusSimNao.push(StatusSimNao.NAO);
  }

  /**
   * Inicializa a Lista de Tipos de Usuário.
   */
  private initListTiposUsuarios() {
    this.listTiposUsuarios = [];
    this.listTiposUsuarios.push(TipoUsuario.SERVIDOR_INTERNO);
  }

  /**
   * Inicializa a Lista de Tipos de Telefone.
   */
  private initListTiposTelefones() {
    this.listTiposTelefones = [];
    this.listTiposTelefones.push(TipoTelefone.CELULAR);
    this.listTiposTelefones.push(TipoTelefone.COMERCIAL);
    this.listTiposTelefones.push(TipoTelefone.RESIDENCIAL);
  }

  /**
   * Inicializa a Lista de Tipos de Revisão.
   */
  private initListTiposRevisoes() {
    this.listTiposRevisoes = [];
    this.listTiposRevisoes.push(TipoRevisao.INCLUSAO);
    this.listTiposRevisoes.push(TipoRevisao.ALTERACAO);
    this.listTiposRevisoes.push(TipoRevisao.EXCLUSAO);
    this.listTiposRevisoes.push(TipoRevisao.CONSULTA);
  }
}
