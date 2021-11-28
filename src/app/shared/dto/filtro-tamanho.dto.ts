/* tslint:disable:no-redundant-jsdoc */
import { HttpParams } from '@angular/common/http';

/**
 * Classe de trânsferencia com os parâmetros utilizados em filtros de pesquisa de Tipo Amigo.
 *
 * @author Gabriel N Delfino; Maria E F Oliveira; Karen D Antunes
 */
export class FiltroTamanhoDTO {

  /**
   * Construtor da classe.
   *
   * @param tamanho
   */
  constructor(
    public tamanho?: string
  ) { }

  /**
   * Transforma o JSON do parâmetro em um objeto do modelo de dominio da aplicação.
   *
   * @param jsonData
   */
  static fromJson(jsonData: any): FiltroTamanhoDTO {
    return Object.assign(new FiltroTamanhoDTO(), jsonData);
  }

  /**
   * Retorna uma nova instancia de FiltroDTO
   */
  static getInstace(): FiltroTamanhoDTO {
    return new FiltroTamanhoDTO();
  }

  /**
   * Retorna a instância de HttpParams considerando os parâmetros informados.
   */
  public toParams(): HttpParams {
    let params = new HttpParams();

    if (this.tamanho) {
      params = params.append('tamanho', this.tamanho);
    }
    return params;
  }
}
