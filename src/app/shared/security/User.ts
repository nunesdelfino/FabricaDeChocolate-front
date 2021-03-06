/**
 * Interface com a representação de 'Usuário'.
 *
 * @author Gabriel Nunes Delfino
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
