import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css']
})
export class AlunosComponent implements OnInit {
public titulo = 'Alunos'
public alunoSelecionado: string | undefined;
  alunos = [
    {id:1, nome:'jessica', sobrenome:'alves', telefone:'1129545'},
    {id:2, nome:'paula', sobrenome:'santos', telefone:'2134545'},
    {id:3, nome:'laura', sobrenome:'ferreira', telefone:'1129893'},
    {id:4, nome:'maria', sobrenome:'araujo', telefone:'1123425'},
    {id:5, nome:'joao', sobrenome:'alves', telefone:'1129533'},
  ];
  alunoSelect(aluno: any){
this.alunoSelecionado = aluno.nome;

}
voltar(){
  this.alunoSelecionado = '';
}
  constructor() { }

  ngOnInit(): void {
  }

}
