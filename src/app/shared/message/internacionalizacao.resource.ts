/* tslint:disable:no-redundant-jsdoc callable-types */
/**
 * Interface provider responsável por permitir a centralização de 'descrições/mensagens' utilizadas na aplicação em um unico local.
 *
 * @author Gabriel Nunes Delfino
 */
export interface InternacionalizacaoResource {

  /**
   * Retorna a 'descrição' conforme a 'chave' informada.
   *
   * @param key
   * @returns
   */
  getDescription(key: string): string;
}

/**
 * Interface 'Provider' responsável por prover instâncias de 'InternacionalizacaoResource'.
 *
 * @author Gabriel Nunes Delfino
 */
export interface InternacionalizacaoResourceProvider {

  /**
   * Fabrica de instância de InternacionalizacaoResource.
   */
  new (): InternacionalizacaoResource;
}

/**
 * Classe 'Provider' responsável por prover instâncias de 'InternacionalizacaoResource'.
 *
 * @author Gabriel Nunes Delfino
 */
export class InternacionalizacaoResourceProvider implements InternacionalizacaoResourceProvider { }
