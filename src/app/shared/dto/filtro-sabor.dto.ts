/* tslint:disable:no-redundant-jsdoc */
import { HttpParams } from '@angular/common/http';


/**
 * Classe de trânsferencia com os parâmetros utilizados em filtros de pesquisa do Tamanho.
 *
 * @author Karen
 */
export class FiltroSaborDTO {

  /**
   * Construtor da classe.
   *
   * @param sabor
   * @param ativo
   */
  constructor(
    public sabor?: string,
    public ativo?: string, //Seguindo o amigo
  ) { }

  /**
   * Transforma o JSON do parâmetro em um objeto do modelo de dominio da aplicação.
   *
   * @param jsonData
   */
  static fromJson(jsonData: any): FiltroSaborDTO {
    return Object.assign(new FiltroSaborDTO(), jsonData);
  }

  /**
   * Retorna uma nova instancia de FiltroDTO
   */
  static getInstace(): FiltroSaborDTO {
    return new FiltroSaborDTO();
  }

   /**
   * Retorna a instância de HttpParams considerando os parâmetros informados.
   */
    public toParams(): HttpParams {
      let params = new HttpParams();

      if (this.sabor) {
        params = params.append('sabor', this.sabor);
      }

      if (this.ativo != null) { //!=undefined?
        params = params.append('ativo', this.ativo); //O status eh definido por S e N no back
      }
      return params;
    }
}
