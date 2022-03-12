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
export class CustosClientService {

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
    return this.http.get(`${environment.urlApi}/gasto/${id}`);
  }

  /**
   * Retorna o array de Amigo confome o filtro de pesquisa informado.
   *
   * @param filtroDTO
   */
  public getByFiltro(filtroDTO: FiltroPedidoDTO): Observable<any> {
    return this.http.get(`${environment.urlApi}/gasto/filtro`, {
      params: filtroDTO.toParams()
    });
  }

  /**
   * Salva a instância de custos.
   *
   * @param custos
   */
  public salvar(custos: any): Observable<any> {
    let result: Observable<any> = null;

    if (custos.id) {
      result = this.http.put(`${environment.urlApi}/gasto/${custos.id}`, custos);
    } else {
      result = this.http.post(`${environment.urlApi}/gasto/`, custos);
    }
    return result;
  }

  /**
   * remover a instância de amigo.
   *
   * @param amigo
   */
  public remover(pedido: any): Observable<any> {
    let result: Observable<any> = null;

    result = this.http.delete(`${environment.urlApi}/gasto/${pedido.id}`, {});

    return result;
  }

}
