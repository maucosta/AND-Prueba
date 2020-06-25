import { Component, OnInit } from '@angular/core';
import {Participante} from './participantes';
import {PARTICIPANTES} from './participantes.json';

@Component({
  selector: 'app-participantes',
  templateUrl: './participantes.component.html',

})
export class ParticipantesComponent implements OnInit {

  public participantes:Participante[];

  constructor() { }

  ngOnInit(): void {
    this.participantes=PARTICIPANTES;
  }

}
