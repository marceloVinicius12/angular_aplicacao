import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-professores',
  templateUrl: './professores.component.html',
  styleUrls: ['./professores.component.css']
})
export class ProfessoresComponent implements OnInit {

public  titulo = ' visualização de professores'

  professores = [
    ' rogerio',
     'joao',
     'michel',
     'maria',
     'guto',
     'ana',
     'thamires',


   ]


  constructor() { }

  ngOnInit() {
  }

}
