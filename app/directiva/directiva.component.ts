import { Component } from '@angular/core';

@Component({
  selector: 'app-directiva',
  templateUrl: './directiva.component.html'

})
export class DirectivaComponent {

/* Arreglo con el listado de trámites */
listatramites: string[] = ['Legalización de documentos de educación superior.','Adopción de un niño, niña o adolescente por persona, conyugues o compañeros permanentes residentes en Colombia.','Agendamiento para citas de consultorio jurídico.','Certificados y constancias académicas.','Certificado de antecedentes de responsabilidad fiscal.'];
/* variable directiva para mostrar u ocultar datos del arreglo */
habilitar:boolean=true;
  constructor() { }
/* Metodo donde se implementa la vaiable directiva */
  setHabilitar():void{
    this.habilitar=(this.habilitar==true)?false:true;
  }
  }
