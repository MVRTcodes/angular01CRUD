import { Injectable } from '@angular/core';
import { IVacanca } from '../../model/interfaces';

@Injectable({
  providedIn: 'root'
})
export class VacancesService {

  constructor() {
  }

  updateVacanca(vacanca: IVacanca[]): boolean {
    localStorage.setItem('vacances', JSON.stringify(vacanca));
    return true;
  }

  getVacancaById(id: number){

  }

  getVacances(): IVacanca[] {
    try{
      const jsonData = JSON.stringify(localStorage.getItem('vacances'));
      let vList: IVacanca[] = JSON.parse(JSON.parse(jsonData)) as IVacanca[];
      if ( typeof vList === 'object' && vList !== null){
        return vList;
      }else{
        return [];
      }
      
    }catch{
      return [];
    }

  }

  removeVacanca(id: string){
    return null;
  }

}
