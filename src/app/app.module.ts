import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CuentasComponent } from './cuentas/cuentas.component';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { ConexionService } from './services/conexion.service';
import { ListaComponent } from './components/lista/lista.component';
import { ListaAddComponent } from './components/lista-add/lista-add.component';



@NgModule({
  declarations: [
    AppComponent,
    CuentasComponent,
    ListaComponent,
    ListaAddComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase) ,
    AngularFirestoreModule, 
    AngularFireStorageModule,  
    AngularFireAuthModule
  ],
  providers: [ConexionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
