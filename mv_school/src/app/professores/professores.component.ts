import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-professores',
  templateUrl: './professores.component.html',
  styleUrls: ['./professores.component.css']
})
export class ProfessoresComponent implements OnInit {

  public titulo = ' visualização de professores'

  professores = [
  {id:1, nome:' rogerio', disciplina:'portugues'},
  {id:2, nome: 'joao', disciplina:'historia'},
  {id:3, nome: 'michael', disciplina:'ingles'},
  {id:4, nome: 'maria', disciplina:'artes'},
  {id:5, nome: 'guto', disciplina:'informatica'},
  {id:6, nome: 'ana', disciplina:'geografia'},



  ]


  constructor() { }

  ngOnInit() {
  }

}
