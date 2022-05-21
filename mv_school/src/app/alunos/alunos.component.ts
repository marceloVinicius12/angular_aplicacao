import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css']
})
export class AlunosComponent implements OnInit {
public titulo = 'visualização de alunos'

  alunos = [
   ' jessica',
    'paula',
    'laura',
    'maria',
    'felipe',
    'joao',
    'thiago',


  ]
  constructor() { }

  ngOnInit(): void {
  }

}
