/* tslint:disable:no-redundant-jsdoc callable-types */
import { MatPaginatorIntl } from '@angular/material';
import { MessageService } from './message.service';

/**
 * @author Gabriel Nunes Delfino
 */
export class PaginatorIntl extends MatPaginatorIntl {

  /**
   * Construtor da classe.
   *
   * @param messageService
   */
  constructor(messageService: MessageService) {
    super();

    this.itemsPerPageLabel = messageService.getDescription('PAGINATOR_ITENS_POR_PAGINA');
    this.previousPageLabel = messageService.getDescription('PAGINATOR_PAGINA_ANTERIOR');
    this.firstPageLabel = messageService.getDescription('PAGINATOR_PRIMEIRA_PAGINA');
    this.nextPageLabel = messageService.getDescription('PAGINATOR_PROXIMA_PAGINA');
    this.lastPageLabel = messageService.getDescription('PAGINATOR_ULTIMA_PAGINA');
  }
}
