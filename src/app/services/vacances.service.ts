import { Injectable } from '@angular/core';
import { IVacanca } from '../../model/interfaces';
import { addDoc, collection, collectionData, deleteDoc, doc, docData, Firestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VacancesService {

  constructor(private firestore: Firestore) {
  }

  updateVacanca(vacanca: IVacanca[]): boolean {
    localStorage.setItem('vacances', JSON.stringify(vacanca));
    return true;
  }

  getVacances(): Observable<IVacanca[]> {
 
      // const jsonData = JSON.stringify(localStorage.getItem('vacances'));
      // let vList: IVacanca[] = JSON.parse(JSON.parse(jsonData)) as IVacanca[];
      // if ( typeof vList === 'object' && vList !== null){
      //   return vList;
      // }else{
      //   return [];
      // }
      const colfVacances = collection(this.firestore, 'vacances');
      return collectionData(colfVacances, {idField: 'id'}) as Observable<IVacanca[]>;
    
  }

  getVacancaById(id: number): Observable<IVacanca>{
    const docfVacanca = doc(this.firestore, `vacances/${id}`);
      return docData(docfVacanca, {idField: 'id'}) as Observable<IVacanca>;
  }

  addVacanca(vacanca: IVacanca){
    const colfVacances = collection(this.firestore, `vacances`);
    return addDoc(colfVacances, vacanca);
  }


  removeVacanca(vacanca: IVacanca){
    const docfVacanca = doc(this.firestore, `vacances/${vacanca.id}`);
    return deleteDoc(docfVacanca);
  }

}
