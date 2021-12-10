/* tslint:disable:no-redundant-jsdoc */
import { HttpParams } from '@angular/common/http';

/**
 * Classe de trânsferencia com os parâmetros utilizados em filtros de pesquisa do Tamanho.
 *
 * @author Maria E F Oliveira
 */
export class FiltroTamanhoDTO {

  /**
   * Construtor da classe.
   *
   * @param tamanho
   * @param ativo
   */
  constructor(
    public tamanho?: string,
    public ativo?: string, //Seguindo o amigo
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

      if (this.ativo) { //!=undefined?
        params = params.append('ativo', this.ativo ? 'S' : 'N' ); //O status eh definido por S e N no back
      }
      return params;
    }
}
