import { Injectable } from '@angular/core';
import { Show } from '../model/show';
import { Observable } from 'rxjs';
import { Firestore, collection, collectionData, addDoc, doc, updateDoc, deleteDoc, query, orderBy } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  shows$: Observable<Show[]>;
  private seriesCollection = 'table_show';

  constructor(private firestore: Firestore) {
    const showsRef = collection(this.firestore, this.seriesCollection);
    const showsQuery = query(showsRef, orderBy('id'));
    this.shows$ = collectionData(showsQuery, { idField: 'uid' }) as Observable<Show[]>;
  }

  saveShow(show: Show): void {
    const showsRef = collection(this.firestore, this.seriesCollection);
    addDoc(showsRef, {
      id: show.id,
      title: show.title,
    });
  }

  updateShow(show: Show): void {
    const showDocRef = doc(this.firestore, `${this.seriesCollection}/${show.uid}`);
    updateDoc(showDocRef, {
      id: show.id,
      title: show.title,
    });
  }

  deleteShow(show: Show): void {
    const showDocRef = doc(this.firestore, `${this.seriesCollection}/${show.uid}`);
    deleteDoc(showDocRef);
  }
}
