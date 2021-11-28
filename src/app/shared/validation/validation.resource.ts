/* tslint:disable:no-redundant-jsdoc callable-types */
/**
 * Interface Provider responsável por permitir a centralização de mensagem de validação.
 *
 * @author Gabriel N Delfino; Maria E F Oliveira; Karen D Antunes
 */
export interface ValidationResource {

  /**
   * Retorna a 'mensagem' conforme a 'chave' informada.
   *
   * @param key
   * @returns string
   */
  getMessage(key: string): string;
}

/**
 * Interface 'Provider' responsável por prover instâncias de 'ValidationResource'.
 *
 * @author Gabriel N Delfino; Maria E F Oliveira; Karen D Antunes
 */
export interface ValidationResourceProvider {

  /**
   * Fábrica de instâncias de 'ValidationResource'.
   */
  new(): ValidationResource;
}

/**
 * Classe 'Provider' responsável por prover instâncias de 'ValidationResource'.
 *
 * @author Gabriel N Delfino; Maria E F Oliveira; Karen D Antunes
 */
export class ValidationResourceProvider implements ValidationResourceProvider { }
