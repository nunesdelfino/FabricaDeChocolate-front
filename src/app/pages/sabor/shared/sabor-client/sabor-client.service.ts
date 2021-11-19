/* tslint:disable:no-redundant-jsdoc */
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../../../environments/environment';
import {FiltroUsuarioDTO} from '../../../../shared/dto/filtro-usuario.dto';

/**
 * Classe de integração com o serviço de Usuário.
 */
@Injectable({
  providedIn: 'root'
})
export class SaborClientService {

  /**
   * Construtor da classe.
   *
   * @param http
   */
  constructor(private http: HttpClient) { }

  /**
   * Retorna a instância de Sabor conforme o 'id' informado.
   *
   * @param id
   * @return
   */
  public getById(id: number): Observable<any> {
    return this.http.get(`${environment.urlApi}/sabor/${id}`);
  }

  /**
   * Retorna o array de SAbor confome o filtro de pesquisa informado.
   *
   * @param filtroDTO
   */
  public getByFiltro(filtroDTO: FiltroUsuarioDTO): Observable<any> {
    return this.http.get(`${environment.urlApi}/sabor/filtro`, {
      params: filtroDTO.toParams()
    });
  }

  /**
   * Salva a instância de Sabor.
   *
   * @param usuario
   */
  public salvar(usuario: any): Observable<any> {
    let result: Observable<any> = null;

    if (usuario.id) {
      result = this.http.put(`${environment.urlApi}/sabor/${usuario.id}`, usuario);
    } else {
      result = this.http.post(`${environment.urlApi}/sabor/`, usuario);
    }
    return result;
  }

  /**
   * Ativa Sabor pelo 'id' informado
   *
   * @param id
   * @return
   */
  public ativarSabor(id: number): Observable<any> {
    return this.http.put(`${environment.urlApi}/sabor/${id}/ativar-sabor`, {});
    console.log("entrou no ativar");
  }

  /**
   *  Deixa de ser amigo pelo 'id' do amigo informado.
   *
   * @param id
   * @return
   */
  public desativarSabor(id: number): Observable<any> {
    return this.http.put(`${environment.urlApi}/sabor/${id}/desativar-sabor`, {});
    console.log("entrou 2");
  }


}
