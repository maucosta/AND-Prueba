/* Importe de funcionalidades Angular */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
/* Importe de componentes */
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { DirectivaComponent } from './directiva/directiva.component';
import { ParticipantesComponent } from './participantes/participantes.component';


/* Arreglo con las rutas de despliegue de data */
const routes:Routes=[
  {path:'',redirectTo:'/participantes',pathMatch:'full'},
  {path:'directiva',component:DirectivaComponent},
  {path:'participantes',component:ParticipantesComponent}

];
/* Declaración de componentes */
@NgModule({
  declarations: [

    AppComponent,
    HeaderComponent,
    FooterComponent,
    DirectivaComponent,
    ParticipantesComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
