/* tslint:disable:no-redundant-jsdoc */
import { HttpParams } from '@angular/common/http';

/**
 * Classe de trânsferencia com os parâmetros utilizados em filtros de pesquisa de Usuário.
 *
 * @author Gabriel Nunes Delfino
 */
export class FiltroUsuarioDTO {

  constructor(
    public login?: string,
    public nome?: string,
    public status?: boolean,
    public idTipo?: string
  ) { }

  /**
   * Transforma o JSON do parâmetro em um objeto do modelo de dominio da aplicação.
   *
   * @param jsonData
   */
  static fromJson(jsonData: any): FiltroUsuarioDTO {
    return Object.assign(new FiltroUsuarioDTO(), jsonData);
  }

  /**
   * Retorna uma nova instancia de FiltroDTO
   */
  static getInstace(): FiltroUsuarioDTO {
    return new FiltroUsuarioDTO();
  }

  /**
   * Retorna a instância de HttpParams considerando os parâmetros informados.
   */
  public toParams(): HttpParams {
    let params = new HttpParams();

    if (this.login) {
      params = params.append('login', this.login);
    }

    if (this.nome) {
      params = params.append('nome', this.nome);
    }

    if (this.status != null) {
      params = params.append('idStatus', this.status ? 'A' : 'I');
    }
    return params;

  }


}
