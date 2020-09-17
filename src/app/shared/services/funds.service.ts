import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class FundsService {

  constructor(private db: AngularFireDatabase) { }

  getFunds() {
    return  this.db.list('/funds', ref => ref.orderByChild('index').limitToLast(1000)).valueChanges();
  }
}
