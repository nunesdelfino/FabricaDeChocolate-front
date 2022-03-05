/* tslint:disable:no-inferrable-types no-redundant-jsdoc */
export const STATUS_ATIVO: string = 'ATIVO';

export const STATUS_INATIVO: string = 'INATIVO';

export const STATUS_SIM: string = 'SIM';

export const STATUS_NAO: string = 'NAO';

export const MNEMONICO_PORTAL = 'PORTALSSO';

/* ==== Layouts geral ==== */
export const FX_FLEX_GT_XS = '100';
export const FX_FLEX_GT_SM = '100';
export const FX_FLEX_GT_MD = '1200px';
export const FX_FLEX_GT_LG = '1200px';
export const FX_FLEX_XL = '1280PX';
export const PAGINATOR_PAGE_SIZE = 5;


/**
 * Classe que disponibiliza as constantes de Status na aplicação.
 *
 * @author Gabriel Nunes Delfino
 */
export class StatusAtivoInativo {

  public static readonly ATIVO: StatusAtivoInativo = new StatusAtivoInativo(true, 'Ativo');

  public static readonly INATIVO: StatusAtivoInativo = new StatusAtivoInativo(false, 'Inativo');

  /**
   * Construtor da classe.
   *
   * @param id
   * @param descricao
   */
  constructor(
    public id: boolean,
    public descricao: string
  ) {}
}

/**
 * Classe que disponibiliza as constantes de Status na aplicação.
 *
 * @author Maria E F Oliveira
 */
 export class StatusProducao {

  public static readonly EM_PRODUCAO: StatusAtivoInativo = new StatusAtivoInativo(true, 'Em Produção');

  public static readonly NAO_PRODUCAO: StatusAtivoInativo = new StatusAtivoInativo(false, '-');

  /**
   * Construtor da classe.
   *
   * @param id
   * @param descricao
   */
  constructor(
    public id: boolean,
    public descricao: string
  ) {}
}

/**
 * Classe que disponibiliza as constantes de Status Pedido na aplicação.
 *
 * @author Gabriel Nunes
 */
export class StatusPedido {

  public static readonly PENDENTE: StatusPedido = new StatusPedido('pendente', 'Pendente');

  public static readonly ACEITOPG: StatusPedido = new StatusPedido('aceitopg', 'Aceito - Pagamento Realizado');

  public static readonly ACEITONPG: StatusPedido = new StatusPedido('aceitonpg', 'Aceito - Pagamento Pendente');

  public static readonly CANCELADO: StatusPedido = new StatusPedido('cancelado', 'Cancelado');

  /**
   * Construtor da classe.
   *
   * @param id
   * @param descricao
   */
  constructor(
    public id: string,
    public descricao: string
  ) {}
}

export class StatusAtivoInativoString {

  public static readonly S: StatusAtivoInativoString = new StatusAtivoInativoString('S', 'Ativo');

  public static readonly N: StatusAtivoInativoString = new StatusAtivoInativoString('N', 'Inativo');

  public static readonly T: StatusAtivoInativoString = new StatusAtivoInativoString('T', 'Todos');

  /**
   * Construtor da classe.
   *
   * @param id
   * @param descricao
   */
  constructor(
    public id: string,
    public descricao: string
  ) {}
}

/**
 * Classe que disponibiliza as constantes de Status Pedido na aplicação.
 *
 * @author Gabriel Nunes
 */
export class TipoOvo {

  public static readonly COLHER: TipoOvo = new TipoOvo('colher', 'Colher');

  public static readonly SIMPLES: TipoOvo = new TipoOvo('simples', 'Simples');

  public static readonly TRUFADO: TipoOvo = new TipoOvo('trufado', 'Trufado');

  /**
   * Construtor da classe.
   *
   * @param id
   * @param descricao
   */
  constructor(
    public id: string,
    public descricao: string
  ) {}
}

/**
 * Classe que disponibiliza as constantes de Status SimNao na aplicação.
 *
 * @author Gabriel Nunes Delfino
 */
export class StatusSimNao {

  public static readonly SIM: StatusSimNao = new StatusSimNao('S', 'Sim');

  public static readonly NAO: StatusSimNao = new StatusSimNao('N', 'Não');

  /**
   * Construtor da classe.
   *
   * @param id
   * @param descricao
   */
  constructor(
    public id: string,
    public descricao: string
  ) {}
}

export class StatusEntregar {

  public static readonly SIM: StatusSimNao = new StatusSimNao('SIM', 'Sim');

  public static readonly NAO: StatusSimNao = new StatusSimNao('NAO', 'Não');

  /**
   * Construtor da classe.
   *
   * @param id
   * @param descricao
   */
  constructor(
    public id: string,
    public descricao: string
  ) {}
}

/**
 * Classe que disponibiliza as constantes de Tipos de Usuário na aplicação.
 *
 * @author Gabriel Nunes Delfino
 */
export class TipoUsuario {

  public static readonly SERVIDOR_INTERNO: TipoUsuario = new TipoUsuario('S', 'Servidor Interno');

  /**
   * Construtor da classe.
   *
   * @param id
   * @param descricao
   */
  constructor(
    public id: string,
    public descricao: string
  ) {}
}

/**
 * Classe que disponibiliza as constantes de Tipos de Telefone na aplicação.
 *
 * @author Gabriel Nunes Delfino
 */
export class TipoTelefone {

  public static readonly CELULAR: TipoTelefone = new TipoTelefone('1', 'Celular');
  public static readonly RESIDENCIAL: TipoTelefone = new TipoTelefone('2', 'Residencial');
  public static readonly COMERCIAL: TipoTelefone = new TipoTelefone('3', 'Comercial');

  /**
   * Construtor da classe.
   *
   * @param id
   * @param descricao
   */
  constructor(
    public id: string,
    public descricao: string
  ) {}
}

/**
 * Classe que disponibiliza as constantes de Tipos de Revisão na aplicação.
 *
 * @author Gabriel Nunes Delfino
 */
export class TipoRevisao {

  public static readonly INCLUSAO: TipoRevisao = new TipoRevisao(0, 'Inclusão');
  public static readonly ALTERACAO: TipoRevisao = new TipoRevisao(1, 'Alteração');
  public static readonly EXCLUSAO: TipoRevisao = new TipoRevisao(2, 'Exclusão');
  public static readonly CONSULTA: TipoRevisao = new TipoRevisao(3, 'Consulta');

  /**
   * Construtor da classe.
   *
   * @param id
   * @param descricao
   */
  constructor(
    public id: number,
    public descricao: string
  ) {}
}
