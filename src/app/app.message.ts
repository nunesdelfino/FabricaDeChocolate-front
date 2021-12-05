import {InternacionalizacaoResource} from './shared/message/internacionalizacao.resource';

/**
 * Implementação responsável por prover as 'descrições' e 'mensagens' utilizadas na aplicação em um único local.
 *
 * @author Guiliano Rangel (UEG)
 */
export class AppMessage implements InternacionalizacaoResource {

  private resource: object;

  /**
   * Construtor da classe.
   */
  constructor() {
    this.resource = {
      // LABEL
      LABEL_OK: 'OK',
      LABEL_SAIR: 'Sair',
      LABEL_SIM: 'Sim',
      LABEL_NAO: 'Não',
      LABEL_PESQUISAR: 'Pesquisar',
      LABEL_LIMPAR: 'Limpar',
      LABEL_SALVAR: 'Salvar',
      LABEL_CANCELAR: 'Cancelar',
      LABEL_VOLTAR: 'Voltar',
      LABEL_LOGIN: 'Login',
      LABEL_INFORME_LOGIN: 'Digite seu usuário',
      LABEL_INFORME_SENHA: 'Digite sua senha',
      LABEL_ENTRAR: 'Entrar',
      LABEL_USUARIO: 'Usuário',
      LABEL_ADICIONAR_NOVO: 'Adicionar Novo',
      LABEL_FILTRO_PARA_PESQUISA: 'Filtros para Pesquisa',
      LABEL_STATUS: 'Status',
      LABEL_TODOS: 'Todos',
      LABEL_INATIVAR: 'Inativar',
      LABEL_ATIVAR: 'Ativar',
      LABEL_ATIVO: 'Ativo',
      LABEL_INATIVO: 'Inativo',
      LABEL_VISUALIZAR: 'Visualizar',
      LABEL_ALTERAR: 'Alterar',
      LABEL_ACOES: 'Ações',
      LABEL_NOME: 'Nome',
      LABEL_INFORME_NOME: 'Informe o nome',
      LABEL_DESCRICAO: 'Descrição',
      LABEL_ENTIDADE: 'Entidade',
      LOGIN_EMAIL: 'E-mail',
      LABEL_EXPORTAR: 'Exportar',
      LABEL_SELECIONE: 'Selecione',
      LABEL_SIM_M: 'SIM',
      LABEL_NAO_M: 'NAO',



      // Mensagem sitema
      MSG_DESEJA_SAIR_SISTEMA: 'Deseja sair do sistema?',

      TITLE_TODOS_OS_MEUS_SISTEMA: 'Todos os meus sistemas',
      TITLE_ADMINISTRADOR: 'Administrador',
      TITLE_SISTEMA_NOME: 'Fábrica de Chocolate',


      // Textos UC003-Manter Grupo
      LABEL_LISTAR_GRUPO: 'Lista de grupos',
      LABEL_GRUPO: 'Grupo',
      LABEL_GRUPO_HINT: 'Digite o nome do grupo',
      LABEL_GRUPO_DESCRICAO_HINT: 'Digite a descriação para o grupo',
      LABEL_DADOS_GRUPO: 'Dados do grupo',
      LABEL_SISTEMA_PERMISSOES: 'Sistema e Permissões',
      LABEL_PESQUISAR_GRUPO: 'Pesquisar Grupo',
      LABEL_SISTEMA: 'Sistema',
      LABEL_MODULO: 'Módulo',
      LABEL_MODULO_BUSCA_HINT: 'Buscar módulo',
      LABEL_MODULO_FILTRO_HINT: 'Filtrar módulo',
      LABEL_ALTERAR_GRUPO: 'Alterar Grupo' ,
      LABEL_INCLUIR_GRUPO: 'Incluir Grupo',
      LABEL_VISUALIZAR_GRUPO: 'Visualizar Grupo',
      LABEL_ID: 'Código do Grupo',
      LABEL_DESC_GRUPO: 'Descrição do Grupo',

      // Texto manter TIPO AMIGO
      LABEL_PESQUISAR_TIPOAMIGO: 'Pesquisar tipo de amigo',
      LABEL_ALTERAR_TIPOAMIGO: 'Alterar tipo de amigo',
      LABEL_INCLUIR_TIPOAMIGO: 'Incluir tipo de amigo',
      LABEL_VISUALIZAR_TIPOAMIGO: 'Visualizar tipo de amigo',
      LABEL_TIPOAMIGO_HINT: 'Digite o nome do tipo de amigo',
      LABEL_DADOS_TIPOAMIGO: 'Dados do tipo amigo',
      LABEL_REMOVER_TIPOAMIGO: 'Remover tipo de amigo',

      // Texto manter Sabor
      LABEL_PESQUISAR_SABOR: 'Pesquisar sabor',
      LABEL_ALTERAR_SABOR: 'Alterar sabor',
      LABEL_INCLUIR_SABOR: 'Incluir sabor',
      LABEL_VISUALIZAR_SABOR: 'Visualizar sabor',
      LABEL_SABOR_HINT: 'Digite o nome do sabor',
      LABEL_DADOS_SABOR: 'Dados do sabor',
      LABEL_REMOVER_SABOR: 'Remover sabor',
      LABEL_SABOR: 'Sabor',

      // Texto manter Tamanho
      LABEL_PESQUISAR_TAMANHO: 'Pesquisar tamanho',
      LABEL_ALTERAR_TAMANHO: 'Alterar tamanho',
      LABEL_INCLUIR_TAMANHO: 'Incluir tamanho',
      LABEL_VISUALIZAR_TAMANHO: 'Visualizar tamanho',
      LABEL_TAMANHO_HINT: 'Digite o nome do tamanho',
      LABEL_DADOS_TAMANHO: 'Dados do tamanho',
      LABEL_REMOVER_TAMANHO: 'Remover tamanho',
      LABEL_TAMANHO: 'Tamanho',
      LABEL_STATUS_TAMANHO: "Status do Tamanho",

      // Texto manter Pedido
      LABEL_PESQUISAR_PEDIDO: 'Pesquisar pedido',
      LABEL_ALTERAR_PEDIDO: 'Alterar pedido',
      LABEL_INCLUIR_PEDIDO: 'Incluir pedido',
      LABEL_VISUALIZAR_PEDIDO: 'Visualizar pedido',
      LABEL_PEDIDO_HINT: 'Digite o nome do pedido',
      LABEL_DADOS_PEDIDO: 'Dados do pedido',
      LABEL_REMOVER_PEDIDO: 'Remover pedido',
      LABEL_PEDIDO: 'Pedido',
      LABEL_STATUS_PEDIDO: "Status",
      LABEL_NUMERO: "Numero",
      LABEL_TIPO_OVO: "Tipo Ovo",
      LABEL_SABORES: "Sabores",
      LABEL_ENTREGAR: "Entregar",
      LABEL_ENDERECO: "Endereco",
      LABEL_DATA_ENTREGA: "Data Entrega",
      LABEL_PRECO: "Preço",
      LABEL_OBSERVACAO: "Observação",
      LABEL_INFORME_NUMERO: "Numero",
      LABEL_INFORME_TIPO_OVO: "Tipo Ovo",
      LABEL_INFORME_ENDERECO: "Endereço",
      LABEL_INFORME_OBSERVACAO: "Observação",
      LABEL_INFORME_PRECO: "Preço",


      // Texto manter  AMIGO
      LABEL_PESQUISAR_AMIGO: 'Pesquisar amigo',
      LABEL_ALTERAR_AMIGO: 'Alterar amigo',
      LABEL_INCLUIR_AMIGO: 'Incluir amigo',
      LABEL_VISUALIZAR_AMIGO: 'Visualizar amigo',
      LABEL_AMIGO_HINT: 'Digite o nome do amigo',
      LABEL_DADOS_AMIGO: 'Dados do amigo',
      LABEL_REMOVER_AMIGO: 'Remover amigo',
      LABEL_STATUS_AMIGO: 'É Amigo',
      LABEL_DATA_AMIZADE: 'Data Amizade',
      LABEL_TIPO_AMIGO: 'Tipo Amigo',

      // Textos UC004_Manter_Usuario
      LABEL_PESQUISAR_USUARIO: 'Pesquisar Usuário',
      LABEL_ALTERAR_USUARIO: 'Alterar Usuário',
      LABEL_INCLUIR_USUARIO: 'Incluir Usuário',
      LABEL_VISUALIZAR_USUARIO: 'Visualizar Usuário',
      LABEL_USUARIO_HINT: 'Digite o nome do usuário',
      LABEL_LOGIN_HINT: 'Digite o login do usuário',
      LABEL_TIPO_CADASTRO: 'Tipo de Cadastro',
      LABEL_STATUS_PORTAL: 'Status do Usuário',
      LABEL_DATA_ULTIMO_ACESSO: 'Data do Último Acesso',
      LABEL_EMAIL: 'E-mail',
      LABEL_INFORME_EMAIL: 'Informe o E-mail',
      LABEL_CPF: 'CPF',
      LABEL_INFORME_CPF: 'Informe o CPF',
      LABEL_STATUS_AD: 'Status no AD',
      LABEL_ACESSO_BLOQUEADO: 'Acesso Bloqueado',
      LABEL_SERVIDOR_INTERNO: 'Servidor Interno',
      LABEL_TELEFONES: 'Telefones',
      LABEL_GRUPOS_ACESSO: 'Grupos de Acesso',
      LABEL_NOME_GRUPO_VINCULADO: 'Nome do Grupo Vinculado',
      LABEL_REMOVER: 'Remover',
      LABEL_REMOVER_GRUPO: 'Remover Grupo',
      LABEL_REMOVER_TELEFONE: 'Remover Telefone',
      LABEL_ADICIONAR: 'Adicionar',
      LABEL_ADICIONAR_TELEFONE: 'Adicionar Telefone',
      LABEL_ADICIONAR_GRUPO: 'Adicionar Grupo',
      LABEL_TIPO_TELEFONE: 'Tipo de Telefone',
      LABEL_DDD: 'DDD',
      LABEL_INFORME_DDD: 'Informe o DDD',
      LABEL_TELEFONE: 'Telefone',
      LABEL_INFORME_TELEFONE: 'Informe o Número do Telefone',
      LABEL_VINCULAR_AD: 'Vincular AD',
      LABEL_SELECIONAR_USUARIO_AD: 'Selecionar Usuário do AD',
      LABEL_PRIMEIRO_NOME: 'Primeiro Nome',
      LABEL_INFORME_PRIMEIRO_NOME: 'Informe o Primeiro Nome',
      LABEL_ULTIMO_NOME: 'Último Nome',
      LABEL_INFORME_ULTIMO_NOME: 'Informe o Último Nome',
      LABEL_VINCULAR: 'Vincular',

      // Textos Auditoria
      LABEL_LISTAR_AUDITORIA: 'Lista de Auditorias',
      LABEL_PESQUISAR_AUDITORIA: 'Pesquisar Log de Auditoria',
      LABEL_DADOS_AUDITORIA: 'Dados da Auditoria',
      LABEL_VISUALIZAR_AUDITORIA: 'Visualizar Log',
      LABEL_TIPO_USUARIO: 'Tipo de Usuário',
      LABEL_TIPO_OPERACAO: 'Tipo de Operação',
      LABEL_DATA_OPERACAO: 'Data da Operação',
      LABEL_DATA_INICIAL: 'Data Inicial',
      LABEL_DATA_FINAL: 'Data Final',
      LABEL_DETALHES_LOG: 'Visualizar Detalhes de Log de Auditoria',
      LABEL_DETALHES: 'Detalhes',
      LABEL_DETALHES_DO_LOG: 'Detalhes do log',
      LABEL_DADOS_USUARIO: 'Dados do Usuário',
      LABEL_IP_USUARIO: 'IP do Usuário',
      LABEL_VISUALIZAR_IMPRESSAO: 'Visualizar Impressão',

      MAP_OPTION_INCLUSAO: 'Inclusão',
      MAP_OPTION_ALTERACAO: 'Alteração',
      MAP_OPTION_EXCLUSAO: 'Exclusão',
      MAP_OPTION_CONSULTA: 'Consultar',

      // PAGINATOR
      PAGINATOR_ITENS_POR_PAGINA: 'Itens por página',
      PAGINATOR_PROXIMA_PAGINA: 'Próxima página',
      PAGINATOR_PAGINA_ANTERIOR: 'Página anterior',
      PAGINATOR_ULTIMA_PAGINA: 'Última página',
      PAGINATOR_PRIMEIRA_PAGINA: 'Primeira página',

      // MSG
      ME001: 'Erro Inesperado.',
      ME002: 'Token inválido.',
      ME003: 'Nenhum registro enconrado.',
      MSG001: 'Campo obrigat\u00F3rio n\u00E3o preenchido.',
      MSG002: 'Deseja sair do sistema?',
      MSG003: 'Usu\u00E1rio n\u00E3o cadastrado.',
      MSG004: 'Usu\u00E1rio e senha n\u00E3o conferem.',
      MSG005: 'Usu\u00E1rio est\u00E1 inativo no sistema AD.',
      MSG006: 'Deseja remover este item?',
      MSG007: 'Opera\u00E7\u00E3o realizada com sucesso.',
      MSG008: 'Usu\u00E1rio est\u00E1 inativo no portal.',
      MSG009: 'Usu\u00E1rio n\u00E3o tem permiss\u00E3o de acesso ao sistema desejado.',
      MSG010: 'Confirmar operação?',
      MSG011: 'O Grupo informado já foi adicionado ao Usuário.',
      MSG012: 'Nenhum usuário foi selecionado.',
      MSG013: 'O CPF informado já está em uso.',
      MSG014: 'O Telefone informado já foi adicionado ao Usuário.',
      MSG015: 'Nenhum resultado informado para os filtros informados.',
      MSG016: 'Al\u00E9m do filtro Tipo de Pessoa \u00E9 obrigat\u00F3rio informar mais algum filtro.',
      MSG017: 'Deve ser informado, no m\u00EDnimo, 4 caracteres para pesquisar pelo Grupo.',
      MSG018: 'O CPF informado \u00E9 inv\u00E1lido.',
      MSG019: 'Deve ser informado, no m\u00EDnimo, 4 caracteres para pesquisar pelo Nome.',
      MSG026: 'O login informado j\u00E1 existe.',
      MSG029: 'O documento informado j\u00E1 est\u00E1 no cadastro dessa pessoa.',
      MSG033: 'Deseja inativar este item?',
      MSG034: 'Deseja ativar este item?',
      MSG035: 'J\u00E1 existe um grupo com o nome informado.',
      MSG036: 'Nenhum usu\u00E1rio foi selecionado.',
      MSG038: 'O login informado n\u00E3o foi encontrado no sistema AD.',
      MSG039: '\u00C9 obrigat\u00F3rio informar pelo menos um grupo.',
      MSG041: 'A data final deve ser maior ou igual a data inicial.',
      MSG042: 'Usu\u00E1rio Bloqueado',
      MSG044: 'Usu\u00E1rio n\u00E3o tem permiss\u00E3o de acesso a funcionalidade acessada.',
      MSG045: 'Confirmar Exclus\u00E1o?',
      MSG046: 'Tornar cadastro Amigo?',
      MSG047: 'Deixar de ser Amigo do cadastro?',
      MSG048: 'Ativar Sabor?',
      MSG049: 'Ativar Tamanho?',
      MSG050: 'Desativar Pedido?',
      MSG051: 'Ativar Pedido?',
      MSG052: 'Desativar Sabor?',
      MSG053: 'Ativar Sabor?',
      MSG054: 'Desativar Tamanho?',
      MSG055: 'Ativar Tamanho?',

      // Validation
      required: 'Campo obrigat\u00F3rio n\u00E3o preenchido.',
      'Mask error': 'Valor inválido',
    };
  }

  /**
   * Retorna a 'descrição' conforme a 'chave' informada.
   *
   * @param key -
   * @returns -
   */
  getDescription(key: string): string {
    return this.resource[key];
  }

  /**
   * Retorna a 'mensagem' conforme a 'chave' informada.
   *
   * @param key -
   * @returns -
   */
  getMessage(key: string): string {
    return this.getDescription(key);
  }
}
