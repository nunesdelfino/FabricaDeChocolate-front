/* tslint:disable:no-redundant-jsdoc */
import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material';

/**
 * @author Gabriel N Delfino; Maria E F Oliveira; Karen D Antunes
 */
@Component({
  selector: 'app-loader-dialog',
  templateUrl: './loader-dialog.component.html'
})
export class LoaderDialogComponent {

  /**
   * Construtor da classe.
   *
   * @param dialogRef
   */
  constructor(public dialogRef: MatDialogRef<LoaderDialogComponent>) { }

}
