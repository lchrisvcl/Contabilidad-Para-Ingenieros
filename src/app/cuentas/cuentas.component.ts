import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cuentas',
  templateUrl: './cuentas.component.html',
  styleUrls: ['./cuentas.component.css']
})

export class CuentasComponent {
  items: Observable<any[]>;
  constructor(db: AngularFirestore){
    this.items = db.collection('items').valueChanges();
  }
}
