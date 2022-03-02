/* tslint:disable:no-redundant-jsdoc */
import { HttpParams } from '@angular/common/http';

export class FiltroRelatorioClienteDto {

  constructor(
    public dataInicio?: string,
    public dataFinal?: string,
  ) { }

  static fromJson(jsonData: any): FiltroRelatorioClienteDto {
    return Object.assign(new FiltroRelatorioClienteDto(), jsonData);
  }

  static getInstace(): FiltroRelatorioClienteDto {
    return new FiltroRelatorioClienteDto();
  }

    public toParams(): HttpParams {
      console.log('ToParams');
      console.log(this.dataInicio);
      console.log(this.dataFinal);
      let params = new HttpParams();

      if (this.dataInicio != null) {
        params = params.append('dataInicio', this.dataInicio);
      }

      if (this.dataFinal  != null) {
        params = params.append('dataFinal', this.dataFinal);
      }
      // params.append('dataInicio', '2020/01/01');
      return params;
    }
}
