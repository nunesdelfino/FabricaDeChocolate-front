/* tslint:disable:no-redundant-jsdoc */
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../../../environments/environment';
import {FiltroRelatorioClienteDto} from '../../../../shared/dto/filtro-relatorio-cliente.dto';

/**
 * Classe de integração com o serviço de Usuário.
 */
@Injectable({
  providedIn: 'root'
})
export class RelatoriosClientService {

  /**
   * Construtor da classe.
   *
   * @param http
   */
  constructor(private http: HttpClient) { }

  /**
   * Retorna o array de Tamanho confome o filtro de pesquisa informado.
   *
   * @param filtroDTO
   */
  public getByFiltro(filtroDTO: FiltroRelatorioClienteDto): Observable<any> {
    return this.http.get(`${environment.urlApi}/relatorios/cliente?dataInicio=2020/01/01`, {
      params: filtroDTO.toParams()
    });
  }

  public pesquisar(filtroDTO: FiltroRelatorioClienteDto): Observable<any> {
    return this.http.get(`${environment.urlApi}/relatorios/cliente`, {
      params: filtroDTO.toParams()
    });
  }

}
