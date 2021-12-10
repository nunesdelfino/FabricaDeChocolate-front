/* tslint:disable:no-redundant-jsdoc */
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../../../environments/environment';
import {FiltroUsuarioDTO} from '../../../../shared/dto/filtro-usuario.dto';
import {FiltroTamanhoDTO} from "../../../../shared/dto/filtro-tamanho.dto";

/**
 * Classe de integração com o serviço de Usuário.
 */
@Injectable({
  providedIn: 'root'
})
export class TamanhoClientService {

  /**
   * Construtor da classe.
   *
   * @param http
   */
  constructor(private http: HttpClient) { }

  /**
   * Retorna a instância de Tamanho conforme o 'id' informado.
   *
   * @param id
   * @return
   */
  public getById(id: number): Observable<any> {
    return this.http.get(`${environment.urlApi}/tamanho/${id}`);
  }

  /**
   * Retorna o array de Tamanho confome o filtro de pesquisa informado.
   *
   * @param filtroDTO
   */
  public getByFiltro(filtroDTO: FiltroTamanhoDTO): Observable<any> {
    return this.http.get(`${environment.urlApi}/tamanho/filtro`, {
      params: filtroDTO.toParams()
    });
  }

  /**
   * Salva a instância de Tamanho.
   *
   * @param tamanho
   */
  public salvar(tamanho: any): Observable<any> {
    let result: Observable<any> = null;

    if (tamanho.id) {
      result = this.http.put(`${environment.urlApi}/tamanho/${tamanho.id}`, tamanho);
    } else {
      result = this.http.post(`${environment.urlApi}/tamanho/`, tamanho);
    }
    return result;
  }

  /**
   * Ativa Tamanho pelo 'id' informado (Tamanho=true)
   *
   * @param id
   * @return
   */
  public ativarTamanho(id: number): Observable<any> {
    return this.http.put(`${environment.urlApi}/tamanho/${id}/ativar-tamanho`, {}); //URL correta
  }

  /**
   *  Desativa tamanho pelo id
   *
   * @param id
   * @return
   */
  public desativarTamanho(id: number): Observable<any> {
    return this.http.put(`${environment.urlApi}/tamanho/${id}/desativar-tamanho`, {}); //URL correta
  }


}
