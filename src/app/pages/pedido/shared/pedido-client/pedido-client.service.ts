/* tslint:disable:no-redundant-jsdoc */
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../../../environments/environment';
import {FiltroPedidoDTO} from "../../../../shared/dto/filtro-pedido.dto";

/**
 * Classe de integração com o serviço de Usuário.
 */
@Injectable({
  providedIn: 'root'
})
export class PedidoClientService {

  /**
   * Construtor da classe.
   *
   * @param http
   */
  constructor(private http: HttpClient) { }

  /**
   * Retorna a instância de pedido conforme o 'id' informado.
   *
   * @param id
   * @return
   */
  public getById(id: number): Observable<any> {
    return this.http.get(`${environment.urlApi}/pedido/${id}`);
  }

  /**
   * Retorna o array de Amigo confome o filtro de pesquisa informado.
   *
   * @param filtroDTO
   */
  public getByFiltro(filtroDTO: FiltroPedidoDTO): Observable<any> {
    return this.http.get(`${environment.urlApi}/pedido/filtro`, {
      params: filtroDTO.toParams()
    });
  }

  public getPedidosProducao(): Observable<any>{

    return this.http.get(`${environment.urlApi}/pedido/producao`, {
    });
  }

  /**
   * Salva a instância de amigo.
   *
   * @param amigo
   */
  public salvar(pedido: any): Observable<any> {
    let result: Observable<any> = null;

    if (pedido.id) {
      result = this.http.put(`${environment.urlApi}/pedido/${pedido.id}`, pedido);
    } else {
      result = this.http.post(`${environment.urlApi}/pedido/`, pedido);
    }
    return result;
  }

  /**
   * Torna Amigo o Amigo pelo 'id' informado (é Amigo=true).
   *
   * @param id
   * @return
   */
  public ativarPedido(id: number): Observable<any> {
    return this.http.put(`${environment.urlApi}/pedido/${id}/ativar-pedido`, {});
  }

  /**
   *  Deixa de ser amigo pelo 'id' do amigo informado.
   *
   * @param id
   * @return
   */
  public desativarPedido(id: number): Observable<any> {
    return this.http.put(`${environment.urlApi}/pedido/${id}/desativar-pedido`, {});
  }

    /**
   * Torna Amigo o Amigo pelo 'id' informado (é Amigo=true).
   *
   * @param id
   * @return
   */
     public emProducao(id: number): Observable<any> {
      return this.http.put(`${environment.urlApi}/pedido/${id}/pedido-em-producao`, {});
    }

    /**
     *  Deixa de ser amigo pelo 'id' do amigo informado.
     *
     * @param id
     * @return
     */
    public naoProducao(id: number): Observable<any> {
      return this.http.put(`${environment.urlApi}/pedido/${id}/pedido-nao-producao`, {});
    }

  /**
   * remover a instância de amigo.
   *
   * @param amigo
   */
  public remover(pedido: any): Observable<any> {
    let result: Observable<any> = null;

    result = this.http.delete(`${environment.urlApi}/pedido/${pedido.id}`, {});

    return result;
  }

}
