/* tslint:disable:no-redundant-jsdoc */
import { HttpParams } from '@angular/common/http';

/**
 * Classe de trânsferencia com os parâmetros utilizados em filtros de pesquisa de Amigo.
 *
 * @author Gabriel Nunes Delfino
 */
export class FiltroCustosDTO {

  /**
   * Construtor da classe.
   *
   * @param item
   * @param data
   * @param nomeEstabelecimento
   */
  constructor(
    public item?: string,
    public data?: string,
    public nomeEstabelecimento?: string,
  ) { }

  /**
   * Transforma o JSON do parâmetro em um objeto do modelo de dominio da aplicação.
   *
   * @param jsonData
   */
  static fromJson(jsonData: any): FiltroCustosDTO {
    return Object.assign(new FiltroCustosDTO(), jsonData);
  }


  static getInstace(): FiltroCustosDTO {
    return new FiltroCustosDTO();
  }

  /**
   * Retorna a instância de HttpParams considerando os parâmetros informados.
   */
  public toParams(): HttpParams {
    let params = new HttpParams();

    if (this.item) {
      params = params.append('item', this.item);
    }

    if (this.nomeEstabelecimento) {
      params = params.append('nomeEstabelecimento', this.nomeEstabelecimento);
    }

    if (this.data) {
      params = params.append('data', this.data);
    }

    return params;
  }
}
