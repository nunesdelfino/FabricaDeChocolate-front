/**
 * Interface com a representação de 'Usuário'.
 *
 * @author Gabriel N Delfino; Maria E F Oliveira; Karen D Antunes
 */
export interface User {
  id: number;
  name: string;
  login: string;
  accessToken: string;
  refreshToken: string;
  expiresIn: number;
  mnemonico?: string;
  roles?: string[];
}
