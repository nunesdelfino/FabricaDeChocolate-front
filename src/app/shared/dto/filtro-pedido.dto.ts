/* tslint:disable:no-redundant-jsdoc */
import { HttpParams } from '@angular/common/http';

/**
 * Classe de trânsferencia com os parâmetros utilizados em filtros de pesquisa de Amigo.
 *
 * @author Guiliano Rangel (UEG)
 */
export class FiltroPedidoDTO {

  /**
   * Construtor da classe.
   *
   * @param nome
   * @param idTamanho
   * @param dataEntrega
   * @param ativo
   * @param idSaborUm
   * @param idSaborDois
   * @param idSaborTres
   * @param idSaborQuatro
   * @param idSaborCinco
   * @param endereco
   * @param entregar
   * @param numero
   * @param observacao
   * @param preco
   * @param tipoOvo
   */
  constructor(
    public nome?: string,
    public idTamanho?: number,
    public dataEntrega?: string,
    public ativo?: boolean,
    public idSaborUm?: number,
    public idSaborDois?: number,
    public idSaborTres?: number,
    public idSaborQuatro?: number,
    public idSaborCinco?: number,
    public endereco?: string,
    public entregar?: boolean,
    public numero?: string,
    public observacao?: string,
    public preco?: number,
    public tipoOvo?: string,
  ) { }

  /**
   * Transforma o JSON do parâmetro em um objeto do modelo de dominio da aplicação.
   *
   * @param jsonData
   */
  static fromJson(jsonData: any): FiltroPedidoDTO {
    return Object.assign(new FiltroPedidoDTO(), jsonData);
  }

  /**
   * Retorna uma nova instancia de FiltroDTO
   */
  static getInstace(): FiltroPedidoDTO {
    return new FiltroPedidoDTO();
  }

  /**
   * Retorna a instância de HttpParams considerando os parâmetros informados.
   */
  public toParams(): HttpParams {
    let params = new HttpParams();

    if (this.nome) {
      params = params.append('nome', this.nome);
    }

    if (this.idTamanho) {
      params = params.append('idTamanho', String(this.idTamanho) );
    }

    if (this.dataEntrega) {
      params = params.append('dataEntrega', this.dataEntrega );
    }

    if (this.ativo) {
      params = params.append('ativo', this.ativo ? 'true' : 'false');
    }

    if (this.idSaborUm) {
      params = params.append('idSaborUm', String(this.idSaborUm));
    }

    if (this.idSaborDois) {
      params = params.append('idSaborDois', String(this.idSaborDois));
    }

    if (this.idSaborTres) {
      params = params.append('idSaborTres', String(this.idSaborTres));
    }

    if (this.idSaborQuatro) {
      params = params.append('idSaborQuatro', String(this.idSaborQuatro));
    }

    if (this.idSaborCinco) {
      params = params.append('idSaborCinco', String(this.idSaborCinco));
    }

    if (this.endereco) {
      params = params.append('endereco', this.endereco);
    }

    if (this.entregar) {
      params = params.append('entregar', this.entregar ? 'true' : 'false');
    }

    if (this.numero) {
      params = params.append('numero', this.numero);
    }

    if (this.observacao) {
      params = params.append('observacao', this.observacao);
    }

    if (this.preco) {
      params = params.append('preco', String(this.preco));
    }

    if (this.tipoOvo) {
      params = params.append('tipoOvo', this.tipoOvo);
    }

    return params;
  }
}
